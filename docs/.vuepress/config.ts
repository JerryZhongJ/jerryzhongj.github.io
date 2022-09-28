import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { searchPlugin } from '@vuepress/plugin-search';
// import { fullTextSearchPlugin }from "vuepress-plugin-full-text-search2";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      blog: {
        autoExcerpt: true,
      },

    },

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

    displayFooter: true,
    sidebar: false
  }),

  plugins:[
    searchPlugin({
      
    })
  ],

  title: "JerryZhongJ's Blog",
  description: "记录一些零散的知识",
  lang: "zh-CN"
});

