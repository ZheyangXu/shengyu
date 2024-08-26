import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "胜遇",
  description: "重新学习编程",
  base: "/shengyu/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog" },
      { text: "DSA", link: "/dsa" },
      { text: "xTools", link: "/xtools"},
    ],

    sidebar: {
      "/blog/": [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
      ],
      "/dsa/": [],
      "/xtools/": [
        {
          text: "Vitepress",
          items: [
            {text: "Getting Started", link: "/xtools/vitepress/getting_started"},
          ]
        }
      ]
    },

    socialLinks: [{ icon: "github", link: "https://github.com/ZheyangXu" }],
    footer: {
      message:
        'Released under the <a href="https://github.com/ZheyangXu/shengyu/main/LICENSE">Apache License</a>.',
      copyright:
        copyright: 'Copyright © 2024-present <a href="https://github.com/ZheyangXu">ZheyangXu</a>',
    },
  },
  ignoreDeadLinks: true,
  markdown: {
    math: true,
    lineNumbers: true,
  },
  mermaid: {},
});
