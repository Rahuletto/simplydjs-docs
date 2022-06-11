const lightCodeTheme = require('prism-react-renderer/themes/vsLight');

const VersionsArchived = require('./versionsArchived.json');

const ArchivedVersionsDropdownItems = Object.entries(VersionsArchived).splice(
  0,
  5,
);

module.exports = {
  title: "Simply-DJS",
  tagline:
    "Powerful yet a Simple, East and Beginner friendly discord.js Package for everyone",
  url: "https://simplyd.js.org",
  baseUrl: "/",
  favicon: "https://i.imgur.com/u8VlLom.png",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName: "Rahuletto#0243",
  projectName: "simply-djs",
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: "announce",
      content: "Have an wonderful experience with the v3 update",
      backgroundColor: "#18191a",
      textColor: "#FFFFFF",
    },
    algolia: {
      apiKey: "9da3683213790d1d51892d90c865adab",
      appId: "9CQMIEN04F",
      indexName: "simplyd",
      inputSelector: "h1",
      searchParameters: {
        hitsPerPage: 5,
      },

      debug: false,
    },
    stylesheets: [
      "https://fonts.googleapis.com/icon?family=Material+Icons",
      "https://kit.fontawesome.com/a6e95e39af.js",
      "https://buttons.github.io/buttons.js",
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300&display=swap",
      "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
      "/js/code-block-buttons.js",
      "https://fonts.googleapis.com/css2?family=Lexend-Deca:wght@400&display=swap",
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
        name: "google-site-verification",
        content: "pb2-QCQjmdU-4KOGjcrazLLDeY9XDxG25NONdsbbt4I",
      },
      {
        property: "og:title",
        content: "Simply DJS",
      },
      {
        property: "og:description",
        content:
          "Simply-DJS is an Powerful yet a Simple, East and Beginner friendly discord.js Package that interacts with discord.js that makes your code much easier.",
      },
      {
        property: "og:site_name",
        content: "Simply DJS",
      },
      {
        name: "theme-color",
        content: "#0d52d1",
      },
    ],
    navbar: {
      title: "",
      items: [
        {
          to: "/",
          activeBaseRegex: "^/$",
          position: "left",
          activeBaseRegex: "^/$",
          label: "Simply-DJS",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/Rahuletto/simply-djs",
          label: "GitHub",
          position: "left",
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              label: "v2.5.3",
              href: "https://v2--simplyd.netlify.app/",
            }

          ],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Help",
          items: [
            {
              label: "• Documentation",
              to: "/docs/intro",
            },
            {
              label: "• Support Server",
              href: "https://discord.gg/3JzDV9T5Fn",
            },
          ],
        },
        {
          title: "Learn",
          items: [
            {
              label: "• Discord.js Docs",
              href: "https://discord.js.org",
            },
            {
              label: "• Discord.js Guide",
              href: "https://discordjs.guide/#before-you-begin",
            },
            {
              label: "• JavaScript",
              href: "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-welcome",
            },
          ],
        },
        {
          title: "Contact Us",
          items: [
            {
              label: "• GitHub",
              href: "https://github.com/Rahuletto",
            },
            {
              label: "• Twitter",
              href: "https://twitter.com/rahuletto",
            },
            {
              label: "• Discord",
              href: "https://discord.com/invite/3JzDV9T5Fn",
            },
          ],
        },
      ],
      copyright: `<br><br>Copyright © ${new Date().getFullYear()}  Simply Develop. npm i simply-djs<br><br>Not affiliated with Discord (or) Discord.js`,
    },
    prism: {

      theme: lightCodeTheme,
      darkTheme: {
        plain: {
          color: "#e5c07b",
          backgroundColor: "#1E1E1E",
        },
        styles: [
          {
            types: ["prolog"],
            style: {
              color: "rgb(0, 0, 128)",
            },
          },
          {
            types: ["comment"],
            style: {
              color: "#5c6370",
            },
          },
          {
            types: ["changed", "keyword", "interpolation-punctuation"],
            style: {
              color: "#c678dd",
            },
          },
          {
            types: ["number", "inserted"],
            style: {
              color: "#d19a66",
            },
          },
          {
            types: ["function", "property-access"],
            style: {
              color: "#56b6c2",
            },
          },
          {
            types: ['property', "builtin"],
            style: {
              color: '#e06c75'
            }
          },
          {
            types: ["constant"],
            style: {
              color: "rgb(100, 102, 149)",
            },
          },
          {
            types: ["attr-name", "variable"],
            style: {
              color: "#e06c75",
            },
          },
          {
            types: ["deleted", "string", "attr-value", "template-punctuation"],
            style: {
              color: "#98c379",
            },
          },
          {
            types: ["selector"],
            style: {
              color: "#c678dd",
            },
          },
          {
            // Fix tag color
            types: ["tag"],
            style: {
              color: "rgb(78, 201, 176)",
            },
          },
          {
            // Fix tag color for HTML
            types: ["tag"],
            languages: ["markup"],
            style: {
              color: "rgb(86, 156, 214)",
            },
          },
          {
            types: ["punctuation", "operator"],
            style: {
              color: "#abb2bf",
            },
          },
          {
            // Fix punctuation color for HTML
            types: ["punctuation"],
            languages: ["markup"],
            style: {
              color: "#abb2bf",
            },
          },

          {
            types: ["class-name"],
            style: {
              color: "#808080",
            },
          },
          {
            types: ["char"],
            style: {
              color: "rgb(209, 105, 105)",
            },
          },
        ],
      }
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          versions: {
            current: { label: "latest" },
          },
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,

        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "https://i.imgur.com/u8VlLom.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#0d52d1",
          },
        ],
      },
    ],
  ],
};