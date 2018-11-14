/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  // {
  //   caption: 'User1',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/docusaurus.svg'.
  //   image: '/img/docusaurus.svg',
  //   infoLink: 'https://www.facebook.com',
  //   pinned: true,
  // },
];

const siteConfig = {
  title: 'XT',
  tagline: '使用 TypeScript 编写跨平台应用',
  url: 'https://xt.studio',
  baseUrl: '/',
  projectName: 'xt-studio',
  organizationName: 'XT Studio',
  headerLinks: [
    {doc: 'guide-introduce', label: '教程'},
    {doc: 'api-index', label: 'API'},
    {page: 'help', label: '帮助'},
    {blog: true, label: '动态'},
  ],
  users,
  headerIcon: 'img/xt-logo-white.png',
  footerIcon: 'img/xt-logo-white.png',
  favicon: 'img/xt-logo.png',
  colors: {
    primaryColor: '#00a0e9',
    secondaryColor: '#00a0e9',
  },
  copyright: `Copyright © ${new Date().getFullYear()} XT Studio`,
  highlight: {
    theme: 'default',
  },
  usePrism: ['typescript'],
  onPageNav: 'separate',
  cleanUrl: true,
  repoUrl: 'https://github.com/xtstudio/xt',
};

module.exports = siteConfig;
