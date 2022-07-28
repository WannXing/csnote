<template><div><h1 id="_1-网络层功能概述" tabindex="-1"><a class="header-anchor" href="#_1-网络层功能概述" aria-hidden="true">#</a> 1. 网络层功能概述</h1>
<p>​	主要任务是把<code v-pre>分组</code>从源端传到目的端，为分组交换网上的不同主机提供提供通信服务。网络层传输单位是<code v-pre>数据报</code>。</p>
<blockquote>
<p><code v-pre>功能一</code>：路由选择与分组转发【最佳路径】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/SCtIGb30.png" alt="1620032016813" loading="lazy"></p>
<p><code v-pre>功能二</code>：异构网络互连【依靠<code v-pre>路由器</code>把 wifi、4G、校园网等网络互连，构成更大的网络】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/X0nIMeJx.png" alt="1620032046620" loading="lazy"></p>
<p><code v-pre>功能三</code>：拥塞控制</p>
<p><img src="https://img1.imgtp.com/2022/07/28/vRartHM2.png" alt="1620032162532" loading="lazy"></p>
</blockquote>
<h1 id="_2-数据交换方式" tabindex="-1"><a class="header-anchor" href="#_2-数据交换方式" aria-hidden="true">#</a> 2. 数据交换方式</h1>
<h2 id="_2-1-进行数据交换的原因" tabindex="-1"><a class="header-anchor" href="#_2-1-进行数据交换的原因" aria-hidden="true">#</a> 2.1 进行数据交换的原因</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/mnHJzVbJ.png" alt="1620032447017" loading="lazy"></p>
<blockquote>
<p>图一：实现主机间通信，需要大量通信链路</p>
<p>图二：所需通信链路减少了，但是无法支撑远距离通信以及大量主机接入的通信</p>
<p>图三：能很好的解决上述问题</p>
</blockquote>
<h2 id="_2-2-电路交换" tabindex="-1"><a class="header-anchor" href="#_2-2-电路交换" aria-hidden="true">#</a> 2.2 电路交换</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/MUDXXwqE.png" alt="1620032800640" loading="lazy"></p>
<h2 id="_2-3-报文交换" tabindex="-1"><a class="header-anchor" href="#_2-3-报文交换" aria-hidden="true">#</a> 2.3 报文交换</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/jOpwWNaO.png" alt="1620032967638" loading="lazy"></p>
<h2 id="_2-4-分组交换" tabindex="-1"><a class="header-anchor" href="#_2-4-分组交换" aria-hidden="true">#</a> 2.4 分组交换</h2>
<h3 id="_2-4-1-介绍" tabindex="-1"><a class="header-anchor" href="#_2-4-1-介绍" aria-hidden="true">#</a> 2.4.1 介绍</h3>
<p><code v-pre>分组</code>：把大的数据块(<code v-pre>报文</code>)分割成许多小的数据块</p>
<p><img src="https://img1.imgtp.com/2022/07/28/BjjpbG13.png" alt="1620033191510" loading="lazy"></p>
<h3 id="_2-4-1-数据报方式-虚电路方式" tabindex="-1"><a class="header-anchor" href="#_2-4-1-数据报方式-虚电路方式" aria-hidden="true">#</a> 2.4.1 数据报方式&amp;虚电路方式</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/9YzRV4NE.png" alt="1620033932759" loading="lazy"></p>
<h4 id="_2-4-1-1-数据报介绍【因特网在使用】" tabindex="-1"><a class="header-anchor" href="#_2-4-1-1-数据报介绍【因特网在使用】" aria-hidden="true">#</a> 2.4.1.1 数据报介绍【因特网在使用】</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/6nQHRR8b.png" alt="1620039524617" loading="lazy"></p>
<h4 id="_2-4-1-2-虚电路介绍" tabindex="-1"><a class="header-anchor" href="#_2-4-1-2-虚电路介绍" aria-hidden="true">#</a> 2.4.1.2 虚电路介绍</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/iBEioBJf.png" alt="1620039774165" loading="lazy"></p>
<h4 id="_2-4-1-3-数据报-虚电路" tabindex="-1"><a class="header-anchor" href="#_2-4-1-3-数据报-虚电路" aria-hidden="true">#</a> 2.4.1.3 数据报 &amp; 虚电路</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/99pev9xP.png" alt="1620039822963" loading="lazy"></p>
<h3 id="_2-4-2-几种传输单元对比" tabindex="-1"><a class="header-anchor" href="#_2-4-2-几种传输单元对比" aria-hidden="true">#</a> 2.4.2 几种传输单元对比</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/oceDuEUm.png" alt="1620039321385" loading="lazy"></p>
<h2 id="_2-5-报文交换-分组交换" tabindex="-1"><a class="header-anchor" href="#_2-5-报文交换-分组交换" aria-hidden="true">#</a> 2.5 报文交换 &amp; 分组交换</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/UF5fNzlr.png" alt="1620033502647" loading="lazy"></p>
<h2 id="_2-6-小结" tabindex="-1"><a class="header-anchor" href="#_2-6-小结" aria-hidden="true">#</a> 2.6 小结</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/2zsrlOYx.png" alt="1620033627957" loading="lazy"></p>
<h1 id="_3-ip数据报" tabindex="-1"><a class="header-anchor" href="#_3-ip数据报" aria-hidden="true">#</a> 3. IP数据报</h1>
<h2 id="_3-1-tcp-ip协议栈构造" tabindex="-1"><a class="header-anchor" href="#_3-1-tcp-ip协议栈构造" aria-hidden="true">#</a> 3.1 TCP/IP协议栈构造</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/WT8CmQOs.png" alt="1620040158374" loading="lazy"></p>
<h2 id="_3-2-ip数据报格式" tabindex="-1"><a class="header-anchor" href="#_3-2-ip数据报格式" aria-hidden="true">#</a> 3.2 IP数据报格式</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/sGNITUaA.png" alt="1620040260602" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/CV1aiLA6.png" alt="1620040544306" loading="lazy"></p>
<blockquote>
<p>协议字段：TCP ==&gt; 6  UDP ==&gt; 17</p>
</blockquote>
<h2 id="_3-3-ip数据报分片" tabindex="-1"><a class="header-anchor" href="#_3-3-ip数据报分片" aria-hidden="true">#</a> 3.3 IP数据报分片</h2>
<h3 id="_3-3-1-最大传输单元mtu" tabindex="-1"><a class="header-anchor" href="#_3-3-1-最大传输单元mtu" aria-hidden="true">#</a> 3.3.1 最大传输单元MTU</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/iTi6BnqH.png" alt="1620040804722" loading="lazy"></p>
<h3 id="_3-3-2-分片所涉及的首部字段" tabindex="-1"><a class="header-anchor" href="#_3-3-2-分片所涉及的首部字段" aria-hidden="true">#</a> 3.3.2 分片所涉及的首部字段</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/LTL2q8FC.png" alt="1620041115317" loading="lazy"></p>
<p><strong><code v-pre>【例题】</code></strong></p>
<p><img src="https://img1.imgtp.com/2022/07/28/F6tt5GZC.png" alt="1620041294392" loading="lazy"></p>
<h3 id="_3-3-3-部分字段单位" tabindex="-1"><a class="header-anchor" href="#_3-3-3-部分字段单位" aria-hidden="true">#</a> 3.3.3 部分字段单位</h3>
<p><code v-pre>一种八片首饰</code>【总长度单位是1Byte、片偏移单位是8Byte、首部长度单位是4Byte】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/IvKKsLXh.png" alt="1620041410636" loading="lazy"></p>
<h1 id="_4-ipv4地址" tabindex="-1"><a class="header-anchor" href="#_4-ipv4地址" aria-hidden="true">#</a> 4. IPv4地址</h1>
<h2 id="_4-1-ip编址历史" tabindex="-1"><a class="header-anchor" href="#_4-1-ip编址历史" aria-hidden="true">#</a> 4.1 IP编址历史</h2>
<ul>
<li>分类的IP地址</li>
<li>子网的划分</li>
<li>构成超网【无分类编址方法】</li>
</ul>
<h2 id="_4-2-分类的ip地址" tabindex="-1"><a class="header-anchor" href="#_4-2-分类的ip地址" aria-hidden="true">#</a> 4.2 分类的IP地址</h2>
<h3 id="_4-2-1-ip地址介绍" tabindex="-1"><a class="header-anchor" href="#_4-2-1-ip地址介绍" aria-hidden="true">#</a> 4.2.1 IP地址介绍</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/9lJg6mNz.png" alt="1620041933771" loading="lazy"></p>
<h3 id="_4-2-2-互联网中的ip地址" tabindex="-1"><a class="header-anchor" href="#_4-2-2-互联网中的ip地址" aria-hidden="true">#</a> 4.2.2 互联网中的IP地址</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/a3ccN6ly.png" alt="1620042146733" loading="lazy"></p>
<h3 id="_4-2-3-分类方法" tabindex="-1"><a class="header-anchor" href="#_4-2-3-分类方法" aria-hidden="true">#</a> 4.2.3 分类方法</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/q6Nh3kE0.png" alt="1620042237647" loading="lazy"></p>
<h3 id="_4-2-4-特殊的ip地址" tabindex="-1"><a class="header-anchor" href="#_4-2-4-特殊的ip地址" aria-hidden="true">#</a> 4.2.4 特殊的IP地址</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/XpRYxgAn.png" alt="1620042415669" loading="lazy"></p>
<h3 id="_4-2-5-私有ip地址" tabindex="-1"><a class="header-anchor" href="#_4-2-5-私有ip地址" aria-hidden="true">#</a> 4.2.5 私有IP地址</h3>
<p><code v-pre>路由器对目的地址是私有IP地址的数据报一律不进行转发</code></p>
<p><img src="https://img1.imgtp.com/2022/07/28/1ffQFC0v.png" alt="1620042557072" loading="lazy"></p>
<h3 id="_4-2-6-各类ip地址可指派数" tabindex="-1"><a class="header-anchor" href="#_4-2-6-各类ip地址可指派数" aria-hidden="true">#</a> 4.2.6 各类IP地址可指派数</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/5aXCHkoZ.png" alt="1620042731303" loading="lazy"></p>
<h2 id="_4-3-网络地址转换【nat】" tabindex="-1"><a class="header-anchor" href="#_4-3-网络地址转换【nat】" aria-hidden="true">#</a> 4.3 网络地址转换【NAT】</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/ibuNbfkk.png" alt="1620043202996" loading="lazy"></p>
<h2 id="_4-4-子网划分与子网掩码" tabindex="-1"><a class="header-anchor" href="#_4-4-子网划分与子网掩码" aria-hidden="true">#</a> 4.4 子网划分与子网掩码</h2>
<h3 id="_4-4-1-分类ip地址的缺点" tabindex="-1"><a class="header-anchor" href="#_4-4-1-分类ip地址的缺点" aria-hidden="true">#</a> 4.4.1 分类IP地址的缺点</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/fIrJHYC4.png" alt="1620043390540" loading="lazy"></p>
<h3 id="_4-4-2-划分方法" tabindex="-1"><a class="header-anchor" href="#_4-4-2-划分方法" aria-hidden="true">#</a> 4.4.2 划分方法</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/KUiafdKh.png" alt="1620043485220" loading="lazy"></p>
<h3 id="_4-4-3-子网划分例子" tabindex="-1"><a class="header-anchor" href="#_4-4-3-子网划分例子" aria-hidden="true">#</a> 4.4.3 子网划分例子</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/KZfyzJNT.png" alt="1620045479394" loading="lazy"></p>
<h3 id="_4-4-4-子网掩码" tabindex="-1"><a class="header-anchor" href="#_4-4-4-子网掩码" aria-hidden="true">#</a> 4.4.4 子网掩码</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/BsuVEkHR.png" alt="1620045533257" loading="lazy"></p>
<p>【例题】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/iVoJN3Sn.png" alt="1620045567890" loading="lazy"></p>
<h3 id="_4-4-5-使用子网时分组的转发" tabindex="-1"><a class="header-anchor" href="#_4-4-5-使用子网时分组的转发" aria-hidden="true">#</a> 4.4.5 使用子网时分组的转发</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/KZ2AlHPA.png" alt="1620045624579" loading="lazy"></p>
<h2 id="_4-5-无分类编址cidr【构成超网】" tabindex="-1"><a class="header-anchor" href="#_4-5-无分类编址cidr【构成超网】" aria-hidden="true">#</a> 4.5 无分类编址CIDR【构成超网】</h2>
<h3 id="_4-5-1-介绍" tabindex="-1"><a class="header-anchor" href="#_4-5-1-介绍" aria-hidden="true">#</a> 4.5.1 介绍</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/JHemm2Du.png" alt="1620046014474" loading="lazy"></p>
<p>【例子】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/vkLcahUk.png" alt="1620046123481" loading="lazy"></p>
<h3 id="_4-5-2-构成超网" tabindex="-1"><a class="header-anchor" href="#_4-5-2-构成超网" aria-hidden="true">#</a> 4.5.2 构成超网</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/lljRr6n8.png" alt="1620046407311" loading="lazy"></p>
<h3 id="_4-5-3-最长前缀匹配" tabindex="-1"><a class="header-anchor" href="#_4-5-3-最长前缀匹配" aria-hidden="true">#</a> 4.5.3 最长前缀匹配</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/eWzu1TKa.png" alt="1620046567361" loading="lazy"></p>
<p>【习题】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/iCToP9hZ.png" alt="1620046655950" loading="lazy"></p>
<h1 id="_5-arp协议" tabindex="-1"><a class="header-anchor" href="#_5-arp协议" aria-hidden="true">#</a> 5. ARP协议</h1>
<h2 id="_5-1-介绍" tabindex="-1"><a class="header-anchor" href="#_5-1-介绍" aria-hidden="true">#</a> 5.1 介绍</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/hYYRdO0e.png" alt="1620047847800" loading="lazy"></p>
<h2 id="_5-2-发送数据的过程" tabindex="-1"><a class="header-anchor" href="#_5-2-发送数据的过程" aria-hidden="true">#</a> 5.2 发送数据的过程</h2>
<p>【同一局域网络内】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/0UAzK8nN.png" alt="1620047277112" loading="lazy"></p>
<p>【不同局域网之间-01】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/j9DZdV0h.png" alt="1620047594623" loading="lazy"></p>
<p>【不同局域网之间-02】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/ojvhuKXz.png" alt="1620047654045" loading="lazy"></p>
<h2 id="_5-3-例题" tabindex="-1"><a class="header-anchor" href="#_5-3-例题" aria-hidden="true">#</a> 5.3 例题</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/rCklfw6G.png" alt="1620047928771" loading="lazy"></p>
<h1 id="_6-dhcp协议" tabindex="-1"><a class="header-anchor" href="#_6-dhcp协议" aria-hidden="true">#</a> 6. DHCP协议</h1>
<h2 id="_6-1-主机如何获取ip地址" tabindex="-1"><a class="header-anchor" href="#_6-1-主机如何获取ip地址" aria-hidden="true">#</a> 6.1 主机如何获取IP地址</h2>
<ol>
<li>静态配置：【如，学校电脑室，由管理员手动配置， IP地址、子网掩码、默认网关】</li>
</ol>
<p><img src="https://img1.imgtp.com/2022/07/28/aZItKFVn.png" alt="1620094119921" loading="lazy"></p>
<ol start="2">
<li>动态配置【如，学校教室，人员流动大，手机、电脑等主机设备不固定】</li>
</ol>
<p><img src="https://img1.imgtp.com/2022/07/28/MVzAVc8n.png" alt="1620094215257" loading="lazy"></p>
<h2 id="_6-2-dhcp-介绍" tabindex="-1"><a class="header-anchor" href="#_6-2-dhcp-介绍" aria-hidden="true">#</a> 6.2 DHCP 介绍</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/PMItyn3v.png" alt="1620093810055" loading="lazy"></p>
<h1 id="_7-icmp协议" tabindex="-1"><a class="header-anchor" href="#_7-icmp协议" aria-hidden="true">#</a> 7. ICMP协议</h1>
<h2 id="_7-1-介绍" tabindex="-1"><a class="header-anchor" href="#_7-1-介绍" aria-hidden="true">#</a> 7.1 介绍</h2>
<p><code v-pre>网际控制报文协议</code></p>
<p><img src="https://img1.imgtp.com/2022/07/28/7sjfTsEp.png" alt="1620094727145" loading="lazy"></p>
<h2 id="_7-2-icmp差错报文" tabindex="-1"><a class="header-anchor" href="#_7-2-icmp差错报文" aria-hidden="true">#</a> 7.2 ICMP差错报文</h2>
<h3 id="_7-2-1-五种类型" tabindex="-1"><a class="header-anchor" href="#_7-2-1-五种类型" aria-hidden="true">#</a> 7.2.1 五种类型</h3>
<p><code v-pre>第二点的源点抑制已经弃用</code></p>
<p><img src="https://img1.imgtp.com/2022/07/28/7gVE1x1M.png" alt="1620095020658" loading="lazy"></p>
<h3 id="_7-2-2-icmp差错报文数据字段" tabindex="-1"><a class="header-anchor" href="#_7-2-2-icmp差错报文数据字段" aria-hidden="true">#</a> 7.2.2 ICMP差错报文数据字段</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/fzkBdwKq.png" alt="1620095294238" loading="lazy"></p>
<h3 id="_7-2-3-不发送icmp差错报文的情况" tabindex="-1"><a class="header-anchor" href="#_7-2-3-不发送icmp差错报文的情况" aria-hidden="true">#</a> 7.2.3 不发送ICMP差错报文的情况</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/i4Ytd07N.png" alt="1620095373046" loading="lazy"></p>
<h2 id="_7-3-icmp询问报文" tabindex="-1"><a class="header-anchor" href="#_7-3-icmp询问报文" aria-hidden="true">#</a> 7.3 ICMP询问报文</h2>
<p><code v-pre>第三和四种报文已经弃用</code></p>
<p><img src="https://img1.imgtp.com/2022/07/28/1ZVPabWP.png" alt="1620095569009" loading="lazy"></p>
<h2 id="_7-4-icmp应用" tabindex="-1"><a class="header-anchor" href="#_7-4-icmp应用" aria-hidden="true">#</a> 7.4 ICMP应用</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/v0xQR5WU.png" alt="1620095739574" loading="lazy"></p>
<h1 id="_8-ipv6" tabindex="-1"><a class="header-anchor" href="#_8-ipv6" aria-hidden="true">#</a> 8. IPv6</h1>
<h2 id="_8-1-为什么使用ipv6" tabindex="-1"><a class="header-anchor" href="#_8-1-为什么使用ipv6" aria-hidden="true">#</a> 8.1 为什么使用IPv6</h2>
<ol>
<li>32位IPv4地址空间已分配殆尽</li>
<li>CIDR、NAT等技术的应用治标不治本</li>
<li>IPv6能从根本上解决地址耗尽的问题</li>
<li>改进了源IPv4的首部结果，使其能快速处理、转发数据报</li>
<li>支持QoS【Quality of Service 服务质量】指一个网络能够利用各种基础技术，为指定的网络通信提供更好的服务能力，是网络的一种安全机制，是用来解决网络延迟和阻塞等问题的一种技术。</li>
</ol>
<h2 id="_8-2-ipv6数据报格式" tabindex="-1"><a class="header-anchor" href="#_8-2-ipv6数据报格式" aria-hidden="true">#</a> 8.2 IPv6数据报格式</h2>
<p>【简图】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/z8YNb6jq.png" alt="1620096269037" loading="lazy"></p>
<p>【详图】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/Ok6b8eed.png" alt="1620096492431" loading="lazy"></p>
<h2 id="_8-3-ipv6-ipv4" tabindex="-1"><a class="header-anchor" href="#_8-3-ipv6-ipv4" aria-hidden="true">#</a> 8.3 IPv6 &amp; IPv4</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/mte7QTvG.png" alt="1620096660109" loading="lazy"></p>
<h2 id="_8-4-ipv6地址表示形式" tabindex="-1"><a class="header-anchor" href="#_8-4-ipv6地址表示形式" aria-hidden="true">#</a> 8.4 IPv6地址表示形式</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/Hl9Olb6v.png" alt="1620096751180" loading="lazy"></p>
<h2 id="_8-5-ipv6基本地址类型" tabindex="-1"><a class="header-anchor" href="#_8-5-ipv6基本地址类型" aria-hidden="true">#</a> 8.5 IPv6基本地址类型</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/HZaR6XmB.png" alt="1620096930014" loading="lazy"></p>
<h2 id="_8-6-ipv6向ipv4过渡的策略" tabindex="-1"><a class="header-anchor" href="#_8-6-ipv6向ipv4过渡的策略" aria-hidden="true">#</a> 8.6 IPv6向IPv4过渡的策略</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/7jSeSkLy.png" alt="1620097053729" loading="lazy"></p>
<h1 id="_9-路由算法及相关路由协议" tabindex="-1"><a class="header-anchor" href="#_9-路由算法及相关路由协议" aria-hidden="true">#</a> 9. 路由算法及相关路由协议</h1>
<h2 id="_9-1-路由算法" tabindex="-1"><a class="header-anchor" href="#_9-1-路由算法" aria-hidden="true">#</a> 9.1 路由算法</h2>
<h3 id="_9-1-1-路由表结构" tabindex="-1"><a class="header-anchor" href="#_9-1-1-路由表结构" aria-hidden="true">#</a> 9.1.1 路由表结构</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/NRlPMCuh.png" alt="1620097406938" loading="lazy"></p>
<h3 id="_9-1-2-路由算法分类" tabindex="-1"><a class="header-anchor" href="#_9-1-2-路由算法分类" aria-hidden="true">#</a> 9.1.2 路由算法分类</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/CLb10mNt.png" alt="1620097573641" loading="lazy"></p>
<h3 id="_9-1-3-分层次的路由选择协议" tabindex="-1"><a class="header-anchor" href="#_9-1-3-分层次的路由选择协议" aria-hidden="true">#</a> 9.1.3 分层次的路由选择协议</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/zaf3KgV1.png" alt="1620097732890" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/0eadWrpq.png" alt="1620097748834" loading="lazy"></p>
<h2 id="_9-2-rip协议及距离向量算法" tabindex="-1"><a class="header-anchor" href="#_9-2-rip协议及距离向量算法" aria-hidden="true">#</a> 9.2 RIP协议及距离向量算法</h2>
<h3 id="_9-2-1-rip协议" tabindex="-1"><a class="header-anchor" href="#_9-2-1-rip协议" aria-hidden="true">#</a> 9.2.1 RIP协议</h3>
<h4 id="_9-2-1-1-介绍" tabindex="-1"><a class="header-anchor" href="#_9-2-1-1-介绍" aria-hidden="true">#</a> 9.2.1.1 介绍</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/CVcmNtfh.png" alt="1620099752275" loading="lazy"></p>
<h4 id="_9-2-1-2-rip协议报文格式" tabindex="-1"><a class="header-anchor" href="#_9-2-1-2-rip协议报文格式" aria-hidden="true">#</a> 9.2.1.2 RIP协议报文格式</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/73mf1I5R.png" alt="1620100899524" loading="lazy"></p>
<h4 id="_9-2-1-3-特点" tabindex="-1"><a class="header-anchor" href="#_9-2-1-3-特点" aria-hidden="true">#</a> 9.2.1.3 特点</h4>
<p><code v-pre>好消息传的快，坏消息传的慢</code></p>
<p><img src="https://img1.imgtp.com/2022/07/28/dgb3OeKK.png" alt="1620100966990" loading="lazy">‘</p>
<p><img src="https://img1.imgtp.com/2022/07/28/WlA1HYag.png" alt="1620101109168" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/oIL3VRtI.png" alt="1620101178026" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/QOwfdhOH.png" alt="1620101194124" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/bzj3xCZ5.png" alt="1620101221030" loading="lazy"></p>
<h3 id="_9-2-2-路由信息交换规则" tabindex="-1"><a class="header-anchor" href="#_9-2-2-路由信息交换规则" aria-hidden="true">#</a> 9.2.2 路由信息交换规则</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/eLlYC6Qh.png" alt="1620100006910" loading="lazy"></p>
<h3 id="_9-2-3-距离向量算法" tabindex="-1"><a class="header-anchor" href="#_9-2-3-距离向量算法" aria-hidden="true">#</a> 9.2.3 距离向量算法</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/gwLhG0lN.png" alt="1620100432774" loading="lazy"></p>
<p>【例题1】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/G8bhzSG7.png" alt="1620100588930" loading="lazy"></p>
<p>【例题2】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/M7xNl8RH.png" alt="1620100776711" loading="lazy"></p>
<h3 id="_9-2-4-小结" tabindex="-1"><a class="header-anchor" href="#_9-2-4-小结" aria-hidden="true">#</a> 9.2.4 小结</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/DK1K9NJv.png" alt="1620101290859" loading="lazy"></p>
<h2 id="_9-3-ospf协议及链路状态算法" tabindex="-1"><a class="header-anchor" href="#_9-3-ospf协议及链路状态算法" aria-hidden="true">#</a> 9.3 OSPF协议及链路状态算法</h2>
<h3 id="_9-3-1-ospf协议" tabindex="-1"><a class="header-anchor" href="#_9-3-1-ospf协议" aria-hidden="true">#</a> 9.3.1 OSPF协议</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/wTJK2F8F.png" alt="1620113403966" loading="lazy"></p>
<h3 id="_9-3-2-链路状态路由算法" tabindex="-1"><a class="header-anchor" href="#_9-3-2-链路状态路由算法" aria-hidden="true">#</a> 9.3.2 链路状态路由算法</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/AGSZUglr.png" alt="1620113625354" loading="lazy"></p>
<h3 id="_9-3-3-ospf的区域" tabindex="-1"><a class="header-anchor" href="#_9-3-3-ospf的区域" aria-hidden="true">#</a> 9.3.3 OSPF的区域</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/2xtflFk0.png" alt="1620113763969" loading="lazy"></p>
<h3 id="_9-3-4-ospf分组情况" tabindex="-1"><a class="header-anchor" href="#_9-3-4-ospf分组情况" aria-hidden="true">#</a> 9.3.4 OSPF分组情况</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/1pzCSGyj.png" alt="1620113819049" loading="lazy"></p>
<h3 id="_9-3-5-其他特点" tabindex="-1"><a class="header-anchor" href="#_9-3-5-其他特点" aria-hidden="true">#</a> 9.3.5 其他特点</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/b2BZ95Rn.png" alt="1620113895873" loading="lazy"></p>
<h2 id="_9-4-bgp协议" tabindex="-1"><a class="header-anchor" href="#_9-4-bgp协议" aria-hidden="true">#</a> 9.4 BGP协议</h2>
<h3 id="_9-4-1-介绍" tabindex="-1"><a class="header-anchor" href="#_9-4-1-介绍" aria-hidden="true">#</a> 9.4.1 介绍</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/DvSraDIL.png" alt="1620113987626" loading="lazy"></p>
<h3 id="_9-4-2-bgp协议交换信息的过程" tabindex="-1"><a class="header-anchor" href="#_9-4-2-bgp协议交换信息的过程" aria-hidden="true">#</a> 9.4.2 BGP协议交换信息的过程</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/plT2UQCP.png" alt="1620114149635" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/MlzUgE5u.png" alt="1620114218495" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/3Ad1CtOU.png" alt="1620114240132" loading="lazy"></p>
<h3 id="_9-4-3-bgp协议报文格式" tabindex="-1"><a class="header-anchor" href="#_9-4-3-bgp协议报文格式" aria-hidden="true">#</a> 9.4.3 BGP协议报文格式</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/sJ8LnNYy.png" alt="1620114310903" loading="lazy"></p>
<h3 id="_9-4-4-bgp协议特点" tabindex="-1"><a class="header-anchor" href="#_9-4-4-bgp协议特点" aria-hidden="true">#</a> 9.4.4 BGP协议特点</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/wPFyRDpH.png" alt="1620114361910" loading="lazy"></p>
<h3 id="_9-4-5-bgp-4的四种报文" tabindex="-1"><a class="header-anchor" href="#_9-4-5-bgp-4的四种报文" aria-hidden="true">#</a> 9.4.5 BGP-4的四种报文</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/1kkiJgwW.png" alt="1620114443629" loading="lazy"></p>
<h2 id="_9-5-三种路由协议比较" tabindex="-1"><a class="header-anchor" href="#_9-5-三种路由协议比较" aria-hidden="true">#</a> 9.5 三种路由协议比较</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/aU5jPZol.png" alt="1620114506325" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/Ye2UJY2t.png" alt="1620114588661" loading="lazy"></p>
<h1 id="_10-ip组播" tabindex="-1"><a class="header-anchor" href="#_10-ip组播" aria-hidden="true">#</a> 10. IP组播</h1>
<h2 id="_10-1-ip数据报的三种传输方式" tabindex="-1"><a class="header-anchor" href="#_10-1-ip数据报的三种传输方式" aria-hidden="true">#</a> 10.1 IP数据报的三种传输方式</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/gUgcFFyO.png" alt="1620114833384" loading="lazy"></p>
<p>【单播模式下-IP数据报的发送】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/qBvXvOVp.png" alt="1620116550096" loading="lazy"></p>
<p>【组播模式下-IP数据报的发送】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/ooucC7jT.png" alt="1620116628519" loading="lazy"></p>
<h2 id="_10-2-ip组播地址" tabindex="-1"><a class="header-anchor" href="#_10-2-ip组播地址" aria-hidden="true">#</a> 10.2 IP组播地址</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/tOFVDSUI.png" alt="1620116823094" loading="lazy"></p>
<h2 id="_10-3-硬件组播" tabindex="-1"><a class="header-anchor" href="#_10-3-硬件组播" aria-hidden="true">#</a> 10.3 硬件组播</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/38wAYNWh.png" alt="1620117053629" loading="lazy"></p>
<h2 id="_10-4-igmp协议与组播路由协议" tabindex="-1"><a class="header-anchor" href="#_10-4-igmp协议与组播路由协议" aria-hidden="true">#</a> 10.4 IGMP协议与组播路由协议</h2>
<h3 id="_10-4-1-igmp协议" tabindex="-1"><a class="header-anchor" href="#_10-4-1-igmp协议" aria-hidden="true">#</a> 10.4.1 IGMP协议</h3>
<p><code v-pre>网际组管理协议IGMP</code></p>
<h4 id="_10-4-1-1-协议工作图解" tabindex="-1"><a class="header-anchor" href="#_10-4-1-1-协议工作图解" aria-hidden="true">#</a> 10.4.1.1 协议工作图解</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/HKcu68aN.png" alt="1620117315176" loading="lazy"></p>
<h4 id="_10-4-1-2-协议在tcp-ip协议簇中的位置" tabindex="-1"><a class="header-anchor" href="#_10-4-1-2-协议在tcp-ip协议簇中的位置" aria-hidden="true">#</a> 10.4.1.2 协议在TCP/IP协议簇中的位置</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/BCYtdQh0.png" alt="1620117353077" loading="lazy"></p>
<h4 id="_10-4-1-3-igmp工作的两个阶段" tabindex="-1"><a class="header-anchor" href="#_10-4-1-3-igmp工作的两个阶段" aria-hidden="true">#</a> 10.4.1.3 IGMP工作的两个阶段</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/oXrbgslj.png" alt="1620117456653" loading="lazy"></p>
<h3 id="_10-4-2-组播路由选择协议" tabindex="-1"><a class="header-anchor" href="#_10-4-2-组播路由选择协议" aria-hidden="true">#</a> 10.4.2 组播路由选择协议</h3>
<h4 id="_10-4-2-1-介绍" tabindex="-1"><a class="header-anchor" href="#_10-4-2-1-介绍" aria-hidden="true">#</a> 10.4.2.1 介绍</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/HXuMyPiY.png" alt="1620117561336" loading="lazy"></p>
<h4 id="_10-4-2-2-常使用的三种算法" tabindex="-1"><a class="header-anchor" href="#_10-4-2-2-常使用的三种算法" aria-hidden="true">#</a> 10.4.2.2 常使用的三种算法</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/TftvGfr3.png" alt="1620117640444" loading="lazy"></p>
<h1 id="_11-移动ip" tabindex="-1"><a class="header-anchor" href="#_11-移动ip" aria-hidden="true">#</a> 11. 移动IP</h1>
<h2 id="_11-1-相关术语" tabindex="-1"><a class="header-anchor" href="#_11-1-相关术语" aria-hidden="true">#</a> 11.1 相关术语</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/4CGBfluQ.png" alt="1620117809438" loading="lazy"></p>
<h2 id="_11-2-通信过程" tabindex="-1"><a class="header-anchor" href="#_11-2-通信过程" aria-hidden="true">#</a> 11.2 通信过程</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/NGcketQ9.png" alt="1620117989923" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/nkbJLTvI.png" alt="1620118048071" loading="lazy"></p>
<h1 id="_12-网络层设备" tabindex="-1"><a class="header-anchor" href="#_12-网络层设备" aria-hidden="true">#</a> 12. 网络层设备</h1>
<h2 id="_12-1-路由器" tabindex="-1"><a class="header-anchor" href="#_12-1-路由器" aria-hidden="true">#</a> 12.1 路由器</h2>
<h3 id="_12-1-1-介绍" tabindex="-1"><a class="header-anchor" href="#_12-1-1-介绍" aria-hidden="true">#</a> 12.1.1 介绍</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/ielU4kg9.png" alt="1620118187636" loading="lazy"></p>
<h3 id="_12-1-2-输入端口对线路上收到的分组的处理" tabindex="-1"><a class="header-anchor" href="#_12-1-2-输入端口对线路上收到的分组的处理" aria-hidden="true">#</a> 12.1.2 输入端口对线路上收到的分组的处理</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/bgME21FO.png" alt="1620118295845" loading="lazy"></p>
<h3 id="_12-1-3-输出端口将交换结果传送来的分组发送到线路" tabindex="-1"><a class="header-anchor" href="#_12-1-3-输出端口将交换结果传送来的分组发送到线路" aria-hidden="true">#</a> 12.1.3 输出端口将交换结果传送来的分组发送到线路</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/IULfsfzx.png" alt="1620118446489" loading="lazy"></p>
<h2 id="_12-2-三层设备的区别" tabindex="-1"><a class="header-anchor" href="#_12-2-三层设备的区别" aria-hidden="true">#</a> 12.2 三层设备的区别</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/y0Tv0PV4.png" alt="1620118542666" loading="lazy"></p>
<h2 id="_12-3-路由表与路由转发" tabindex="-1"><a class="header-anchor" href="#_12-3-路由表与路由转发" aria-hidden="true">#</a> 12.3 路由表与路由转发</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/XdW5FTle.png" alt="1620118630369" loading="lazy"></p>
</div></template>
