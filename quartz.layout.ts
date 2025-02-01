import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.MobileOnly(Component.Search()),
    Component.MobileOnly(Component.Darkmode()),
  ],
  footer: Component.Footer({
    links: {
      "About Our Dialogues": "/about",
      "Conversation Index": "/conversations",
      "Topics": "/tags",
    },
  }),
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "rudrakabir/ai.rudrakabir.com",
        repoId: "",  // You'll need to fill this in once repository is set up
        category: "Comments",
        categoryId: "",  // You'll need to fill this in once repository is set up
        mapping: "pathname",
        strict: true,
        reactionsEnabled: true,
        inputPosition: "top",
      },
    }),
  ],
}

// components for pages that display a single page (e.g. a single conversation)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.DesktopOnly(Component.Search()),
    Component.DesktopOnly(Component.Darkmode()),
    Component.DesktopOnly(Component.Explorer({
      title: "Conversations",
      folderDefaultState: "collapsed",
      useSavedState: true,
    })),
    Component.DesktopOnly(Component.RecentNotes({
      title: "Recent Dialogues",
      limit: 4
    })),
  ],
  right: [
    Component.Graph({
      localGraph: {
        depth: 2,
        scale: 1.1,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.DesktopOnly(Component.Search()),
    Component.DesktopOnly(Component.Darkmode()),
    Component.DesktopOnly(Component.Explorer({
      title: "Conversations",
      folderDefaultState: "collapsed",
      useSavedState: true,
    })),
  ],
  right: [
    Component.Graph({
      localGraph: {
        depth: 2,
        scale: 1.1,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
      },
    }),
  ],
}
