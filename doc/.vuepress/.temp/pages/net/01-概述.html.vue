<template><div><h1 id="_1-计算机网络概览" tabindex="-1"><a class="header-anchor" href="#_1-计算机网络概览" aria-hidden="true">#</a> 1.计算机网络概览</h1>
<h2 id="_1-1-网络与计算机网络" tabindex="-1"><a class="header-anchor" href="#_1-1-网络与计算机网络" aria-hidden="true">#</a> 1.1 网络与计算机网络</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/u8OnZQ0M.png" alt="1619698167993" loading="lazy"></p>
<p><strong><code v-pre>计算机网络</code></strong>：是一个将分散的、具有独立功能的<code v-pre>计算机系统</code>，通过<code v-pre>通信设备</code>与<code v-pre>线路</code>连接起来，由功能完善的<code v-pre>软件</code>实现<code v-pre>资源共享</code>和<code v-pre>信息传递</code>的系统。</p>
<h2 id="_1-2-计算机网络的功能" tabindex="-1"><a class="header-anchor" href="#_1-2-计算机网络的功能" aria-hidden="true">#</a> 1.2 计算机网络的功能</h2>
<p><strong><code v-pre>数据通信</code></strong>：连通性</p>
<p><strong><code v-pre>资源共享</code></strong>：硬件、软件、数据</p>
<p><strong><code v-pre>分布式处理</code></strong>：多台计算机各自承担同一工作任务的不同部分（如 <code v-pre>Hadoop</code>平台）</p>
<p><strong><code v-pre>提供可靠性</code></strong>：一台计算机宕机，可由其他替代机顶替等</p>
<p><strong><code v-pre>负载均衡</code></strong>：多台计算机共同提供服务，分担压力</p>
<p>。。。。。。</p>
<h2 id="_1-3-计算机网络的组成" tabindex="-1"><a class="header-anchor" href="#_1-3-计算机网络的组成" aria-hidden="true">#</a> 1.3 计算机网络的组成</h2>
<h3 id="_1-3-1-组成部分" tabindex="-1"><a class="header-anchor" href="#_1-3-1-组成部分" aria-hidden="true">#</a> 1.3.1 组成部分</h3>
<p><code v-pre>硬件</code>：主机、链路、路由器、交换机、集线器等</p>
<p><code v-pre>软件</code>：运行在主机上的各种应用软件</p>
<p><code v-pre>协议</code>：</p>
<h3 id="_1-3-2-工作方式" tabindex="-1"><a class="header-anchor" href="#_1-3-2-工作方式" aria-hidden="true">#</a> 1.3.2 工作方式</h3>
<p><code v-pre>边缘部分</code>：直接面向用户使用的各种主机</p>
<ul>
<li>C/S 方式</li>
<li>P2P方式</li>
</ul>
<p><code v-pre>核心部分</code>：为边缘部分服务</p>
<p><img src="https://img1.imgtp.com/2022/07/28/Uh8zh4Wa.png" alt="1619699390346" loading="lazy"></p>
<h3 id="_1-3-3-功能组成" tabindex="-1"><a class="header-anchor" href="#_1-3-3-功能组成" aria-hidden="true">#</a> 1.3.3 功能组成</h3>
<p><code v-pre>通信子网</code>：实现数据通信，包含网络层、数据链路层、物理层。由各种传输介质、通信设备、相应的网络协议组成。</p>
<p><code v-pre>资源子网</code>：实现资源共享/数据处理，包含应用层、表示层、会话层。是实现资源共享功能的设备和软件的集合。</p>
<p><img src="https://img1.imgtp.com/2022/07/28/pfHZV7SI.png" alt="1619699503049" loading="lazy"></p>
<h2 id="_1-4-计算机网络的分类" tabindex="-1"><a class="header-anchor" href="#_1-4-计算机网络的分类" aria-hidden="true">#</a> 1.4 计算机网络的分类</h2>
<ul>
<li>
<p><code v-pre>按分布范围</code>：可分为 广域网【WAN 使用交换技术】、城域网【MAN】、局域网【WAN 使用广播技术】、个人区域网【PAN】</p>
</li>
<li>
<p><code v-pre>按使用者</code>：可分为 公用网【如中国电信，普通用户只需要缴纳一定费用即可获得使用权限】、专用网【如军队、铁路等的专用网，只有特殊用户方可使用】</p>
</li>
<li>
<p><code v-pre>按交换技术</code>：电路交换、报文交换、分组交换</p>
</li>
<li>
<p><code v-pre>按拓扑结构</code>：总线型、星型、环型、网状型【常用于广域网】</p>
</li>
</ul>
<p><img src="https://img1.imgtp.com/2022/07/28/r3qdBItl.png" alt="1619700467729" loading="lazy"></p>
<ul>
<li><code v-pre>按传输技术</code>：
<ul>
<li>广播式网络：共享公共通信信道</li>
<li>点对点网络：使用分组存储转发和路由选择机制</li>
</ul>
</li>
</ul>
<h2 id="_1-5-小结" tabindex="-1"><a class="header-anchor" href="#_1-5-小结" aria-hidden="true">#</a> 1.5 小结</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/KsuK7CZh.png" alt="1619701236629" loading="lazy"></p>
<h1 id="_2-计算机网络的标准化工作" tabindex="-1"><a class="header-anchor" href="#_2-计算机网络的标准化工作" aria-hidden="true">#</a> 2.计算机网络的标准化工作</h1>
<p>​	要实现不同厂商的硬、软件之间相互连通，必须遵从统一的标准</p>
<h2 id="_2-1-标准的分类" tabindex="-1"><a class="header-anchor" href="#_2-1-标准的分类" aria-hidden="true">#</a> 2.1 标准的分类</h2>
<p><code v-pre>法定标准</code>：由权威机构制定的正式的、合法的标准【OSI】</p>
<p><code v-pre>事实标准</code>：某些公司的产品在竞争中占据了主流，时间长了，这些产品中的协议和技术就成了标准【TCP/IP】</p>
<h2 id="_2-2-rfc" tabindex="-1"><a class="header-anchor" href="#_2-2-rfc" aria-hidden="true">#</a> 2.2 RFC</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/3mgqWg9j.png" alt="1619702474354" loading="lazy"></p>
<h2 id="_2-3-标准化工作的相关组织" tabindex="-1"><a class="header-anchor" href="#_2-3-标准化工作的相关组织" aria-hidden="true">#</a> 2.3 标准化工作的相关组织</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/gXcHxYNu.png" alt="1619702569718" loading="lazy"></p>
<h2 id="_2-4-小结" tabindex="-1"><a class="header-anchor" href="#_2-4-小结" aria-hidden="true">#</a> 2.4 小结</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/FDafCEbr.png" alt="1619702600602" loading="lazy"></p>
<h1 id="_3-计算机网络性能指标" tabindex="-1"><a class="header-anchor" href="#_3-计算机网络性能指标" aria-hidden="true">#</a> 3.计算机网络性能指标</h1>
<h2 id="_3-1-速率" tabindex="-1"><a class="header-anchor" href="#_3-1-速率" aria-hidden="true">#</a> 3.1 速率</h2>
<p>速率即<code v-pre>数据率</code>或称<code v-pre>数据传输率</code>或<code v-pre>比特率</code>，指的是连接在计算机网上的主机在数字信道上传送数据位数的速率。</p>
<p>单位：b/s  kb/s  Mb/s  Gb/s  Tb/s</p>
<p>汉语表示：</p>
<ul>
<li>千	1 kb/s = 10^3 b/s</li>
<li>兆    1 Mb/s = 10^6 b/s</li>
<li>吉    1 Gb/s = 10^9 b/s</li>
<li>太    1 Tb/s = 10^12 b/s</li>
</ul>
<blockquote>
<p><strong><code v-pre>区分</code></strong>：存储容量的表示法</p>
<p>1 KB = 2^10 B = 1024 B = 1024 * 8b</p>
<p>1 MB = 2^10 KB = 1024 KB</p>
<p>1 GB = 2^10 MB = 1024 MB</p>
<p>1 TB = 2^10 GB = 1024 GB</p>
</blockquote>
<h2 id="_3-2-带宽" tabindex="-1"><a class="header-anchor" href="#_3-2-带宽" aria-hidden="true">#</a> 3.2 带宽</h2>
<ul>
<li>
<p><code v-pre>带宽</code>：原本是指某个信号具有的频带宽度，即最高频率与最低频率之差，单位是赫兹【Hz】</p>
</li>
<li>
<p>在计算机网络中，<code v-pre>带宽</code>用来表示网络的通信线路传送数据的能力，通常是指单位时间内从网络中的某一点到另一点所能通过的<code v-pre>最高数据率</code>。单位是<code v-pre>比特每秒</code>。</p>
</li>
</ul>
<h2 id="_3-3-吞吐量" tabindex="-1"><a class="header-anchor" href="#_3-3-吞吐量" aria-hidden="true">#</a> 3.3 吞吐量</h2>
<p>【定义】</p>
<p>单位时间内通过某个网络（或信道、接口）的数据量。单位：b/s</p>
<p>【注意】</p>
<p>吞吐量受网络带宽或网络的额定速率的影响</p>
<h2 id="_3-4-带宽、速率、吞吐量区别" tabindex="-1"><a class="header-anchor" href="#_3-4-带宽、速率、吞吐量区别" aria-hidden="true">#</a> 3.4 带宽、速率、吞吐量区别</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/0zydWrAX.png" alt="1619749962796" loading="lazy"></p>
<h2 id="_3-5-时延" tabindex="-1"><a class="header-anchor" href="#_3-5-时延" aria-hidden="true">#</a> 3.5 时延</h2>
<h3 id="_3-5-1-定义" tabindex="-1"><a class="header-anchor" href="#_3-5-1-定义" aria-hidden="true">#</a> 3.5.1 定义</h3>
<p>数据（报文/分组/比特流）从网络（或链路）的一端传送到另一端所需要的的时间。也叫<code v-pre>延迟</code>、<code v-pre>迟延</code>，单位：s</p>
<h3 id="_3-5-2-分类" tabindex="-1"><a class="header-anchor" href="#_3-5-2-分类" aria-hidden="true">#</a> 3.5.2 分类</h3>
<p><strong><code v-pre>发送时延(传输时延)</code></strong>：从发送分组的第一个比特算起，到该分组的最后一个比特发送完毕需要的时间</p>
<p><img src="https://img1.imgtp.com/2022/07/28/kEB9RI5E.png" alt="1619751012215" loading="lazy"></p>
<p><code v-pre>传播时延</code>：数据在信道上传送数据耗时。取决于电磁波传播速度与链路长度。</p>
<p><img src="https://img1.imgtp.com/2022/07/28/SD4qcFXD.png" alt="1619751163756" loading="lazy"></p>
<p><code v-pre>排队时延</code>：分组在进入路由器后需要在输入队列中排队，确认转发接口后，也需要在输出队列中排队，由此产生排队时延。</p>
<p><code v-pre>处理时延</code>：主机或路由器在收到分组时需要花费一定时间进行处理，由此产生处理时延。</p>
<h2 id="_3-6时延带宽积" tabindex="-1"><a class="header-anchor" href="#_3-6时延带宽积" aria-hidden="true">#</a> 3.6时延带宽积</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/gReNjyuM.png" alt="1619751982143" loading="lazy"></p>
<p><strong>时延带宽积又称为以<code v-pre>比特为单位的链路长度</code></strong>，即某段链路现在有多少比特。</p>
<h2 id="_3-7-往返时延rtt" tabindex="-1"><a class="header-anchor" href="#_3-7-往返时延rtt" aria-hidden="true">#</a> 3.7 往返时延RTT</h2>
<ul>
<li>
<p>从发送方发送数据开始，到发送方收到接收方的确认，总共经历的时延。</p>
</li>
<li>
<p>RTT[Round-Trip Time]主要包含：</p>
<ul>
<li>往返传播时延 = 传播时延 * 2</li>
<li>末端处理时延</li>
</ul>
</li>
</ul>
<h2 id="_3-8-利用率" tabindex="-1"><a class="header-anchor" href="#_3-8-利用率" aria-hidden="true">#</a> 3.8 利用率</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/P6ef4SIA.png" alt="1619752647875" loading="lazy"></p>
<h1 id="_4-计算机网络分层结构" tabindex="-1"><a class="header-anchor" href="#_4-计算机网络分层结构" aria-hidden="true">#</a> 4. 计算机网络分层结构</h1>
<h2 id="_4-1-分层缘由" tabindex="-1"><a class="header-anchor" href="#_4-1-分层缘由" aria-hidden="true">#</a> 4.1 分层缘由</h2>
<p>举个栗子：一台计算机需要向另外一台计算机发送文件</p>
<p><img src="https://img1.imgtp.com/2022/07/28/LLGvDYdc.png" alt="1619752862672" loading="lazy"></p>
<blockquote>
<p>发送文件前需要完成的工作：</p>
<ol>
<li>
<p>发起通信的计算机必须将数据通信的通路进行<code v-pre>激活</code></p>
</li>
<li>
<p>要告诉网络如何识别目的主机</p>
</li>
<li>
<p>发送方要查明接收方是否开机，网络连接是否正常</p>
</li>
<li>
<p>发送方需查明，对方计算机中文件管理程序是否已经做好准备</p>
</li>
<li>
<p>确保差错和意外可以解决</p>
<p>。。。</p>
</li>
</ol>
</blockquote>
<h2 id="_4-2-分层原则" tabindex="-1"><a class="header-anchor" href="#_4-2-分层原则" aria-hidden="true">#</a> 4.2 分层原则</h2>
<blockquote>
<p>分层的基本原则：</p>
<ol>
<li>各层之间<code v-pre>相互独立</code>，每层只实现一种相对独立的功能</li>
<li>每层之间<code v-pre>界限自然清晰</code>，易于理解，相互交流尽可能少</li>
<li>结构上可分割。每层都采用<code v-pre>最适合的技术</code>来实现</li>
<li>保持下层对上层的独立，<code v-pre>上层单向使用下层提供的服务</code></li>
<li>整个分层结构应该促进标准化工作</li>
</ol>
</blockquote>
<p>举个栗子：<code v-pre>82年拉菲的快递之旅</code></p>
<p><img src="https://img1.imgtp.com/2022/07/28/Mi54mOkS.png" alt="1619767904062" loading="lazy"></p>
<h2 id="_4-3-术语解析" tabindex="-1"><a class="header-anchor" href="#_4-3-术语解析" aria-hidden="true">#</a> 4.3 术语解析</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/eUcJ9CI6.png" alt="1619769253173" loading="lazy"></p>
<blockquote>
<ol>
<li>
<p><code v-pre>实体</code>：第n层的活动元素称为<code v-pre>n层实体</code>。同一层的实体叫<code v-pre>对等实体</code></p>
</li>
<li>
<p><code v-pre>协议</code>：为进行网络中的<code v-pre>对等实体</code>数据交换而建立的规则、标准或约定，称为网络协议。【水平意义】</p>
<ul>
<li>语法：规定传输数据的格式</li>
<li>语义：规定所要完成的功能</li>
<li>同步：规定各种操作的顺序</li>
</ul>
</li>
<li>
<p><code v-pre>接口</code>（访问服务点SAP）：上层使用下层服务的入口</p>
</li>
<li>
<p><code v-pre>服务</code>：下层为相邻上层提供的功能调用。【垂直意义】</p>
</li>
</ol>
</blockquote>
<p><img src="https://img1.imgtp.com/2022/07/28/EMYGvFON.png" alt="1619769552297" loading="lazy"></p>
<blockquote>
<ol>
<li><code v-pre>SDU服务数据单元</code>：为完成用户所要求的功能而应传送的数据</li>
<li><code v-pre>PCI协议控制信息</code>：控制协议操作的信息</li>
<li><code v-pre>PDU协议数据单元</code>：对等层次之间传送的数据单元</li>
</ol>
</blockquote>
<h2 id="_4-4-小结" tabindex="-1"><a class="header-anchor" href="#_4-4-小结" aria-hidden="true">#</a> 4.4 小结</h2>
<ol>
<li>
<p>网络体系结构是从<code v-pre>功能</code>上描述计算机网络结构的</p>
</li>
<li>
<p>计算机网络体系结构（简称网络体系结构）是<code v-pre>分层结构</code></p>
</li>
<li>
<p>每层遵循某个/些<code v-pre>网络协议</code>以完成本层的功能</p>
</li>
<li>
<p><code v-pre>计算机网络体系结构</code>是计算机网络的<code v-pre>各层及其包含的协议</code>的集合</p>
</li>
<li>
<p>第n层向第n+1层提供服务时，此服务不仅包含第n层本身的功能，还包含由下层服务提供的功能</p>
</li>
<li>
<p>仅仅在<code v-pre>相邻之间有接口</code>，且所提供服务的具体实现细节对上层完全屏蔽</p>
</li>
<li>
<p>体系结构是<code v-pre>抽象</code>的，而具体实现是指硬件以及能运行的一些软件</p>
</li>
</ol>
<h2 id="_4-5-分层结构" tabindex="-1"><a class="header-anchor" href="#_4-5-分层结构" aria-hidden="true">#</a> 4.5 分层结构</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/fQgaHUOl.png" alt="1619770595600" loading="lazy"></p>
<h3 id="_4-5-1-osi七层结构" tabindex="-1"><a class="header-anchor" href="#_4-5-1-osi七层结构" aria-hidden="true">#</a> 4.5.1 OSI七层结构</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/8lS5IONP.png" alt="1619770832055" loading="lazy"></p>
<h3 id="_4-5-2-osi参考模型解释通信过程" tabindex="-1"><a class="header-anchor" href="#_4-5-2-osi参考模型解释通信过程" aria-hidden="true">#</a> 4.5.2 OSI参考模型解释通信过程</h3>
<h4 id="_4-5-2-1-概览" tabindex="-1"><a class="header-anchor" href="#_4-5-2-1-概览" aria-hidden="true">#</a> 4.5.2.1 概览</h4>
<p>【端到端、点到点】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/Bmaxc7mn.png" alt="1619771140592" loading="lazy">【数据封装与解封过程】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/y9lOmw8N.png" alt="1619771348867" loading="lazy"></p>
<h4 id="_4-5-2-2-各层介绍" tabindex="-1"><a class="header-anchor" href="#_4-5-2-2-各层介绍" aria-hidden="true">#</a> 4.5.2.2 各层介绍</h4>
<h5 id="_4-5-2-2-1-应用层" tabindex="-1"><a class="header-anchor" href="#_4-5-2-2-1-应用层" aria-hidden="true">#</a> 4.5.2.2.1 应用层</h5>
<ul>
<li>所有能和用户交互产生网络流量的程序，如 QQ、浏览器等。而无法联网的如记事本，则不属于计算机网络的应用层范畴</li>
<li>典型应用层服务：
<ul>
<li>文件传输【FTP】</li>
<li>电子邮件【SMTP】</li>
<li>万维网【HTTP】</li>
</ul>
</li>
</ul>
<h5 id="_4-5-2-2-2-表示层" tabindex="-1"><a class="header-anchor" href="#_4-5-2-2-2-表示层" aria-hidden="true">#</a> 4.5.2.2.2 表示层</h5>
<blockquote>
<p>用于处理在<code v-pre>两个通信系统</code>中交换的<code v-pre>信息</code>的表示方式（语法、语义）</p>
<p><code v-pre>功能一</code>：数据格式变换</p>
<p><code v-pre>功能二</code>：数据加密解密</p>
<p><code v-pre>功能三</code>：数据压缩和恢复</p>
<p>主要协议：JPEG、ASCII</p>
</blockquote>
<p><img src="https://img1.imgtp.com/2022/07/28/dwvWTteU.png" alt="1619772253192" loading="lazy"></p>
<h5 id="_4-5-2-2-3-会话层" tabindex="-1"><a class="header-anchor" href="#_4-5-2-2-3-会话层" aria-hidden="true">#</a> 4.5.2.2.3 会话层</h5>
<blockquote>
<p>向表示层<code v-pre>实体/用户进程</code>提供<code v-pre>连接的建立</code>、在连接上<code v-pre>有序地传输数据</code>。这是会话，也是<code v-pre>同步建立</code>【SYN】</p>
<p><code v-pre>功能一</code>：建立、管理、终止会话</p>
<p><code v-pre>功能二</code>：使用校验点可以使会话在通信失效时，从<code v-pre>校验想·点/同步点</code>继续恢复通信，实现<code v-pre>数据同步</code>。适用于传输大文件</p>
<p>主要协议：ADSP、ASP</p>
</blockquote>
<p><img src="https://img1.imgtp.com/2022/07/28/HikFY1kw.png" alt="1619772437227" loading="lazy"></p>
<h5 id="_4-5-2-2-4-传输层" tabindex="-1"><a class="header-anchor" href="#_4-5-2-2-4-传输层" aria-hidden="true">#</a> 4.5.2.2.4 传输层</h5>
<blockquote>
<p>负责主机中两个进程的通信，即<code v-pre>端到端</code>的通信。传输单位是报文段或用户数据报</p>
<p><code v-pre>功能一</code>：可靠传输【确认重传】、不可靠传输【最大努力交付】</p>
<p><code v-pre>功能二</code>：差错控制</p>
<p><code v-pre>功能三</code>：流量控制【控制发送速率】</p>
<p><code v-pre>功能四</code>：复用分用</p>
<ul>
<li>复用：多个应用层进程可同时使用下面运输层的服务</li>
<li>分用：运输层把收到的信息分别交付给上面应用层中相应的进程</li>
</ul>
<p>主要协议：TCP、UDP</p>
</blockquote>
<p><img src="https://img1.imgtp.com/2022/07/28/ZFqUEDBB.png" alt="1619773881053" loading="lazy"></p>
<h5 id="_4-5-2-2-5-网络层" tabindex="-1"><a class="header-anchor" href="#_4-5-2-2-5-网络层" aria-hidden="true">#</a> 4.5.2.2.5 网络层</h5>
<blockquote>
<p>主要任务是，把<code v-pre>分组</code>从源端传到目的端，为分组交换网上的<code v-pre>不同主机</code>提供<code v-pre>通信服务</code>。网络层传输单位是<code v-pre>数据报</code>。</p>
<p><code v-pre>功能一</code>：路由选择【选择最佳路径】</p>
<p><code v-pre>功能二</code>：流量控制</p>
<p><code v-pre>功能三</code>：差错控制</p>
<p><code v-pre>功能四</code>：拥塞控制</p>
<p>​	拥塞控制：若所有节点都来不及接受分组，而要丢弃大量分组的话，网络就处于拥塞状态。因此要采取一定措施缓解这种拥塞。</p>
<p>主要协议：IP、IPX、ICMP、IGMP、ARP、RARP、OSPF</p>
</blockquote>
<h5 id="_4-5-2-2-6-数据链路层" tabindex="-1"><a class="header-anchor" href="#_4-5-2-2-6-数据链路层" aria-hidden="true">#</a> 4.5.2.2.6 数据链路层</h5>
<blockquote>
<p>主要任务是把<code v-pre>网络层传下来的数据报</code>组装成<code v-pre>帧</code>。数据链路层的传输单位是<code v-pre>帧</code>。</p>
<p><code v-pre>功能一</code>：成帧【定义帧的开始和结束】</p>
<p><code v-pre>功能二</code>：差错控制：<code v-pre>帧错 + 位错</code></p>
<p><code v-pre>功能三</code>：流量控制</p>
<p><code v-pre>功能四</code>：访问（接入）控制【控制对信道的访问】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/vLrrgqgI.png" alt="1619782791017" loading="lazy"></p>
<p>主要协议：SDLC、HDLC、PPP、STP</p>
</blockquote>
<h5 id="_4-5-2-2-7-物理层" tabindex="-1"><a class="header-anchor" href="#_4-5-2-2-7-物理层" aria-hidden="true">#</a> 4.5.2.2.7 物理层</h5>
<blockquote>
<p>主要任务是在<code v-pre>物理媒体</code>上实现比特流的<code v-pre>透明传输</code>。物理层传输的单位是<code v-pre>比特</code>。</p>
<p><code v-pre>透明传输</code>：不管所传数据是什么样的比特组合，都应当能够在链路上传送</p>
<p><img src="https://img1.imgtp.com/2022/07/28/nu8fQoWI.png" alt="1619783026187" loading="lazy"></p>
<p><code v-pre>功能一</code>：定义接口特性</p>
<p><code v-pre>功能一</code>：定义传输模式【单工、半双工、双工】</p>
<p><code v-pre>功能一</code>：定义传输速率</p>
<p><code v-pre>功能一</code>：比特同步</p>
<p><code v-pre>功能一</code>：比特编码</p>
<p>主要协议：Rj45、802.3</p>
</blockquote>
<h3 id="_4-5-3-tcp-ip参考模型" tabindex="-1"><a class="header-anchor" href="#_4-5-3-tcp-ip参考模型" aria-hidden="true">#</a> 4.5.3 TCP/IP参考模型</h3>
<h4 id="_4-5-3-1-对比" tabindex="-1"><a class="header-anchor" href="#_4-5-3-1-对比" aria-hidden="true">#</a> 4.5.3.1 对比</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/mJfWNkxN.png" alt="1619783280506" loading="lazy"></p>
<blockquote>
<p>相同点：</p>
<ul>
<li>都分层</li>
<li>都基于独立的协议栈的概念</li>
<li>都可以实现异构网络的互连</li>
</ul>
</blockquote>
<blockquote>
<p>不同点：</p>
<ol>
<li>OSI定义三点：服务、协议、接口</li>
<li>OSI先出现，参考模型先于协议发明，不偏向特定协议</li>
<li>TCP/IP设计之初考虑到<code v-pre>异构网络互连</code>的问题，故将IP作为重要的层次</li>
</ol>
<p><img src="https://img1.imgtp.com/2022/07/28/BZGsxQ3d.png" alt="1619783649492" loading="lazy"></p>
<p><code v-pre>面向连接</code>【分三个阶段】：</p>
<ul>
<li>建立连接【发出一个建立连接的请求，只有在连接建立成功之后，才能开始数据传输】</li>
<li>数据传输</li>
<li>释放连接【当数据传输完毕，就必须释放连接】</li>
</ul>
<p><code v-pre>无连接</code>：没有面向连接这么多的阶段，无连接直接进行数据传输</p>
</blockquote>
<h3 id="_4-5-4-五层参考模型" tabindex="-1"><a class="header-anchor" href="#_4-5-4-五层参考模型" aria-hidden="true">#</a> 4.5.4 五层参考模型</h3>
<h4 id="_4-5-4-1-介绍" tabindex="-1"><a class="header-anchor" href="#_4-5-4-1-介绍" aria-hidden="true">#</a> 4.5.4.1 介绍</h4>
<blockquote>
<p><code v-pre>应用层</code>：支持各种网络应用【FTP、SMTP、HTTP】</p>
<p><code v-pre>传输层</code>：进程-进程的数据传输【TCP、UDP】</p>
<p><code v-pre>网络层</code>：源主机到目的主机的数据分组、路由选择和分组转发【IP、ICMP、OSPF】</p>
<p><code v-pre>数据链路层</code>：把网络层传下来的数据报组装成帧【Ethernet、PPP】</p>
<p><code v-pre>物理层</code>：比特传输</p>
</blockquote>
<p><img src="https://img1.imgtp.com/2022/07/28/3O3aSGTK.png" alt="1619783898405" loading="lazy"></p>
<h4 id="_4-5-4-2-数据的封装与解封" tabindex="-1"><a class="header-anchor" href="#_4-5-4-2-数据的封装与解封" aria-hidden="true">#</a> 4.5.4.2 数据的封装与解封</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/6pFnf9Ak.png" alt="1619784194516" loading="lazy"></p>
<h1 id="_5-小结" tabindex="-1"><a class="header-anchor" href="#_5-小结" aria-hidden="true">#</a> 5.小结</h1>
<p><img src="https://img1.imgtp.com/2022/07/28/xMGRjBI9.png" alt="1619784253404" loading="lazy"></p>
</div></template>
