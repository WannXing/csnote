<template><div><h2 id="第二章——进程管理" tabindex="-1"><a class="header-anchor" href="#第二章——进程管理" aria-hidden="true">#</a> 第二章——进程管理</h2>
<h3 id="_2-1-1-进程" tabindex="-1"><a class="header-anchor" href="#_2-1-1-进程" aria-hidden="true">#</a> 2.1.1 进程</h3>
<p>进程是程序的一次执行过程，是系统<strong>资源分配</strong>和调度的基本单位</p>
<p>PCB：进程控制块，描述进程信息和状态。创建进程即创建PCB，是进程存在的唯一标志</p>
<h4 id="进程的状态" tabindex="-1"><a class="header-anchor" href="#进程的状态" aria-hidden="true">#</a> 进程的状态</h4>
<ul>
<li>
<p>创建态：申请空白PCB，写入控制管理进程的信息，分配资源。进入就绪态</p>
</li>
<li>
<p>就绪态：进程获得除了CPU以外的一切资源，进入就绪队列</p>
</li>
<li>
<p>运行态：进程在CPU上运行。一旦<strong>时间片到了或者有更高优先级的进程</strong>，就回到就绪态；缺少资源，主动进入阻塞态</p>
</li>
<li>
<p>阻塞态（等待态）：进程缺少<strong>非CPU的资源或等待io</strong>，暂停运行。满足条件后，被动进入就绪态</p>
</li>
<li>
<p>结束态：回收资源</p>
</li>
</ul>
<p>闲逛进程idle：当没有其他就绪态进程时，运行闲逛进程，不访存</p>
<h5 id="进程的控制" tabindex="-1"><a class="header-anchor" href="#进程的控制" aria-hidden="true">#</a> 进程的控制</h5>
<p>进程的状态转换，使用原语</p>
<ul>
<li>
<p>创建：新建PCB，分配资源，加入就绪队列</p>
</li>
<li>
<p>终止：正常结束、异常结束、kill</p>
</li>
<li>
<p>阻塞：PCB加入阻塞队列；</p>
</li>
<li>
<p>唤醒：PCB从阻塞队列到就绪队列</p>
</li>
<li>
<p>进程切换：保存上下文，将PCB放入队列，选择另一进程的PCB，更新页表等内存管理数据结构，恢复上下文</p>
</li>
</ul>
<h5 id="父进程和子进程的关系" tabindex="-1"><a class="header-anchor" href="#父进程和子进程的关系" aria-hidden="true">#</a> 父进程和子进程的关系</h5>
<p>父进程终止，子进程有两种选择：1.终止；2.子进程被init进程领养</p>
<p>子进程终止，资源归还父进程</p>
<p>父进程和子进程可以共享部分资源，不能同时使用临界资源</p>
<p>父进程能给子进程分配虚拟地址空间，但不共享虚拟地址空间</p>
<h5 id="进程的组织" tabindex="-1"><a class="header-anchor" href="#进程的组织" aria-hidden="true">#</a> 进程的组织</h5>
<p>一个进程由pcb，程序段和数据段三部分构成</p>
<p>PCB的内容</p>
<ul>
<li>进程号</li>
<li>进程状态，优先级</li>
<li>进程队列指针</li>
<li>程序和数据地址</li>
<li>CPU现场保护区</li>
</ul>
<p>PCB的组织方式：</p>
<ul>
<li>链式：按照进程状态分成多个队列，每个队列里PCB相连</li>
<li>索引方式：索引表</li>
</ul>
<p>程序段：进入CPU的程序代码段</p>
<p>数据段：包括程序原始数据和执行时产生的结果</p>
<h5 id="进程的通信" tabindex="-1"><a class="header-anchor" href="#进程的通信" aria-hidden="true">#</a> 进程的通信</h5>
<p>低级通信：低级通信指的就是通过PV操作控制信号量这个动作本身。只能传输少量信息，通常用于通知事件发生。</p>
<p>高级通信：用来传输大量数据</p>
<ul>
<li>
<p>共享存储：两进程独立的虚拟地址空间映射到一块相同的物理地址空间，使用同步互斥工具（PV）进行读写控制</p>
<ul>
<li>低级方式：基于数据结构的共享</li>
<li>高级方式：基于存储区的共享</li>
</ul>
</li>
<li>
<p>消息传递：内核中存在若干消息队列，由标识符ID标记。写进程可以向队列中添加消息，读进程可以读取消息。消息是格式化的：[消息头|消息体]</p>
<ul>
<li>直接通信：直接把消息挂在接收进程的消息缓冲队列</li>
<li>间接：有中间实体转发（信箱）</li>
</ul>
</li>
<li>
<p>管道通信：管道是内存中一个特殊的pipe文件，也是一个固定大小的缓冲区，大小一般为内存中的一页4KB。半双工通信，同一时刻只能单向。</p>
<p>管道的同步互斥：管道写满时，写进程的write系统调用被阻塞，读进程才能读取；管道为空时，读进程的read调用被阻塞，写进程才能写</p>
</li>
<li>
<p>socket通信</p>
</li>
</ul>
<p><img src="https://img1.imgtp.com/2022/07/30/43shYCA1.png" alt="" loading="lazy"></p>
<h3 id="_2-1-2-线程" tabindex="-1"><a class="header-anchor" href="#_2-1-2-线程" aria-hidden="true">#</a> 2.1.2 线程</h3>
<p>进程一旦阻塞，整个进程就会挂起，即使里面有部分函数不依赖于等待的资源也不能执行。于是引入线程，作为CPU调度的基本单位，一个进程分成多个线程。线程的本质就是函数的执行</p>
<h4 id="_1-线程的组织与控制" tabindex="-1"><a class="header-anchor" href="#_1-线程的组织与控制" aria-hidden="true">#</a> 1.线程的组织与控制</h4>
<p>线程的状态：运行态，就绪态，阻塞态</p>
<p>每个线程有自己的线程控制块TCB：包括</p>
<ul>
<li>线程标识符</li>
<li>寄存器值：PC，状态寄存器，通用寄存器</li>
<li>线程运行状态</li>
<li>优先级</li>
<li>线程专有存储区：线程切换时保存现场</li>
<li>堆栈指针：过程调用时保存局部变量和返回地址</li>
</ul>
<p>线程的创建，终止</p>
<ul>
<li>同一进程的所有线程共享进程的<strong>堆、静态变量、全局变量、文件</strong>，可直接通信，切换开销小</li>
<li><strong>每个线程有自己的栈空间</strong>（存<strong>局部变量</strong>），局部变量不能共享，也不能共享线程专有的堆栈指针</li>
</ul>
<h4 id="_2-线程的实现方式" tabindex="-1"><a class="header-anchor" href="#_2-线程的实现方式" aria-hidden="true">#</a> 2.线程的实现方式</h4>
<p>用户级线程：</p>
<ul>
<li>存在在用户空间中</li>
<li>应用程序通过线程库来管理用户级线程，线程库提供线程函数接口</li>
<li><strong>操作系统内核意识不到线程的存在</strong>，所以只能仍然以进程为单位分配CPU，不能利用多核CPU。用户级线程切换无需进入内核态</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>一个最简单的线程库，可以实现并发。
	<span class="token keyword">while</span><span class="token punctuation">(</span>true<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>视频聊天<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span>文字聊天<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span>文件传输<span class="token punctuation">;</span>
        i<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
并且可见，一个用户线程被阻塞，其余的都会被阻塞
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内核级线程：</p>
<ul>
<li>内核管理内核级线程</li>
<li>线程控制块组成的线程表在内核空间中</li>
<li>每个内核级线程对应用户空间的一个用户级线程</li>
<li>可以使用多核CPU并行执行</li>
<li>缺点是线程切换时，需要用户态和内核态之间的切换，系统开销大</li>
</ul>
<p>总结：内核级线程是CPU调度的基本单位</p>
<h4 id="_3-多线程模型" tabindex="-1"><a class="header-anchor" href="#_3-多线程模型" aria-hidden="true">#</a> 3.多线程模型</h4>
<p>多对一模型：一个内核级线程对应多个用户级线程。一个线程被阻塞，整个进程被阻塞。</p>
<p>一对一：一个内核级线程对应一个用户级线程。一个线程被阻塞，其他的继续执行。操作系统给每个用户线程一个线程控制块</p>
<p>多对多：用户级线程数&gt;=内核级线程数</p>
<h4 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池" aria-hidden="true">#</a> 线程池</h4>
<p>线程池是一种多线程处理形式，提前维护多个线程，避免了处理短时间任务时创建销毁线程的代价</p>
<h4 id="协程" tabindex="-1"><a class="header-anchor" href="#协程" aria-hidden="true">#</a> 协程</h4>
<p>过多的线程会导致内存不够用，并且线程切换会有大量时间开销</p>
<p>协程本质上是代码块的相互切换执行，是线程内部的分时复用，一个线程包含多个协程。协程也有自己的栈，一般几十KB</p>
<h3 id="_2-2-处理机调度" tabindex="-1"><a class="header-anchor" href="#_2-2-处理机调度" aria-hidden="true">#</a> 2.2 处理机调度</h3>
<p>调度程序通过调度算法从就绪队列选择一个进程执行，并决定时间片大小</p>
<p>调度的三个层次：</p>
<p>（1）作业调度：从外存挑选作业到内存</p>
<p>（2）进程调度：就绪队列-》运行</p>
<p>（3）中级调度：将暂时不运行的程序挂起，调出内存到外存</p>
<h4 id="调度的时机" tabindex="-1"><a class="header-anchor" href="#调度的时机" aria-hidden="true">#</a> 调度的时机</h4>
<p>不能进程调度的情况：</p>
<ul>
<li>处理中断过程中</li>
<li>进程在os内核程序临界区中（不是普通的临界区！！！）</li>
<li>在屏蔽中断的原子操作过程中</li>
</ul>
<p>能调度的时机</p>
<ul>
<li>发生调度条件，当前进程无法进行下去</li>
<li>中断处理结束后</li>
</ul>
<h4 id="进程调度方式" tabindex="-1"><a class="header-anchor" href="#进程调度方式" aria-hidden="true">#</a> 进程调度方式</h4>
<p>抢占方式：一个进程执行时，有更重要的进程来，立即暂停进程</p>
<p>非抢占方式：继续执行，直到结束或进入阻塞态才会调度</p>
<font color=red>平均周转时间=sum（各作业等待+执行时间）/n，也就是完成时间-到达时间</font>
<h4 id="典型的调度算法" tabindex="-1"><a class="header-anchor" href="#典型的调度算法" aria-hidden="true">#</a> 典型的调度算法</h4>
<ul>
<li>
<p>先来先服务FCFS：每次从就绪队列中选择最先进入队列的进程。适合CPU密集型，不适合io密集型，对短进程不利</p>
</li>
<li>
<p>短作业优先SJF</p>
</li>
<li>
<p>优先级调度：静态优先级（创建进程时确定），动态（能够调整优先级）</p>
</li>
<li>
<p>高响应比优先调度：</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>响应比</mtext><mo>=</mo><mfrac><mrow><mtext>等待时间</mtext><mo>+</mo><mtext>服务时间</mtext></mrow><mtext>服务时间</mtext></mfrac><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><mtext>等待时间</mtext><mtext>服务时间</mtext></mfrac></mrow><annotation encoding="application/x-tex">响应比=\frac{等待时间+服务时间}{服务时间}=1+\frac{等待时间}{服务时间}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord cjk_fallback">响应比</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.0463em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord cjk_fallback">服务时间</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord cjk_fallback">等待时间</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord cjk_fallback">服务时间</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:2.0463em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord cjk_fallback">服务时间</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord cjk_fallback">等待时间</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<p>综合了短作业优先（服务时间越短响应比越高），避免了饥饿现象（等待时间越长响应比越高）</p>
</li>
<li>
<p>时间片轮转调度：时间片用完后，必须释放CPU给下一个进程，适用于分时系统，不会导致饥饿现象</p>
</li>
<li>
<p>多级反馈队列调度：设置多个优先级不同的就绪队列，优先级越高时间片越小。</p>
<p>新进程先放入第一级队列，若时间片用完时未完成，则进入第二级队列，第一级为空时才能运行第二列。不同用户均能满意</p>
</li>
<li>
<p>多级队列调度：按进程类型设置多个队列</p>
</li>
</ul>
<p>例题：P64(18)，画<strong>甘特图</strong>，纵轴是各个进程的编号，横轴是时间，只要是在运行就画实线。</p>
<p><img src="https://img1.imgtp.com/2022/07/30/80nZnuUA.png" alt="" loading="lazy"></p>
<h3 id="_2-3-进程同步互斥" tabindex="-1"><a class="header-anchor" href="#_2-3-进程同步互斥" aria-hidden="true">#</a> 2.3 进程同步互斥</h3>
<p>进程并发执行的异步性：并发的进程速度不可预知</p>
<p>临界资源：<strong>一次仅允许一个进程使用</strong>的资源</p>
<p>访问临界资源的过程分为：</p>
<ul>
<li>进入区：检查能否使用临界资源，若可则加锁</li>
<li>临界区：<strong>访问临界资源的一段代码</strong></li>
<li>退出区：解锁</li>
<li>剩余区：代码其余部分</li>
</ul>
<p>同步：各进程必须有一个执行顺序，产生直接制约关系</p>
<p>互斥：间接制约关系，一个退出临界区另一个才能执行</p>
<h4 id="_1-互斥的四个原则" tabindex="-1"><a class="header-anchor" href="#_1-互斥的四个原则" aria-hidden="true">#</a> 1.互斥的四个原则</h4>
<ul>
<li>空闲让进：空闲资源允许进程访问</li>
<li>忙则等待：两个进程不能同时进入临界区</li>
<li>有限等待：进程等待进入临界区的时间有限，保证不会饥饿</li>
<li><strong>让权等待</strong>：当进程无法进入临界区时，应立即释放CPU资源，而不是忙等（一直while(true)）。让权等待原则不必须遵循</li>
</ul>
<h4 id="_2-硬件和软件实现进程互斥" tabindex="-1"><a class="header-anchor" href="#_2-硬件和软件实现进程互斥" aria-hidden="true">#</a> 2.硬件和软件实现进程互斥</h4>
<h5 id="_1-软件实现" tabindex="-1"><a class="header-anchor" href="#_1-软件实现" aria-hidden="true">#</a> 1.软件实现</h5>
<p>（1）单标志法：turn标志，使用完让给对方。违反“空闲让进”，即一个进程不想进入临界区，另一个进程也进入不了</p>
<p>（2）双标志法先检查：先检查对方是否想进入，再上锁。可能会二者都进入临界区</p>
<p>（3）双标志法后检查：先上锁，再检查。二者都无法进入临界区</p>
<p><strong>以上问题的关键在于上锁和检查两个操作被分隔开了</strong></p>
<p>（4）Peterson法：</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token function">Pi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    flag<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>true<span class="token punctuation">;</span>turn<span class="token operator">=</span>j<span class="token punctuation">;</span><span class="token comment">//表明自己想进入，又表示可以让给对方</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>flag<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">&amp;&amp;</span>turn<span class="token operator">==</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
    临界区<span class="token punctuation">;</span>
    flag<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>false<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">Pj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    flag<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>true<span class="token punctuation">;</span>turn<span class="token operator">=</span>i<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>flag<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&amp;&amp;</span>turn<span class="token operator">==</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    临界区<span class="token punctuation">;</span>
    flag<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>false<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>先表明自己想进入，又表示可以让给对方。如果对方也想进入，且自己是最后谦让的，那么就真的让给对方，自己循环等待。</li>
<li>可以解决单、双标志法的问题，实现临界区互斥，但仍<strong>不满足让权等待</strong>，会忙等</li>
<li>没有饥饿问题</li>
</ul>
<h5 id="_2-硬件实现" tabindex="-1"><a class="header-anchor" href="#_2-硬件实现" aria-hidden="true">#</a> 2.硬件实现</h5>
<p>（1）中断屏蔽法：一个进程想访问临界区时，屏蔽中断，禁止切换其他进程。缺点是只能屏蔽一个CPU的中断，多核时其他CPU运行的进程可以访问临界区</p>
<p>（2）TSL指令（test and set）：使用原子操作，使得上锁和检查两个操作不可分割。缺点：<strong>不满足让权等待</strong>，会忙等</p>
<p>（3）swap指令：和tsl逻辑相同</p>
<h4 id="_3-信号量-pv操作" tabindex="-1"><a class="header-anchor" href="#_3-信号量-pv操作" aria-hidden="true">#</a> 3.信号量，PV操作</h4>
<p>信号量S（semaphore），使用wait和signal两种原语对信号量进行操作，分别简写为荷兰语的P和V</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">int</span> S<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token function">wait</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//P：先检查后上锁（因为是原语所以不可分割）</span>
使用资源<span class="token punctuation">;</span>
<span class="token function">signal</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//V：释放资源</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（1）整型信号量：S是一个整数，代表资源数量。不满足让权等待原则，仍需要忙等</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token function">wait</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//新进程到来</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>S<span class="token operator">&lt;=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    S<span class="token operator">--</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">signal</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">{</span>
    S<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）记录型信号量：信号量S记录资源数量，同时维护一个阻塞队列</p>
<p>当进程申请不到资源时，不会忙等，而是加入阻塞队列中，当有资源被释放时，会从阻塞队列中唤醒一个进程。满足了让权等待原则</p>
<p>S的绝对值就是当前被阻塞的进程数</p>
<p>每当一个进程被阻塞，S的值-1；每当V操作一次，S的值+1，一个进程从阻塞队列进入就绪队列</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> value<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">process</span> <span class="token operator">*</span>L<span class="token punctuation">;</span>
<span class="token punctuation">}</span>semaphore<span class="token punctuation">;</span>
semaphore S<span class="token punctuation">;</span>
S<span class="token punctuation">.</span>value<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>

