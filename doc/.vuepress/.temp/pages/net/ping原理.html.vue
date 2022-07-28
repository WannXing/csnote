<template><div><h2 id="_1-网际控制报文协议icmp" tabindex="-1"><a class="header-anchor" href="#_1-网际控制报文协议icmp" aria-hidden="true">#</a> 1. 网际控制报文协议ICMP</h2>
<h3 id="_1-1-简介" tabindex="-1"><a class="header-anchor" href="#_1-1-简介" aria-hidden="true">#</a> 1.1 简介</h3>
<blockquote>
<ul>
<li>
<p>有效转发IP报文和提高交付成功的机会</p>
</li>
<li>
<p>ICMP报文作为IP报文的数据部分被发送出去，属于网络层协议</p>
</li>
<li>
<p>ICMP报文格式：</p>
<p><img src="https://img1.imgtp.com/2022/07/28/Dyo5bN0j.png" alt="1627008915721" loading="lazy"></p>
</li>
<li>
<p>ICMP允许主机或路由器报告差错情况和提供有关异常情况的报告</p>
</li>
</ul>
</blockquote>
<h3 id="_1-2-种类" tabindex="-1"><a class="header-anchor" href="#_1-2-种类" aria-hidden="true">#</a> 1.2 种类</h3>
<blockquote>
<ul>
<li>
<p>ICMP报文分为两种：ICMP差错报告报文 和 ICMP询问报文</p>
</li>
<li>
<p>几种常用的报文类型：</p>
<p><img src="https://img1.imgtp.com/2022/07/28/Ikwhkiu5.png" alt="1627009447295" loading="lazy"></p>
</li>
<li>
<p><code v-pre>代码字段</code>：进一步区分某种类型的几种不同的情况</p>
</li>
<li>
<p><code v-pre>检验和字段</code>：检验整个报文</p>
</li>
<li>
<p>IP报文首部的检验和字段，并不检验数据部分，因此，经过IP报文传输并不保证ICMP报文没有差错</p>
</li>
</ul>
</blockquote>
<h3 id="_1-3-差错报告报文" tabindex="-1"><a class="header-anchor" href="#_1-3-差错报告报文" aria-hidden="true">#</a> 1.3 差错报告报文</h3>
<blockquote>
<ul>
<li>终点不可达：当路由器或者主机不能交付数据报时就向源点发送终点不可达报文</li>
<li>时间超时：
<ul>
<li>当路由器或主机收到生存时间为 0 的数据报时，会丢弃数据报并向源点发送时间超时报文</li>
<li>当终点在规定时间内不能接收到全部的数据报片时，会丢弃所有已收到的数据报片并向源点发送时间超时报文</li>
</ul>
</li>
<li>参数问题：当路由器或者主机收到的数据报的首部中有的字段不正确时，丢弃数据报并向源点发送参数问题报文</li>
<li>改变路由【重定向】：路由器把改变路由报文发送给主机，让主机知道下一次应该将数据报发送给另外的路由器【可通过更好的路由】</li>
</ul>
</blockquote>
<h3 id="_1-4-不应该发送icmp差错报告报文的情况" tabindex="-1"><a class="header-anchor" href="#_1-4-不应该发送icmp差错报告报文的情况" aria-hidden="true">#</a> 1.4 不应该发送ICMP差错报告报文的情况</h3>
<blockquote>
<ul>
<li>对ICMP差错报告报文，不再发送ICMP差错报告报文</li>
<li>对第一个数据报片的所有后续报片，都不发送ICMP差错报告报文</li>
<li>对具有多播地址的数据报，都不发送ICMP差错报告报文</li>
<li>对具有特殊地址的数据报【127.0.0 或 0.0.0.0】，不发送ICMP差错报告报文</li>
</ul>
</blockquote>
<h3 id="_1-5询问报文" tabindex="-1"><a class="header-anchor" href="#_1-5询问报文" aria-hidden="true">#</a> 1.5询问报文</h3>
<blockquote>
<ul>
<li>回送请求和回答报文：用来测试目的站是否可达及了解其相关信息。ICMP回送请求报文由主机或者路由器向特定目的主机发出的询问，收到此报文的木器主机必须给源主机或路由器发送ICMP回送回答报文。</li>
<li>时间戳请求和回答报文：用于时钟同步和时间测量。ICMP时间戳请求报文是请求某台主机或路由器回答当前的日期和时间。在ICMP时间戳回答报文中有一个32位的字段，其中写入的整数代表从1900年1月1日到当前时刻一共有多少秒。</li>
</ul>
</blockquote>
<h2 id="_2-icmp的应用-ping" tabindex="-1"><a class="header-anchor" href="#_2-icmp的应用-ping" aria-hidden="true">#</a> 2. ICMP的应用-PING</h2>
<blockquote>
<ul>
<li>ICMP的一个重要的应用就是<code v-pre>分组网间探测PING</code>，用来测试两台主机之间的连通性。</li>
<li>PING使用了ICMP回送请求和回答报文，是应用层直接使用网络层ICMP的一个例子，没有通过传输层的TCP或UDP。</li>
</ul>
</blockquote>
<h2 id="_3-ping测试" tabindex="-1"><a class="header-anchor" href="#_3-ping测试" aria-hidden="true">#</a> 3. PING测试</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/cJcVbWqw.png" alt="1627019331279" loading="lazy"></p>
<blockquote>
<ul>
<li>一共发送四个ICMP回送请求报文</li>
<li>由于往返的ICMP报文上都有时间戳，因此很容易计算出往返时间</li>
</ul>
</blockquote>
<h2 id="_4-拓展" tabindex="-1"><a class="header-anchor" href="#_4-拓展" aria-hidden="true">#</a> 4. 拓展</h2>
<h3 id="_4-1-tracert" tabindex="-1"><a class="header-anchor" href="#_4-1-tracert" aria-hidden="true">#</a> 4.1 tracert</h3>
<blockquote>
<ul>
<li>ICMP的另外一个应用</li>
<li>用来跟踪一个分组从源点到终点的路径</li>
<li>tracert命令从源主机向目的主机发送一连串的IP数据报，数据报中封装的是无法交付的UDP用户数据报【使用了非法的端口号】。</li>
<li>第一个数据报P１的生存时间TTL设置为1，当P１到达路径上的第一个路由器R１时，路由器R１先收下它，接着把TTL值减去1。由于TTL等于0，R１把P１丢弃，并向源主机发送一个<strong>ICMP时间超时差错报告报文</strong></li>
<li>源主机接着发送第二个数据报P２，并把TTL设置为２.当P2到达R２时，TTL为0.　此时发回<strong>ICMP时间超时差错报文</strong>。</li>
<li>如此继续下去，直到最后一个数据报到达目的主机，TTL为1，主机不转发数据报也不把TTL减1。但因IP数据报中封装的是无法交付的运输层UDP报文，因此目的主机要向源主机发送<strong>ICMP终点不可达差错报文</strong></li>
<li>如此，源主机达到了自己的目的，因为这些路由器和最后的目的主机发来的ICMP报文正好给出了源主机想知道的路由信息－－到达目的主机所经过的路由器的IP地址，以及到达其中的每一个路由器的往返时间。</li>
</ul>
</blockquote>
<h3 id="_4-2-测试" tabindex="-1"><a class="header-anchor" href="#_4-2-测试" aria-hidden="true">#</a> 4.2 测试</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/rGLn6ZU2.png" alt="1627020623109" loading="lazy"></p>
<blockquote>
<ul>
<li>图中每一行有三个时间出现，是因为对应与每一个TTL值，源主机要发送三次相同的IP数据报</li>
<li>原则上，IP数据报经过的路由器越多，所花费的时间也会越多。但有时正好相反，这是因为互联网的拥塞程度随时都在变化，也很难预料到。</li>
<li>因此完全有可能经过更多的路由器反而花费的时间更少</li>
</ul>
</blockquote>
</div></template>
