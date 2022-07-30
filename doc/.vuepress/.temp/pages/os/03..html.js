export const data = JSON.parse("{\"key\":\"v-0cb9c060\",\"path\":\"/os/03..html\",\"title\":\"第三章-内存管理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"第三章-内存管理\",\"date\":\"2022-07-30T00:00:00.000Z\",\"order\":3,\"toc\":true,\"headerDepth\":4,\"summary\":\"3.0 程序装入和链接 一、程序装入和链接 C程序执行过程：\\r编译：源程序编译后得到若干目标模块; \\r链接：与库函数链接后形成完整装入模块（可执行文件）。可执行文件中的地址都是逻辑地址/相对地址; \\r静态链接：程序运行前就链接完全; \\r动态链接：边装入边链接，若发生外部事件，再链接需要的模块。动态链接库dll是PE文件（可执行文件）。优点是方便模块的修改和更\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/os/03..html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"CS-Note\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"第三章-内存管理\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-07-30T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"3.0 程序装入和链接\",\"slug\":\"_3-0-程序装入和链接\",\"children\":[{\"level\":3,\"title\":\"一、程序装入和链接\",\"slug\":\"一、程序装入和链接\",\"children\":[]}]},{\"level\":2,\"title\":\"3.1 内存管理概念\",\"slug\":\"_3-1-内存管理概念\",\"children\":[{\"level\":3,\"title\":\"二、内存扩充：覆盖，交换技术\",\"slug\":\"二、内存扩充-覆盖-交换技术\",\"children\":[]},{\"level\":3,\"title\":\"三、连续分配管理方式\",\"slug\":\"三、连续分配管理方式\",\"children\":[]},{\"level\":3,\"title\":\"四、非连续分配管理方式\",\"slug\":\"四、非连续分配管理方式\",\"children\":[]}]},{\"level\":2,\"title\":\"3.2 虚拟内存管理\",\"slug\":\"_3-2-虚拟内存管理\",\"children\":[{\"level\":3,\"title\":\"一、虚拟内存的基本概念\",\"slug\":\"一、虚拟内存的基本概念\",\"children\":[]},{\"level\":3,\"title\":\"二、请求分页管理方式\",\"slug\":\"二、请求分页管理方式\",\"children\":[]},{\"level\":3,\"title\":\"三、页面置换算法\",\"slug\":\"三、页面置换算法\",\"children\":[]},{\"level\":3,\"title\":\"四、页面分配策略\",\"slug\":\"四、页面分配策略\",\"children\":[]},{\"level\":3,\"title\":\"五、抖动现象\",\"slug\":\"五、抖动现象\",\"children\":[]},{\"level\":3,\"title\":\"六、工作集\",\"slug\":\"六、工作集\",\"children\":[]},{\"level\":3,\"title\":\"七、地址翻译的全过程\",\"slug\":\"七、地址翻译的全过程\",\"children\":[]},{\"level\":3,\"title\":\"虚存大小问题\",\"slug\":\"虚存大小问题\",\"children\":[]}]}],\"readingTime\":{\"minutes\":11.22,\"words\":3365},\"filePathRelative\":\"os/03..md\",\"localizedDate\":\"2022年7月30日\"}")

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
