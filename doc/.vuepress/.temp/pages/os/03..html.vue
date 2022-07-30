<template><div><h2 id="_3-0-程序装入和链接" tabindex="-1"><a class="header-anchor" href="#_3-0-程序装入和链接" aria-hidden="true">#</a> 3.0 程序装入和链接</h2>
<h3 id="一、程序装入和链接" tabindex="-1"><a class="header-anchor" href="#一、程序装入和链接" aria-hidden="true">#</a> 一、程序装入和链接</h3>
<p>C程序执行过程：</p>
<ul>
<li>编译：源程序编译后得到若干目标模块</li>
<li>链接：与库函数链接后形成完整装入模块（可执行文件）。可执行文件中的地址都是<strong>逻辑地址/相对地址</strong>
<ul>
<li>静态链接：程序运行前就链接完全</li>
<li>动态链接：边装入边链接，若发生外部事件，再链接需要的模块。动态链接库dll是PE文件（可执行文件）。优点是方便模块的修改和更新</li>
</ul>
</li>
<li>装入（加载）：读取可执行文件头，确定代码段和数据段大小，创建一个足够大的内存空间，将可执行文件装入内存运行，要确定<strong>物理地址</strong>
<ul>
<li>绝对装入：<strong>编译时</strong>就知道程序要装入内存的绝对地址，只适用于单道程序环境</li>
<li>静态重定位装入：
<ul>
<li>多道程序时，每个目标模块的起始地址从0开始，各地址均为相对地址</li>
<li><strong>每个作业内存连续</strong>，作业全部装入内存，不可移动</li>
</ul>
</li>
<li><strong>动态重定位</strong>装入：
<ul>
<li>程序可以移动，可以装入不连续的存储区，借助重定位寄存器（基址寄存器，作业的起始地址）动态申请内存。</li>
<li><strong>程序执行时</strong>，把逻辑地址转为物理地址</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>对于Java程序，首先被编译成Java字节码而不是汇编语言。为了可移植性，使用Java虚拟机JVM解释Java字节码文件，不同机器的Java虚拟机不同</p>
<p>2.逻辑地址空间和物理地址空间</p>
<ul>
<li>编译后，每个目标模块从0开始编址，这是相对地址。</li>
<li>链接时，将每个模块顺序相连，构成从0开始的逻辑地址空间，相对地址-&gt;<strong>逻辑地址</strong>。</li>
<li>装入时，通过地址重定位，将逻辑地址转为物理地址，装入内存。</li>
</ul>
<p>3.内存保护</p>
<p>重定位（基址）寄存器包含物理地址最小值，<strong>界地址寄存器包含逻辑地址最大值</strong>。逻辑地址先判断是否小于界地址寄存器内容，保证不越界，然后再加上基址，得到物理地址</p>
<h2 id="_3-1-内存管理概念" tabindex="-1"><a class="header-anchor" href="#_3-1-内存管理概念" aria-hidden="true">#</a> 3.1 内存管理概念</h2>
<p>内存管理包括：内存空间的分配和回收，地址转换，扩充内存，存储保护</p>
<h3 id="二、内存扩充-覆盖-交换技术" tabindex="-1"><a class="header-anchor" href="#二、内存扩充-覆盖-交换技术" aria-hidden="true">#</a> 二、内存扩充：覆盖，交换技术</h3>
<p>覆盖技术：解决进程放不进内存的问题</p>
<p>将用户空间分成固定区和若干覆盖区，<strong>进程中经常活跃的部分放入固定区</strong>，其余的部分按调用关系分段，把即将访问的段放入覆盖区，其他部分放在外存。</p>
<p>交换技术：<strong>将整个就绪态进程挂起</strong>，换出内存到外存；将准备运行的程序换入（中级调度）</p>
<h3 id="三、连续分配管理方式" tabindex="-1"><a class="header-anchor" href="#三、连续分配管理方式" aria-hidden="true">#</a> 三、连续分配管理方式</h3>
<p>连续分配：为一个用户程序分配连续的内存空间</p>
<ul>
<li>单一连续分配：内存中只有一道程序。无碎片，可采用覆盖技术，但只能单道程序</li>
<li>固定分区分配：
<ul>
<li>将内存分成固定大小（大小可以相同）的若干区域，每个分区一道作业。</li>
<li>程序小于空间大小时，会导致分区内部存在空间浪费，产生<strong>内部碎片</strong></li>
</ul>
</li>
<li>动态分区分配：
<ul>
<li>动态建立分区，分区大小=进程大小</li>
<li>随着旧进程的换出和新进程的换入，分区之间会产生<strong>外部碎片</strong></li>
<li>紧凑技术：操作系统不断对进程移动和调整，避免外部碎片</li>
<li>回收时，若回收的块与空闲块相邻，需要合并</li>
</ul>
</li>
</ul>
<h4 id="动态分区分配策略" tabindex="-1"><a class="header-anchor" href="#动态分区分配策略" aria-hidden="true">#</a> 动态分区分配策略</h4>
<ul>
<li>首次适应算法(First Fit)：空闲分区以<strong>地址递增</strong>的次序链接，分配内存时顺序查找，通常效果最好</li>
<li>最佳适应算法(Best Fit)：空闲分区按照<strong>从小到大</strong>的次序链接，最后找到的总是大小最接近的空闲分区。但会产生最多的外部碎片</li>
<li>最坏适应算法：空闲分区按照<strong>从大到小</strong>的次序链接</li>
<li>邻近适应算法(Next Fit)：从上次查找结束的位置继续查找，没有查找开销</li>
</ul>
<h3 id="四、非连续分配管理方式" tabindex="-1"><a class="header-anchor" href="#四、非连续分配管理方式" aria-hidden="true">#</a> 四、非连续分配管理方式</h3>
<p>非连续分配只能动态重定位</p>
<h4 id="_1-基本分页存储管理" tabindex="-1"><a class="header-anchor" href="#_1-基本分页存储管理" aria-hidden="true">#</a> 1.基本分页存储管理</h4>
<p>为了避免固定分区的内部碎片和动态分区的外部碎片，引入分页思想：把页作为主存的基本单位。</p>
<p>然而分页机制仍会产生内部碎片，即进程为最后一个不完整的块分配一整个页时，但内部碎片很小。</p>
<p>分页机制分为：</p>
<ul>
<li>基本分页存储管理：程序全部放入内存</li>
<li>请求分页存储管理（虚拟内存）：程序部分进入内存，需要换入换出（这就叫<strong>请求机制</strong>）</li>
</ul>
<p>逻辑地址：【虚页号|页内偏移】</p>
<ul>
<li>如果计算机按字节编址，虚拟空间为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">2^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span>B，则逻辑地址就是n位</li>
<li>根据页面大小确定页内偏移位数</li>
</ul>
<p>页表项：【虚页号|物理页号】</p>
<p>访存过程：首先根据页表基址+虚页号*页表项长度可找到页表项，页表项中的物理页号拼接上页内偏移就是物理地址</p>
<img src="https://img1.imgtp.com/2022/07/30/ymDroGf4.png" style="zoom:50%;" />
<p>所有进程的PCB和页表都常驻内存。注意页表在内存的系统区</p>
<p>二级页表</p>
<p>逻辑地址：【一级页号|二级页号|页内偏移】</p>
<p>一级页表项：索引-【二级页表所在物理块号】</p>
<p>二级页表项：索引-【物理块号】</p>
<h4 id="_2-基本分段存储管理" tabindex="-1"><a class="header-anchor" href="#_2-基本分段存储管理" aria-hidden="true">#</a> 2.基本分段存储管理</h4>
<p>为了让用户方便编程，将逻辑空间划分成不同段，存储不同逻辑的内容。如数据段，代码段，堆栈段等。</p>
<p>段内连续，段间不一定连续</p>
<p>逻辑地址：【段号|段内偏移】</p>
<p>段表项：【段号|段长|段基址】</p>
<p>每个进程都有一张段表，通过段基址+段内偏移得到物理地址</p>
<img src="https://img1.imgtp.com/2022/07/30/OOHlzFtU.png" style="zoom:50%;" />
<ul>
<li>程序如何分段是在用户编程时决定的；</li>
<li>分段有利于动态链接；</li>
<li>因为在内存中直接划分出来段，所以只有外部碎片。只要是固定的分配就有内部碎片，其余的都会产生外部碎片</li>
</ul>
<p>分段机制是二维地址结构，确定地址需要两个参数：因为段长不确定，所以需要告知段号和段内偏移位数，才能知道段内偏移到底是多少。而分页机制地址是一维的，因为页大小固定，知道页号剩下的就是页内偏移了。段页式也是二维。</p>
<p>共享段：</p>
<p>如果两个进程共享内存中的一个段S，则操作系统对这个段维护一张共享段表。共享段表包括使用该段的所有进程名，以及存取控制权限等。</p>
<p>由于两个进程有不同的段表，因此S的逻辑段号可能不同，但是对应段表项的段基址肯定相同。</p>
<h4 id="_3-段页式存储管理" tabindex="-1"><a class="header-anchor" href="#_3-段页式存储管理" aria-hidden="true">#</a> 3.段页式存储管理</h4>
<p>既能反应程序的逻辑结构，又能提高内存利用率</p>
<p>逻辑地址：【段号|页号|页内偏移】</p>
<p>段号-段表项-页表基址-页表项-物理页号-物理地址</p>
<p>内部碎片，外部碎片都有</p>
<p>计算题：log页表数=页目录项数</p>
<h2 id="_3-2-虚拟内存管理" tabindex="-1"><a class="header-anchor" href="#_3-2-虚拟内存管理" aria-hidden="true">#</a> 3.2 虚拟内存管理</h2>
<h3 id="一、虚拟内存的基本概念" tabindex="-1"><a class="header-anchor" href="#一、虚拟内存的基本概念" aria-hidden="true">#</a> 一、虚拟内存的基本概念</h3>
<p>虚拟存储器：包括内存和作为虚拟内存的部分硬盘，将需要的页换入内存，不需要的页换出，好像给程序员提供了比实际大得多的内存</p>
<p>按需调页策略适用于有局部性原理（时间、空间）的场景</p>
<p>虚拟存储器需要的硬件支持：</p>
<ul>
<li>内存和外存</li>
<li>页表</li>
<li>中断机构</li>
<li>地址变换机构</li>
</ul>
<h3 id="二、请求分页管理方式" tabindex="-1"><a class="header-anchor" href="#二、请求分页管理方式" aria-hidden="true">#</a> 二、请求分页管理方式</h3>
<p>请求分页系统：在基础分页系统之上，增加了请求调页、页面置换功能。只需把当前需要的部分页面装入内存</p>
<p>请求分页管理的页表项：【页号|物理块号|状态位|访问字段（次数）|修改位|外存地址】</p>
<ul>
<li>先在快表（cache）中查需要的页表项，没有则查页表</li>
<li>若页表中该页表项有效位为0，则发生缺页，产生缺页中断（内部中断），请求操作系统将页调入内存</li>
<li>首先阻塞进程，然后看内存中有没有空闲块，若有则将需要的页从磁盘调入内存块中，并建立页表项到物理页的映射，然后再访问内存块</li>
<li>若没有，则淘汰内存的一页，换入需要的页</li>
</ul>
<h3 id="三、页面置换算法" tabindex="-1"><a class="header-anchor" href="#三、页面置换算法" aria-hidden="true">#</a> 三、页面置换算法</h3>
<p>选择哪个页用于换出</p>
<p>（1）最佳置换算法OPT：换出未来最长时间内不被访问的页面</p>
<p>（2）先进先出FIFO：可能会产生Belady现象，物理页数增大，缺页次数反增</p>
<p>（3）<strong>最近最久未使用LRU</strong>：</p>
<ul>
<li>在页表项中增加一个访问字段LRU<strong>记录自上次访问以来的时间</strong>。</li>
<li>给进程分配k个物理页，则LRU位的长度是<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mi>k</mi></mrow><annotation encoding="application/x-tex">\log_2k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9386em;vertical-align:-0.2441em;"></span><span class="mop"><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.207em;"><span style="top:-2.4559em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2441em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span>位</li>
<li>需要硬件支持，来对所有的页进行排序，所以耗费高</li>
</ul>
<p>（4）<strong>时钟置换算法CLOCK</strong>：页面在一个循环队列中，若进入内存就置访问位为1。需要替换时，系统查找访问位=0的页面换出，如果找到1，则置0，在后面继续找直到找到0</p>
<p>（5）改进型时钟置换算法：设置两个位（访问位u，修改位m），最多进行四轮扫描：</p>
<ul>
<li>第一轮：找（0,0）用于置换，失败进入第二轮</li>
<li>第二轮：找（0,1）用于置换。所有扫描过的帧的访问位u设为0，即(1,0)变为(0,0), (1,1)变为(0,1)。失败进入第三轮</li>
<li>第三轮：找（0,0）用于置换。失败进入第四轮</li>
<li>第四轮：找（0,1）用于置换</li>
<li>因此页面淘汰顺序是(0,0)-&gt;(0,1)-&gt;(1,0)-&gt;(1,1)，先淘汰没访问过的，再淘汰访问过没修改过的，最后淘汰访问过修改过的</li>
</ul>
<h3 id="四、页面分配策略" tabindex="-1"><a class="header-anchor" href="#四、页面分配策略" aria-hidden="true">#</a> 四、页面分配策略</h3>
<h4 id="驻留集大小" tabindex="-1"><a class="header-anchor" href="#驻留集大小" aria-hidden="true">#</a> 驻留集大小</h4>
<p>驻留集：os决定到底读多少页进入内存，即给特定的进程分配多少物理页（页框）</p>
<p>分配策略：【固定】指的是每个进程分配的物理页数一定，【局部】指的是一个进程缺页时只能把自己的页换出</p>
<ul>
<li>固定分配局部置换：每个进程分配一定数目的物理页，只能换入换出自己的页</li>
<li>可变分配全局置换：每个进程物理块数不确定，os维护一个空闲块队列，按需分配</li>
<li>可变分配局部置换：前期每个进程块数固定，但若频繁换页，os为其分配物理块</li>
</ul>
<p>没有固定分配全局置换！！因为每个进程的页面数是不变的，不能换入其他进程的页</p>
<h4 id="调入页面的时机" tabindex="-1"><a class="header-anchor" href="#调入页面的时机" aria-hidden="true">#</a> 调入页面的时机</h4>
<p>预调页策略：预先将不久之后会访问的页面调入内存</p>
<p>请求调页策略：缺页时请求，系统将物理页调入内存</p>
<h4 id="从何处调入页面" tabindex="-1"><a class="header-anchor" href="#从何处调入页面" aria-hidden="true">#</a> 从何处调入页面</h4>
<p>在具有对换功能的操作系统中，通常将外存分为文件区和对换区</p>
<p>文件区用于存放文件，对换区用于存放从内存换出的进程，对换区io速度更快</p>
<p>若对换区足够大，程序运行前，将文件从文件区复制到对换区；</p>
<p>否则，不会被修改的文件放在文件区，可能被修改的放入对换区</p>
<h3 id="五、抖动现象" tabindex="-1"><a class="header-anchor" href="#五、抖动现象" aria-hidden="true">#</a> 五、抖动现象</h3>
<p>表现为：磁盘的繁忙率很高，CPU利用率很低</p>
<p>只有虚拟存储才会产生抖动现象。因为频繁访问的页面数&gt;可用的物理页数，所以<strong>刚换出的页面又要换入</strong>（宏观的，不一定是紧邻的）。导致处理机一直在换页而不是执行进程</p>
<p>解决方法：<strong>撤销部分进程</strong>，减少需要交换的页面数量</p>
<h3 id="六、工作集" tabindex="-1"><a class="header-anchor" href="#六、工作集" aria-hidden="true">#</a> 六、工作集</h3>
<p>某段时间内，进程要访问的页面集合，构成工作集窗口。</p>
<p>当前访问的<strong>前n页去重</strong>就是工作集</p>
<h3 id="七、地址翻译的全过程" tabindex="-1"><a class="header-anchor" href="#七、地址翻译的全过程" aria-hidden="true">#</a> 七、地址翻译的全过程</h3>
<p>虚拟地址划分</p>
<p>页表项</p>
<p>TLB表项</p>
<p>物理地址划分</p>
<p>cache项</p>
<h3 id="虚存大小问题" tabindex="-1"><a class="header-anchor" href="#虚存大小问题" aria-hidden="true">#</a> 虚存大小问题</h3>
<p>虚存大小&lt;=内存+外存，否则没有足够的空间供虚存使用</p>
<p>虚存大小&lt;=计算机地址位数能表示的最大容量（虚存理论上的上限，是决定因素）</p>
<p>如何确定使用几级页表：</p>
<p>先根据虚拟地址空间大小确定虚拟地址位数，从而划分虚拟地址为【虚页号|页内偏移】。</p>
<p>每页的页表项数=页大小/页表项大小，那么每级页表的索引需要log2(页表项数)位</p>
<p>虚页号长度/log(页表项数)就是需要的页表级数。P208(29)</p>
</div></template>
