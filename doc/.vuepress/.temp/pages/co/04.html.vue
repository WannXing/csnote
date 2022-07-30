<template><div><h2 id="指令寻址" tabindex="-1"><a class="header-anchor" href="#指令寻址" aria-hidden="true">#</a> 指令寻址</h2>
<ul>
<li>确定下一条要执行的指令的存放地址</li>
<li>由程序计数器PC指明</li>
</ul>
<h3 id="顺序寻址" tabindex="-1"><a class="header-anchor" href="#顺序寻址" aria-hidden="true">#</a> 顺序寻址</h3>
<p>(PC)+&quot;1&quot;-&gt;PC, 此处的&quot;1&quot;理解为1个指令字长, 每次取指令结束后, 一定会PC+&quot;1&quot;</p>
<blockquote>
<p>系统采用变长指令字结构, 指令字长=存储字长=16bit=2B, 主存按照字节编址
<br> 读入一个字, 根据操作码判断这条指令的总字节数n, 修改PC的值, (PC)+n-&gt;PC
<br> 根据指令的类型, CPU可能还要进行多次访存, 每次读入一个字</p>
</blockquote>
<h3 id="跳跃寻址" tabindex="-1"><a class="header-anchor" href="#跳跃寻址" aria-hidden="true">#</a> 跳跃寻址</h3>
<p>执行转移类指令导致PC的值改变, 类似于无条件转移指令JMP等</p>
<h2 id="数据寻址" tabindex="-1"><a class="header-anchor" href="#数据寻址" aria-hidden="true">#</a> 数据寻址</h2>
<p>形式地址, 简称为A; 真实地址, 简称为EA</p>
<blockquote>
<p>假设指令字长=机器字长=存储字长, 操作数为3</p>
</blockquote>
<h3 id="直接寻址" tabindex="-1"><a class="header-anchor" href="#直接寻址" aria-hidden="true">#</a> 直接寻址</h3>
<p>指令字中的形式地址A就是操作数的真实地址EA, 即EA=A</p>
<p>一次指令的执行:</p>
<ol>
<li>取指令 访存1次</li>
<li>执行指令 访存1次
<br> 暂不考虑存结果, 共访存2次</li>
</ol>
<p>优点: 简单, 指令执行阶段仅访问一次主存, 不需要专门计算操作数的地址</p>
<h3 id="间接寻址" tabindex="-1"><a class="header-anchor" href="#间接寻址" aria-hidden="true">#</a> 间接寻址</h3>
<p>指令的地址字段给出的形式地址不是操作数真正的地址, 而是操作数有效地址所在的存储单元的地址, 也就是操作数地址的地址. 根据间接寻址的次数可以分为一次间接寻址和两次间接寻址</p>
<p>优点:</p>
<ul>
<li>可扩大寻址范围(有效寻址EA的位数大于形式地址A的位数)</li>
<li>便于编制程序(用间接寻址可以方便地完成子程序地返回)</li>
</ul>
<h3 id="寄存器寻址" tabindex="-1"><a class="header-anchor" href="#寄存器寻址" aria-hidden="true">#</a> 寄存器寻址</h3>
<p>在指令字中直接给出操作数所在地寄存器编号, 即EA=Ri, 其操作数在由Ri所指地寄存器内.</p>
<p>一次指令的执行:</p>
<ol>
<li>取指令 访存1次</li>
<li>执行指令 访存0次
<br> 暂不考虑存结果, 共访存1次</li>
</ol>
<p>优点:</p>
<ul>
<li>指令在执行阶段不访问主存, 只访问寄存器</li>
<li>指令字短且执行速度快, 支持向量/矩阵运算</li>
</ul>
<p>缺点: 寄存器价格昂贵, 计算机中寄存器的个数有限</p>
<h3 id="寄存器简介寻址" tabindex="-1"><a class="header-anchor" href="#寄存器简介寻址" aria-hidden="true">#</a> 寄存器简介寻址</h3>
<p>寄存器Ri中给出的不是一个操作数, 而是操作数所在主存单元的地址, 即EA=(Ri)</p>
<p>一次指令的执行:</p>
<ol>
<li>取指令 访存1次</li>
<li>执行指令 访存1次
<br> 暂不考虑存结果, 共访存2次</li>
</ol>
<p>特点: 与一般间接寻址相比速度更快, 但指令的执行阶段需要访问主存(因为操作数在主存中)</p>
<h3 id="隐含寻址" tabindex="-1"><a class="header-anchor" href="#隐含寻址" aria-hidden="true">#</a> 隐含寻址</h3>
<p>隐含寻址: 不是明显地给出操作数的地址, 而是在指令中隐含着操作数的地址</p>
<p>优点: 有利于缩短指令字长</p>
<p>缺点: 需要增加存储操作数或者隐含地址的硬件</p>
<h3 id="立即寻址" tabindex="-1"><a class="header-anchor" href="#立即寻址" aria-hidden="true">#</a> 立即寻址</h3>
<p>形式地址A就是操作数本身, 又称为立即数, 一般采用补码形式. #表示立即寻址特征</p>
<p>一条指令的执行:</p>
<ol>
<li>取指令 访存1次</li>
<li>执行指令 访存0次
<br> 暂不考虑存结果, 共访存1次</li>
</ol>
<p>优点: 指令执行阶段不访问主存, 指令执行时间最短</p>
<p>缺点: A的位数限制了立即数的范围</p>
<h3 id="偏移寻址" tabindex="-1"><a class="header-anchor" href="#偏移寻址" aria-hidden="true">#</a> 偏移寻址</h3>
<h4 id="基址寻址" tabindex="-1"><a class="header-anchor" href="#基址寻址" aria-hidden="true">#</a> 基址寻址</h4>
<p>将CPU中基址寄存器(BR)中的内容加上指令格式中的形式地址A, 而形成操作数的有效地址, 即EA=(BR)+A</p>
<p>有两种方法:</p>
<ol>
<li>采用专用寄存器BR作为基址寄存器</li>
<li>采用通用寄存器作为基址寄存器, 在指令中需要指明, 要将哪个通用寄存器作为基址寄存器使用, 一般用R0表示</li>
</ol>
<p>优点: 便于程序&quot;浮动&quot;, 方便实现多道程序并发运行</p>
<p>拓展: 程序运行前, CPU将BR的值修改为该程序的起始地址(存在操作系统PCB中)</p>
<p>注:</p>
<ul>
<li>基址寄存器是面向操作系统的, 其内容是由操作系统或者管理程序确定. 在程序执行过程中, 基址寄存器的内容不变(作为基地址), 形式地址可变(作为偏移量)</li>
<li>当采用通用寄存器作为基址寄存器时, 可由用户决定哪个寄存器作为基址寄存器, 但其内容仍由操作系统决定</li>
</ul>
<h4 id="变址寻址" tabindex="-1"><a class="header-anchor" href="#变址寻址" aria-hidden="true">#</a> 变址寻址</h4>
<p>有效地址EA等于指令字中的形式地址A与变址寄存器IX的内容之和, 即EA=(IX)+A, 其中IX可为变址寄存器(专用), 也可用通用寄存器作为变址寄存器</p>
<p>注: 变址寄存器是面向用户的, 在程序执行的过程中, 变址寄存器的内容可由用户改变(IX作为偏移量), 形式地址A不变(作为基地址)</p>
<p>变址寻址作用: 在数组处理的过程中, 可设定A为数组的首地址, 不断改变变址寄存器IX的内容, 便可以很容易形成数组中任一数据的地址, 特别适合编制循环程序</p>
<h4 id="基址-变址复合寻址" tabindex="-1"><a class="header-anchor" href="#基址-变址复合寻址" aria-hidden="true">#</a> 基址&amp;变址复合寻址</h4>
<ul>
<li>基址寻址: EA=(BR)+A</li>
<li>变址寻址: EA=(IX)+A</li>
<li>先基址后变址寻址: EA=(IX)+(BX)+A</li>
</ul>
<h4 id="相对寻址" tabindex="-1"><a class="header-anchor" href="#相对寻址" aria-hidden="true">#</a> 相对寻址</h4>
<p>把程序计数器PC的内容加上指令格式中的形式地址A而形成操作数的有效地址, 即EA=(PC)+A, 其中A是相对于PC所指地址的位移量, 可正可负, 补码表示</p>
<p>注: 王道书上的小错误 -- &quot;A是相当于当前指令地址的位移量&quot;这句话是错误的, 因为取出当前指令后, PC+&quot;1&quot;指向的是下一条指令</p>
<p>优点: 操作数的地址不是固定的, 它随着PC的值的变化而变化, 并且与指令地址之间总是相差一个固定的值, 因此便于程序浮动(一段代码在程序内部的浮动), 相对寻址广泛用于转移指令</p>
<h3 id="堆栈寻址" tabindex="-1"><a class="header-anchor" href="#堆栈寻址" aria-hidden="true">#</a> 堆栈寻址</h3>
<p>操作数放在堆栈中, 隐含使用堆栈指针(SP)作为操作数地址</p>
<p>堆栈是存储器(或专用寄存器组)中一块特定的按&quot;后进先出(LIFO)&quot;原则管理的存储区, 该存储区中被读/写单元的地址是用一个特定的寄存器给出的, 该寄存器称为堆栈指针(SP)</p>
<h2 id="cisc-risc" tabindex="-1"><a class="header-anchor" href="#cisc-risc" aria-hidden="true">#</a> CISC&amp;RISC</h2>
<h3 id="cisc和risc" tabindex="-1"><a class="header-anchor" href="#cisc和risc" aria-hidden="true">#</a> CISC和RISC</h3>
<p>80-20规律: 典型程序中80%的语句仅仅使用处理机中20%的指令</p>
<h4 id="cisc" tabindex="-1"><a class="header-anchor" href="#cisc" aria-hidden="true">#</a> CISC</h4>
<p>CISC: Complex Instruction Set Computer</p>
<p>设计思路: 一条指令完成一个复杂的基本功能</p>
<p>代表: X86架构, 主要用于笔记本, 台式机等</p>
<blockquote>
<p>比如设计一套能实现整数, 矩阵加/减/乘运算的指令集
<br> CISC的设计思路: 除了提供整数的加减乘指令除之外, 还提供矩阵的加法指令, 矩阵的减法指令, 矩阵的乘法指令.
<br> 一条指令可以由一个专门的电路完成
<br> 有的复杂指令用纯硬件实现很困难, 采用&quot;存储程序&quot;的设计思想, 由一个比较通用的电路配合存储部件完成一条指令</p>
</blockquote>
<h4 id="risc" tabindex="-1"><a class="header-anchor" href="#risc" aria-hidden="true">#</a> RISC</h4>
<p>设计思路: 一条指令完成一个基本&quot;动作&quot;; 多条指令组合完成一个复杂的基本功能</p>
<p>代表: ARM架构, 主要用于手机, 平板等</p>
<blockquote>
<p>比如设计一套能实现整数, 矩阵加/减/乘运算的指令集
<br> RISC的思路: 只提供整数的加减乘指令
<br> 一条指令一个电路, 电路设计相对简单, 功耗更低</p>
</blockquote>
<h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h3>
<table>
<thead>
<tr>
<th></th>
<th>CISC</th>
<th>RISC</th>
</tr>
</thead>
<tbody>
<tr>
<td>指令系统</td>
<td>复杂, 庞大</td>
<td>简单, 精简</td>
</tr>
<tr>
<td>指令数目</td>
<td>一般大于200条</td>
<td>一般小于100条</td>
</tr>
<tr>
<td>指令字长</td>
<td>不固定</td>
<td>定长</td>
</tr>
<tr>
<td>可访存指令</td>
<td>不加限制</td>
<td>只有Load/Store指令</td>
</tr>
<tr>
<td>各种指令执行时间</td>
<td>相差较大</td>
<td>绝大多数在一个周期内完成</td>
</tr>
<tr>
<td>各种指令的使用频度</td>
<td>相差很大</td>
<td>都比较常用</td>
</tr>
<tr>
<td>通用寄存器数量</td>
<td>较少</td>
<td>多</td>
</tr>
<tr>
<td>目标代码</td>
<td>难以用优化编译生成搞笑的目标代码程序</td>
<td>采用优化的编译程序, 生成代码较为高效</td>
</tr>
<tr>
<td>控制方式</td>
<td>绝大多数为微程序控制</td>
<td>绝大多数为组合逻辑控制</td>
</tr>
<tr>
<td>指令流水线</td>
<td>可以通过一定方式实现</td>
<td>必须实现</td>
</tr>
</tbody>
</table>
</div></template>
