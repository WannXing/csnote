<template><div><h1 id="_1-传输层概述" tabindex="-1"><a class="header-anchor" href="#_1-传输层概述" aria-hidden="true">#</a> 1. 传输层概述</h1>
<h2 id="_1-1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-介绍" aria-hidden="true">#</a> 1.1 介绍</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/r4HJRD95.png" alt="1620120717192" loading="lazy"></p>
<h2 id="_1-2-传输层的两个协议" tabindex="-1"><a class="header-anchor" href="#_1-2-传输层的两个协议" aria-hidden="true">#</a> 1.2 传输层的两个协议</h2>
<ul>
<li>
<p><code v-pre>面向连接的传输控制协议TCP</code>：传送数据之前必须建立连接，数据传送结束后要释放连接。不提供广播或多播服务。由于TCP要提供可靠的面向连接的传输服务，因此不可避免增加了许多开销：<strong>确认、流量控制、计时器及连接管理等</strong>。【可靠、面向连接、时延大、适用于大文件】</p>
</li>
<li>
<p><code v-pre>无连接的用户数据报协议UDP</code>：传送数据之前不需要建立连接，收到UDP报文后也不需要给出任何确认。【不可靠、无连接、时延小、适用于小文件】</p>
</li>
</ul>
<h2 id="_1-3-传输层的寻址与端口" tabindex="-1"><a class="header-anchor" href="#_1-3-传输层的寻址与端口" aria-hidden="true">#</a> 1.3 传输层的寻址与端口</h2>
<p><code v-pre>复用</code>：应用层所有的应用进程都可以通过传输层再传输到网络层</p>
<p><code v-pre>分用</code>：传输层从网络层收到数据后交付给指明的应用进程</p>
<p><code v-pre>端口【逻辑端口/软件端口】</code>：是传输层的SAP，标识主机的应用进程</p>
<blockquote>
<p>端口号只有本地意义，在因特网中不同计算机的相同端口号是没有联系的</p>
<p>端口号长度为16bit，能表示65536个不同的端口号</p>
<p><img src="https://img1.imgtp.com/2022/07/28/u8ZviY3L.png" alt="1620185015270" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/5DDlOMqO.png" alt="1620185122751" loading="lazy"></p>
</blockquote>
<h1 id="_2-udp协议" tabindex="-1"><a class="header-anchor" href="#_2-udp协议" aria-hidden="true">#</a> 2. UDP协议</h1>
<p><code v-pre>用户数据报协议</code></p>
<h2 id="_2-1-udp概述" tabindex="-1"><a class="header-anchor" href="#_2-1-udp概述" aria-hidden="true">#</a> 2.1 UDP概述</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/HUARYW1U.png" alt="1620185445882" loading="lazy"></p>
<h2 id="_2-2-udp首部格式" tabindex="-1"><a class="header-anchor" href="#_2-2-udp首部格式" aria-hidden="true">#</a> 2.2 UDP首部格式</h2>
<h3 id="_2-2-1-图解" tabindex="-1"><a class="header-anchor" href="#_2-2-1-图解" aria-hidden="true">#</a> 2.2.1 图解</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/9ko49TrP.png" alt="1620185567062" loading="lazy"></p>
<h3 id="_2-2-2-udp校验" tabindex="-1"><a class="header-anchor" href="#_2-2-2-udp校验" aria-hidden="true">#</a> 2.2.2 UDP校验</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/nZPgcypv.png" alt="1620185689108" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/Xb8EyTJz.png" alt="1620185813654" loading="lazy"></p>
<h1 id="_3-tcp协议" tabindex="-1"><a class="header-anchor" href="#_3-tcp协议" aria-hidden="true">#</a> 3. TCP协议</h1>
<h2 id="_3-1-tcp协议特点" tabindex="-1"><a class="header-anchor" href="#_3-1-tcp协议特点" aria-hidden="true">#</a> 3.1 TCP协议特点</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/ATvNVWBv.png" alt="1620186037358" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/9Qo5jvPZ.png" alt="1620186079368" loading="lazy"></p>
<h2 id="_3-2-tcp报文段首部格式" tabindex="-1"><a class="header-anchor" href="#_3-2-tcp报文段首部格式" aria-hidden="true">#</a> 3.2 TCP报文段首部格式</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/maC3kqKb.png" alt="1620186277156" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/jObNKOv6.png" alt="1620186494012" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/jLFEv8A5.png" alt="1620186632531" loading="lazy"></p>
<h2 id="_3-3-tcp连接管理" tabindex="-1"><a class="header-anchor" href="#_3-3-tcp连接管理" aria-hidden="true">#</a> 3.3 TCP连接管理</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/Pzj1m8rZ.png" alt="1620186721397" loading="lazy"></p>
<h3 id="_3-3-1-tcp的连接建立" tabindex="-1"><a class="header-anchor" href="#_3-3-1-tcp的连接建立" aria-hidden="true">#</a> 3.3.1 TCP的连接建立</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/ir9CUycq.png" alt="1620187179969" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/9TVFf1Uq.png" alt="1620186954859" loading="lazy"></p>
<h3 id="_3-3-2-syn洪泛攻击" tabindex="-1"><a class="header-anchor" href="#_3-3-2-syn洪泛攻击" aria-hidden="true">#</a> 3.3.2 SYN洪泛攻击</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/BdbBlGZi.png" alt="1620187035696" loading="lazy"></p>
<p><a href="https://baike.baidu.com/item/syn%20cookie/6898884?fr=aladdin" target="_blank" rel="noopener noreferrer">解决办法：SYN cookie<ExternalLinkIcon/></a></p>
<h3 id="_3-3-3-tcp连接的释放" tabindex="-1"><a class="header-anchor" href="#_3-3-3-tcp连接的释放" aria-hidden="true">#</a> 3.3.3 TCP连接的释放</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/r0h1pahA.png" alt="1620187199770" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/V8WOZemI.png" alt="1620187361538" loading="lazy"></p>
<h3 id="_3-3-4-tcp可靠传输" tabindex="-1"><a class="header-anchor" href="#_3-3-4-tcp可靠传输" aria-hidden="true">#</a> 3.3.4 TCP可靠传输</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/6w3sOLxO.png" alt="1620187438893" loading="lazy"></p>
<h4 id="_3-3-4-1-校验" tabindex="-1"><a class="header-anchor" href="#_3-3-4-1-校验" aria-hidden="true">#</a> 3.3.4.1 校验</h4>
<p>​	与UDP校验一样，增加伪首部</p>
<h4 id="_3-3-4-2-序号" tabindex="-1"><a class="header-anchor" href="#_3-3-4-2-序号" aria-hidden="true">#</a> 3.3.4.2 序号</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/PhaCJwqE.png" alt="1620187536776" loading="lazy"></p>
<h4 id="_3-3-4-3-确认" tabindex="-1"><a class="header-anchor" href="#_3-3-4-3-确认" aria-hidden="true">#</a> 3.3.4.3 确认</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/WjDk1xIc.png" alt="1620187671219" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/T43YULSL.png" alt="1620187731854" loading="lazy"></p>
<h4 id="_3-3-4-4-重传" tabindex="-1"><a class="header-anchor" href="#_3-3-4-4-重传" aria-hidden="true">#</a> 3.3.4.4 重传</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/divpMm5m.png" alt="1620187906786" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/V2xlG5QB.png" alt="1620188033561" loading="lazy"></p>
<h3 id="_3-3-5-tcp流量控制" tabindex="-1"><a class="header-anchor" href="#_3-3-5-tcp流量控制" aria-hidden="true">#</a> 3.3.5 TCP流量控制</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/VxdeMwwe.png" alt="1620188382416" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/Eee6WIWy.png" alt="1620188736735" loading="lazy"></p>
<h3 id="_3-3-6-tcp拥塞控制" tabindex="-1"><a class="header-anchor" href="#_3-3-6-tcp拥塞控制" aria-hidden="true">#</a> 3.3.6 TCP拥塞控制</h3>
<h4 id="_3-3-6-1-介绍" tabindex="-1"><a class="header-anchor" href="#_3-3-6-1-介绍" aria-hidden="true">#</a> 3.3.6.1 介绍</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/1urhOZrK.png" alt="1620188867199" loading="lazy"></p>
<h4 id="_3-3-6-2-四种算法" tabindex="-1"><a class="header-anchor" href="#_3-3-6-2-四种算法" aria-hidden="true">#</a> 3.3.6.2 四种算法</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/JnD1w5jA.png" alt="1620188978729" loading="lazy"></p>
<h5 id="慢开始和拥塞避免" tabindex="-1"><a class="header-anchor" href="#慢开始和拥塞避免" aria-hidden="true">#</a> 慢开始和拥塞避免</h5>
<p><img src="https://img1.imgtp.com/2022/07/28/CGAXhX5e.png" alt="1620189261890" loading="lazy"></p>
<h5 id="快重传和快恢复" tabindex="-1"><a class="header-anchor" href="#快重传和快恢复" aria-hidden="true">#</a> 快重传和快恢复</h5>
<p><img src="https://img1.imgtp.com/2022/07/28/9ZnypgtE.png" alt="1620189911598" loading="lazy"></p>
</div></template>
