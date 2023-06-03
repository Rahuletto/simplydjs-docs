
const oneDark = require('./src/prism/oneDark')
const oneLight = require('./src/prism/oneLight')


module.exports = {
  title: "Simply-DJS",
  tagline:
    "The simplest way to build complex Discord bots.",
  url: "https://simplyd.pages.dev",
  baseUrl: "/",
  favicon: "https://i.postimg.cc/5ynhr6DK/love-1.png", // https://i.imgur.com/XFUIwPh.png
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName: "Rahuletto#0243",
  projectName: "simply-djs",
  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
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
    algolia: {
      apiKey: "64107c9458b57c76a57585e3d54d9d36",
      appId: "0V6L7HOWNI",
      ignoreCanonicalTo: true,
      indexName: "simplydjs_v4",
      inputSelector: "h1",
      contextualSearch: true,
      placeholder: "Search Simply-DJS",
      maxResultsPerGroup: 7,
      searchParameters: {
        hitsPerPage: 5,
      },
      sitemaps: ['https://simplyd.pages.dev/sitemap.xml'],

      debug: true,
    },
    stylesheets: [
      "https://fonts.googleapis.com/icon?family=Material+Icons",
      "https://kit.fontawesome.com/a6e95e39af.js",
      "https://buttons.github.io/buttons.js",
      "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
      "/js/code-block-buttons.js",
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
        content: "Simply-DJS",
      },
      {
        property: "og:description",
        content:
          "The easiest way to build sophisticated systems in your Discord bots. Made for DiscordJS v14",
      },
      {
        property: "og:site_name",
        content: "Simply-DJS",
      },
      {
        name: "theme-color",
        content: "#0C0C0C",
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
              label: "v3 (latest)",
              href: "https://v3--simplyd.netlify.app/",
            },
            {
              label: "v2",
              href: "https://v2--simplyd.netlify.app/",
            },
            {
              label: "v1",
              href: "https://github.com/Rahuletto/simply-djs/blob/08a7b5cf6a5419432c92e0bc64c7e47b393ba779/README.md"
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
      copyright: `<a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria- label="Deployed in Netlify"><img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" /></a>
              <br><br><span class="monospace">Copyright © ${new Date().getFullYear()} Rahuletto.</span><br><br><div class="warning">Not affiliated with Discord (or) Discord.js</div>`,
    },
    prism: {
      theme: oneLight,
      darkTheme: oneDark,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          breadcrumbs: false,
          editUrl: ({versionDocsDirPath, docPath}) =>
          `https://github.com/Rahuletto/simplydjs-docs/edit/v4/docs/${docPath}`,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          versions: {
            current: { label: "v4 (beta)", banner: 'unreleased' }
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
            href: "https://i.imgur.com/XFUIwPh.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#406DBC",
          },
        ],
      },
    ],
  ],
};