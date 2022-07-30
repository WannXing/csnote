<template><div><h2 id="_5-1-i-o管理概述" tabindex="-1"><a class="header-anchor" href="#_5-1-i-o管理概述" aria-hidden="true">#</a> 5.1 I/O管理概述</h2>
<p>I/O设备按使用特性分为：人机交互类外部设备，存储设备，网络通信设备；
块设备：信息存取以块为单位，传输速率高，磁盘；
字符设备：打印机，传输速率低</p>
<h3 id="i-o模型" tabindex="-1"><a class="header-anchor" href="#i-o模型" aria-hidden="true">#</a> I/O模型</h3>
<p>同步I/O：CPU不断检查I/O是否完成</p>
<p>异步I/O：CPU正常运行，I/O完成后通知CPU</p>
<h3 id="i-o控制方式" tabindex="-1"><a class="header-anchor" href="#i-o控制方式" aria-hidden="true">#</a> I/O控制方式</h3>
<h4 id="_1-程序控制方式" tabindex="-1"><a class="header-anchor" href="#_1-程序控制方式" aria-hidden="true">#</a> （1）程序控制方式</h4>
<p>计算机每次从外设读一个字的数据到存储器，CPU循环检查外设状态，直到该字已经在<strong>I/O控制器（设备控制器）<strong>的</strong>数据寄存器</strong>中</p>
<h4 id="_2-中断驱动方式" tabindex="-1"><a class="header-anchor" href="#_2-中断驱动方式" aria-hidden="true">#</a> （2）中断驱动方式</h4>
<p>CPU向I/O控制器发送读命令，I/O控制器读数据，当读入数据寄存器后，通过控制线向CPU发送一个中断信号。</p>
<p>在每个指令周期末尾，CPU检查中断，检测到中断后，CPU发送取数请求，I/O控制器把数据发到数据总线，再到CPU的寄存器，存入主存。这样数据中每个字存储都要经过CPU</p>
<h4 id="_3-dma方式" tabindex="-1"><a class="header-anchor" href="#_3-dma方式" aria-hidden="true">#</a> （3）DMA方式</h4>
<p>DMA：Direct Memory Access，直接存储器访问</p>
<p>DMA控制器直接与存储器交互， 一次只能传送一个数据块或多个连续的数据块，传送完成后产生中断（而中断驱动是传送前产生中断）</p>
<p>DMA控制器以字为单位从外设输入，<strong>以块为单位输出</strong>给主存。</p>
<h4 id="_4-通道方式" tabindex="-1"><a class="header-anchor" href="#_4-通道方式" aria-hidden="true">#</a> （4）通道方式</h4>
<p>通道是一种<strong>硬件</strong>，相当于弱化版CPU，有通道指令。</p>
<p>CPU写好的通道程序放在主存中</p>
<p>CPU把一组任务交给通道，通道执行通道程序，控制设备控制器，可以传送不连续的多个数据块，传送完成后产生中断</p>
<p>DMA需要CPU告知控制器传输的数据块大小和内存位置，而通道可以自己控制这些信息</p>
<p>通道拥有的数据结构：设备控制表，控制器控制表，通道控制表，系统设备表</p>
<h3 id="i-o子系统的层次结构" tabindex="-1"><a class="header-anchor" href="#i-o子系统的层次结构" aria-hidden="true">#</a> I/O子系统的层次结构</h3>
<p>从上到下：</p>
<ul>
<li>
<p>用户层I/O软件：与用户交互的接口，用户使用I/O相关库函数来操作，如read，write命令接口</p>
</li>
<li>
<p>系统调用处理程序（设备无关软件层）：用户程序使用系统调用（如sys_read），本层将其翻译成设备操作命令（read）。<strong>执行所有设备的公共操作</strong>，例如设备的分配回收，将逻辑设备名（给用户看的）映射到物理设备名等</p>
<p>逻辑设备表LUT：【逻辑设备名|物理设备名|驱动程序入口地址】</p>
</li>
<li>
<p>设备驱动程序：接收上层软件发来的I/O请求，根据不同设备将read命令转为不同要求后，控制I/O设备工作。（不同设备的寄存器有区别，所以需要封装这些差别）</p>
</li>
<li>
<p>中断处理程序：CPU上下文切换，转而执行read命令。读取设备状态，正常则把数据送入内存，异常则处理。</p>
</li>
<li>
<p>硬件设备：命令抵达设备，设备控制器对设备进行控制</p>
</li>
</ul>
<p>设备独立性软件，设备驱动程序，中断处理程序称为I/O核心子系统</p>
<h3 id="设备控制器的组成" tabindex="-1"><a class="header-anchor" href="#设备控制器的组成" aria-hidden="true">#</a> 设备控制器的组成</h3>
<ul>
<li>与CPU的接口：数据寄存器，状态寄存器，三总线</li>
<li>与设备的接口：数据、控制、状态三种信号</li>
<li>I/O逻辑：控制设备，CPU将io命令发给io逻辑，译码后进行控制</li>
</ul>
<h2 id="_5-2-i-o核心子系统" tabindex="-1"><a class="header-anchor" href="#_5-2-i-o核心子系统" aria-hidden="true">#</a> 5.2 I/O核心子系统</h2>
<p>设备独立性软件，设备驱动程序，中断处理程序称为I/O核心子系统</p>
<p><strong>设备独立性指的是：用户编程时只需知道设备类型，不用知道具体的设备</strong></p>
<p>I/O调度：确定I/O请求执行顺序</p>
<p>设备保护：设备也有用户访问权限</p>
<h3 id="缓冲区" tabindex="-1"><a class="header-anchor" href="#缓冲区" aria-hidden="true">#</a> 缓冲区</h3>
<p>目的：</p>
<p>（1）缓解CPU和io设备速度不匹配：CPU先将数据送到缓冲区，然后做别的事，缓冲区再和io设备交互</p>
<p>（2）减少CPU中断次数，磁盘io次数</p>
<p>（3）增加基本数据单元大小：CPU不用按字读入数据</p>
<p>缓冲区在内存中，默认缓冲区大小是一块。<strong>装满才能输出，空了才能装入</strong></p>
<p>设一块数据装入缓冲区的时间为T，缓冲区到用户区的时间为M，CPU处理数据的时间为C。【顺序：TMC】</p>
<p>求每种缓冲技术<strong>每块数据的处理时间</strong>。P305</p>
<ul>
<li>单缓冲：M+max{C,T}，因为C和T有重合</li>
<li T,M+C="">双缓冲：max</li>
</ul>
<p>注意：题目中要求n块的时间时</p>
<ul>
<li>
<p>单缓冲：</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>n</mi><mo stretchy="false">(</mo><mi>M</mi><mo>+</mo><mi>max</mi><mo>⁡</mo><mo stretchy="false">{</mo><mi>C</mi><mo separator="true">,</mo><mi>T</mi><mo stretchy="false">}</mo><mo stretchy="false">)</mo><mo>+</mo><mi>min</mi><mo>⁡</mo><mo stretchy="false">{</mo><mi>C</mi><mo separator="true">,</mo><mi>T</mi><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">n(M+\max\{C,T\})+\min\{C,T\}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">n</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">max</span><span class="mopen">{</span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mclose">})</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">min</span><span class="mopen">{</span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mclose">}</span></span></span></span></span></p>
</li>
<li>
<p>双缓冲：</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>n</mi><mi>max</mi><mo>⁡</mo><mo stretchy="false">{</mo><mi>T</mi><mo separator="true">,</mo><mi>M</mi><mo>+</mo><mi>C</mi><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">n\max\{T,M+C\}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">max</span><span class="mopen">{</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mclose">}</span></span></span></span></span></p>
</li>
</ul>
<p><img src="https://img1.imgtp.com/2022/07/30/ZRkDFfZX.png" alt="" loading="lazy"></p>
<p>循环缓冲：多个缓冲区形成循环链表</p>
<p>缓冲池：分为缓冲队列，输入队列，输出队列</p>
<h3 id="设备分配与回收" tabindex="-1"><a class="header-anchor" href="#设备分配与回收" aria-hidden="true">#</a> 设备分配与回收</h3>
<p>1.设备分为独占设备（打印机），共享设备（磁盘），<strong>虚拟设备（采用SPOOLing将独占改造为共享）</strong></p>
<p>2.设备分配的数据结构</p>
<p>一个通道服务多个设备控制器，一个设备控制器控制多个设备</p>
<p>每个设备有一个设备控制表DCT，每个设备控制器有一个控制器控制表COCT，每个通道有一个通道控制表CHCT，整个系统有一个系统设备表SDT</p>
<p>分配步骤：</p>
<ul>
<li>根据进程请求的设备名在SDT中找到对应设备的DCT地址</li>
<li>在DCT中检查设备状态，若空闲则分配设备，否则将进程的PCB挂到该设备的阻塞队列中</li>
<li>根据DCT找COCT，若空闲则分配设备控制器，否则将进程的PCB挂到该设备的阻塞队列中</li>
<li>根据COCT找CHCT，若空闲则分配通道，否则将进程的PCB挂到该设备的阻塞队列中</li>
</ul>
<p>3.设备分配方式</p>
<p>静态分配：作业执行前就分配所有需要的设备</p>
<p>动态分配：执行中分配</p>
<p>4.设备分配的安全性</p>
<p>安全分配：进程发出io请求后进入阻塞态，直到io操作完成才唤醒</p>
<p>不安全分配：进程发出io请求后继续运行，一个进程可操作多个设备（可能死锁，需要银行家算法避免死锁）</p>
<p>5.逻辑设备表LUT：进程用逻辑设备名来请求设备，系统在LUT中加入一项记录逻辑设备名-物理设备名的映射</p>
<h3 id="假脱机技术-spooling" tabindex="-1"><a class="header-anchor" href="#假脱机技术-spooling" aria-hidden="true">#</a> 假脱机技术（SPOOLing）</h3>
<p>目的是将独占设备改造成共享设备</p>
<p>脱机：由于CPU与低速设备之间的输入输出耗时很多，这段时间CPU不能做别的事，所以CPU先将数据传送到高速磁盘上，再送到设备</p>
<p>假脱机SPOOLing：在<strong>磁盘</strong>上开辟两个区域，称为<strong>输入井</strong>和<strong>输出井</strong>，模拟脱机技术的输入磁盘和输出磁盘</p>
<p>输入：输入设备先将数据送到内存的输入缓冲区，再送入输入井，CPU需要数据时，将数据从输入井读入内存</p>
<p>输出：用户进程先将数据输出到输出井，输出设备空闲时，在将输出井的数据经过输出缓冲区送到输出设备</p>
<p>实例：共享打印机，实现多用户使用同一个打印机。输出进程在输出井申请一个空闲块，将要打印的数据送入其中；输出进程为用户进程申请一张<strong>用户请求打印表（记载数据在输出井中的位置）</strong>，将表挂到请求打印队列上；队列依次打印</p>
<p>假脱机和缓冲的不同在于：假脱机可以同时进行一个进程的io和另一个进程的计算，而缓冲只能同时进行一个进程的io和计算</p>
<p>假脱机的作用：提高设备利用率；多道程序作用：提高CPU利用率</p>
<p>假脱机不需要外围计算机</p>
</div></template>
