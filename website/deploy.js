const fs = require('fs');
const http = require('http');
const crypto = require('crypto');
const skey = process.env.deploy_skey

class Deployer {

    deploy() {
        this.deployDir("build/xt-studio")
    }

    async deployDir(path) {
        const files = fs.readdirSync(path)
        for (let index = 0; index < files.length; index++) {
            const it = files[index];
            if (!fs.statSync(path + "/" + it).isDirectory()) {
                await this.deployFile(path + "/" + it)
            }
            else {
                await this.deployDir(path + "/" + it)
            }
        }
    }

    deployFile(path) {
        return new Promise((resolver) => {
            const data = fs.readFileSync(path)
            const timestamp = (new Date().getTime() / 1000).toFixed(0)
            const checksum = crypto.createHash("md5").update(skey + timestamp, 'utf8').digest('hex')
            const post_options = {
                host: 'xt.studio',
                port: '80',
                path: `/deploy.php?timestamp=${timestamp}&checksum=${checksum}&path=cn_xt_studio/${path.replace("build/xt-studio/", "")}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Content-Length': Buffer.byteLength(data)
                }
            };
            const req = http.request(post_options)
            req.write(data, () => {
                req.end(() => {
                    console.log("deployed: " + path)
                    resolver()
                })
            })
        })
    }

}

const deployer = new Deployer()
deployer.deploy()