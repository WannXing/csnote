const { hopeTheme } = require("vuepress-theme-hope");
const { baiduSeoPlugin } = require('vuepress-plugin-baidu-seo-next')

module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "CS-Note",
  description: "CS-Note",
  base: "/",
  plugins: [
    baiduSeoPlugin({
      hm: "https://hm.baidu.com/hm.js?b6d599c072da173be238f2bfe83a025b",
      ignoreLocal: true
    })
  ],
  // 主题
  theme: hopeTheme({
    // 主题配置
    // logo: "https://vuejs.org/images/logo.png",
  }),
};
