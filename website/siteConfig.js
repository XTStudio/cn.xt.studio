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
  tagline: 'A Cross-platform Application Framework.',
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
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  copyright: `Copyright © ${new Date().getFullYear()} XT Studio`,
  highlight: {
    theme: 'default',
  },
  usePrism: ['typescript'],
  // scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',
  repoUrl: 'https://github.com/xtstudio/xtstudio',
};

module.exports = siteConfig;
