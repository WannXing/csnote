<template><div><h2 id="_1-1-操作系统的基本概念" tabindex="-1"><a class="header-anchor" href="#_1-1-操作系统的基本概念" aria-hidden="true">#</a> 1.1 操作系统的基本概念</h2>
<p>系统软件，控制计算机硬件和软件资源</p>
<p>操作系统的特征：最主要的是并发和共享</p>
<p>（1）并发：分时交替。单处理机同时只能运行一个进程</p>
<p>（2）共享：系统资源可供多个并发的进程同时使用，同步互斥</p>
<p>（3）虚拟：物理实体-&gt;逻辑事物</p>
<p>（4）异步：多个程序执行速度不可预知，但结果一定</p>
<p>操作系统的功能：处理机管理，存储器管理，文件管理，设备管理</p>
<p>操作系统的接口：命令接口（联机：交互式，脱机：批处理），系统调用（程序接口，给编程人员的接口）</p>
<p>库函数来使用系统调用</p>
<h2 id="_1-2-操作系统的发展和分类" tabindex="-1"><a class="header-anchor" href="#_1-2-操作系统的发展和分类" aria-hidden="true">#</a> 1.2 操作系统的发展和分类</h2>
<p>发展流程：手工操作阶段-&gt;批处理阶段-&gt;分时系统-&gt;实时系统-&gt;PC操作系统</p>
<p>批处理系统：<strong>将一批作业进入内存</strong>，交给操作系统处理，用户脱机。优点：资源利用率高，<strong>缺点：无交互能力</strong></p>
<ul>
<li>
<p>单道批处理系统：内存中始终保持一道作业。如果程序运行时发出io请求，那CPU就要等待低速的io</p>
</li>
<li>
<p>多道批处理系统：允许多个程序同时进入内存，在CPU中交替运行。一个程序io的同时，CPU可以转而执行其他程序。但是用户不知道程序的运行情况，不能和计算机交互，只能通过提前写好的用户说明书来调试</p>
</li>
</ul>
<p>分时操作系统：处理器的运行时间分成很短的时间片，轮流分配给各作业。多个用户共享一台主机，交互互不干扰</p>
<p>实时操作系统：订票、银行，严格及时</p>
<h2 id="_1-3-操作系统的运行环境" tabindex="-1"><a class="header-anchor" href="#_1-3-操作系统的运行环境" aria-hidden="true">#</a> 1.3 操作系统的运行环境</h2>
<h3 id="_1-操作系统运行机制" tabindex="-1"><a class="header-anchor" href="#_1-操作系统运行机制" aria-hidden="true">#</a> 1.操作系统运行机制</h3>
<p>CPU有两种状态：用户态时，只能执行非特权指令，内核态可以执行特权指令</p>
<p>操作系统内核包括：</p>
<ul>
<li>时钟管理：计时，时间片轮转调度切换进程</li>
<li>中断机制</li>
<li>原语：不可被中断的原子进程</li>
<li>系统控制的数据结构（进程管理，存储器管理，设备管理），与硬件关系不紧密</li>
</ul>
<p>用户态到内核态切换需要通过中断或异常，反过来则需要中断返回指令。</p>
<p>进程从用户态-&gt;内核态需要访管指令，中断处理程序在内核态运行。</p>
<h3 id="_2-中断和异常" tabindex="-1"><a class="header-anchor" href="#_2-中断和异常" aria-hidden="true">#</a> 2.中断和异常</h3>
<p>硬件中断：中断信号来自硬件设备</p>
<ul>
<li>外中断（中断）：来自外部设备，包括io设备中断、外部信号中断、定时器引起的时钟中断</li>
<li>内中断（异常）：中断信号来自CPU内部指令执行
<ul>
<li>故障fault：可恢复的错误，如缺页（通过访存指令产生的异常）</li>
<li>终止abort：不可恢复的错误，如非法指令，除数为0</li>
</ul>
</li>
</ul>
<p>软中断：通过当前进程中断指令int产生的中断，其实是程序的正常执行</p>
<ul>
<li>陷入trap：有意的异常，如系统调用（用户态到内核态的切换）</li>
</ul>
<p>CPU响应中断后，中断处理过程：</p>
<ul>
<li><strong>中断隐指令</strong>（硬件直接实现）做的事：（用户态）
<ul>
<li>关中断：因为保护中断现场时不能被中断打扰</li>
<li>保存断点：将当前PC值压栈</li>
<li>中断服务程序寻址：将中断向量（中断服务程序的入口地址）放入PC</li>
</ul>
</li>
<li><strong>中断服务程序</strong>做的事：（内核态）
<ul>
<li>保存现场和<strong>屏蔽字</strong>：通用寄存器的值</li>
<li>开中断：为了中断嵌套，接受新的中断</li>
<li>执行中断服务程序</li>
<li>关中断：保证恢复现场时不能被打扰</li>
<li>恢复现场和屏蔽字</li>
<li>开中断</li>
<li>中断返回</li>
</ul>
</li>
</ul>
<h3 id="_3-系统调用" tabindex="-1"><a class="header-anchor" href="#_3-系统调用" aria-hidden="true">#</a> 3.系统调用</h3>
<p>程序调用操作系统提供的功能包括设备管理、文件管理、进程控制、进程通信、内存管理。</p>
<p>用户程序通过<code v-pre>int 0x80</code>命令产生软中断，然后通过<strong>trap陷入指令</strong>发起系统调用，把CPU使用权主动交给内核，即用户态到内核态。此时，寄存器eax中会存放系统调用号，根据系统调用号查找系统调用表sys_call_table中对应的系统调用服务程序入口地址。内核处理完后，再把CPU使用权还给用户程序</p>
<h2 id="_1-4-操作系统的体系结构" tabindex="-1"><a class="header-anchor" href="#_1-4-操作系统的体系结构" aria-hidden="true">#</a> 1.4 操作系统的体系结构</h2>
<h3 id="分层法" tabindex="-1"><a class="header-anchor" href="#分层法" aria-hidden="true">#</a> 分层法</h3>
<p>将操作系统分成若干层次，0为硬件（最底层），n为用户接口</p>
<p>每层只能调用相邻的更低层的服务</p>
<h3 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h3>
<p>将操作系统按功能划分为多个模块，各模块之间通过接口通信</p>
<h3 id="大内核与微内核" tabindex="-1"><a class="header-anchor" href="#大内核与微内核" aria-hidden="true">#</a> 大内核与微内核</h3>
<p>大内核：操作系统主要模块都作为整体运行在内核态。</p>
<ul>
<li>性能高，但是增加系统服务时需要修改内核，接口复杂</li>
</ul>
<p>微内核：内核态只有最基本的功能（进程管理等）</p>
<ul>
<li>微内核基于用户/服务器模式，只有微内核运行在内核态，其他模块在用户态</li>
<li>可靠性高，但需要频繁切换，性能差</li>
</ul>
<h2 id="_1-5-程序运行环境" tabindex="-1"><a class="header-anchor" href="#_1-5-程序运行环境" aria-hidden="true">#</a> 1.5 程序运行环境</h2>
<h3 id="进程的内存映像与地址空间" tabindex="-1"><a class="header-anchor" href="#进程的内存映像与地址空间" aria-hidden="true">#</a> 进程的内存映像与地址空间</h3>
<p>一个程序从硬盘调入内存就构成了进程的内存映像</p>
<p>内存映像从上到下（高地址到低地址）：</p>
<ul>
<li>栈：用来实现哈函数调用</li>
<li>堆：存放动态分配的变量</li>
<li>数据段：全局变量和静态变量</li>
<li>代码段：程序的二进制代码</li>
</ul>
<p>程序调入内存后，数据段和代码段大小固定</p>
<p>此外，还有进程控制块PCB存放在系统区</p>
<h2 id="_1-6-操作系统引导过程" tabindex="-1"><a class="header-anchor" href="#_1-6-操作系统引导过程" aria-hidden="true">#</a> 1.6 操作系统引导过程</h2>
<ul>
<li>CPU执行ROM中的boot程序，将BIOS程序（基本输入输出系统）的第一条指令放入指令寄存器，开始执行BIOS</li>
<li>BIOS硬件自检，通过遍历方式寻找带有主引导记录的系统硬盘</li>
<li>加载主引导记录MBR，根据标识符找到引导硬盘</li>
<li>加载硬盘分区表，MBR找到哪个硬盘分区含有操作系统</li>
<li>（加载硬盘活动分区，分区引导记录PBR，启动管理器。。。）</li>
<li>加载操作系统到内存中的系统区，属于RAM</li>
</ul>
<h2 id="_1-7-虚拟机" tabindex="-1"><a class="header-anchor" href="#_1-7-虚拟机" aria-hidden="true">#</a> 1.7 虚拟机</h2>
<p>两种虚拟化方法</p>
<p>1.第一类虚拟机</p>
<p>虚拟机作为用户态的进程，当执行内核态指令时，陷入虚拟机管理程序。虚拟机管理程序检查该指令是否是虚拟机的操作系统执行的，是则正确执行</p>
<p>2.第二类虚拟机</p>
<p>虚拟机的操作系统称为客户操作系统，安装虚拟机的底层硬件上的操作系统是宿主操作系统</p>
<p>虚拟机管理程序伪装成完整的计算机，有虚拟设备，虚拟磁盘</p>
</div></template>
