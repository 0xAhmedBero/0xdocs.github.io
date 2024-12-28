import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '0xTeam',
  tagline: 'Programing Community',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://docs.0xar.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {

          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/0xAhmedBero/0xdocs.github.io',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.jpg',
    navbar: {
      title: '0xDocs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/0xdevar',
          label: 'GitHub',
          position: 'right',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/Introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/0xdevar',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/QH2533PP3G',
            },
            {
              label: 'X',
              href: 'https://x.com/0xwal/',
            },
          ],
        },
        {
          title: 'Scripts',
          items: [
            {
              label: '0xHud',
              href: 'https://github.com/0xAhmedBero/0xHud',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 0xdocs, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['lua'],
    },
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
  } satisfies Preset.ThemeConfig,
};

export default config;
