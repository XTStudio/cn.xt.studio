var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
    user: process.env.ftp_user,
    password: process.env.ftp_password,
    host: process.env.ftp_host,
    port: 21,
    localRoot: __dirname + '/build/xt-studio',
    remoteRoot: '/htdocs/cn_xt_studio/',
    include: ['*', '**/*'],
    deleteRemote: false,
    forcePasv: false
}

// use with promises.
ftpDeploy.on("uploaded", (e) => {
    console.log("uploaded: " + e.filename)
})

ftpDeploy.deploy(config)
    .then(res => console.log('finished'))
    .catch(err => console.log(err))