// import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
// import { searchPlugin } from '@vuepress/plugin-search';
import { gitPlugin } from '@vuepress/plugin-git';
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";

export default ({
  theme: hopeTheme({
    plugins: {
      blog: {
        autoExcerpt: true,
      },
      mdEnhance: {
        footnote: true,
        container: true,
        mermaid: true,
        sub: true,
        sup: true,
        codetabs: true
      },
      
    },

    repo: "jerryzhongj/jerryzhongj.github.io",
    repoLabel: "Github",

    blog: {
      name: "Jerry Zhong",
      avatar: "/avatar_white.jpg",
      roundAvatar: true
    },

    navbarLayout: {
      left: ["Brand"],
      center: ["Search"],
      right: ["Outlook", "Repo"]
    },

    sidebar: false
  }),

  plugins:[
    // searchPlugin({
      
    // }),
    fullTextSearchPlugin({

    }),
    gitPlugin({
      
    }),
  ],

  title: "JerryZhongJ's Blog",
  description: "记录一些零散的知识",
  lang: "zh-CN"
});

