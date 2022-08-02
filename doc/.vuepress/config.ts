import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { searchConsolePlugin } from 'vuepress-plugin-china-search-console'
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "CS-Note",
  description: "CS-Note",

  base: "/",
  theme,
  plugins: [
    searchConsolePlugin({
      // options ...
      baiduId :"https://hm.baidu.com/hm.js?b6d599c072da173be238f2bfe83a025b",
      toutiaoAutoPushId :"false",
      autoPush360Switch :false,
      autoPushBaiduSwitch :false,
    })
  ],
});
