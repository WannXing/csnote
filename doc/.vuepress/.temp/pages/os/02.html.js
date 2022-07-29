export const data = JSON.parse("{\"key\":\"v-a78bbab6\",\"path\":\"/os/02.html\",\"title\":\"第二章-进程管理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"第二章-进程管理\",\"date\":\"2022-07-30T00:00:00.000Z\",\"order\":2,\"toc\":true,\"headerDepth\":4,\"summary\":\"第二章——进程管理 2.1.1 进程 进程是程序的一次执行过程，是系统资源分配和调度的基本单位 PCB：进程控制块，描述进程信息和状态。创建进程即创建PCB，是进程存在的唯一标志 进程的状态\\r创建态：申请空白PCB，写入控制管理进程的信息，分配资源。进入就绪态; \\r就绪态：进程获得除了CPU以外的一切资源，进入就绪队列; \\r运行态：进程在CPU上运行。一旦时\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/os/02.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"CS-Note\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"第二章-进程管理\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-07-30T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"第二章——进程管理\",\"slug\":\"第二章——进程管理\",\"children\":[{\"level\":3,\"title\":\"2.1.1 进程\",\"slug\":\"_2-1-1-进程\",\"children\":[]},{\"level\":3,\"title\":\"2.1.2 线程\",\"slug\":\"_2-1-2-线程\",\"children\":[]},{\"level\":3,\"title\":\"2.2 处理机调度\",\"slug\":\"_2-2-处理机调度\",\"children\":[]},{\"level\":3,\"title\":\"2.3 进程同步互斥\",\"slug\":\"_2-3-进程同步互斥\",\"children\":[]},{\"level\":3,\"title\":\"2.4 死锁\",\"slug\":\"_2-4-死锁\",\"children\":[]}]}],\"readingTime\":{\"minutes\":18.55,\"words\":5566},\"filePathRelative\":\"os/02.md\",\"localizedDate\":\"2022年7月30日\"}")

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
