import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration - 90s Typewriter Theme
 *
 * Vintage, old-paper style, readable for essays.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Commons Essays",
    pageTitleSuffix: " where good guys come to die...",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://commons-essays.pages.dev",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Courier Prime",  // typewriter style
        body: "Georgia, serif",   // classic readable body
        code: "IBM Plex Mono",    // monospaced for code
      },
      colors: {
        lightMode: {
          light: "#f7f3eb",        // old paper background
          lightgray: "#e0ddd5",
          gray: "#b5b3aa",
          darkgray: "#4d4c47",
          dark: "#2b2b2b",
          secondary: "#5b5043",    // muted brown for headings
          tertiary: "#8d7f6b",     // soft accent
          highlight: "rgba(143, 159, 169, 0.1)",
          textHighlight: "#f5e1a4", // subtle yellow highlight
        },
        darkMode: {
          light: "#1c1a18",
          lightgray: "#3b3a36",
          gray: "#64615d",
          darkgray: "#d4d4d4",
          dark: "#f0f0e8",
          secondary: "#a68b6b",
          tertiary: "#8d7f6b",
          highlight: "rgba(143, 159, 169, 0.1)",
          textHighlight: "#f5e1a4",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
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
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
