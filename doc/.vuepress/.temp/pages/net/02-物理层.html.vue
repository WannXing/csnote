<template><div><h1 id="_1-物理层的基本概念" tabindex="-1"><a class="header-anchor" href="#_1-物理层的基本概念" aria-hidden="true">#</a> 1. 物理层的基本概念</h1>
<blockquote>
<p>物理层解决如何在连接各种计算机的传输媒体上<code v-pre>传输数据比特</code>流，而<code v-pre>不是指具体的传输媒体</code>。</p>
<p>物理层的<code v-pre>主要任务</code>：确定与传输媒体接口有关的一些特性==&gt;定义接口标准</p>
<ol>
<li>机械特性：规定物理连接时所采用的规格、接口形状、引线数目、引脚数量和排列情况</li>
<li>电气特性：规定传输二进制位时，线路上信号的<code v-pre>电压范围</code>、抗阻匹配、传输速率和距离限制等</li>
<li>功能特性：指明某条线上出现的某一电平表示何种意义，接口部件的信号线的用途</li>
<li>规程特性【过程特性】：定义各条物理线路的工作规程和时序关系</li>
</ol>
</blockquote>
<h1 id="_2-数据通信基础知识" tabindex="-1"><a class="header-anchor" href="#_2-数据通信基础知识" aria-hidden="true">#</a> 2.数据通信基础知识</h1>
<h2 id="_2-1-典型的数据通信模型" tabindex="-1"><a class="header-anchor" href="#_2-1-典型的数据通信模型" aria-hidden="true">#</a> 2.1 典型的数据通信模型</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/RP6kUT2Y.png" alt="1619838429263" loading="lazy"></p>
<h2 id="_2-2-相关术语解析" tabindex="-1"><a class="header-anchor" href="#_2-2-相关术语解析" aria-hidden="true">#</a> 2.2 相关术语解析</h2>
<blockquote>
<p>通信的目的是<code v-pre>传送信息</code></p>
</blockquote>
<p><code v-pre>数据</code>：传送信息的实体，通常是有意义的符号序列</p>
<p><code v-pre>信号</code>：数据的电气/电磁表现，是数据在传输过程中的<code v-pre>存在形式</code>。信号分两种==&gt;</p>
<p><img src="https://img1.imgtp.com/2022/07/28/IZxRYDqk.png" alt="1619838831742" loading="lazy"></p>
<p><code v-pre>信源</code>：产生和发送数据的源头</p>
<p><code v-pre>信宿</code>：接收数据的终点</p>
<p><code v-pre>信道</code>：信号的传输媒介。一般用来表示向某一个方向传送信息的介质。因此一条通信线路往往包含一条发送信道和一条接收信道。信道的分类==&gt;</p>
<p><img src="https://img1.imgtp.com/2022/07/28/cbhSg1pT.png" alt="1619839031519" loading="lazy"></p>
<h2 id="_2-3-三种通信方式" tabindex="-1"><a class="header-anchor" href="#_2-3-三种通信方式" aria-hidden="true">#</a> 2.3 三种通信方式</h2>
<blockquote>
<p>从通信双方信息的交互方式看，可以有三种基本方式：</p>
<ol>
<li><code v-pre>单工通信</code>：只有一个方向的通信而没有反方向的交互，仅需要一条信道</li>
<li><code v-pre>半双工通信</code>：通信的双方都可以发送或接受信息，但不能双方同时发送和接收，需要<code v-pre>两条</code>信道</li>
<li><code v-pre>全双工通信</code>：通信双方可以同时发送和接受信息，需要<code v-pre>两条</code>信道</li>
</ol>
</blockquote>
<h2 id="_2-4-两种数据传输方式" tabindex="-1"><a class="header-anchor" href="#_2-4-两种数据传输方式" aria-hidden="true">#</a> 2.4 两种数据传输方式</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/aATuH5uu.png" alt="1619839635237" loading="lazy"></p>
<h2 id="_2-5-码元、速率、波特、带宽" tabindex="-1"><a class="header-anchor" href="#_2-5-码元、速率、波特、带宽" aria-hidden="true">#</a> 2.5 码元、速率、波特、带宽</h2>
<h3 id="_2-5-1-码元" tabindex="-1"><a class="header-anchor" href="#_2-5-1-码元" aria-hidden="true">#</a> 2.5.1 码元</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/mqHVD5wE.png" alt="1619840043576" loading="lazy"></p>
<h3 id="_2-5-2-速率、波特" tabindex="-1"><a class="header-anchor" href="#_2-5-2-速率、波特" aria-hidden="true">#</a> 2.5.2 速率、波特</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/Bekq8cbf.png" alt="1619840273207" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/6hA6YNEc.png" alt="1619840348660" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/CF2KJi03.png" alt="1619840404393" loading="lazy"></p>
<h3 id="_2-5-3-练习题" tabindex="-1"><a class="header-anchor" href="#_2-5-3-练习题" aria-hidden="true">#</a> 2.5.3 练习题</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/R1B34bdH.png" alt="1619840623655" loading="lazy"></p>
<h1 id="_3-奈氏准则与香农定理" tabindex="-1"><a class="header-anchor" href="#_3-奈氏准则与香农定理" aria-hidden="true">#</a> 3.奈氏准则与香农定理</h1>
<h2 id="_3-1-失真" tabindex="-1"><a class="header-anchor" href="#_3-1-失真" aria-hidden="true">#</a> 3.1 失真</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/uSy8ezy2.png" alt="1619840806175" loading="lazy"></p>
<h2 id="_3-2-码间串扰【失真现象之一】" tabindex="-1"><a class="header-anchor" href="#_3-2-码间串扰【失真现象之一】" aria-hidden="true">#</a> 3.2 码间串扰【失真现象之一】</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/zlYZOvFT.png" alt="1619840973294" loading="lazy"></p>
<h2 id="_3-3奈氏准则【奈奎斯特定理】" tabindex="-1"><a class="header-anchor" href="#_3-3奈氏准则【奈奎斯特定理】" aria-hidden="true">#</a> 3.3奈氏准则【奈奎斯特定理】</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/h5z4IR6v.png" alt="1619841265907" loading="lazy"></p>
<p>【习题】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/HqqU19Ho.png" alt="1619841360995" loading="lazy"></p>
<h2 id="_3-4香农定理" tabindex="-1"><a class="header-anchor" href="#_3-4香农定理" aria-hidden="true">#</a> 3.4香农定理</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/A0s47VSQ.png" alt="1619841613411" loading="lazy"></p>
<p>【注意】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/csg0h6t4.png" alt="1619842338132" loading="lazy"></p>
<p>【例题】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/tSeZ3QZ5.png" alt="1619842417767" loading="lazy"></p>
<h2 id="_3-5奈氏与香农" tabindex="-1"><a class="header-anchor" href="#_3-5奈氏与香农" aria-hidden="true">#</a> 3.5奈氏与香农</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/FcYzoU15.png" alt="1619842628847" loading="lazy"></p>
<h1 id="_4-编码与调制" tabindex="-1"><a class="header-anchor" href="#_4-编码与调制" aria-hidden="true">#</a> 4.编码与调制</h1>
<h2 id="_4-1-基带信号与宽带信号" tabindex="-1"><a class="header-anchor" href="#_4-1-基带信号与宽带信号" aria-hidden="true">#</a> 4.1 基带信号与宽带信号</h2>
<p><img src="https://www.jianguoyun.com/c/dl-file/2022727231355.png?dt=rfoqek&amp;sd=dhh1p&amp;kv=NzM0MTEwNDcwQHFxLmNvbQ&amp;vr=1&amp;ud=NTSut01RS_oJ5fytH5t9qQAX07zQ3QRHpBjXS6OgMaY" alt="1619842905921" loading="lazy"></p>
<p>【使用场景】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/RlMHzsfH.png" alt="1619842963475" loading="lazy"></p>
<h2 id="_4-2-编码与调制" tabindex="-1"><a class="header-anchor" href="#_4-2-编码与调制" aria-hidden="true">#</a> 4.2 编码与调制</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/1GmeJ06G.png" alt="1619843092742" loading="lazy"></p>
<h3 id="_4-3-1-数字数据编码为数字信号" tabindex="-1"><a class="header-anchor" href="#_4-3-1-数字数据编码为数字信号" aria-hidden="true">#</a> 4.3.1 数字数据编码为数字信号</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/obxp26C8.png" alt="1619843332075" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/K26hmQPW.png" alt="1619843420727" loading="lazy"></p>
<p><img src="https://img1.imgtp.com/2022/07/28/5NiXyXec.png" alt="1619843545149" loading="lazy"></p>
<h4 id="_1-非归零编码【nrz】" tabindex="-1"><a class="header-anchor" href="#_1-非归零编码【nrz】" aria-hidden="true">#</a> （1）非归零编码【NRZ】</h4>
<p><code v-pre>高1低0</code></p>
<p>编码容易实现，但没有检错功能，且无法判断一个码元的开始和结束，以至于收发双方难以保持同步。</p>
<h4 id="_4-归零编码【rz】" tabindex="-1"><a class="header-anchor" href="#_4-归零编码【rz】" aria-hidden="true">#</a> （4）归零编码【RZ】</h4>
<p>信号电平在一个码元之内都要恢复到零的这种编码方式</p>
<h4 id="_5-反向不归零编码【nrzi】" tabindex="-1"><a class="header-anchor" href="#_5-反向不归零编码【nrzi】" aria-hidden="true">#</a> （5）反向不归零编码【NRZI】</h4>
<p>信号电平反转表示0，信号电平不变表示1</p>
<h4 id="_2-曼彻斯特编码" tabindex="-1"><a class="header-anchor" href="#_2-曼彻斯特编码" aria-hidden="true">#</a> （2）曼彻斯特编码</h4>
<p>将一个码元分成两个相等的间隔，前一个间隔为低电平后一个间隔为高电平表示码元1；码元0则正好相反。也可以采用相反的规定。该编码的特点是在每一个码元的中间出现电平跳变，位中间的跳变既作时钟信号（可用于同步），又作数据信号，但它所占的频带宽度是原始的基带宽度的两倍</p>
<h4 id="_3-差分曼彻斯特编码" tabindex="-1"><a class="header-anchor" href="#_3-差分曼彻斯特编码" aria-hidden="true">#</a> （3）差分曼彻斯特编码</h4>
<p><code v-pre>同1异0</code></p>
<p>常用于局域网传输，其规则是：若码元1，则前半个码元的电平与上一个码元的后半个码元的电平相等，若为0，则相反。该编码的特点是，在每个码元的中间，都有一次电平的跳转，可以实现自同步，且抗干扰性强于曼彻斯特编码</p>
<h4 id="_6-4b-5b编码" tabindex="-1"><a class="header-anchor" href="#_6-4b-5b编码" aria-hidden="true">#</a> （6）4B/5B编码</h4>
<p><img src="https://img1.imgtp.com/2022/07/28/x8mZM9zj.png" alt="1619843934533" loading="lazy"></p>
<h3 id="_4-3-2-数字数据调制为模拟信号" tabindex="-1"><a class="header-anchor" href="#_4-3-2-数字数据调制为模拟信号" aria-hidden="true">#</a> 4.3.2 数字数据调制为模拟信号</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/n9Aor42d.png" alt="1619844900188" loading="lazy"></p>
<h3 id="_4-3-3-模拟数据编码成数字信号" tabindex="-1"><a class="header-anchor" href="#_4-3-3-模拟数据编码成数字信号" aria-hidden="true">#</a> 4.3.3 模拟数据编码成数字信号</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/JbygndgJ.png" alt="1619845326860" loading="lazy"></p>
<h3 id="_4-3-4-模拟数据调制为模拟信号" tabindex="-1"><a class="header-anchor" href="#_4-3-4-模拟数据调制为模拟信号" aria-hidden="true">#</a> 4.3.4 模拟数据调制为模拟信号</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/SLQRlLKN.png" alt="1619845513780" loading="lazy"></p>
<h1 id="_5-传输介质与分类" tabindex="-1"><a class="header-anchor" href="#_5-传输介质与分类" aria-hidden="true">#</a> 5.传输介质与分类</h1>
<p><img src="https://img1.imgtp.com/2022/07/28/hwDM5tnx.png" alt="1619845910127" loading="lazy"></p>
<h2 id="_5-1-导向性传输介质" tabindex="-1"><a class="header-anchor" href="#_5-1-导向性传输介质" aria-hidden="true">#</a> 5.1 导向性传输介质</h2>
<h3 id="_5-1-1-双绞线" tabindex="-1"><a class="header-anchor" href="#_5-1-1-双绞线" aria-hidden="true">#</a> 5.1.1 双绞线</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/r9kyeX9c.png" alt="1619846370888" loading="lazy"></p>
<h3 id="_5-1-2-同轴电缆" tabindex="-1"><a class="header-anchor" href="#_5-1-2-同轴电缆" aria-hidden="true">#</a> 5.1.2 同轴电缆</h3>
<p><img src="https://img1.imgtp.com/2022/07/28/RGGnxym4.png" alt="1619846471560" loading="lazy"></p>
<h3 id="_5-1-3-光纤" tabindex="-1"><a class="header-anchor" href="#_5-1-3-光纤" aria-hidden="true">#</a> 5.1.3 光纤</h3>
<p>【简介】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/DlsqAwBv.png" alt="1619846807445" loading="lazy"></p>
<p>【单模/多模光纤】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/5vtBOQfP.png" alt="1619846911770" loading="lazy"></p>
<p>【特点】</p>
<p><img src="https://img1.imgtp.com/2022/07/28/mlh7BOtd.png" alt="1619847010520" loading="lazy"></p>
<h2 id="_5-2非导向性传输介质" tabindex="-1"><a class="header-anchor" href="#_5-2非导向性传输介质" aria-hidden="true">#</a> 5.2非导向性传输介质</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/A6jJtmQA.png" alt="1619847258605" loading="lazy"></p>
<h1 id="_6-物理层设备" tabindex="-1"><a class="header-anchor" href="#_6-物理层设备" aria-hidden="true">#</a> 6.物理层设备</h1>
<h2 id="_6-1-中继器【转发器】" tabindex="-1"><a class="header-anchor" href="#_6-1-中继器【转发器】" aria-hidden="true">#</a> 6.1 中继器【转发器】</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/r0MF8yW3.png" alt="1619847606386" loading="lazy"></p>
<h2 id="_6-2-集线器【多口中继器】" tabindex="-1"><a class="header-anchor" href="#_6-2-集线器【多口中继器】" aria-hidden="true">#</a> 6.2 集线器【多口中继器】</h2>
<p><img src="https://img1.imgtp.com/2022/07/28/Od5QT6Lk.png" alt="1619847810653" loading="lazy"></p>
<h1 id="_7-小结" tabindex="-1"><a class="header-anchor" href="#_7-小结" aria-hidden="true">#</a> 7. 小结</h1>
<p><img src="https://img1.imgtp.com/2022/07/28/OfENX1xo.png" alt="1619847856505" loading="lazy"></p>
</div></template>
