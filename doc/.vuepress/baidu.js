const { baiduSeoPlugin } = require('vuepress-plugin-baidu-seo-next')

module.exports = {
  plugins: [
    baiduSeoPlugin({
      hm: "https://hm.baidu.com/hm.js?b6d599c072da173be238f2bfe83a025b",
      ignoreLocal: true
    })
  ]
}