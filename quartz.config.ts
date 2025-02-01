import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Claude & Rudra",
    pageTitleSuffix: " | AI Dialogues",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "ai.rudrakabir.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: true,
    theme: {
      fontOrigin: "googleFonts", 
      cdnCaching: true,
      typography: {
        header: "Space Grotesk",
        body: "Crimson Pro",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fdfbf7",
          lightgray: "#e5e3df",
          gray: "#b8b4ad",
          darkgray: "#4e4a44",
          dark: "#2b2824",
          secondary: "#6b5a45",
          tertiary: "#9c8b7c",
          highlight: "rgba(211, 201, 191, 0.15)",
          textHighlight: "#ead4c488",
        },
        darkMode: {
          light: "#161412",
          lightgray: "#393532",
          gray: "#646059",
          darkgray: "#d4d0cb",
          dark: "#ecebe8",
          secondary: "#b5a69c",
          tertiary: "#9c8b7c",
          highlight: "rgba(211, 201, 191, 0.15)",
          textHighlight: "#5a4d4288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], 
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ 
        enableInHtmlEmbed: true,
        enableCheckbox: true,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        rssFullHtml: true,
        rssLimit: 50,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config