<span class="token function">wait</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">{</span>
    S<span class="token punctuation">.</span>value<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>S<span class="token punctuation">.</span>value<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        当前进程加入阻塞队列S<span class="token punctuation">.</span>L
        <span class="token function">block</span><span class="token punctuation">(</span>S<span class="token punctuation">.</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//阻塞进程</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">signal</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">{</span>
    S<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>S<span class="token punctuation">.</span>value<span class="token operator">&lt;=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        从阻塞队列中移出一个进程P
        <span class="token function">wakeup</span><span class="token punctuation">(</span>P<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//唤醒进程P，阻塞态到就绪态</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="信号量实现同步、互斥" tabindex="-1"><a class="header-anchor" href="#信号量实现同步、互斥" aria-hidden="true">#</a> 信号量实现同步、互斥</h5>
<p>同步：将信号量初始化为0。希望P1的代码y在P2的x之后执行，在y前面检查是否有资源，x完成后释放资源</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>semaphore mutex<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token function">P1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    x<span class="token punctuation">;</span>
    <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">P2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>互斥：信号量初始为1，用P和V操作夹紧临界区</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>semaphore mutex<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token function">P1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    P1进入临界区<span class="token punctuation">;</span>
    <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">P2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    P2进入临界区<span class="token punctuation">;</span>
    <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="信号量实现同步关系" tabindex="-1"><a class="header-anchor" href="#信号量实现同步关系" aria-hidden="true">#</a> 信号量实现同步关系</h5>
<p>对有向无环图（节点是进程）的每条边都设置一个信号量</p>
<p>对于每个进程，首先检查前驱节点（P），进行操作，最后释放后继节点（V）。</p>
<p><img src="https://img1.imgtp.com/2022/07/30/JBvQSoL8.png" alt="" loading="lazy"></p>
<h4 id="_4-管程和条件变量" tabindex="-1"><a class="header-anchor" href="#_4-管程和条件变量" aria-hidden="true">#</a> 4.管程和条件变量</h4>
<p>管程：其实就是把同步互斥操作封装起来，成为一个类，每次只需要直接通过这个类的过程（函数）即可。</p>
<p>互斥由编译器负责，同步需要提前设置条件变量</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>condition full<span class="token punctuation">,</span>empty<span class="token punctuation">;</span>
<span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>count<span class="token operator">==</span>n<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">wait</span><span class="token punctuation">(</span>full<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token function">insert_item</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>count<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">signal</span><span class="token punctuation">(</span>empty<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
item <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>count<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//当没有产品时不能remove，因此wait函数将调用wait操作的消费者进程加入条件变量empty的阻塞队列中</span>
        <span class="token function">wait</span><span class="token punctuation">(</span>empty<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    count<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>count<span class="token operator">==</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">signal</span><span class="token punctuation">(</span>full<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">remove_item</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">producer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        item<span class="token operator">=</span>生产一个产品<span class="token punctuation">;</span>
        <span class="token function">insert</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">consumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        item<span class="token operator">=</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        消费item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如上面的代码，已经写好ProducerConsumer类，由编译器保证同时只能有一个进程使用类里面的insert或remove函数，实现互斥。（java的synchronize关键字）生产者和消费者直接调用函数即可</p>
<p>对于同步，则采用wait和signal函数（即P和V）来实现对条件变量empty和full的同步访问。与信号量不同的是，条件变量没有数值</p>
<h4 id="_5-经典同步互斥问题" tabindex="-1"><a class="header-anchor" href="#_5-经典同步互斥问题" aria-hidden="true">#</a> 5.经典同步互斥问题</h4>
<h5 id="生产者-消费者问题" tabindex="-1"><a class="header-anchor" href="#生产者-消费者问题" aria-hidden="true">#</a> 生产者-消费者问题</h5>
<p>缓冲区内有n个缓冲单元</p>
<p>两个同步关系：</p>
<ul>
<li>
<p>缓冲区没满，生产者才能将数据放入缓冲区。设置同步信号量empty，表示空的缓冲单元个数，初始为n</p>
</li>
<li>
<p>缓冲区不空，消费者才能取走数据。设置同步信号量full，表示满的缓冲单元个数，初始为0</p>
<p>注：并非缓冲区全空，生产者才能生产</p>
</li>
</ul>
<p>一个互斥关系：</p>
<ul>
<li>任何两个进程不能同时访问缓冲区。设置互斥信号量mutex</li>
</ul>
<p>不能改变P(empty)和P(mutex)的顺序，因为先检查缓冲区没满，才能继续上锁生产。否则当缓冲区满了，生产者已经上锁并且被阻塞（卡在empty），消费者也被阻塞（卡在mutex），造成死锁</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code>semaphore mutex<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//缓冲区互斥锁</span>
semaphore empty<span class="token operator">=</span>n<span class="token punctuation">;</span><span class="token comment">//空的缓冲单元数量</span>
semaphore full<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//满的缓冲单元数量</span>
<span class="token function">producer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//生产者</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        生产数据；
        <span class="token function">P</span><span class="token punctuation">(</span>empty<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//检查是否有空的缓冲单元数，若有，则空缓冲单元-1</span>
        <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        将数据放入缓冲区；
        <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">V</span><span class="token punctuation">(</span>full<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//满缓冲区+1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">consumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//消费者</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">P</span><span class="token punctuation">(</span>full<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//检查满的缓冲单元数量，若有，则满缓冲单元-1</span>
        <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        取走一个数据；
        <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">V</span><span class="token punctuation">(</span>empty<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//空缓冲区+1</span>
        消费数据；
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="读者-写者问题" tabindex="-1"><a class="header-anchor" href="#读者-写者问题" aria-hidden="true">#</a> 读者-写者问题</h5>
<p>读者和写者地位不同。没有同步关系</p>
<p>一个写进程和其他进程互斥：信号量rw实现</p>
<p>（1）读进程优先法</p>
<p>count：记录读者数量</p>
<p>mutex：保证对count的检查和count++两个操作不可分割</p>
<p>rw:一个写进程和其他进程互斥</p>
<p>第一个到来的读者进行rw上锁，最后一个读者进行rw解锁</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
semaphore mutex<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
semaphore rw<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token function">writer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">P</span><span class="token punctuation">(</span>rw<span class="token punctuation">)</span><span class="token punctuation">;</span>
        writing<span class="token punctuation">;</span>
        <span class="token function">V</span><span class="token punctuation">(</span>rw<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">reader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//第一个读者负责上锁</span>
            <span class="token function">P</span><span class="token punctuation">(</span>rw<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        reading<span class="token punctuation">;</span>
        
        <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        count<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//没有连续的读者了，才能解锁</span>
            <span class="token function">V</span><span class="token punctuation">(</span>rw<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）读写公平法</p>
<p>信号量w保证到来的不同进程进入一个阻塞队列，先进先出，不会出现读进程后来但是优先于写进程的情况，保证读写公平</p>
<p>如果读者在写者前到来，此时读者在reading，写者会卡在P(rw)</p>
<p>如果写者在读者前到来，此时写者在writing，读者被卡在P(w)</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
semaphore mutex<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
semaphore rw<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
semaphore w<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token function">writer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">P</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">P</span><span class="token punctuation">(</span>rw<span class="token punctuation">)</span><span class="token punctuation">;</span>
        writing<span class="token punctuation">;</span><span class="token comment">//此时读者或其他写者被卡在P(w);</span>
        <span class="token function">V</span><span class="token punctuation">(</span>rw<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">V</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">reader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">P</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">P</span><span class="token punctuation">(</span>rw<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">V</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>

        reading<span class="token punctuation">;</span><span class="token comment">//此时写者被卡在P(rw);其他读者则跳过P(rw)也访问临界区</span>

        <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        count<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">V</span><span class="token punctuation">(</span>rw<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="哲学家就餐问题" tabindex="-1"><a class="header-anchor" href="#哲学家就餐问题" aria-hidden="true">#</a> 哲学家就餐问题</h5>
<p>n个哲学家围坐，中间n根筷子，拿起两根才能进餐。专门解决临界资源数量&gt;1的问题</p>
<p>三种方法防止死锁</p>
<ul>
<li>至多允许n-1个人同时进餐</li>
<li>奇数号哲学家先拿左边筷子再拿右边，偶数号相反，这样避免了一些人占有一只筷子再等待另一只</li>
<li>仅当左右筷子都可用时才能拿起筷子</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token comment">//方法一</span>
semaphore chopstick<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
semaphore mutex<span class="token operator">=</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//至多允许n-1个人同时进餐</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    chopstick<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">Pi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        思考；
        <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">P</span><span class="token punctuation">(</span>chopstick<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//左手的筷子</span>
        <span class="token function">P</span><span class="token punctuation">(</span>chopstick<span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//右手的筷子</span>
        就餐；
        <span class="token function">V</span><span class="token punctuation">(</span>chopstick<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">V</span><span class="token punctuation">(</span>chopstick<span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//方法三</span>
semaphore chopstick<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
semaphore mutex<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//拿起左右筷子的原子锁</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    chopstick<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">Pi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        思考；
        <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">P</span><span class="token punctuation">(</span>chopstick<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//左手的筷子</span>
        <span class="token function">P</span><span class="token punctuation">(</span>chopstick<span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//右手的筷子</span>
        <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        就餐；
        <span class="token function">V</span><span class="token punctuation">(</span>chopstick<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">V</span><span class="token punctuation">(</span>chopstick<span class="token punctuation">[</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">%</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="利用pv操作解题" tabindex="-1"><a class="header-anchor" href="#利用pv操作解题" aria-hidden="true">#</a> 利用PV操作解题</h4>
<p>先分析同步互斥关系，几个关系几个信号量。对于互斥，用PV夹紧互斥行为；对于同步，在a进程末尾加V，在b进程开始加P。</p>
<p>两个同步关系，一个互斥关系，需要三个信号量。</p>
<p>初始有几个资源，信号量就是初始化为几</p>
<h3 id="_2-4-死锁" tabindex="-1"><a class="header-anchor" href="#_2-4-死锁" aria-hidden="true">#</a> 2.4 死锁</h3>
<p>多个进程因竞争资源造成相互等待。（区分：饥饿只是一个进程；死循环不是操作系统原因）</p>
<p>死锁产生的四个必要条件</p>
<ul>
<li>互斥条件：一段时间内资源只能被一个进程占有</li>
<li>不剥夺条件：资源只能被主动释放，不能被抢夺</li>
<li>请求并保持条件：进程一边保持资源不放，一边请求新的资源</li>
<li>循环等待条件：存在循环等待链</li>
</ul>
<h4 id="死锁预防-破坏四个条件" tabindex="-1"><a class="header-anchor" href="#死锁预防-破坏四个条件" aria-hidden="true">#</a> 死锁预防：破坏四个条件</h4>
<ul>
<li>破坏互斥条件：互斥资源转为共享</li>
<li>破坏不剥夺条件：必须释放；强行剥夺</li>
<li>破坏请求并保持条件：开始一次性申请全部资源</li>
<li>破坏循环等待条件：顺序资源分配法，把资源编号，拥有小编号才能申请大编号</li>
</ul>
<p>死锁预防不改变进程之间的关系</p>
<h4 id="死锁避免-银行家算法" tabindex="-1"><a class="header-anchor" href="#死锁避免-银行家算法" aria-hidden="true">#</a> 死锁避免：银行家算法</h4>
<p>事先计算本次分配的安全性（需要知道资源需求），避免进入不安全状态。</p>
<p>银行家算法用来试探分配（而不是限制顺序），避免进入死锁状态，但无法判断当前是否处于死锁状态</p>
<p>安全状态：进程推进的一个序列，使得可以顺序完成。（例如先让P2执行，完成后归还资源，再让其他执行。）进入安全状态一定不会发生死锁，不安全状态不一定死锁</p>
<p><strong>银行家算法</strong>：现在已知每个进程对资源的最大需求量，已分配的资源量。</p>
<p>如果当前剩余可用资源&gt;=一个进程的最大需求量-已分配资源量，则可以把该进程加入安全序列，然后当前剩余可用资源+=该进程已分配的资源量。进行迭代查询</p>
<img src="https://img1.imgtp.com/2022/07/30/p1VOqmF4.png" alt="银行家算法" style="zoom:80%;" />
<h4 id="死锁检测-画资源分配图" tabindex="-1"><a class="header-anchor" href="#死锁检测-画资源分配图" aria-hidden="true">#</a> 死锁检测：画资源分配图</h4>
<p>请求边：进程节点-&gt;资源节点：申请一个资源</p>
<p>分配边：资源节点-&gt;进程节点：已经分配了资源</p>
<img src="https://img1.imgtp.com/2022/07/30/vlGocWoT.png" style="zoom:80%;" />
<p>死锁检测需要基于死锁定理：</p>
<p>如果某个进程申请各个资源数&lt;=剩余资源数，则删掉它相连的所有边，称为孤立节点。如果最后所有点都是孤立的，则称图是可完全简化的，一定不会死锁；否则会发生死锁</p>
<h4 id="死锁解除" tabindex="-1"><a class="header-anchor" href="#死锁解除" aria-hidden="true">#</a> 死锁解除</h4>
<p>资源剥夺法：挂起死锁进程，<strong>抢占死锁进程资源</strong>；</p>
<p>撤销进程法：强制撤销死锁进程</p>
<p>进程回退法：进程回退到无死锁时</p>
<h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4>
<p>死锁预防的破坏循环等待条件会限制进程申请资源的顺序</p>
<p>死锁避免（银行家算法）需要每个进程运行所需资源总量信息，死锁检测并不关心总量</p>
<p>死锁检测（死锁定理）会给可能导致死锁的进程分配资源，死锁避免不会</p>
<h4 id="计算题" tabindex="-1"><a class="header-anchor" href="#计算题" aria-hidden="true">#</a> 计算题</h4>
<p>求不会发生死锁的最小资源数：sum{每个进程的最大需求量-1}+1</p>
</div></template>
