let lightCodeTheme = require('./dark.js')
let darkCodeTheme = require('prism-react-renderer/themes/dracula')

module.exports = {
  title: 'Simply-DJS',
  tagline: 'A Simple, Easy and Beginner friendly Discord.js Package for everyone.',
  url: 'https://simplyd.js.org',
  baseUrl: '/',
  favicon: 'https://i.imgur.com/kGAUCNo_d.webp?maxwidth=128&fidelity=grand',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'Rahuletto#0243',
  projectName: 'simply-djs',
  themeConfig: {
    announcementBar: {
      id: 'announce',
      content:
        'Install the latest v2.5.0 version to get the new features !',
      backgroundColor: '#18191a',
      textColor: '#FFFFFF',
    },
    algolia: {
      apiKey: '8843ca3b55fd51dbe6123173f85368d8',
      indexName: 'simplyd',
      inputSelector: 'h1',
      searchParameters: {
        hitsPerPage: 4,
      },

      debug: false
    },

    hideableSidebar: true,
    stylesheets: [
      "https://fonts.googleapis.com/icon?family=Material+Icons",
      "https://kit.fontawesome.com/a6e95e39af.js",
      'https://buttons.github.io/buttons.js',
  'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
  '/js/code-block-buttons.js',
  "https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
    ],
    throwIfNamespace: false,
scripts: [
    {
     src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      async: true,
    },
  ],
    metadata: [
      {
        name: 'google-site-verification',  content: "pb2-QCQjmdU-4KOGjcrazLLDeY9XDxG25NONdsbbt4I"
      },
      {
        property: 'og:title', content: 'Simply DJS'
      },
      {
        property: 'og:description', content: '🎉 Package that simplifies things in Discord.js v13 🎉'
      },
      {
        property: 'og:site_name', content: 'Simply DJS'
      },
      {
        name: 'theme-color', content: '#0d52d1'
      }
    ],
    navbar: {
      title: '',
      items: [
        {
          to: '/',
          activeBaseRegex: '^/$',
          position: 'left',
          activeBaseRegex: '^/$',
          label: 'Simply-DJS',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/Rahuletto/simply-djs',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Help',
          items: [
            {
              label: '• Documentation',
              to: '/docs/intro',
            },
            {
              label: '• Support Server',
              href: 'https://discord.gg/3JzDV9T5Fn',
            },
          ],
        },
        {
          title: 'Learn',
         items: [
           {
            label: '• Discord.js Docs',
            href: 'https://discord.js.org',
           },
          {
            label: '• Discord.js Guide',
            href: 'https://discordjs.guide/#before-you-begin',
          },
          {
            label: '• JavaScript',
            href: 'https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-welcome'
          }
          ], 
        },
        {
          title: 'Contact Me',
          items: [
            {
              label: '• GitHub',
              href: 'https://github.com/Rahuletto',
            },
            {
              label: '• Twitter',
              href: 'https://twitter.com/rahuletto',
            },
            {
              label: '• Discord',
              href: 'https://discord.com/invite/3JzDV9T5Fn',
            },
          ],
        },
      ],
      copyright: `<br><br>Copyright © ${new Date().getFullYear()}  Simply Develop. npm i simply-djs<br><br>Not affiliated with Discord (or) Discord.js`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,

        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'https://i.imgur.com/kGAUCNo_d.webp?maxwidth=128&fidelity=grand',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#0d52d1',
          },
        ],
      },
    ],
  ],

};
