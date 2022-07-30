export const data = JSON.parse("{\"key\":\"v-9d4ea6fc\",\"path\":\"/os/05.html\",\"title\":\"第五章-输入输出管理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"第五章-输入输出管理\",\"date\":\"2022-07-30T00:00:00.000Z\",\"order\":5,\"toc\":true,\"headerDepth\":4,\"summary\":\"5.1 I/O管理概述 I/O设备按使用特性分为：人机交互类外部设备，存储设备，网络通信设备； 块设备：信息存取以块为单位，传输速率高，磁盘； 字符设备：打印机，传输速率低 I/O模型 同步I/O：CPU不断检查I/O是否完成 异步I/O：CPU正常运行，I/O完成后通知CPU I/O控制方式 （1）程序控制方式 计算机每次从外设读一个字的数据到存储器，CP\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/os/05.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"CS-Note\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"第五章-输入输出管理\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-07-30T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"5.1 I/O管理概述\",\"slug\":\"_5-1-i-o管理概述\",\"children\":[{\"level\":3,\"title\":\"I/O模型\",\"slug\":\"i-o模型\",\"children\":[]},{\"level\":3,\"title\":\"I/O控制方式\",\"slug\":\"i-o控制方式\",\"children\":[]},{\"level\":3,\"title\":\"I/O子系统的层次结构\",\"slug\":\"i-o子系统的层次结构\",\"children\":[]},{\"level\":3,\"title\":\"设备控制器的组成\",\"slug\":\"设备控制器的组成\",\"children\":[]}]},{\"level\":2,\"title\":\"5.2 I/O核心子系统\",\"slug\":\"_5-2-i-o核心子系统\",\"children\":[{\"level\":3,\"title\":\"缓冲区\",\"slug\":\"缓冲区\",\"children\":[]},{\"level\":3,\"title\":\"设备分配与回收\",\"slug\":\"设备分配与回收\",\"children\":[]},{\"level\":3,\"title\":\"假脱机技术（SPOOLing）\",\"slug\":\"假脱机技术-spooling\",\"children\":[]}]}],\"readingTime\":{\"minutes\":6.89,\"words\":2067},\"filePathRelative\":\"os/05.md\",\"localizedDate\":\"2022年7月30日\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
