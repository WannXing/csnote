<template><div><h2 id="cpu的功能和基本结构" tabindex="-1"><a class="header-anchor" href="#cpu的功能和基本结构" aria-hidden="true">#</a> CPU的功能和基本结构</h2>
<h3 id="cpu的功能" tabindex="-1"><a class="header-anchor" href="#cpu的功能" aria-hidden="true">#</a> CPU的功能</h3>
<ol>
<li>指令控制: 完成取指令, 分析指令和执行指令的操作, 即程序的顺序控制</li>
<li>操作控制: 一条指令的功能往往是若干操作信号的组合来实现的. CPU管理并产生由内存取出的每条指令的操作信号. 把各种操作信号送往响应的部件, 从而控制这些部件按指令的要求进行动作</li>
<li>时间控制: 对各种操作加以时间上的控制. 时间控制要为每条指令按照时间顺序提供应有的控制信号</li>
<li>数据加工: 对数据进行算术和逻辑运算</li>
<li>中断处理: 对计算机运行过程中出现的异常情况和特殊请求进行处理</li>
</ol>
<h3 id="运算器和控制器的功能" tabindex="-1"><a class="header-anchor" href="#运算器和控制器的功能" aria-hidden="true">#</a> 运算器和控制器的功能</h3>
<h4 id="运算器" tabindex="-1"><a class="header-anchor" href="#运算器" aria-hidden="true">#</a> 运算器</h4>
<p>对数据进行加工</p>
<h4 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器" aria-hidden="true">#</a> 控制器</h4>
<p>协调并控制计算机各部件执行程序的指令序列, 基本功能包括取指令, 分析指令, 执行指令</p>
<ul>
<li>取指令: 自动形成指令地址; 自动发出取指令的命令</li>
<li>分析指令: 操作码译码(分析本条指令要完成什么操作); 产生操作数的有效地址</li>
<li>执行指令: 根据分析指令得到的&quot;操作命令&quot;和&quot;操作数地址&quot;, 形成操作信号控制序列, 控制运算器, 存储器以及I/O设备完成响应的操作</li>
<li>中断指令: 管理总线几输入输出; 处理异常情况(如掉电)和特殊请求(如打印机请求打印一行字符)</li>
</ul>
<h3 id="运算器的基本结构" tabindex="-1"><a class="header-anchor" href="#运算器的基本结构" aria-hidden="true">#</a> 运算器的基本结构</h3>
<ul>
<li>算术逻辑单元: 主要功能是进行算术/逻辑运算</li>
<li>通用寄存器组: 如AX、BX、CX、DX、SP等, 用于存放操作数(包括源操作数、目的操作数及中间结果)和各种地址信息. SP是堆栈指针, 用于指示栈顶的地址(stack pointer)</li>
<li>暂存器: 用于暂存从主存读出来的数据, 这个数据不能存放在通用寄存器中, 否则会破坏其原有的内容</li>
<li>累加寄存器: 它是一个通用寄存器, 用于暂时存放ALU运算的结果信息, 用于实现加法运算</li>
<li>程序状态字寄存器: 保留由算术逻辑运算指令或测试指令的结果而建立的各种状态信息, 如溢出标志(OP)、符号标志(SF)、零标志(ZF)、进位标志(CF)等. PSW中的这些位参与并决定微操作的形成</li>
<li>移位器: 对运算结果进行移位运算</li>
<li>计数器: 控制乘除运算的操作数</li>
</ul>
<h4 id="专用数据通路方式" tabindex="-1"><a class="header-anchor" href="#专用数据通路方式" aria-hidden="true">#</a> 专用数据通路方式</h4>
<p>根据指令执行过程中的数据和地址的流动方向安排链接线路</p>
<p>如果直接用导线连接, 相当于多个寄存器同时并且一直向ALU传输数据</p>
<ul>
<li>解决方法1: 使用多路选择器, 根据控制信号选择一路输出</li>
<li>解决方法2: 使用三态门, 可以控制每一路是否输出</li>
</ul>
<p><img src="https://img1.imgtp.com/2022/07/29/vMaouF4E.png" alt="" loading="lazy"></p>
<p>性能较高, 基本不存在数据冲突现象, 但是结构复杂, 硬件量大, 不易实现</p>
<h4 id="cpu内部单总线方式" tabindex="-1"><a class="header-anchor" href="#cpu内部单总线方式" aria-hidden="true">#</a> CPU内部单总线方式</h4>
<p>将所有寄存器的输入端和输出端都连接到一条公共的通路上</p>
<p><img src="https://img1.imgtp.com/2022/07/29/KUy43Egs.png" alt="" loading="lazy"></p>
<h3 id="控制器的基本结构" tabindex="-1"><a class="header-anchor" href="#控制器的基本结构" aria-hidden="true">#</a> 控制器的基本结构</h3>
<ul>
<li>程序计数器: 用于指出下一条指令在主存中的存放地址. CPU就是根据PC的内容去主存中读取指令的. 因程序中指令(通常)是顺序执行的, 所以PC有自增功能</li>
<li>指令寄存器: 用于保存当前正在执行的指令</li>
<li>指令译码器: 仅对操作码字段进行译码, 向控制器提供特定的操作信号</li>
<li>微操作信号发生器: 根据IR的内容(指令)、PSW的内容(状态信息)及时序信号, 产生控制整个计算机系统所需的各种控制信号, 其结构有组合逻辑型和存储逻辑型两种</li>
<li>时序系统: 用于产生各种时序信号, 他们都是由统一时钟(CLOCK)分频得到</li>
<li>存储器地址寄存器: 用于存放所要访问的主存单元的地址</li>
</ul>
<p><img src="https://img1.imgtp.com/2022/07/29/zfdkieQX.png" alt="" loading="lazy"></p>
<h3 id="cpu的基本结构" tabindex="-1"><a class="header-anchor" href="#cpu的基本结构" aria-hidden="true">#</a> CPU的基本结构</h3>
<ul>
<li>ALU</li>
<li>中断系统</li>
<li>寄存器</li>
<li>CU</li>
</ul>
<h2 id="指令执行过程" tabindex="-1"><a class="header-anchor" href="#指令执行过程" aria-hidden="true">#</a> 指令执行过程</h2>
<h3 id="指令周期" tabindex="-1"><a class="header-anchor" href="#指令周期" aria-hidden="true">#</a> 指令周期</h3>
<p>指令周期: CPU从主存中每取出并执行一条指令所花的全部时间
<br> 指令周期常常用若干机器周期来表示, 机器周期又叫CPU周期
<br> 一个机器周期又包含若干时钟周期(也称为节拍、T周期或者CPU时钟周期, 它是CPU操作的最基本单位)</p>
<p>每个指令周期内机器周期数可以不等, 每个机器周期内的节拍数也可以不等, 如:</p>
<blockquote>
<p>空指令NOP: 取址周期
<br> 加法指令ADD: 取址周期+执行周期
<br> 取址周期+较长的执行周期
<br> 取址周期+间接寻址周期+执行周期
<br> 取址周期+间接寻址周期+执行周期+中断周期</p>
</blockquote>
<h3 id="指令周期流程" tabindex="-1"><a class="header-anchor" href="#指令周期流程" aria-hidden="true">#</a> 指令周期流程</h3>
<p><img src="https://img1.imgtp.com/2022/07/29/R9rwVady.svg" alt="" loading="lazy"></p>
<p>四个工作周期都有CPU访存操作, 只是访存的目的不同. 取址周期是为了取指令, 间址周期是为了取有效地址, 执行周期是为了取操作数, 中断周期是为了保存程序断点</p>
<h3 id="指令周期的数据流—取址周期" tabindex="-1"><a class="header-anchor" href="#指令周期的数据流—取址周期" aria-hidden="true">#</a> 指令周期的数据流—取址周期</h3>
<ol>
<li>当前指令地址送至存储器地址寄存器, 记做: (PC)-&gt;MAR</li>
<li>CU发出控制信号, 经控制总线传到主存, 这里是读信号, 记做: 1-&gt;R</li>
<li>将MAR所指主存中的内容经数据总线送入MDR, 记做M(MAR)-&gt;MDR</li>
<li>将MDR中的内容(此时是指令)送入IR, 记做: (MDR)-&gt;IR</li>
<li>CU发出控制信号, 形成下一条指令地址, 记做: (PC)+1-&gt;PC</li>
</ol>
<h3 id="指令周期的数据流-间址周期" tabindex="-1"><a class="header-anchor" href="#指令周期的数据流-间址周期" aria-hidden="true">#</a> 指令周期的数据流-间址周期</h3>
<ol>
<li>将指令的地址码放入MAR, 记做: Ad(IR)-&gt;MAR或者是Ad(MDR)-&gt;MAR</li>
<li>CU发出控制信号, 启动主存读操作, 记做: 1-&gt;R</li>
<li>将MAR所指主存中的内容经过数据总线送入MDR, 记做: M(MAR)-&gt;MDR</li>
<li>将有效地址送至指令的地址码字段, 记做: (MDR)-&gt;Ad(IR)</li>
</ol>
<h3 id="指令周期的数据流-执行周期" tabindex="-1"><a class="header-anchor" href="#指令周期的数据流-执行周期" aria-hidden="true">#</a> 指令周期的数据流-执行周期</h3>
<p>执行周期的任务是根据IR中的指令字的操作码和操作数通过ALU操作产生执行结果. 不同指令的执行周期操作数不同, 因此没有统一的数据流向</p>
<h3 id="指令周期的数据流-中断周期" tabindex="-1"><a class="header-anchor" href="#指令周期的数据流-中断周期" aria-hidden="true">#</a> 指令周期的数据流-中断周期</h3>
<p>暂停执行当前的程序去执行其他的程序. 为了能够恢复当前任务, 需要保存断点. 一般用堆栈来保存断点, 这里用SP表示栈顶地址, 假设SP指向栈顶元素, 进栈操作是先修改指针, 后存入数据.</p>
<p>中断周期中的进栈操作是将SP减1, 这和传统意义上的进栈操作相反, 原因是计算机的堆栈中都是向低地址增加, 所以进栈操作是减1而不是加1</p>
<ol>
<li>CU控制将SP-1, 修改后的地址送入MAR, 记做: (SP)-1-&gt;SP, (SP)-&gt;MAR. 本质上是将断点存入某个存储单元, 假设其地址为a, 故可以记做: a-&gt;MAR</li>
<li>CU发出控制信号, 启动主存做写操作, 记做: 1-&gt;w</li>
<li>将断点(PC内容)送入MDR, 记做(PC)-&gt;MDR</li>
<li>CU控制将中断服务程序的入口地址(由向量地址形成部件产生)送入PC, 记做: 向量地址-&gt;PC</li>
</ol>
<h3 id="指令执行方案" tabindex="-1"><a class="header-anchor" href="#指令执行方案" aria-hidden="true">#</a> 指令执行方案</h3>
<p>一个指令周期通常包括几个时间段(执行步骤), 每个步骤完成指令的一部分功能, 几个依次执行的步骤完成这条指令的全部功能</p>
<h4 id="单指令周期" tabindex="-1"><a class="header-anchor" href="#单指令周期" aria-hidden="true">#</a> 单指令周期</h4>
<p>对所有指令选用相同的执行时间来完成, 指令之间串行执行, 指令周期取决于执行时间最长的指令的执行时间</p>
<h4 id="多指令周期" tabindex="-1"><a class="header-anchor" href="#多指令周期" aria-hidden="true">#</a> 多指令周期</h4>
<p>对于不同类型的指令选用不同的执行步骤来完成. 指令之间串行执行; 可选用不同个数的时钟周期来完成不同指令的执行过程</p>
<h4 id="流水线方案" tabindex="-1"><a class="header-anchor" href="#流水线方案" aria-hidden="true">#</a> 流水线方案</h4>
<p>在每一个时钟周期启动一条指令, 尽量让多条指令同时运行, 但各自处在不同的执行步骤中, 指令之间并行执行</p>
<h2 id="数据通路的功能-单总线结构" tabindex="-1"><a class="header-anchor" href="#数据通路的功能-单总线结构" aria-hidden="true">#</a> 数据通路的功能&amp;单总线结构</h2>
<h3 id="数据通路" tabindex="-1"><a class="header-anchor" href="#数据通路" aria-hidden="true">#</a> 数据通路</h3>
<p>数据通路的基本结构:</p>
<ol>
<li>CPU内部单总线方式</li>
<li>CPU内部多总线方式</li>
<li>专用数据通路方式</li>
</ol>
<h3 id="数据通路-cpu内部单总线方式" tabindex="-1"><a class="header-anchor" href="#数据通路-cpu内部单总线方式" aria-hidden="true">#</a> 数据通路-CPU内部单总线方式</h3>
<ul>
<li>内部总线是指同一部件, 如CPU内部连接各个寄存器及运算部件之间的总线</li>
<li>系统总线是指同一台计算机系统的各部件, 如CPU、内存、通道和各类I/O接口之间互相连接的总线</li>
</ul>
<h4 id="寄存器之间的数据传送" tabindex="-1"><a class="header-anchor" href="#寄存器之间的数据传送" aria-hidden="true">#</a> 寄存器之间的数据传送</h4>
<p>比如把PC内容送至MAR, 实现传送操作的流程及控制信号为:
<br> (PC)-&gt;Bus PCout有效, PC内容送总线
<br> Bus-&gt;MAR MARin有效, 总线内容送MAR
<br> 重要的是描述清楚数据的流向</p>
<h4 id="主存与cpu之间的数据传送" tabindex="-1"><a class="header-anchor" href="#主存与cpu之间的数据传送" aria-hidden="true">#</a> 主存与CPU之间的数据传送</h4>
<p>比如CPU从主存读取指令, 实现传送操作的流向及控制信号为:
<br> (PC)-&gt;Bus-&gt;MAR PCout和MARin有效, 现行指令地址-&gt;MAR
<br> 1-&gt;R CU发读命令(通过控制总线发出)
<br> MEM(MAR)-&gt;MDR 指令从存储器-&gt;数据线-&gt;MDR
<br> MDR-&gt;Bus-&gt;IR MDRout和IRin有效, 现行指令-&gt;IR</p>
<h4 id="执行算术或者逻辑运算" tabindex="-1"><a class="header-anchor" href="#执行算术或者逻辑运算" aria-hidden="true">#</a> 执行算术或者逻辑运算</h4>
<p>比如一条加法指令, 微操作序列及控制信号为:
<br> Ad(IR)-&gt;Bus-&gt;MAR MDRout和MARin有效
<br> 1-&gt;R CU发出读命令
<br> MEM(MAR)-&gt;数据线-&gt;MDR 操作数从存储器-&gt;数据线-&gt;MDR
<br> MDR-&gt;Bus-&gt;Y MDRout和Yin有效, 操作数-&gt;Y
<br> (ACC)+(Y)-&gt;Z ACCout和ALUin有效, CU向ALU发送加命令
<br> Z-&gt;ACC Zout和ACCin有效, 结果-&gt;ACC</p>
<h3 id="公共操作" tabindex="-1"><a class="header-anchor" href="#公共操作" aria-hidden="true">#</a> 公共操作</h3>
<table>
<thead>
<tr>
<th>时序</th>
<th>微操作</th>
<th>有效控制信号</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>(PC)-&gt;MAR</td>
<td>PCout, MARin</td>
</tr>
<tr>
<td>2</td>
<td>M(MAR)-&gt;MDR</td>
<td>MemR, MARout, MDRinE</td>
</tr>
<tr>
<td>3</td>
<td>(MDR)-&gt;IR</td>
<td>MDRout, IRin</td>
</tr>
<tr>
<td>4</td>
<td>指令译码</td>
<td>-</td>
</tr>
<tr>
<td>5</td>
<td>(PC)+1-&gt;(PC)</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="数据通路专用通路结构" tabindex="-1"><a class="header-anchor" href="#数据通路专用通路结构" aria-hidden="true">#</a> 数据通路专用通路结构</h2>
<h3 id="专用数据通路方式-取指周期" tabindex="-1"><a class="header-anchor" href="#专用数据通路方式-取指周期" aria-hidden="true">#</a> 专用数据通路方式-取指周期</h3>
<p><img src="https://img1.imgtp.com/2022/07/29/ZWMjfyrE.png" alt="" loading="lazy"></p>
<ol>
<li>(PC)-&gt;MAR C0有效</li>
<li>(MAR)-&gt;主存 C1有效</li>
<li>1-&gt;R 控制单元向主存发送读命令</li>
<li>M(MAR)-&gt;MDR C2有效</li>
<li>(MDR)-&gt;IR C3有效</li>
<li>(PC)+1-&gt;PC</li>
<li>Op(IR)-&gt;CU C4有效</li>
</ol>
<h2 id="控制器设计硬布线控制器" tabindex="-1"><a class="header-anchor" href="#控制器设计硬布线控制器" aria-hidden="true">#</a> 控制器设计硬布线控制器</h2>
<h3 id="内容回顾" tabindex="-1"><a class="header-anchor" href="#内容回顾" aria-hidden="true">#</a> 内容回顾</h3>
<p>每一个机器周期由若干个时钟周期(或者称为节拍)组成, 通过若干个微操作组成的序列完成这个周期内需要做的事情. CU会在每一个节拍内, 发出一个微命令, 用来完成对应的微操作. 如: 微命令1使得PCout和MARin有效, 则完成对应的微操作1(PC)-&gt;MAR</p>
<blockquote>
<ul>
<li>取址周期(FE=1): T0: 微操作1、微操作2; T1: 微操作3; T2: 微操作4;</li>
<li>间址周期(IND=1): T0: 微操作5、微操作2; T1: 微操作6; T2: 微操作7;</li>
<li>执行周期(EX=1): T0: 无; T1: 微操作8; T2: 微操作9、微操作6</li>
<li>中断周期(INT=1): T0: 无; T1: 微操作10; T2: 微操作11</li>
</ul>
</blockquote>
<ul>
<li>一个节拍内可以并行完成多个“相容的”微操作</li>
<li>同一个微操作可能在不同指令的不同阶段内被使用</li>
<li>不同指令的执行周期所需节拍数各不相同, 为了简化设计, 选择定长的机器周期, 以可能出现的最大节拍数为准(通常以访存所需的节拍数为参考)</li>
<li>若实际所需的节拍数较少, 可将微操作安排在机器周期末尾几个节拍上进行</li>
<li>根据指令操作码、目前的机器周期、节拍信号、机器状态条件, 即可确定现在这个节拍下应该发出哪些“微指令”</li>
</ul>
<h3 id="硬布线控制器" tabindex="-1"><a class="header-anchor" href="#硬布线控制器" aria-hidden="true">#</a> 硬布线控制器</h3>
<p><img src="https://img1.imgtp.com/2022/07/29/5hIycIdW.svg" alt="" loading="lazy"></p>
<p>所有指令的取址周期、T0节拍下一定要完成(PC)-&gt;MAR. 则可知C1=FE∙T0 逻辑表达式是电路的数学化描述</p>
<blockquote>
<p>M(MAR)-&gt;MDR微操作命令的逻辑表达式: FE∙T1+IND∙T1(ADD+STA+LDA+JMP+BAN)+EX∙T1(ADD+LDA)</p>
</blockquote>
<h3 id="硬布线控制器的设计" tabindex="-1"><a class="header-anchor" href="#硬布线控制器的设计" aria-hidden="true">#</a> 硬布线控制器的设计</h3>
<h4 id="设计步骤" tabindex="-1"><a class="header-anchor" href="#设计步骤" aria-hidden="true">#</a> 设计步骤</h4>
<ol>
<li>分析每个阶段的微操作序列(取指令、间指、执行、中断四个阶段)「确定哪些指令在什么阶段、在什么条件下会使用到什么微操作」</li>
<li>选择CPU的控制方式「采用定长机器后期还是不定长机器周期?每个机器周期安排几个节拍?」</li>
<li>安排微操作的时序「如何用3个节拍完成整个机器周期内的所有微操作」</li>
<li>电路设计</li>
</ol>
<p>特点</p>
<p><br>指令越多, 设计和实现就越复杂, 因此一般用于RISC(精简指令集系统), 如果扩充一条新的指令, 则控制器的设计就需要大改, 因此扩充指令较困难, 由于使用纯硬件实现控制, 因此执行速度更快, 微操作控制信号由组合逻辑电路即时产生</p>
<h4 id="分析每个阶段的微操作序列" tabindex="-1"><a class="header-anchor" href="#分析每个阶段的微操作序列" aria-hidden="true">#</a> 分析每个阶段的微操作序列</h4>
<ul>
<li>取址周期(所有的指令都一样): PC-&gt;MAR; 1-&gt;R; M(MAR)-&gt;MDR; MDR-&gt;IR; OP(IR)-&gt;ID; (PC)+1-&gt;PC (ID为指令译码器 Instruction Decoder)</li>
<li>间址周期(所有指令都一样): Ad(IR)-&gt;MAR; 1-&gt;R; M(MAR)-&gt;MDR; MDR-&gt;Ad(IR)</li>
<li>执行周期(各不相同):
<ul>
<li>CLA: clear ACC指令 ACC清零 0-&gt;AC(很多地方将ACC简写为AC)</li>
<li>LDA: 取数指令, 把x所指内容取到ACC Ad(IR)-&gt;MAR; 1-&gt;R; M(MAR)-&gt; MDR; MDR-&gt;AC</li>
<li>JMP: 无条件转移 Ad(IR)-&gt;PC</li>
<li>BAN: 条件转移, 当ACC为负时转移 A0∙Ad(IR)+(1-A0)∙(PC)-&gt;PC</li>
</ul>
</li>
</ul>
<p>罗列出所有指令在各个阶段的微操作序列, 就可以知道在什么情况下需要使用这个微操作</p>
<h4 id="选择cpu的控制方式" tabindex="-1"><a class="header-anchor" href="#选择cpu的控制方式" aria-hidden="true">#</a> 选择CPU的控制方式</h4>
<p>假设采用同步控制方式(定长机器周期), 一个机器周期内安排3个节拍</p>
<h4 id="安排微操作时序" tabindex="-1"><a class="header-anchor" href="#安排微操作时序" aria-hidden="true">#</a> 安排微操作时序</h4>
<p>三个原则</p>
<ul>
<li>微操作的先后顺序不得随意更改</li>
<li>被控对象不同的微操作尽量安排在一个节拍内进行</li>
<li>占用时间较短的微操作, 尽量安排在一个节拍内完成, 并允许有先后顺序</li>
</ul>
<h5 id="取址周期" tabindex="-1"><a class="header-anchor" href="#取址周期" aria-hidden="true">#</a> 取址周期</h5>
<ol>
<li>T0: PC-&gt;MAR, 1-&gt;R</li>
<li>T1: M(MAR)-&gt;MDR, (PC)+1-&gt;PC</li>
<li>T2: MDR-&gt;IR, OP(IR)-&gt;ID</li>
</ol>
<ul>
<li>M(MAR)-&gt;MDR: 从主存取数据, 用时较长, 因此必须一个时钟周期才能保证微操作的完成</li>
<li>MDR-&gt;IR: 是CPU内部寄存器的数据传送, 速度很快, 因此在一个时钟周期内可以紧接着完成OP(IR)-&gt;ID, 也就是可以一次同时发出两个微命令</li>
</ul>
<h5 id="间址周期" tabindex="-1"><a class="header-anchor" href="#间址周期" aria-hidden="true">#</a> 间址周期</h5>
<ol>
<li>T0: Ad(IR)-&gt;MAR, 1-&gt;R</li>
<li>T1: M(MAR)-&gt;MDR</li>
<li>T2: MDR-&gt;Ad(IR)</li>
</ol>
<h4 id="电路设计" tabindex="-1"><a class="header-anchor" href="#电路设计" aria-hidden="true">#</a> 电路设计</h4>
<p>参见书表</p>
<p>可以得出微操作命令的逻辑表达式</p>
</div></template>
