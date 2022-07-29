<template><div><h2 id="存储系统基本概念" tabindex="-1"><a class="header-anchor" href="#存储系统基本概念" aria-hidden="true">#</a> 存储系统基本概念</h2>
<h3 id="存储器的层次化结构" tabindex="-1"><a class="header-anchor" href="#存储器的层次化结构" aria-hidden="true">#</a> 存储器的层次化结构</h3>
<p><img src="https://img1.imgtp.com/2022/07/29/E0axxyRX.svg" alt="" loading="lazy"></p>
<p>辅存中的数据要调入主存后才被CPU访问</p>
<p><img src="https://img1.imgtp.com/2022/07/29/64sfGZu6.svg" alt="" loading="lazy"></p>
<p>有的教材把安装在电脑内部的磁盘称为&quot;辅存&quot;, 把U盘, 光盘等称为&quot;外存&quot;. 也有的教材把磁盘, U盘, 光盘等统称为&quot;辅存&quot;或者&quot;外存&quot;</p>
<ul>
<li>主存-辅存: 实现虚拟操作系统, 解决了主存容量不够的问题</li>
<li>Cache-主存: 解决了主存与CPU速度不匹配的问题</li>
</ul>
<h3 id="存储器的分类" tabindex="-1"><a class="header-anchor" href="#存储器的分类" aria-hidden="true">#</a> 存储器的分类</h3>
<h4 id="按照层次" tabindex="-1"><a class="header-anchor" href="#按照层次" aria-hidden="true">#</a> 按照层次</h4>
<ul>
<li>高速缓存(Cache)</li>
<li>主存储器(主存, 内存)</li>
<li>辅助存储器(辅存, 外存)</li>
</ul>
<h4 id="存储介质" tabindex="-1"><a class="header-anchor" href="#存储介质" aria-hidden="true">#</a> 存储介质</h4>
<ul>
<li>半导体存储器(主存, Cache)</li>
<li>磁表面存储器(磁盘, 磁带)</li>
<li>光存储器(光盘, DVD)</li>
</ul>
<h4 id="存取方式" tabindex="-1"><a class="header-anchor" href="#存取方式" aria-hidden="true">#</a> 存取方式</h4>
<ul>
<li>随机存取存储器(Random Access Memory, RAM): 读写任何一个存储单元所需的时间都相同, 与存储单元所在的物理位置无关</li>
<li>顺序存取存储器(Sequential Access Memory, SAM): 读写一个存储单元所需的时间取决于存储单元所在的物理位置</li>
<li>直接存取存储器(Direct Access Memory, DAM): 既有随机存取特性, 也有顺序存储的特性. 先直接选取信息所在的区域, 然后按照顺序方式存取</li>
<li>相联存储器(Associative Memory), 即可以按内容访问的存储器(Content Addressed Memory, CAM), 可以按照内容检索到存储位置进行读写, &quot;快表&quot;就是一种相联存储器</li>
</ul>
<p>串行访问存储器: 读写某个存储单元所需的时间和存储单元的物理位置有关, 上述SAM和DAM就是串行访问存储器</p>
<p>RAM, SAM和DAM是按照地址来访问, CAM是按照内容来访问</p>
<h4 id="信息的可更改性" tabindex="-1"><a class="header-anchor" href="#信息的可更改性" aria-hidden="true">#</a> 信息的可更改性</h4>
<ul>
<li>读写存储器(Read/Write Memory) -- 既可读, 也可写(如: 磁盘, 内存, Cache)</li>
<li>只读存储器(Read Only Memory) -- 只能读, 不能写(如: 实体音乐专辑通常采用的CD-ROM, 实体电影中采用的蓝光光碟, BIOS通常写在ROM中)</li>
</ul>
<h4 id="信息的可保存性" tabindex="-1"><a class="header-anchor" href="#信息的可保存性" aria-hidden="true">#</a> 信息的可保存性</h4>
<ul>
<li>
<p>断电后, 存储信息消失的存储器 -- 易失性存储器(主存, Cache)</p>
</li>
<li>
<p>断电后, 存储信息依然保持的存储器 -- 非易失性存储器(磁盘, 光盘)</p>
</li>
<li>
<p>信息读出后, 原存储信息被破坏 -- 破坏性读出(如DRAM芯片, 读出数据后要进行重写)</p>
</li>
<li>
<p>信息读出后, 原存储信息不会被破坏 -- 非破坏性读出(如SRAM芯片, 磁盘, 光盘)</p>
</li>
</ul>
<h3 id="存储器的性能指标" tabindex="-1"><a class="header-anchor" href="#存储器的性能指标" aria-hidden="true">#</a> 存储器的性能指标</h3>
<ul>
<li>存储容量: 存储字数*字长</li>
<li>单位成本: 每位价格=总成本/总容量</li>
<li>存储速度: 数据传输率=数据的宽度/存储周期</li>
</ul>
<ol>
<li>存储时间(Ta): 存取时间指的是从启动一次存储器操作到完成该操作所经历的时间, 分为读出时间和写入时间</li>
<li>存取周期(Tm): 存取周期又称为读写周期或者访问周期, 它是指存储器进行一次完整的读写操作所需要的全部时间, 即连续两次独立地访问存储器操作(读或写操作)之间所需要的最小时间间隔</li>
</ol>
<p>主存带宽(Bm): 主存带宽又称为数据传输率, 表示每秒从主存进出信息的最大数量, 单位为字/秒, 字节/秒或者位/秒</p>
<h2 id="主存储器的基本组成" tabindex="-1"><a class="header-anchor" href="#主存储器的基本组成" aria-hidden="true">#</a> 主存储器的基本组成</h2>
<h3 id="基本的半导体元件及原理" tabindex="-1"><a class="header-anchor" href="#基本的半导体元件及原理" aria-hidden="true">#</a> 基本的半导体元件及原理</h3>
<p><img src="https://img1.imgtp.com/2022/07/29/OjWzqbfg.svg" alt="" loading="lazy"></p>
<p>一个内存颗粒上的金属引脚:</p>
<ol>
<li>地址线</li>
<li>数据线</li>
<li>读写控制线(1个或2个)</li>
<li>片选线(1个)</li>
<li>供电引脚</li>
<li>接地引脚</li>
</ol>
<blockquote>
<p>常见的描述:
<br> 8K<em>8位, 即2^13</em>8bit
<br> 8K<em>1位, 即2^13</em>1bit
<br> 64K<em>16位, 即2^16</em>16bit</p>
</blockquote>
<h3 id="寻址" tabindex="-1"><a class="header-anchor" href="#寻址" aria-hidden="true">#</a> 寻址</h3>
<p>总容量为1KB(字长4B):</p>
<ul>
<li>按照字节寻址: 1K个单元, 每个单元1B</li>
<li>按字寻址: 256个单元, 每个单元4B</li>
<li>按半字寻址: 512个单元, 每个单元2B</li>
<li>按双字寻址: 128个单元, 每个单元8B</li>
</ul>
<h2 id="sram-dram" tabindex="-1"><a class="header-anchor" href="#sram-dram" aria-hidden="true">#</a> SRAM&amp;DRAM</h2>
<h3 id="栅极电容-v-s-双稳态触发器" tabindex="-1"><a class="header-anchor" href="#栅极电容-v-s-双稳态触发器" aria-hidden="true">#</a> 栅极电容 V.S. 双稳态触发器</h3>
<table>
<thead>
<tr>
<th>类型特点</th>
<th>SRAM(静态RAM)</th>
<th>DRAM(动态RAM)</th>
</tr>
</thead>
<tbody>
<tr>
<td>存储信息</td>
<td>触发器</td>
<td>电容</td>
</tr>
<tr>
<td>破坏性读出</td>
<td>非</td>
<td>是</td>
</tr>
<tr>
<td>读出后需要重写?</td>
<td>不用</td>
<td>需要</td>
</tr>
<tr>
<td>运行速度</td>
<td>快</td>
<td>慢</td>
</tr>
<tr>
<td>集成度</td>
<td>低</td>
<td>高</td>
</tr>
<tr>
<td>发热量</td>
<td>大</td>
<td>小</td>
</tr>
<tr>
<td>存储成本</td>
<td>高</td>
<td>低</td>
</tr>
<tr>
<td>易失/非易失存储器?</td>
<td>易失</td>
<td>易失</td>
</tr>
<tr>
<td>需要刷新?</td>
<td>不需要</td>
<td>需要(分散, 集中, 异步)</td>
</tr>
<tr>
<td>送行列地址</td>
<td>同时送</td>
<td>分两次送(地址线复用技术)</td>
</tr>
<tr>
<td>用途</td>
<td>常用作Cache</td>
<td>常用作主存</td>
</tr>
</tbody>
</table>
<h4 id="栅极电容-dram存储元" tabindex="-1"><a class="header-anchor" href="#栅极电容-dram存储元" aria-hidden="true">#</a> 栅极电容(DRAM存储元)</h4>
<p><img src="https://img1.imgtp.com/2022/07/29/JMULozM1.png" alt="" loading="lazy"></p>
<ul>
<li>读出1: MOS管接通, 电容放电, 数据线上产生电流</li>
<li>读出0: MOS管接通后, 数据线上无电流</li>
</ul>
<p>电容放电信息被破坏, 是破坏性读出, 读出后应有重写操作, 也成为&quot;再生&quot;, 读写速度更慢</p>
<p>每个存储单元制造成本更低, 集成度更高, 功耗低</p>
<h4 id="双稳态触发器-sram存储元" tabindex="-1"><a class="header-anchor" href="#双稳态触发器-sram存储元" aria-hidden="true">#</a> 双稳态触发器(SRAM存储元)</h4>
<p><img src="https://img1.imgtp.com/2022/07/29/As4U9VxO.png" alt="" loading="lazy"></p>
<p>双稳态:
<br> 1: A高B低
<br> 0: A低B高</p>
<p>读出数据, 触发器状态保持稳定, 是非破坏性读出, 无需重写, 读写速度更快</p>
<p>每个存储单元制造成本更高, 集成度低, 功耗大</p>
<h3 id="dram的刷新" tabindex="-1"><a class="header-anchor" href="#dram的刷新" aria-hidden="true">#</a> DRAM的刷新</h3>
<ol>
<li>多久刷新一次? 刷新周期: 一般为2ms</li>
<li>每次刷新多少存储单元? 以行为单位, 每次刷新一行存储单元</li>
<li>如何刷新? 有硬件的支持, 读出一行的信息后重新写入, 占用1个读/写周期</li>
<li>在什么时刻刷新?</li>
</ol>
<h4 id="为什么要用行列地址" tabindex="-1"><a class="header-anchor" href="#为什么要用行列地址" aria-hidden="true">#</a> 为什么要用行列地址?</h4>
<blockquote>
<p>地址为00000000, 前半部分(0000)作为行地址送给行地址译码器, 后半部分(0000)作为列地址送给列地址译码器. 如果采用非矩阵模型, 则需要2^8=256根选通线, 如果采用矩阵模型, 则需要2<sup>4+2</sup>4根选通线(排列成16*16的矩阵)</p>
</blockquote>
<h4 id="在什么时刻刷新" tabindex="-1"><a class="header-anchor" href="#在什么时刻刷新" aria-hidden="true">#</a> 在什么时刻刷新?</h4>
<blockquote>
<p>假设DRAM内部结构排列成128*128的形式, 读/写周期0.5us, 2ms共2ms/0.5us=4000个周期</p>
</blockquote>
<h5 id="分散刷新" tabindex="-1"><a class="header-anchor" href="#分散刷新" aria-hidden="true">#</a> 分散刷新</h5>
<blockquote>
<p>每次读写完都刷新一行, 系统的存取周期变为1us, 前0.5us时间属于正常读写, 后0.5us时间属于刷新某行</p>
</blockquote>
<h5 id="集中刷新" tabindex="-1"><a class="header-anchor" href="#集中刷新" aria-hidden="true">#</a> 集中刷新</h5>
<blockquote>
<p>2ms内集中安排时间全部刷新, 系统的存取周期还是0.5us, 有一段使时间专门用于刷新, 无法访问存储器, 称为访存&quot;死区&quot;
<br> 3872个周期(1936us)用于读写, 128个周期(64us)用于刷新</p>
</blockquote>
<h5 id="异步刷新" tabindex="-1"><a class="header-anchor" href="#异步刷新" aria-hidden="true">#</a> 异步刷新</h5>
<blockquote>
<p>2ms内每行刷新1次即可, 2ms内需要产生128次的刷新请求, 每隔2ms/128=15.6us一次, 每15.6us内有0.5us的&quot;死时间&quot;</p>
</blockquote>
<h3 id="dram的地址线复用技术" tabindex="-1"><a class="header-anchor" href="#dram的地址线复用技术" aria-hidden="true">#</a> DRAM的地址线复用技术</h3>
<p>同时传送行地址和列地址会导致地址线很多(n条), 故采用地址线复用技术, 采用n/2条地址线, 先将行地址送入行地址缓冲器, 再将列地址送入列地址缓冲器, 最后分别送到行地址译码器和列地址译码器. 会导致地址线, 地址线的引脚减半</p>
<h2 id="read-only-memory-rom" tabindex="-1"><a class="header-anchor" href="#read-only-memory-rom" aria-hidden="true">#</a> read only memory ROM</h2>
<h3 id="了解各种rom" tabindex="-1"><a class="header-anchor" href="#了解各种rom" aria-hidden="true">#</a> 了解各种ROM</h3>
<h4 id="mrom-mask-read-only-memory" tabindex="-1"><a class="header-anchor" href="#mrom-mask-read-only-memory" aria-hidden="true">#</a> MROM(Mask Read-Only Memory)</h4>
<p>掩模式只读存储器: 厂家按照客户需求, 在芯片生产过程中直接写入信息, 之后任何人不得重写(只能读出), 可靠性高, 灵活性差, 生产周期长, 知识和批量定制</p>
<h4 id="prom-programmable-read-only-memory" tabindex="-1"><a class="header-anchor" href="#prom-programmable-read-only-memory" aria-hidden="true">#</a> PROM(Programmable Read-Only Memory)</h4>
<p>可编程只读存储器: 用户可用专门的额PROM写入器写入信息, 写一次之后就不可更改</p>
<h4 id="eprom-erasable-programmable-read-only-memory" tabindex="-1"><a class="header-anchor" href="#eprom-erasable-programmable-read-only-memory" aria-hidden="true">#</a> EPROM(Erasable Programmable Read-Only Memory)</h4>
<p>允许用户写入信息, 之后采用某种方法擦除数据, 可进行多次重写</p>
<ul>
<li>UVEPROM(ultraviolet rays): 用紫外线照射8~20分钟, 擦除所有的信息</li>
<li>EEPROM(第一个E是Electrically): 可用&quot;电擦除&quot;的方式, 擦除特定的字</li>
</ul>
<h4 id="flash-memory" tabindex="-1"><a class="header-anchor" href="#flash-memory" aria-hidden="true">#</a> Flash Memory</h4>
<p>闪速存储器: 在EEPROM的基础上发展而来, 断电后也能保存信息, 且可进行多次快速的擦除和重写. 由于闪存需要先擦除再写入, 故闪存的&quot;写&quot;的速度要比&quot;读&quot;的速度慢. (U盘, SD卡就是闪存)</p>
<h4 id="ssd-solid-state-drives" tabindex="-1"><a class="header-anchor" href="#ssd-solid-state-drives" aria-hidden="true">#</a> SSD(Solid State Drives)</h4>
<p>固态硬盘: 由控制单元+存储单元(Flash芯片)组成, 与闪速存储器的核心区别在于控制单元不一样, 但存储介质都类似, 可进行多次快速地擦除和重写你, SSD速度快, 功耗低, 价格高. 目前个人电脑常常使用SSD取代传统的机械硬盘(手机辅存也使用Flash芯片, 但是相比SSD使用的芯片集成度高, 功耗低, 价格贵)</p>
<h3 id="计算机内的重要rom" tabindex="-1"><a class="header-anchor" href="#计算机内的重要rom" aria-hidden="true">#</a> 计算机内的重要ROM</h3>
<p><img src="https://img1.imgtp.com/2022/07/29/nYtjxKcC.svg" alt="" loading="lazy"></p>
<p>主板上的BIOS芯片就是ROM, 通常我们所说的内存条就是&quot;主存&quot;, 但事实上, 主板上的ROM芯片也是&quot;主存&quot;的一部分, 逻辑上, 主存由RAM+ROM组成, 且两者常统一编址</p>
<h2 id="主存储器与cpu的连接" tabindex="-1"><a class="header-anchor" href="#主存储器与cpu的连接" aria-hidden="true">#</a> 主存储器与CPU的连接</h2>
<h3 id="增加主存的字长-位扩展" tabindex="-1"><a class="header-anchor" href="#增加主存的字长-位扩展" aria-hidden="true">#</a> 增加主存的字长-位扩展</h3>
<p><img src="https://img1.imgtp.com/2022/07/29/8iNs7gjP.png" alt="" loading="lazy"></p>
<h3 id="增加主存的存储字数-字扩展" tabindex="-1"><a class="header-anchor" href="#增加主存的存储字数-字扩展" aria-hidden="true">#</a> 增加主存的存储字数-字扩展</h3>
<p><img src="https://img1.imgtp.com/2022/07/29/b1T25mbi.png" alt="" loading="lazy"></p>
<h3 id="增加主存的存储字数-字位扩展" tabindex="-1"><a class="header-anchor" href="#增加主存的存储字数-字位扩展" aria-hidden="true">#</a> 增加主存的存储字数-字位扩展</h3>
<p><img src="https://img1.imgtp.com/2022/07/29/I6IG9oJY.png" alt="" loading="lazy"></p>
<h2 id="双口ram-多模块存储器" tabindex="-1"><a class="header-anchor" href="#双口ram-多模块存储器" aria-hidden="true">#</a> 双口RAM&amp;多模块存储器</h2>
<h3 id="存取周期" tabindex="-1"><a class="header-anchor" href="#存取周期" aria-hidden="true">#</a> 存取周期</h3>
<p><img src="https://img1.imgtp.com/2022/07/29/Al2vJCa2.svg" alt="" loading="lazy"></p>
<p>存取周期: 可以连续读/写的最短时间间隔</p>
<p>DRAM芯片的恢复时间比较长, 有可能是存取时间的几倍(SRAM的恢复时间较短), 如DRAM的存取时间为r, 存取周期为T, 则T=4r</p>
<p>产生的问题:</p>
<ol>
<li>多核CPU要访问内存, 怎么办?</li>
<li>CPU的读写速度比主存快很多, 主存恢复时间太长怎么办?</li>
</ol>
<h3 id="双端口ram" tabindex="-1"><a class="header-anchor" href="#双端口ram" aria-hidden="true">#</a> 双端口RAM</h3>
<p>需要有两组完全独立的数据线, 地址线, 控制线. CPU, RAM中也要有更加复杂的控制电路</p>
<p><img src="https://img1.imgtp.com/2022/07/29/GgcV5Awh.png" alt="" loading="lazy"></p>
<p>两个端口对同一主存操作有以下四种情况:</p>
<ol>
<li>两个端口同时对不同的地址单元存取数据(可以实现)</li>
<li>两个端口同时对同一地址单元读出数据(可以实现)</li>
<li>两个端口同时对同一地址单元写入数据(写入错误)</li>
<li>两个端口同时对同一地址单元, 一个写入数据, 另一个读出数据(读出错误)</li>
</ol>
<p>解决方法: 置&quot;忙&quot;信号为0, 由判断逻辑决定暂时关闭一个端口(即被延时), 未被关闭的端口正常访问, 被关闭的端口延长一个很短的时间段后再访问</p>
<p>作用: 优化多核CPU访问一根内存条的速度</p>
<h3 id="多体并行存储器" tabindex="-1"><a class="header-anchor" href="#多体并行存储器" aria-hidden="true">#</a> 多体并行存储器</h3>
<blockquote>
<p>每个存储体存取周期为T, 存取时间为r, 假设T=4r
<br> 连续访问: 00000, 00001, 00010, 00011, 00100</p>
</blockquote>
<p>为什么要考虑&quot;连续访问&quot;的情况?
<br> 因为在实际应用中, 有很多数据是连续的存储在主存中的, 比如说数组, 程序的指令都是连续的存储在主存中的</p>
<h4 id="高位交叉编址" tabindex="-1"><a class="header-anchor" href="#高位交叉编址" aria-hidden="true">#</a> 高位交叉编址</h4>
<p><img src="https://img1.imgtp.com/2022/07/29/T86mJbBJ.png" alt="" loading="lazy"></p>
<blockquote>
<p>连续取n个存储字
<br> 耗时nT, 耗时5T</p>
</blockquote>
<h4 id="低位交叉编址" tabindex="-1"><a class="header-anchor" href="#低位交叉编址" aria-hidden="true">#</a> 低位交叉编址</h4>
<p>宏观上读写一个字的时间接近r</p>
<p><img src="https://img1.imgtp.com/2022/07/29/k9nNCcCD.png" alt="" loading="lazy"></p>
<blockquote>
<p>耗时T+4r=2T
<br> 连续存n个存储字
<br> 耗时T+(n-1)r</p>
</blockquote>
<h3 id="应该取第几个-体" tabindex="-1"><a class="header-anchor" href="#应该取第几个-体" aria-hidden="true">#</a> 应该取第几个&quot;体&quot;?</h3>
<p>采用&quot;流水线&quot;的方式并行存取(宏观上并行, 微观上串行). 宏观上, 一个存储周期内, m体交叉存储器可以提供的数据量为单个模块的m倍</p>
<p>存取周期为T, 存取时间(总线传输周期)为r, 为了使流水线不间断, 应保证模块的数量m≥T/r:</p>
<ol>
<li>如果m&lt;T/r, 则会导致CPU需要等待</li>
<li>如果m&gt;T/r, 则会导致芯片闲置</li>
</ol>
<h3 id="多模块存储器" tabindex="-1"><a class="header-anchor" href="#多模块存储器" aria-hidden="true">#</a> 多模块存储器</h3>
<h4 id="多体并行存储器-1" tabindex="-1"><a class="header-anchor" href="#多体并行存储器-1" aria-hidden="true">#</a> 多体并行存储器</h4>
<p>每个模块都有相同的容量和存取速度
<br> 各模块都有独立的读写控制电路, 地址寄存器和数据寄存器. 它们既能并行工作, 又能交叉工作.</p>
<h4 id="单体多字存储器" tabindex="-1"><a class="header-anchor" href="#单体多字存储器" aria-hidden="true">#</a> 单体多字存储器</h4>
<p>每个存储单元存储m个字
<br> 总线宽度也为m个字
<br> 一次并行读出m个字
<br> 每次只能同时取m个字, 不能单独取其中某个字, 指令和数据在主存中必须是连续存放的</p>
<h3 id="内存条" tabindex="-1"><a class="header-anchor" href="#内存条" aria-hidden="true">#</a> 内存条</h3>
<p>单纯的扩容: 实现高位交叉的多体存储器
双通道: 实现低位交叉的多体存储器</p>
<p>买内存条时, 可挑选相同主频(主频反映的是存取周期, 如果主频不一样, 可能会导致高主频的内存降频), 相同容量(高容量的部分会按单通道处理)的两根来组成双通道</p>
<h2 id="cache的基本概念和原理" tabindex="-1"><a class="header-anchor" href="#cache的基本概念和原理" aria-hidden="true">#</a> Cache的基本概念和原理</h2>
<h3 id="存储系统存在的问题" tabindex="-1"><a class="header-anchor" href="#存储系统存在的问题" aria-hidden="true">#</a> 存储系统存在的问题</h3>
<ol>
<li>经过多模块存储器优化后, 存储器的速度和CPU的速度差距依然很大</li>
<li>可以采用更加高速的存储单元设计, 但是会导致存储器的价格上升, 容量下降</li>
<li>故基于程序的局部性原理, 可以增加一个Cache层, 改善&quot;Cache-主存&quot;的层次</li>
</ol>
<h3 id="cache的工作原理" tabindex="-1"><a class="header-anchor" href="#cache的工作原理" aria-hidden="true">#</a> Cache的工作原理</h3>
<p><img src="https://img1.imgtp.com/2022/07/29/KBmyndLC.svg" alt="" loading="lazy"></p>
<p>实际上, Cache被集成在CPU内部, Cache用SRAM实现, 速度快, 成本高</p>
<h3 id="局部性原理" tabindex="-1"><a class="header-anchor" href="#局部性原理" aria-hidden="true">#</a> 局部性原理</h3>
<ul>
<li>空间局部性: 在最近的未来要用到的信息(指令和数据), 很可能与现在正在使用的信息在存储空间上是邻近的(比如说数组元素, 顺序执行的指令代码)</li>
<li>时间局部性: 在最近的未来要用到的信息, 很可能是现在正在使用的信息(循环结构的指令代码)</li>
</ul>
<p>基于局部性原理, 不难想到, 可以把CPU当前访问地址&quot;周围&quot;的部分数据存放到Cache中. 程序B按照&quot;列优先&quot;访问二维数组, 空间局部性更差</p>
<h3 id="性能分析" tabindex="-1"><a class="header-anchor" href="#性能分析" aria-hidden="true">#</a> 性能分析</h3>
<p>设tc为访问一次Cache所需要的时间, tm为访问一次主存所需要的时间</p>
<ul>
<li>命中率H: CPU欲访问的信息已在Cache中的比率</li>
<li>缺失(未命中)率: M=1-H</li>
</ul>
<p>Cache-主存系统的平均访问时间t为: t=Htc+(1-H)(tc+tm)(先访问Cache, 若Cache未命中再访问主存); 或者t=Htc+(1-H)tm(同时访问Cache和主存, 若Cache命中则立即停止访问主存)</p>
<blockquote>
<p>假设Cache的速度是主存的5倍, 且Cache的命中率为95%, 则采用Cache后, 存储器性能提高多少(设Cache和主存同时被访问, 若Cache命中则中断访问主存)?
<br> 设Cache的存取周期为t, 则主存的存取周期为5t
<br> 若Cache和主存同时访问, 命中时访问时间为t, 未命中时访问时间为5t, 平均访问时间为0.95<em>t+0.05</em>5t=1.2t, 故性能为原来的5t/1.2t≈4.17倍
<br> 若先访问Cache再访问主存, 命中时访问时间为t, 未命中时访问时间为t+5t, 平均访问时间为0.95<em>t+0.05</em>6t=1.25t, 故性能为原来的5t/1.25t=4倍</p>
</blockquote>
<h3 id="有待解决的问题" tabindex="-1"><a class="header-anchor" href="#有待解决的问题" aria-hidden="true">#</a> 有待解决的问题</h3>
<h4 id="问题1" tabindex="-1"><a class="header-anchor" href="#问题1" aria-hidden="true">#</a> 问题1</h4>
<p>基于局部性原理, 不难想到, 可以把CPU目前访问的地址&quot;周围&quot;的部分数据放到Cache中. 如何界定&quot;周围&quot;?</p>
<p>将主存的存储空间&quot;分块&quot;, 如:每1KB为一块, 主存和Cache之间以&quot;块&quot;为单位进行数据交换</p>
<p><img src="https://img1.imgtp.com/2022/07/29/RmH39vFr.svg" alt="" loading="lazy"></p>
<p>主存的地址共22位: 块号12位, 块内地址10位, 4M=2^22, 1K=2^10, 整个主存被分为2^12=4096块</p>
<h4 id="问题2" tabindex="-1"><a class="header-anchor" href="#问题2" aria-hidden="true">#</a> 问题2</h4>
<p>如何区分Cache和主存的数据块对应关系? - Cache和主存的映射方式</p>
<h4 id="问题3" tabindex="-1"><a class="header-anchor" href="#问题3" aria-hidden="true">#</a> 问题3</h4>
<p>Cache很小, 主存很大, 如果Cache满了怎么办? - 替换算法</p>
<h4 id="问题4" tabindex="-1"><a class="header-anchor" href="#问题4" aria-hidden="true">#</a> 问题4</h4>
<p>CPU修改了Cache中的数据副本, 如何确保主存中数据母本的一致性? - Cache写策略</p>
<h2 id="cache和主存的映射方式" tabindex="-1"><a class="header-anchor" href="#cache和主存的映射方式" aria-hidden="true">#</a> Cache和主存的映射方式</h2>
<h3 id="全相联映射-随意放" tabindex="-1"><a class="header-anchor" href="#全相联映射-随意放" aria-hidden="true">#</a> 全相联映射(随意放)</h3>
<blockquote>
<p>假设某个计算机的主存地址空间大小为256MB, 按照字节编址, 其数据Cache有8个Cache行, 行长为64B
<br> Cache的总大小为512B, 256M=2^28, 主存的地址共28位, 2<sup>28/2</sup>6=2^22, 主存块号共22位, 块内地址共6位
CPU访问主存地址1...1101 001110:</p>
<ol>
<li>主存地址的前22位, 对比Cache中所有块的标记</li>
<li>若标记匹配且有效位=1, 则Cache命中, 访问块内地址为001110的单元</li>
<li>若未命中或有效位=0, 则正常访问主存</li>
</ol>
</blockquote>
<p><img src="https://img1.imgtp.com/2022/07/29/FcPZOXFP.png" alt="" loading="lazy"></p>
<h3 id="直接映射-只能放固定位置" tabindex="-1"><a class="header-anchor" href="#直接映射-只能放固定位置" aria-hidden="true">#</a> 直接映射(只能放固定位置)</h3>
<p>主存块在Cache中的位置=主存块号%Cache总块数, 缺点是其他地方有空闲Cache块, 但是8号主存块不能使用</p>
<p>主存块号%(2^3), 相当于留下最后三位二进制数(若Cache总块数=2^n, 则主存块号末位n位直接反映它在Cache中的位置), 将主存块号的其余作为标记即可</p>
<blockquote>
<p>CPU访问主存地址0...01000 001110:</p>
<ol>
<li>根据主存块号的后3位确定Cache行</li>
<li>若主存块号的前19位与Cache标记匹配且有效位=1, 则Cache命中, 访问块内地址为001110的单元</li>
<li>若未命中或者有效位=0, 则正常访问主存</li>
</ol>
</blockquote>
<h3 id="组相联映射-可放到特定分组" tabindex="-1"><a class="header-anchor" href="#组相联映射-可放到特定分组" aria-hidden="true">#</a> 组相联映射(可放到特定分组)</h3>
<p>所属分组=主存块号%分组数</p>
<p>主存块号%2^2, 相当于留下最后两位</p>
<blockquote>
<p>CPU访问主存地址1...1101001110:</p>
<ol>
<li>根据主存块号的后2位确定所属分组号</li>
<li>若主存块号的前20位与分组内的某个标记匹配且有效位=1, 则Cache命中, 访问块内地址为001110的单元</li>
<li>若未命中或者有效位=0, 则正常访问</li>
</ol>
</blockquote>
<h2 id="cache替换算法" tabindex="-1"><a class="header-anchor" href="#cache替换算法" aria-hidden="true">#</a> Cache替换算法</h2>
<h3 id="随机算法-rand" tabindex="-1"><a class="header-anchor" href="#随机算法-rand" aria-hidden="true">#</a> 随机算法(RAND)</h3>
<p>随机算法(RAND, Random) -- 若Cache已满, 则随机选择一块替换</p>
<blockquote>
<p>设总共有4个Cache块, 初始整个Cache为空. 采用全相联映射, 依次访问主存块1,2,3,4,1,2,5,1,2,3,4,5</p>
<table>
<thead>
<tr>
<th>访问主存块</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>1</th>
<th>2</th>
<th>5</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cache #0</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>Cache #1</td>
<td></td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>Cache #2</td>
<td></td>
<td></td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
</tr>
<tr>
<td>Cache #3</td>
<td></td>
<td></td>
<td></td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>Cache命中?</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>是</td>
<td>是</td>
<td>否</td>
<td>是</td>
<td>是</td>
<td>否</td>
<td>否</td>
<td>是</td>
</tr>
<tr>
<td>Cache替换?</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>是</td>
<td>否</td>
<td>否</td>
<td>是</td>
<td>是</td>
<td>否</td>
</tr>
</tbody>
</table>
</blockquote>
<p>随机算法 -- 实现简单, 但完全没考虑局部性原理, 命中率低, 实际效果很不稳定</p>
<h3 id="先进先出算法-fifo" tabindex="-1"><a class="header-anchor" href="#先进先出算法-fifo" aria-hidden="true">#</a> 先进先出算法(FIFO)</h3>
<p>先进先出算法(FIFO, First In First Out) -- 若Cache已满, 则替换最先被调入Cache的块</p>
<blockquote>
<p>设总共有4个Cache块, 初始整个Cache为空. 采用全相联映射, 依次访问主存块1,2,3,4,1,2,5,1,2,3,4,5</p>
<table>
<thead>
<tr>
<th>访问主存块</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>1</th>
<th>2</th>
<th>5</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cache #0</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>Cache #1</td>
<td></td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>5</td>
</tr>
<tr>
<td>Cache #2</td>
<td></td>
<td></td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>Cache #3</td>
<td></td>
<td></td>
<td></td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>Cache命中?</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>是</td>
<td>是</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
</tr>
<tr>
<td>Cache替换?</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
</tr>
</tbody>
</table>
</blockquote>
<p>先进先出算法 -- 实现简单, 最开始按照#0#1#2#3放入Cache, 之后轮流替换#0#1#2#3, FIFO依然没有考虑局部性原理, 最先被调入Cache的块也有可能是被频繁访问的</p>
<p>抖动现象: 频繁的换入换出现象(刚被替换的块很快又被调入)</p>
<h3 id="近期最少使用算法-lru" tabindex="-1"><a class="header-anchor" href="#近期最少使用算法-lru" aria-hidden="true">#</a> 近期最少使用算法(LRU)</h3>
<p>近期最少使用算法(LRU, Least Recently Used) -- 为每一个Cache块设置一个&quot;计数器&quot;, 用于记录每个Cache块已经有多久没有被访问了. 当Cache满后替换&quot;计数器&quot;最大的</p>
<blockquote>
<p>设总共有4个Cache块, 初始整个Cache为空. 采用全相联映射, 依次访问主存块1,2,3,4,1,2,5,1,2,3,4,5</p>
<table>
<thead>
<tr>
<th>访问主存块</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>1</th>
<th>2</th>
<th>5</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cache #0</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>5</td>
</tr>
<tr>
<td>Cache #1</td>
<td></td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>Cache #2</td>
<td></td>
<td></td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>Cache #3</td>
<td></td>
<td></td>
<td></td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>3</td>
<td>3</td>
<td>3</td>
</tr>
<tr>
<td>Cache命中?</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>是</td>
<td>是</td>
<td>否</td>
<td>是</td>
<td>是</td>
<td>否</td>
<td>否</td>
<td>否</td>
</tr>
<tr>
<td>Cache替换?</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>是</td>
<td>否</td>
<td>否</td>
<td>是</td>
<td>是</td>
<td>是</td>
</tr>
</tbody>
</table>
</blockquote>
<ol>
<li>命中时, 所命中的行的计数器清零, 比其低的计数器+1, 其余不变;</li>
<li>未命中且还有空闲行时, 新装入的行的计数器置0, 其余非空闲行全加1;</li>
<li>未命中且无空闲行时, 计数值最大的行的信息块被淘汰, 新装行的块的计数器置0, 其余全加1</li>
</ol>
<p>Cache块的总数=2^n, 则计数器只需要n位. 且Cache装满后所有计数器的值一定不重复</p>
<p>LRU算法 -- 基于&quot;局部性原理&quot;, 近期被访问过的主存块, 在不久的将来也很有可能被再次访问, 因此淘汰最久没访问过的块是合理的. LRU算法的实际效果优秀, Cache命中率高. 若被频繁访问的主存块数量&gt;Cache行的数量, 则有可能发生抖动, 如:1,2,3,4,5,1,2,3,4,5,1,2...</p>
<h3 id="最不经常使用算法-lfu" tabindex="-1"><a class="header-anchor" href="#最不经常使用算法-lfu" aria-hidden="true">#</a> 最不经常使用算法(LFU)</h3>
<p>最不经常使用算法(LFU, Least Frequently Used) -- 为每一个Cache块设置一个&quot;计数器&quot;, 用于记录每个Cache块被访问过几次. 当Cache满后替换&quot;计数器&quot;最小的</p>
<blockquote>
<p>设总共有4个Cache块, 初始整个Cache为空. 采用全相联映射, 依次访问主存块1,2,3,4,1,2,5,1,2,3,4,5</p>
<table>
<thead>
<tr>
<th>访问主存块</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>1</th>
<th>2</th>
<th>5</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cache #0</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>Cache #1</td>
<td></td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
<td>2</td>
</tr>
<tr>
<td>Cache #2</td>
<td></td>
<td></td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>5</td>
<td>5</td>
<td>5</td>
<td>3</td>
<td>3</td>
<td>5</td>
</tr>
<tr>
<td>Cache #3</td>
<td></td>
<td></td>
<td></td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>Cache命中?</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>是</td>
<td>是</td>
<td>否</td>
<td>是</td>
<td>是</td>
<td>否</td>
<td>是</td>
<td>否</td>
</tr>
<tr>
<td>Cache替换?</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>是</td>
<td>否</td>
<td>否</td>
<td>是</td>
<td>否</td>
<td>是</td>
</tr>
</tbody>
</table>
</blockquote>
<p>新调入的块计数器=0, 之后每被访问一次计数器+1. 需要替换的时候, 选择计数器最小的一行</p>
<p>LFU算法 -- 曾经被经常访问的主存块在未来不一定会使用到(如: 微信视频聊天相关的块)并没有很好地遵循局部性原理, 因此实际运行效果不如LRU</p>
<h2 id="cache写策略" tabindex="-1"><a class="header-anchor" href="#cache写策略" aria-hidden="true">#</a> Cache写策略</h2>
<h3 id="写命中" tabindex="-1"><a class="header-anchor" href="#写命中" aria-hidden="true">#</a> 写命中</h3>
<h4 id="写回法-write-back" tabindex="-1"><a class="header-anchor" href="#写回法-write-back" aria-hidden="true">#</a> 写回法(Write-back)</h4>
<p>当CPU对Cache写命中时, 只修改Cache的内容, 而不立即写入主存, 只有当此块被换出时才写回主存. 可以增设一个标志位(脏位), 以反映此块是否被CPU修改过</p>
<p>减少了访问次数, 但有数据不一致的隐患</p>
<h4 id="全写法-write-through" tabindex="-1"><a class="header-anchor" href="#全写法-write-through" aria-hidden="true">#</a> 全写法(Write-through)</h4>
<p>当CPU对Cache写命中的时候, 必须把数据同时写入Cache和主存, 一般使用写缓冲(Write buffer)</p>
<p>访存次数增加, 速度变慢, 但更能保证数据一致性</p>
<p>使用写缓冲, CPU写的速度很快, 若写操作不频繁, 则效果很好. 若写操作很频繁, 可能会因为写缓冲饱和而发生阻塞. 写缓冲是一个FIFO队列, 写缓冲可以解决速度不匹配的问题.</p>
<p><img src="https://img1.imgtp.com/2022/07/29/ugVNN3P4.png" alt="" loading="lazy"></p>
<h3 id="写不命中" tabindex="-1"><a class="header-anchor" href="#写不命中" aria-hidden="true">#</a> 写不命中</h3>
<h4 id="写分配法-write-allocate" tabindex="-1"><a class="header-anchor" href="#写分配法-write-allocate" aria-hidden="true">#</a> 写分配法(Write-allocate)</h4>
<p>当CPU对Cache写不命中的时候, 把主存中的块调入Cache, 在Cache中修改, 通常搭配写回法使用.</p>
<h4 id="非写分配法-not-write-allocate" tabindex="-1"><a class="header-anchor" href="#非写分配法-not-write-allocate" aria-hidden="true">#</a> 非写分配法(Not-write-allocate)</h4>
<p>当CPU对Cache写不命中时只写入主存, 不调入Cache, 搭配全写法使用</p>
<h3 id="多级cache" tabindex="-1"><a class="header-anchor" href="#多级cache" aria-hidden="true">#</a> 多级Cache</h3>
<p>现代计算机多采用多级Cache
<br> 离CPU越近的速度越快, 容量越小
<br> 离CPU越远的速度越慢, 容量越大</p>
<p>各级Cache之间通常采用&quot;全写法&quot;+&quot;非写分配法&quot;
<br> Cache-主存之间常采用&quot;写回法&quot;+&quot;写分配法&quot;</p>
<p><img src="https://img1.imgtp.com/2022/07/29/gNT9Y3f3.png" alt="" loading="lazy"></p>
<h2 id="页式存储器" tabindex="-1"><a class="header-anchor" href="#页式存储器" aria-hidden="true">#</a> 页式存储器</h2>
<h3 id="页式存储" tabindex="-1"><a class="header-anchor" href="#页式存储" aria-hidden="true">#</a> 页式存储</h3>
<p>一个程序(进程)在逻辑上被分为若干个大小相等的&quot;页面&quot;, &quot;页面&quot;的大小与&quot;块&quot;的大小相同. 每个页面可以离散地放入不同的主存块中</p>
<h3 id="虚地址vs实地址" tabindex="-1"><a class="header-anchor" href="#虚地址vs实地址" aria-hidden="true">#</a> 虚地址vs实地址</h3>
<ul>
<li>逻辑地址(虚地址): 程序员视角看到的地址</li>
<li>物理地址(实地址): 实际在主存中的地址</li>
</ul>
<blockquote>
<p>假设某程序4KB, 操作系统将该程序分为4页, 每页1KB, 要实现取变量x至ACC寄存器
<br> 机器指令: 000001 001000000011(操作码+地址码, 使用逻辑地址)
<br> 程序员视角: 整个程序一共4KB=2^12B, 地址范围: 000000000000~111111111111
<br> 变量x的逻辑地址: 001000000011, 则应该被划分在0号页面中(逻辑页号若干位, 页内地址10位)
<br> 主存的物理地址一共22位(主存块号12位, 块内地址10位), 变量x的物理地址: 000000000010 10000000011</p>
</blockquote>
<h3 id="页表-逻辑页号-主存块号" tabindex="-1"><a class="header-anchor" href="#页表-逻辑页号-主存块号" aria-hidden="true">#</a> 页表: 逻辑页号-&gt;主存块号</h3>
<blockquote>
<table>
<thead>
<tr>
<th>逻辑页号</th>
<th>主存块号</th>
</tr>
</thead>
<tbody>
<tr>
<td>#0</td>
<td>2</td>
</tr>
<tr>
<td>#1</td>
<td>4094</td>
</tr>
<tr>
<td>#2</td>
<td>0</td>
</tr>
<tr>
<td>#3</td>
<td>4095</td>
</tr>
</tbody>
</table>
<p>变量x的逻辑地址: 001000000011 变量x的物理地址: 000000000010 1000000011</p>
</blockquote>
<p>CPU执行的机器指令中, 使用的是&quot;逻辑地址&quot;, 因此需要通过&quot;页表&quot;将逻辑地址转化为&quot;物理地址&quot;, 页表存储在主存里
<br> 页表的作用: 记录了每个逻辑页面存放在哪个主存块中</p>
<h3 id="地址变换过程" tabindex="-1"><a class="header-anchor" href="#地址变换过程" aria-hidden="true">#</a> 地址变换过程</h3>
<p><img src="https://img1.imgtp.com/2022/07/29/MKWGShxp.png" alt="" loading="lazy"></p>
<h3 id="地址变换过程-增加tlb" tabindex="-1"><a class="header-anchor" href="#地址变换过程-增加tlb" aria-hidden="true">#</a> 地址变换过程(增加TLB)</h3>
<p><img src="https://img1.imgtp.com/2022/07/29/XykKUOMO.png" alt="" loading="lazy"></p>
<p>注意TLB和Cache的区别: 快表中存储的是页表项的副本; Cache中存储的是主存块的副本</p>
<p>为什么快表很快? -- 因为快表是一种SRAM而内存是一种DRAM, 此外, 快表是一种&quot;相联存储器&quot;, 可以按照内容寻访</p>
<h3 id="访问过程" tabindex="-1"><a class="header-anchor" href="#访问过程" aria-hidden="true">#</a> 访问过程</h3>
<p><img src="https://img1.imgtp.com/2022/07/29/btRHOvhe.svg" alt="" loading="lazy"></p>
</div></template>
