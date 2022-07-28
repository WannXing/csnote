<template><div><h1 id="_1-基本概念" tabindex="-1"><a class="header-anchor" href="#_1-基本概念" aria-hidden="true">#</a> 1. 基本概念</h1>
<p><img src="https://img1.imgtp.com/2022/07/28/JZVKq6U1.png" alt="1619855628101" loading="lazy"></p>
<p><code v-pre>结点</code>：主机、路由器</p>
<p><code v-pre>链路</code>：网络中两个结点之间的<strong>物理通道</strong>，链路的传输介质主要有双绞线、光纤和微波。分为有线链路、无线链路</p>
<p><code v-pre>数据链路</code>：网络中两个结点之间的<strong>逻辑通道</strong>，把实现控制数据传输协议的硬件和软件加到链路上就构成数据链路</p>
<p><code v-pre>帧</code>：链路层的协议数据单元，封装网络层数据报</p>
<blockquote>
<p><code v-pre>数据链路层</code>负责从一个结点(通过一条链路)向另一个物理链路直接相连的相邻结点传送数据报</p>
</blockquote>
<h1 id="_2-功能概述" tabindex="-1"><a class="header-anchor" href="#_2-功能概述" aria-hidden="true">#</a> 2. 功能概述</h1>
<p><img src="https://img1.imgtp.com/2022/07/28/nmel1d1a.png" alt="1619857048839" loading="lazy"></p>
<p>​	在物理层提供的服务的基础上<code v-pre>向网络层提供服务</code>，其<code v-pre>最基本的服务</code>是将源自网络层的数据<code v-pre>可靠地</code>传输到相邻结点的目标机网络层。其<code v-pre>主要作用</code>是<strong>加强物理层传输原始比特流的功能</strong>，将物理层提供的可能出错的物理连接改造成为<code v-pre>逻辑上无差错的数据链路</code>，使之对网络层表现为一条无差错的链路。</p>
<p><code v-pre>功能一</code>：为网络层提供服务。无确认无连接服务、有确认无连接服务、有确认面向连接服务。(有连接一定有确认)</p>
<p><code v-pre>功能二</code>：链路管理，即连接的建立、维持、释放【用于面向连接的服务】</p>
<p><code v-pre>功能三</code>：组帧</p>
<p><code v-pre>功能四</code>：流量控制【限制发送方】</p>
<p><code v-pre>功能五</code>：差错控制【帧错/位错】</p>
<h1 id="_3-封装成帧" tabindex="-1"><a class="header-anchor" href="#_3-封装成帧" aria-hidden="true">#</a> 3. 封装成帧</h1>
<p>​	在一段数据的前后部分添加<code v-pre>首部和尾部</code>，构成一个帧。接收端在收到物理层上交的比特流后，就能根据首部和尾部的标记，从收到的比特流中<code v-pre>识别帧的开始和结束</code>。</p>
<p>​	首部和尾部包含许多的控制信息，他们的一个重要作用是<code v-pre>帧定界</code>【确定帧的界限】</p>
<p>​	<code v-pre>帧同步</code>：接收方应当能从接收到的二进制比特流中区分出帧的开始和终止</p>
<p>​	<code v-pre>组帧的四种方法</code>：字符计数法、字符（节）填充法、零比特填充法、违规编码法</p>
<p><img src="https://img1.imgtp.com/2022/07/28/GvJ1jM2L.png" alt="1619858508659" loading="lazy"></p>
<h1 id="_4-透明传输" tabindex="-1"><a class="header-anchor" href="#_4-透明传输" aria-hidden="true">#</a> 4. 透明传输</h1>
<h2 id="_4-1-简介" tabindex="-1"><a class="header-anchor" href="#_4-1-简介" aria-hidden="true">#</a> 4.1 简介</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/FwG6Ebp8.png" alt="1619858972476" loading="lazy"></p>
<h2 id="_4-2-组帧方法" tabindex="-1"><a class="header-anchor" href="#_4-2-组帧方法" aria-hidden="true">#</a> 4.2 组帧方法</h2>
<h3 id="_4-2-1-字符计数法" tabindex="-1"><a class="header-anchor" href="#_4-2-1-字符计数法" aria-hidden="true">#</a> 4.2.1 字符计数法</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/kj0hcJT4.png" alt="1619859195239" loading="lazy"></p>
<p><code v-pre>缺点</code>：当首个计数字段出错时，会导致后续所有帧的识别错误</p>
<h3 id="_4-2-2-字符-节-填充法" tabindex="-1"><a class="header-anchor" href="#_4-2-2-字符-节-填充法" aria-hidden="true">#</a> 4.2.2 字符（节）填充法</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/GhZO4M5V.png" alt="1619859280726" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/LNL6afGc.png" alt="1619859299373" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/rHYpbcsa.png" alt="1619859317069" loading="lazy"></p>
<p><strong>【此时有可能发生以下错误】</strong></p>
<p><img src="https://img1.imgtp.com/2022/07/28/kT5GvSEj.png" alt="1619859332919" loading="lazy"></p>
<p><strong>【解决方案】</strong></p>
<p><img src="https://img1.imgtp.com/2022/07/28/uTugmZiG.png" alt="1619859411827" loading="lazy"></p>
<h3 id="_4-2-3-零比特填充法" tabindex="-1"><a class="header-anchor" href="#_4-2-3-零比特填充法" aria-hidden="true">#</a> 4.2.3 零比特填充法</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/4gFCNEDQ.png" alt="1619859470667" loading="lazy"></p>
<h3 id="_4-2-4-违规编码法" tabindex="-1"><a class="header-anchor" href="#_4-2-4-违规编码法" aria-hidden="true">#</a> 4.2.4 违规编码法</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/PU56Odtn.png" alt="1619859515800" loading="lazy"></p>
<h1 id="_5-差错控制" tabindex="-1"><a class="header-anchor" href="#_5-差错控制" aria-hidden="true">#</a> 5. 差错控制</h1>
<h2 id="_5-1-差错来源" tabindex="-1"><a class="header-anchor" href="#_5-1-差错来源" aria-hidden="true">#</a> 5.1 差错来源</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/145JiaLd.png" alt="1619859700616" loading="lazy"></p>
<blockquote>
<p><code v-pre>为什么要在链路层进行差错控制</code>：当两台主机通信需要经过一台交换机和20台路由器时，若经过第一个路由器时帧已经发生了错误，则此时路由器的链路层可以发现错误并丢弃，减少了错误帧继续传递所造成的资源浪费。</p>
<p><img src="https://img1.imgtp.com/2022/07/28/E4eIVrOB.png" alt="1619860002179" loading="lazy"></p>
</blockquote>
<h2 id="_5-2-比特错误" tabindex="-1"><a class="header-anchor" href="#_5-2-比特错误" aria-hidden="true">#</a> 5.2 比特错误</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/XRmvcQDW.png" alt="1619875982965" loading="lazy"></p>
<blockquote>
<p>编码 VS 编码</p>
<p><code v-pre>数据链路层编码</code>和<code v-pre>物理层的数据编码与调制</code>不同。</p>
<ul>
<li>物理层编码针对的是<code v-pre>单个比特</code>，解决传输过程中比特的同步等问题，如曼彻斯特编码。</li>
<li>数据链路层的编码针对的是<code v-pre>一组比特</code>，通过冗余码的技术实现一组二进制比特串在传输过程中是否出现了差错。</li>
</ul>
<p><code v-pre>冗余编码</code>：在数据发送之前，先按某种关系附加上一定的冗余位，构成一个符合某一规则的码字后再发送。当要发送的有效数据变化时，相应的冗余位也随之变化，使码字遵从不变的规则。接收端根据收到码字是否仍符合原规则来判断是否出错。</p>
</blockquote>
<h3 id="_5-3-1-检错编码之奇偶校验码" tabindex="-1"><a class="header-anchor" href="#_5-3-1-检错编码之奇偶校验码" aria-hidden="true">#</a> 5.3.1 检错编码之奇偶校验码</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/RfQbpFqN.png" alt="1619877096751" loading="lazy"></p>
<h3 id="_5-3-2-检错编码之crc循环冗余码" tabindex="-1"><a class="header-anchor" href="#_5-3-2-检错编码之crc循环冗余码" aria-hidden="true">#</a> 5.3.2 检错编码之CRC循环冗余码</h3>
<p>【冗余码计算】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/jhLN48Y4.png" alt="1619924512084" loading="lazy"></p>
<p>【接收端检错】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/aMLh3GZE.png" alt="1619924649321" loading="lazy"></p>
<p>【注意】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/bdthnVBp.png" alt="1619924734910" loading="lazy"></p>
<h3 id="_5-3-3-纠错编码-海明码" tabindex="-1"><a class="header-anchor" href="#_5-3-3-纠错编码-海明码" aria-hidden="true">#</a> 5.3.3 纠错编码--海明码</h3>
<p><code v-pre>海明码</code>：可以发现<code v-pre>双比特错误</code>，只能纠正<code v-pre>单比特错误</code></p>
<p>工作原理：动一发而牵全身</p>
<p>工作流程：</p>
<p><img src="https://img1.imgtp.com/2022/07/28/zalOyJee.png" alt="1619924954290" loading="lazy"></p>
<p>计算过程：</p>
<p>【确定校验码位数r】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/8dr9EBBl.png" alt="1619925048353" loading="lazy"></p>
<p>【确定检验码和数据的位置】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/2KbK41Od.png" alt="1619925104223" loading="lazy"></p>
<p>【求出校验码的值】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/tZEN948B.png" alt="1619925201272" loading="lazy"></p>
<p>【检错并纠错】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/6BPw3550.png" alt="1619925280580" loading="lazy"></p>
<h1 id="_6-流量控制、可靠传输、滑动窗口" tabindex="-1"><a class="header-anchor" href="#_6-流量控制、可靠传输、滑动窗口" aria-hidden="true">#</a> 6. 流量控制、可靠传输、滑动窗口</h1>
<p><img src="https://img1.imgtp.com/2022/07/28/AHCqzBfo.png" alt="1619926424841" loading="lazy"></p>
<h2 id="_6-1-流量控制" tabindex="-1"><a class="header-anchor" href="#_6-1-流量控制" aria-hidden="true">#</a> 6.1 流量控制</h2>
<h3 id="_6-1-1-缘由" tabindex="-1"><a class="header-anchor" href="#_6-1-1-缘由" aria-hidden="true">#</a> 6.1.1 缘由</h3>
<p>​	发送端<code v-pre>较高的发送速度</code>和接收端<code v-pre>较低的接收能力</code>的不匹配，会造成传输出错，因此流量控制也是数据链路层一项重要工作。</p>
<blockquote>
<p><code v-pre>数据链路层流量控制</code>与<code v-pre>传输层流量控制</code>区别：</p>
<ul>
<li>数据链路层的流量控制是点对点的，而传输层的流量控制是端到端的</li>
<li>数据链路层流量控制的手段：接收方收不下就不回复确认</li>
<li>传输层流量控制手段：接收端给发送端一个窗口公告</li>
</ul>
</blockquote>
<h3 id="_6-1-2-流量控制的方法" tabindex="-1"><a class="header-anchor" href="#_6-1-2-流量控制的方法" aria-hidden="true">#</a> 6.1.2 流量控制的方法</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/n2bCEeHi.png" alt="1619925976746" loading="lazy"></p>
<blockquote>
<p>【各协议发送窗口与接收窗口的大小】</p>
<p><code v-pre>停止-等待协议</code>：发送窗口大小=1， 接收窗口大小=1</p>
<p><code v-pre>后退N帧协议(GBN)</code>：发送窗口大小&gt;1，接收窗口大小=1</p>
<p><code v-pre>选择重传协议(SR)</code>：发送窗口大小&gt;1，接收窗口大小&gt;1</p>
<p>在数据链路层，窗口大小是固定的。</p>
</blockquote>
<h2 id="_6-2-流量控制之停止-等待协议" tabindex="-1"><a class="header-anchor" href="#_6-2-流量控制之停止-等待协议" aria-hidden="true">#</a> 6.2 流量控制之停止-等待协议</h2>
<h3 id="_6-2-1-为什么需要该协议" tabindex="-1"><a class="header-anchor" href="#_6-2-1-为什么需要该协议" aria-hidden="true">#</a> 6.2.1 为什么需要该协议</h3>
<ol>
<li>
<p>为了实现流量控制</p>
</li>
<li>
<p>除了比特出差错，底层信道还会出现丢包问题</p>
<p><code v-pre>丢包</code>：由物理线路故障、设备故障、病毒攻击、路由信息错误等原因导致的数据包的丢失</p>
</li>
</ol>
<h3 id="_6-2-2-研究的前提" tabindex="-1"><a class="header-anchor" href="#_6-2-2-研究的前提" aria-hidden="true">#</a> 6.2.2 研究的前提</h3>
<ul>
<li>虽然现在常用全双工通信方式，但是为了讨论的方便，仅考虑一方为发送方，一方为接收方的情况。</li>
<li>由于是在讨论可靠传输的原理，故暂不考虑数据是在哪一层次上传送的</li>
<li><code v-pre>停止-等待</code>就是每发送完一个分组就停止发送，等待对方确认后再发送下一个分组</li>
</ul>
<h3 id="_6-2-3-停止-等待协议的应用情况" tabindex="-1"><a class="header-anchor" href="#_6-2-3-停止-等待协议的应用情况" aria-hidden="true">#</a> 6.2.3 停止-等待协议的应用情况</h3>
<h4 id="_6-2-3-1-无差错情况" tabindex="-1"><a class="header-anchor" href="#_6-2-3-1-无差错情况" aria-hidden="true">#</a> 6.2.3.1 无差错情况</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/3ovoBFDN.png" alt="1619927175051" loading="lazy"></p>
<h4 id="_6-2-3-2-有差错情况" tabindex="-1"><a class="header-anchor" href="#_6-2-3-2-有差错情况" aria-hidden="true">#</a> 6.2.3.2 有差错情况</h4>
<ol>
<li>数据帧丢失或者检测到帧出错</li>
</ol>
<p><img src="https://img1.imgtp.com/2022/07/28/kWqqs5S4.png" alt="1619927401805" loading="lazy"></p>
<ol start="2">
<li>ACK丢失</li>
</ol>
<p><img src="https://img1.imgtp.com/2022/07/28/GLMQcC84.png" alt="1619927469424" loading="lazy"></p>
<ol start="3">
<li>ACK迟到</li>
</ol>
<p><img src="https://img1.imgtp.com/2022/07/28/JYxwD1Cp.png" alt="1619927549635" loading="lazy"></p>
<h4 id="_6-2-3-3-性能分析" tabindex="-1"><a class="header-anchor" href="#_6-2-3-3-性能分析" aria-hidden="true">#</a> 6.2.3.3 性能分析</h4>
<ol>
<li><code v-pre>停止-等待协议</code>简单易操作</li>
<li>信道利用率太低</li>
</ol>
<p><img src="https://img1.imgtp.com/2022/07/28/pM0dMtvh.png" alt="1619927676294" loading="lazy"></p>
<blockquote>
<p><strong>信道利用率：</strong></p>
<p><img src="https://img1.imgtp.com/2022/07/28/iksgBw6K.png" alt="1619927760134" loading="lazy"></p>
</blockquote>
<h2 id="_6-3-流量控制之后退n帧协议【gbn】" tabindex="-1"><a class="header-anchor" href="#_6-3-流量控制之后退n帧协议【gbn】" aria-hidden="true">#</a> 6.3 流量控制之后退N帧协议【GBN】</h2>
<h3 id="_6-3-1-滑动窗口" tabindex="-1"><a class="header-anchor" href="#_6-3-1-滑动窗口" aria-hidden="true">#</a> 6.3.1 滑动窗口</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/tYTrIFXv.png" alt="1619929127046" loading="lazy"></p>
<h3 id="_6-3-2-gbn发送方必须响应的三件事" tabindex="-1"><a class="header-anchor" href="#_6-3-2-gbn发送方必须响应的三件事" aria-hidden="true">#</a> 6.3.2 GBN发送方必须响应的三件事</h3>
<p>【上层的调用】</p>
<p>​	上层要发送数据时，发送方先检查发送窗口是否已满。如果<code v-pre>未满</code>，则产生一个帧并将其发送；若果<code v-pre>窗口已满</code>，发送方只需将数据返回给上层，暗示上层窗口已满，上层等会再发。（实际实现中，发送方法可以缓存这些数据，窗口不满时再发送帧）。</p>
<p>【收到了一个ACK】</p>
<p>​	GBN协议中，对n号帧的确认采用<code v-pre>累积确认</code>的方式，表明接收方已经收到n号帧和它之前的全部帧。</p>
<p>【超时事件】</p>
<p>​	协议的名字为后退N帧/回退N帧，来源于<code v-pre>出现丢失帧</code>和<code v-pre>帧的时延过长</code>时，发送方的行为。就像在<code v-pre>停止-等待协议</code>中一样，定时器将再次用于恢复数据帧或确认帧的丢失。如果出现超时发送方将重传所有已发送但未被确认的帧。</p>
<p><img src="https://img1.imgtp.com/2022/07/28/XiYkGfPa.png" alt="1619930513842" loading="lazy"></p>
<blockquote>
<p>​	<code v-pre>接收方按帧编号顺序接收帧，当某一编号帧无法收到时，将一直等待该帧，其后的帧直接丢弃。发送方经过一定时间后，将未接收确认的帧重传。</code></p>
</blockquote>
<h3 id="_6-3-3-gbn接收方的任务" tabindex="-1"><a class="header-anchor" href="#_6-3-3-gbn接收方的任务" aria-hidden="true">#</a> 6.3.3 GBN接收方的任务</h3>
<ol>
<li>如果正确收到n号帧并且按序，接收方将为n帧发送一个ACK，并将该帧中是数据部分交付给上一层</li>
<li>其余情况都丢弃帧，并为最近按序接收的帧重新发送ACK。接收方无需缓存任何失序帧，只需要维护一个信息：<code v-pre>expectedseqnum【下一个按序接收的帧序号】</code></li>
</ol>
<blockquote>
<p>运行中的GBN：</p>
</blockquote>
<p><img src="https://img1.imgtp.com/2022/07/28/c58kl2xF.png" alt="1619934236932" loading="lazy"></p>
<h3 id="_6-3-4-滑动窗口长度" tabindex="-1"><a class="header-anchor" href="#_6-3-4-滑动窗口长度" aria-hidden="true">#</a> 6.3.4 滑动窗口长度</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/zNDTlqqf.png" alt="1619934409658" loading="lazy"></p>
<blockquote>
<p>如：采用2个比特对帧编号，发送窗口大小为4【大于上述给定范围】，若第一次发送4个帧全部丢失，则发送发重传，此时接收端无法确认此时的4个帧是新帧还是旧帧。</p>
</blockquote>
<p>【习题】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/LfVmFsQD.png" alt="1619934642624" loading="lazy"></p>
<h3 id="_6-3-5-gbn性能分析" tabindex="-1"><a class="header-anchor" href="#_6-3-5-gbn性能分析" aria-hidden="true">#</a> 6.3.5 GBN性能分析</h3>
<ol>
<li>因连续发送数据帧而提高了信道利用率</li>
<li>在重传时必须把原来已经正确传送的数据帧重传，使得传送效率降低</li>
<li>基于以上描述，引出<code v-pre>选择重传协议</code></li>
</ol>
<h1 id="_7-信道划分介质访问控制" tabindex="-1"><a class="header-anchor" href="#_7-信道划分介质访问控制" aria-hidden="true">#</a> 7. 信道划分介质访问控制</h1>
<h2 id="_7-1-传输数据使用的两种链路" tabindex="-1"><a class="header-anchor" href="#_7-1-传输数据使用的两种链路" aria-hidden="true">#</a> 7.1 传输数据使用的两种链路</h2>
<p><code v-pre>点对点链路</code>：两个相邻节点通过一个链路相连，没有第三者。【应用：PPP协议，常用于<code v-pre>广域网</code>】</p>
<p><code v-pre>广播式链路</code>：所有主机共享通信介质。【应用：早期的总线以太网、无限局域网、常用于<code v-pre>局域网</code>】</p>
<p>​					【典型拓扑结构：总线型、星型（逻辑总线型）】</p>
<h2 id="_7-2-介质访问控制" tabindex="-1"><a class="header-anchor" href="#_7-2-介质访问控制" aria-hidden="true">#</a> 7.2 介质访问控制</h2>
<p><code v-pre>介质访问控制</code>的内容就是，采取一定的措施，使得两对节点之间的通信不会发生互相干扰的情况。</p>
<p><img src="https://img1.imgtp.com/2022/07/28/cL5b2AMt.png" alt="1619940299853" loading="lazy"></p>
<h2 id="_7-3-信道划分介质访问控制" tabindex="-1"><a class="header-anchor" href="#_7-3-信道划分介质访问控制" aria-hidden="true">#</a> 7.3 信道划分介质访问控制</h2>
<p>​	<code v-pre>信道划分介质访问控制</code>：将使用介质的每个设备与来自同一信道上的其他设备的<strong>通信隔离开</strong>，把<code v-pre>时域和频域资源</code>合理地分配给网络上的设备。</p>
<p>​	<code v-pre>多路复用技术</code>：把多个信号组合在一条物理信道上进行传输，使得多个计算机或终端设备<code v-pre>共享信道资源</code>，提高信道利用率。</p>
<p><img src="https://img1.imgtp.com/2022/07/28/Csr2Ccen.png" alt="1619937390124" loading="lazy"></p>
<h2 id="_7-4-静态划分信道" tabindex="-1"><a class="header-anchor" href="#_7-4-静态划分信道" aria-hidden="true">#</a> 7.4 静态划分信道</h2>
<h3 id="_7-4-1-频分多路复用【fdm】" tabindex="-1"><a class="header-anchor" href="#_7-4-1-频分多路复用【fdm】" aria-hidden="true">#</a> 7.4.1 频分多路复用【FDM】</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/N9ACe0fc.png" alt="1619937560317" loading="lazy"></p>
<h3 id="_7-4-2-时分多路复用-【tdm】" tabindex="-1"><a class="header-anchor" href="#_7-4-2-时分多路复用-【tdm】" aria-hidden="true">#</a> 7.4.2 时分多路复用 【TDM】</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/5ybHTEX8.png" alt="1619937729995" loading="lazy"></p>
<h3 id="_7-4-3-统计时分复用【stdm】" tabindex="-1"><a class="header-anchor" href="#_7-4-3-统计时分复用【stdm】" aria-hidden="true">#</a> 7.4.3 统计时分复用【STDM】</h3>
<p><code v-pre>改进的时分复用</code></p>
<p><img src="https://img1.imgtp.com/2022/07/28/hd8M4tCB.png" alt="1619937959718" loading="lazy"></p>
<blockquote>
<p>若线路传输速率为<code v-pre>8000bit/s</code>，则对于TDM来说，每个用户【A、B、C、D】只能得到<code v-pre>2000bit/s</code>；而对于STDM，每个用户最高可以得到<code v-pre>8000bit/s</code>。</p>
</blockquote>
<h3 id="_7-4-4-波分多路复用【wdm】" tabindex="-1"><a class="header-anchor" href="#_7-4-4-波分多路复用【wdm】" aria-hidden="true">#</a> 7.4.4 波分多路复用【WDM】</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/xZ6qYMMm.png" alt="1619938213101" loading="lazy"></p>
<h2 id="_7-5-动态划分信道" tabindex="-1"><a class="header-anchor" href="#_7-5-动态划分信道" aria-hidden="true">#</a> 7.5 动态划分信道</h2>
<h3 id="_7-5-1-aloha协议" tabindex="-1"><a class="header-anchor" href="#_7-5-1-aloha协议" aria-hidden="true">#</a> 7.5.1 ALOHA协议</h3>
<p><code v-pre>【纯ALOHA协议】</code></p>
<p>​	不监听信道、不按时间槽发送、随机重发。</p>
<p><img src="https://img1.imgtp.com/2022/07/28/gWzcvI1z.png" alt="1619940569214" loading="lazy"></p>
<p><code v-pre>【时隙ALOHA协议】</code></p>
<p>​	把时间分成若干个相同的时间片，所有用户在时间片开始时刻同步接入网络信道，若发生冲突，则必须等到下一个时间片开始时刻再发送。<code v-pre>控制想发就发的随意性</code></p>
<p><img src="https://img1.imgtp.com/2022/07/28/xOlnJE9p.png" alt="1619940887388" loading="lazy"></p>
<p>【区别】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/nnyiOyhB.png" alt="1619940952174" loading="lazy"></p>
<h3 id="_7-5-2-csma协议" tabindex="-1"><a class="header-anchor" href="#_7-5-2-csma协议" aria-hidden="true">#</a> 7.5.2 CSMA协议</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/Q7yRr9xE.png" alt="1619941105889" loading="lazy"></p>
<h4 id="_7-5-2-1-1-坚持csma" tabindex="-1"><a class="header-anchor" href="#_7-5-2-1-1-坚持csma" aria-hidden="true">#</a> 7.5.2.1 1-坚持CSMA</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/KaQAnFji.png" alt="1619941218137" loading="lazy"></p>
<h4 id="_7-5-2-2-非坚持csma" tabindex="-1"><a class="header-anchor" href="#_7-5-2-2-非坚持csma" aria-hidden="true">#</a> 7.5.2.2 非坚持CSMA</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/jvFYQamn.png" alt="1619941303637" loading="lazy"></p>
<h4 id="_7-5-2-3-p-坚持csma" tabindex="-1"><a class="header-anchor" href="#_7-5-2-3-p-坚持csma" aria-hidden="true">#</a> 7.5.2.3 p-坚持CSMA</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/KBm8zeDs.png" alt="1619941430182" loading="lazy"></p>
<h4 id="_7-5-2-4-对比" tabindex="-1"><a class="header-anchor" href="#_7-5-2-4-对比" aria-hidden="true">#</a> 7.5.2.4 对比</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/CO4ZYCmw.png" alt="1619941468291" loading="lazy"></p>
<h3 id="_7-5-3-csma-ca协议" tabindex="-1"><a class="header-anchor" href="#_7-5-3-csma-ca协议" aria-hidden="true">#</a> 7.5.3 CSMA/CA协议</h3>
<h4 id="_7-5-3-1-介绍" tabindex="-1"><a class="header-anchor" href="#_7-5-3-1-介绍" aria-hidden="true">#</a> 7.5.3.1 介绍</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/iVmAZga7.png" alt="1619942488399" loading="lazy"></p>
<h4 id="_7-5-3-2-工作原理" tabindex="-1"><a class="header-anchor" href="#_7-5-3-2-工作原理" aria-hidden="true">#</a> 7.5.3.2 工作原理</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/pV9YeLIV.png" alt="1619942820721" loading="lazy"></p>
<h4 id="_7-5-3-3-csma-cd与csma-ca对比" tabindex="-1"><a class="header-anchor" href="#_7-5-3-3-csma-cd与csma-ca对比" aria-hidden="true">#</a> 7.5.3.3 CSMA/CD与CSMA/CA对比</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/ng8pkHSd.png" alt="1619943003059" loading="lazy"></p>
<h3 id="_7-5-4-csma-cd协议" tabindex="-1"><a class="header-anchor" href="#_7-5-4-csma-cd协议" aria-hidden="true">#</a> 7.5.4 CSMA/CD协议</h3>
<h4 id="_7-5-4-1-介绍" tabindex="-1"><a class="header-anchor" href="#_7-5-4-1-介绍" aria-hidden="true">#</a> 7.5.4.1 介绍</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/ZeSTdEOc.png" alt="1620010017325" loading="lazy"></p>
<h4 id="_7-5-4-2-传播时延对载波监听的影响" tabindex="-1"><a class="header-anchor" href="#_7-5-4-2-传播时延对载波监听的影响" aria-hidden="true">#</a> 7.5.4.2 传播时延对载波监听的影响</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/umQMkHCi.png" alt="1620010482279" loading="lazy"></p>
<h4 id="_7-5-4-3-碰撞后的重传时机" tabindex="-1"><a class="header-anchor" href="#_7-5-4-3-碰撞后的重传时机" aria-hidden="true">#</a> 7.5.4.3 碰撞后的重传时机</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/PI1nRy6g.png" alt="1620010739677" loading="lazy"></p>
<p>【例题】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/tqtFKVQR.png" alt="1620010793488" loading="lazy"></p>
<h4 id="_7-5-4-4-最小帧长问题" tabindex="-1"><a class="header-anchor" href="#_7-5-4-4-最小帧长问题" aria-hidden="true">#</a> 7.5.4.4 最小帧长问题</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/3av5wvDi.png" alt="1620010879739" loading="lazy"></p>
<p><code v-pre>为了使CSMA/CD协议能发挥作用，即在帧发送完毕之前就可以检测到碰撞，需要定义一个最小帧长</code></p>
<p>【最小帧长】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/aoJZxgMa.png" alt="1620011063230" loading="lazy"></p>
<h1 id="_8-轮询访问介质访问控制" tabindex="-1"><a class="header-anchor" href="#_8-轮询访问介质访问控制" aria-hidden="true">#</a> 8. 轮询访问介质访问控制</h1>
<h2 id="_8-1-对比" tabindex="-1"><a class="header-anchor" href="#_8-1-对比" aria-hidden="true">#</a> 8.1 对比</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/VeqYvSRU.png" alt="1619941859962" loading="lazy"></p>
<h2 id="_8-2-轮询协议" tabindex="-1"><a class="header-anchor" href="#_8-2-轮询协议" aria-hidden="true">#</a> 8.2 轮询协议</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/DQZXtUay.png" alt="1619942014645" loading="lazy"></p>
<h2 id="_8-3-令牌传递协议" tabindex="-1"><a class="header-anchor" href="#_8-3-令牌传递协议" aria-hidden="true">#</a> 8.3 令牌传递协议</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/nX2EUTBf.png" alt="1619942227252" loading="lazy"></p>
<h1 id="_9-局域网基本概念和体系结构" tabindex="-1"><a class="header-anchor" href="#_9-局域网基本概念和体系结构" aria-hidden="true">#</a> 9. 局域网基本概念和体系结构</h1>
<h2 id="_9-1-局域网" tabindex="-1"><a class="header-anchor" href="#_9-1-局域网" aria-hidden="true">#</a> 9.1 局域网</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/LGE6l4g1.png" alt="1619943263844" loading="lazy"></p>
<h3 id="_9-1-1-局域网拓扑结构" tabindex="-1"><a class="header-anchor" href="#_9-1-1-局域网拓扑结构" aria-hidden="true">#</a> 9.1.1 局域网拓扑结构</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/KUAIRzt0.png" alt="1619943436629" loading="lazy"></p>
<h3 id="_9-1-2-局域网传输介质" tabindex="-1"><a class="header-anchor" href="#_9-1-2-局域网传输介质" aria-hidden="true">#</a> 9.1.2 局域网传输介质</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/Bnx8Gjom.png" alt="1619943492374" loading="lazy"></p>
<h3 id="_9-1-3-局域网介质访问控制方法" tabindex="-1"><a class="header-anchor" href="#_9-1-3-局域网介质访问控制方法" aria-hidden="true">#</a> 9.1.3 局域网介质访问控制方法</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/SaZXYlzO.png" alt="1619943607631" loading="lazy"></p>
<h3 id="_9-1-4-无限局域网划分" tabindex="-1"><a class="header-anchor" href="#_9-1-4-无限局域网划分" aria-hidden="true">#</a> 9.1.4 无限局域网划分</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/zO3Rlq8Q.png" alt="1619943735703" loading="lazy"></p>
<h3 id="_9-1-5-ieee-802标准" tabindex="-1"><a class="header-anchor" href="#_9-1-5-ieee-802标准" aria-hidden="true">#</a> 9.1.5 IEEE 802标准</h3>
<p><a href="https://baike.baidu.com/item/IEEE%20802/6808672?fr=aladdin#3_2" target="_blank" rel="noopener noreferrer">IEEE 802现有标准<ExternalLinkIcon/></a></p>
<p><img src="https://img1.imgtp.com/2022/07/28/bFr7QaOM.png" alt="1619943899450" loading="lazy"></p>
<h3 id="_9-1-6-mac子层与llc子层" tabindex="-1"><a class="header-anchor" href="#_9-1-6-mac子层与llc子层" aria-hidden="true">#</a> 9.1.6 MAC子层与LLC子层</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/BhnRnyAk.png" alt="1619944147130" loading="lazy"></p>
<h2 id="_9-2-以太网" tabindex="-1"><a class="header-anchor" href="#_9-2-以太网" aria-hidden="true">#</a> 9.2 以太网</h2>
<h3 id="_9-2-1-以太网概述" tabindex="-1"><a class="header-anchor" href="#_9-2-1-以太网概述" aria-hidden="true">#</a> 9.2.1 以太网概述</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/ItVTMMDC.png" alt="1619959081267" loading="lazy"></p>
<blockquote>
<p><code v-pre>以太网提供无连接、不可靠的服务</code></p>
<p><img src="https://img1.imgtp.com/2022/07/28/LJe08xSh.png" alt="1619959187249" loading="lazy"></p>
</blockquote>
<h3 id="_9-2-2-以太网传输介质与拓扑结构的发展" tabindex="-1"><a class="header-anchor" href="#_9-2-2-以太网传输介质与拓扑结构的发展" aria-hidden="true">#</a> 9.2.2 以太网传输介质与拓扑结构的发展</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/5jUImetA.png" alt="1619959309416" loading="lazy"></p>
<h3 id="_9-2-3-10-base-t以太网" tabindex="-1"><a class="header-anchor" href="#_9-2-3-10-base-t以太网" aria-hidden="true">#</a> 9.2.3 10 BASE-T以太网</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/wuSAM4vf.png" alt="1619959436846" loading="lazy"></p>
<h3 id="_9-2-4-适配器与mac地址" tabindex="-1"><a class="header-anchor" href="#_9-2-4-适配器与mac地址" aria-hidden="true">#</a> 9.2.4 适配器与MAC地址</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/t8GE799m.png" alt="1619960565378" loading="lazy"></p>
<h3 id="_9-2-5-以太网mac帧" tabindex="-1"><a class="header-anchor" href="#_9-2-5-以太网mac帧" aria-hidden="true">#</a> 9.2.5 以太网MAC帧</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/uYUBod7d.png" alt="1619960820896" loading="lazy"></p>
<h3 id="_9-2-6-高速以太网" tabindex="-1"><a class="header-anchor" href="#_9-2-6-高速以太网" aria-hidden="true">#</a> 9.2.6 高速以太网</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/VgDG1aU6.png" alt="1619961024138" loading="lazy"></p>
<h2 id="_9-3-ieee-802-11-无限局域网" tabindex="-1"><a class="header-anchor" href="#_9-3-ieee-802-11-无限局域网" aria-hidden="true">#</a> 9.3 IEEE 802.11 无限局域网</h2>
<h3 id="_9-3-1-ieee-802-11" tabindex="-1"><a class="header-anchor" href="#_9-3-1-ieee-802-11" aria-hidden="true">#</a> 9.3.1 IEEE 802.11</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/npd1uqyg.png" alt="1620007437899" loading="lazy"></p>
<h3 id="_9-3-2-802-11的mac帧头格式" tabindex="-1"><a class="header-anchor" href="#_9-3-2-802-11的mac帧头格式" aria-hidden="true">#</a> 9.3.2 802.11的MAC帧头格式</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/UpiAK3ji.png" alt="1620008118588" loading="lazy"></p>
<p>【四种格式比对】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/UjPtwLrx.png" alt="1620008196895" loading="lazy"></p>
<h3 id="_9-3-3-无线局域网分类" tabindex="-1"><a class="header-anchor" href="#_9-3-3-无线局域网分类" aria-hidden="true">#</a> 9.3.3 无线局域网分类</h3>
<h4 id="_9-3-3-1-有固定基础设施的无线局域网" tabindex="-1"><a class="header-anchor" href="#_9-3-3-1-有固定基础设施的无线局域网" aria-hidden="true">#</a> 9.3.3.1 有固定基础设施的无线局域网</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/1rQNi3LA.png" alt="1620009505234" loading="lazy"></p>
<h4 id="_9-3-3-2-无固定基础设施无线局域网的自组织网络" tabindex="-1"><a class="header-anchor" href="#_9-3-3-2-无固定基础设施无线局域网的自组织网络" aria-hidden="true">#</a> 9.3.3.2 无固定基础设施无线局域网的自组织网络</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/yJPDDQDP.png" alt="1620009688627" loading="lazy"></p>
<h1 id="_10-ppp协议与hdlc协议" tabindex="-1"><a class="header-anchor" href="#_10-ppp协议与hdlc协议" aria-hidden="true">#</a> 10. PPP协议与HDLC协议</h1>
<h2 id="_10-1-广域网" tabindex="-1"><a class="header-anchor" href="#_10-1-广域网" aria-hidden="true">#</a> 10.1 广域网</h2>
<p><code v-pre>广域网强调资源共享，局域网强调数据传输!</code></p>
<p><img src="https://img1.imgtp.com/2022/07/28/Axn8takG.png" alt="1620011296521" loading="lazy"></p>
<h2 id="_10-2-ppp协议" tabindex="-1"><a class="header-anchor" href="#_10-2-ppp协议" aria-hidden="true">#</a> 10.2 PPP协议</h2>
<h3 id="_10-2-1-特点" tabindex="-1"><a class="header-anchor" href="#_10-2-1-特点" aria-hidden="true">#</a> 10.2.1 特点</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/rrgybmeq.png" alt="1620012497320" loading="lazy"></p>
<h3 id="_10-2-2-需满足的要求" tabindex="-1"><a class="header-anchor" href="#_10-2-2-需满足的要求" aria-hidden="true">#</a> 10.2.2 需满足的要求</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/yy0ELwvb.png" alt="1620012586010" loading="lazy"></p>
<h3 id="_10-2-3-无需满足的要求" tabindex="-1"><a class="header-anchor" href="#_10-2-3-无需满足的要求" aria-hidden="true">#</a> 10.2.3 无需满足的要求</h3>
<ul>
<li>无需纠错</li>
<li>无需流量控制</li>
<li>无需序号</li>
<li>不支持多点线路</li>
</ul>
<h3 id="_10-2-4-三个组成部分" tabindex="-1"><a class="header-anchor" href="#_10-2-4-三个组成部分" aria-hidden="true">#</a> 10.2.4 三个组成部分</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/2Gs1uX7F.png" alt="1620012749488" loading="lazy"></p>
<h3 id="_10-2-5-状态图" tabindex="-1"><a class="header-anchor" href="#_10-2-5-状态图" aria-hidden="true">#</a> 10.2.5 状态图</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/rfhQvI0k.png" alt="1620012785545" loading="lazy"></p>
<h3 id="_10-2-6-帧格式" tabindex="-1"><a class="header-anchor" href="#_10-2-6-帧格式" aria-hidden="true">#</a> 10.2.6 帧格式</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/UoT2IJJt.png" alt="1620013309936" loading="lazy"></p>
<h2 id="_10-3-hdlc协议" tabindex="-1"><a class="header-anchor" href="#_10-3-hdlc协议" aria-hidden="true">#</a> 10.3 HDLC协议</h2>
<h3 id="_10-3-1-简介" tabindex="-1"><a class="header-anchor" href="#_10-3-1-简介" aria-hidden="true">#</a> 10.3.1 简介</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/wkOLN1bO.png" alt="1620013506100" loading="lazy"></p>
<h3 id="_10-3-2-hdlc的站" tabindex="-1"><a class="header-anchor" href="#_10-3-2-hdlc的站" aria-hidden="true">#</a> 10.3.2 HDLC的站</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/290C5hUw.png" alt="1620013566668" loading="lazy"></p>
<h3 id="_10-3-3-帧格式" tabindex="-1"><a class="header-anchor" href="#_10-3-3-帧格式" aria-hidden="true">#</a> 10.3.3 帧格式</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/GlcRIomH.png" alt="1620013640534" loading="lazy"></p>
<h2 id="_10-4-ppp协议与hdlc协议对比" tabindex="-1"><a class="header-anchor" href="#_10-4-ppp协议与hdlc协议对比" aria-hidden="true">#</a> 10.4 PPP协议与HDLC协议对比</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/DVJk7OPR.png" alt="1620013760861" loading="lazy"></p>
<h1 id="_11-链路层设备" tabindex="-1"><a class="header-anchor" href="#_11-链路层设备" aria-hidden="true">#</a> 11. 链路层设备</h1>
<h2 id="_11-1-物理层扩展以太网" tabindex="-1"><a class="header-anchor" href="#_11-1-物理层扩展以太网" aria-hidden="true">#</a> 11.1 物理层扩展以太网</h2>
<p><code v-pre>主机与集线器之间的距离超过100m后，失帧会变得非常严重</code>：</p>
<p><img src="https://img1.imgtp.com/2022/07/28/E6INBWk4.png" alt="1620015216932" loading="lazy"></p>
<p><code v-pre>为了实现远距离通信，需要扩展以太网</code>：</p>
<ol>
<li>把物理连接线路改为光纤</li>
</ol>
<p><img src="https://img1.imgtp.com/2022/07/28/qlBYZuFH.png" alt="1620015337074" loading="lazy"></p>
<ol start="2">
<li>使用主干集线器</li>
</ol>
<p><img src="https://img1.imgtp.com/2022/07/28/3BDzESAt.png" alt="1620015417568" loading="lazy"></p>
<p>​	可以形成更大的冲突域</p>
<p><img src="https://img1.imgtp.com/2022/07/28/bk0NF8b9.png" alt="1620015462454" loading="lazy"></p>
<blockquote>
<p>缺点：</p>
<ol>
<li>发送冲突概率变高</li>
<li>链路通信效率降低</li>
</ol>
</blockquote>
<h2 id="_11-2-链路层扩展以太网" tabindex="-1"><a class="header-anchor" href="#_11-2-链路层扩展以太网" aria-hidden="true">#</a> 11.2 链路层扩展以太网</h2>
<h3 id="_11-2-1-网桥" tabindex="-1"><a class="header-anchor" href="#_11-2-1-网桥" aria-hidden="true">#</a> 11.2.1 网桥</h3>
<h4 id="_11-2-1-1-简介" tabindex="-1"><a class="header-anchor" href="#_11-2-1-1-简介" aria-hidden="true">#</a> 11.2.1.1 简介</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/JIe858uE.png" alt="1620030615662" loading="lazy"></p>
<h4 id="_11-2-1-2-透明网桥" tabindex="-1"><a class="header-anchor" href="#_11-2-1-2-透明网桥" aria-hidden="true">#</a> 11.2.1.2 透明网桥</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/SXlgwhGr.png" alt="1620030828715" loading="lazy"></p>
<h4 id="_11-2-1-3-源路由网桥" tabindex="-1"><a class="header-anchor" href="#_11-2-1-3-源路由网桥" aria-hidden="true">#</a> 11.2.1.3 源路由网桥</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/Dj3XxFzN.png" alt="1620030880725" loading="lazy"></p>
<h3 id="_11-2-2-以太网交换机【多接口网桥】" tabindex="-1"><a class="header-anchor" href="#_11-2-2-以太网交换机【多接口网桥】" aria-hidden="true">#</a> 11.2.2 以太网交换机【多接口网桥】</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/4Gu8TH0k.png" alt="1620030988533" loading="lazy"></p>
<blockquote>
<p>以太网交换机的两种交换方式：</p>
<p><img src="https://img1.imgtp.com/2022/07/28/nR1Jb1fm.png" alt="1620031081344" loading="lazy"></p>
</blockquote>
<h2 id="_11-3-冲突域和广播域" tabindex="-1"><a class="header-anchor" href="#_11-3-冲突域和广播域" aria-hidden="true">#</a> 11.3 冲突域和广播域</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/QELKodlL.png" alt="1620031200957" loading="lazy"></p>
<p>【例题】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/cWqHB5iR.png" alt="1620031265341" loading="lazy"></p>
</div></template>
