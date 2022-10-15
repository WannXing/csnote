import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { searchConsolePlugin } from 'vuepress-plugin-china-search-console'
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "CS-Note",
  description: "CS-Note",

  // base: "/",
  base: "/csnote/",
  theme,
  plugins: [
    docsearchPlugin({
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>',
      locales: {
        '/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: 'Search Documentation',
            },
          },
        },
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
      },
    }),
    searchConsolePlugin({
      // options ...
      baiduId :"https://hm.baidu.com/hm.js?b6d599c072da173be238f2bfe83a025b",
      toutiaoAutoPushId :"false",
      autoPush360Switch :false,
      autoPushBaiduSwitch :false,
    })
  ],
});
