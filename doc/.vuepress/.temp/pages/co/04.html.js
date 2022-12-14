export const data = JSON.parse("{\"key\":\"v-29be6b2a\",\"path\":\"/co/04.html\",\"title\":\"第四章-指令系统\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"第四章-指令系统\",\"date\":\"2022-07-30T00:00:00.000Z\",\"order\":4,\"toc\":true,\"headerDepth\":2,\"summary\":\"指令寻址\\r确定下一条要执行的指令的存放地址; \\r由程序计数器PC指明; 顺序寻址 (PC)+\\\"1\\\"->PC, 此处的\\\"1\\\"理解为1个指令字长, 每次取指令结束后, 一定会PC+\\\"1\\\"\\r\\\" 系统采用变长指令字结构, 指令字长=存储字长=16bit=2B, 主存按照字节编址\\\"\\r\\\" 读入一个字, 根据操作码判断这条指令的总字节数n, 修改PC的值, (PC)+n-\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/co/04.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"CS-Note\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"第四章-指令系统\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-07-30T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"指令寻址\",\"slug\":\"指令寻址\",\"children\":[{\"level\":3,\"title\":\"顺序寻址\",\"slug\":\"顺序寻址\",\"children\":[]},{\"level\":3,\"title\":\"跳跃寻址\",\"slug\":\"跳跃寻址\",\"children\":[]}]},{\"level\":2,\"title\":\"数据寻址\",\"slug\":\"数据寻址\",\"children\":[{\"level\":3,\"title\":\"直接寻址\",\"slug\":\"直接寻址\",\"children\":[]},{\"level\":3,\"title\":\"间接寻址\",\"slug\":\"间接寻址\",\"children\":[]},{\"level\":3,\"title\":\"寄存器寻址\",\"slug\":\"寄存器寻址\",\"children\":[]},{\"level\":3,\"title\":\"寄存器简介寻址\",\"slug\":\"寄存器简介寻址\",\"children\":[]},{\"level\":3,\"title\":\"隐含寻址\",\"slug\":\"隐含寻址\",\"children\":[]},{\"level\":3,\"title\":\"立即寻址\",\"slug\":\"立即寻址\",\"children\":[]},{\"level\":3,\"title\":\"偏移寻址\",\"slug\":\"偏移寻址\",\"children\":[]},{\"level\":3,\"title\":\"堆栈寻址\",\"slug\":\"堆栈寻址\",\"children\":[]}]},{\"level\":2,\"title\":\"CISC&RISC\",\"slug\":\"cisc-risc\",\"children\":[{\"level\":3,\"title\":\"CISC和RISC\",\"slug\":\"cisc和risc\",\"children\":[]},{\"level\":3,\"title\":\"区别\",\"slug\":\"区别\",\"children\":[]}]}],\"readingTime\":{\"minutes\":7.56,\"words\":2269},\"filePathRelative\":\"co/04.md\",\"localizedDate\":\"2022年7月30日\"}")

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
