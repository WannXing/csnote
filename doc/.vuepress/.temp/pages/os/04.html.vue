<template><div><h2 id="_4-1-文件系统基础" tabindex="-1"><a class="header-anchor" href="#_4-1-文件系统基础" aria-hidden="true">#</a> 4.1 文件系统基础</h2>
<h3 id="_1-文件的概念和基本操作" tabindex="-1"><a class="header-anchor" href="#_1-文件的概念和基本操作" aria-hidden="true">#</a> 1.文件的概念和基本操作</h3>
<p>文件是存储在硬盘上的信息集合，包含一块存储空间，分类和索引的信息，访问权限信息</p>
<p>文件最底层是数据项：某对象某属性的一个值</p>
<p>记录：一组相关的数据项的集合，一个对象的多个属性</p>
<h4 id="文件的基本操作" tabindex="-1"><a class="header-anchor" href="#文件的基本操作" aria-hidden="true">#</a> 文件的基本操作</h4>
<p>文件的打开：</p>
<ul>
<li>
<p>使用<strong>open系统调用</strong>，参数为[文件名，读写方式]，返回<strong>文件描述符</strong>，之后对文件的任何操作都不再需要文件名了</p>
<p><code v-pre>int open(const char *pathname, int flags, mode_t mode);</code></p>
</li>
<li>
<p>操作系统根据文件名找到目录项，检查用户权限，<strong>把该目录项放入用户进程的打开文件表</strong>（<strong>不是把文件读入内存！</strong>）</p>
</li>
</ul>
<p>每个<strong>进程的打开文件表</strong>中包含：【读写指针，访问控制权限，inode指针】</p>
<p>系统打开文件表中有所有文件的打开计数器count，表示多少进程打开该文件</p>
<p>关闭：删除用户进程的打开文件表项，释放空间</p>
<p>读：<code v-pre>ssize_t read(int fd, void *buf, size_t count);</code></p>
<p>写：<code v-pre>ssize_t write(int fd, void *buf, size_t count);</code></p>
<p>read和write系统调用的参数是文件描述符而不是文件名，通过open获得</p>
<h3 id="_2-文件的逻辑结构" tabindex="-1"><a class="header-anchor" href="#_2-文件的逻辑结构" aria-hidden="true">#</a> 2.文件的逻辑结构</h3>
<p>（1）无结构文件：<strong>流式文件</strong>，以字节为单位，穷举搜索</p>
<p>（2）有结构文件：<strong>记录式文件</strong>，一组相似的记录</p>
<ul>
<li>顺序文件：记录顺序排列的文件</li>
<li>索引文件：
<ul>
<li>索引文件需要一个<strong>索引表</strong>来进行记录的查找。</li>
<li>索引表项【索引号|记录长度|记录的逻辑地址】。</li>
<li>对于定长记录，直接用iL得到第i条记录的地址；对于可变长记录，就要顺序查找</li>
</ul>
</li>
<li>索引顺序文件：索引表项【键|逻辑地址】。
<ul>
<li>将顺序文件分成若干组，索引表中的键是每组的第一条记录的关键字值。</li>
<li>查找记录时，先用索引查到所在的组，每组内部顺序查找。</li>
<li>如果n条记录分成<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mi>N</mi></msqrt></mrow><annotation encoding="application/x-tex">\sqrt{N}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1133em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span></span></span></span>组，平均共需查找<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mi>N</mi></msqrt><mi mathvariant="normal">/</mi><mn>2</mn><mo>+</mo><msqrt><mi>N</mi></msqrt><mi mathvariant="normal">/</mi><mn>2</mn><mo>=</mo><msqrt><mi>N</mi></msqrt></mrow><annotation encoding="application/x-tex">\sqrt{N}/2+\sqrt{N}/2=\sqrt{N}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1767em;vertical-align:-0.25em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span><span class="mord">/2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1767em;vertical-align:-0.25em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span><span class="mord">/2</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1133em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9267em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span><span style="top:-2.8867em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1133em;"><span></span></span></span></span></span></span></span></span>次</li>
</ul>
</li>
</ul>
<p><img src="https://img1.imgtp.com/2022/07/30/df1hEZv4.png" alt="" loading="lazy"></p>
<p>（3）直接文件/散列文件：通过哈希函数映射到物理地址，可能冲突</p>
<h3 id="_3-目录结构" tabindex="-1"><a class="header-anchor" href="#_3-目录结构" aria-hidden="true">#</a> 3.目录结构</h3>
<p>目录在文件名和文件之间提供映射</p>
<h4 id="文件控制块fcb" tabindex="-1"><a class="header-anchor" href="#文件控制块fcb" aria-hidden="true">#</a> 文件控制块FCB</h4>
<p>包含文件的各种信息。每个文件都有一个FCB，FCB就是文件目录项</p>
<p>目录：一个文件夹下有哪些文件</p>
<img src="https://img1.imgtp.com/2022/07/30/hHdlnGz5.png" style="zoom:60%;" />
<h4 id="索引节点inode" tabindex="-1"><a class="header-anchor" href="#索引节点inode" aria-hidden="true">#</a> 索引节点inode</h4>
<p>由于查找目录时，fcb太大不好放入内存，于是将文件名以外的信息放入索引节点，<strong>索引节点放在磁盘上</strong></p>
<p>目录项只包含文件名-索引节点指针的映射，根据文件名可以找到对应的索引节点，就可以得到信息</p>
<p>文件目录项：【文件名|索引节点指针】</p>
<img src="https://img1.imgtp.com/2022/07/30/8ItcUcO5.png" style="zoom: 33%;" />
<h5 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h5>
<ul>
<li>单级目录结构：整个文件系统只有一个文件目录表，不允许文件重名</li>
<li>两级目录结构：不同用户的文件在不同的用户文件目录下</li>
<li>多级目录结构（树形目录结构）：
<ul>
<li>不按用户划分，每层目录对应树的一层。</li>
<li>从根目录出发得到绝对路径，从中间节点（当前目录）出发得到相对路径。</li>
<li>缺点：不便于文件共享</li>
</ul>
</li>
<li>无环图目录结构：
<ul>
<li>实现文件共享</li>
<li>在树形目录结构的基础上，可以不同文件名指向一个文件</li>
<li>每个共享节点有一个共享计数器，值为0时删除共享文件</li>
</ul>
</li>
</ul>
<img src="https://img1.imgtp.com/2022/07/30/PvLtUT91.png" style="zoom: 50%;" />
<h3 id="_4-文件共享" tabindex="-1"><a class="header-anchor" href="#_4-文件共享" aria-hidden="true">#</a> 4.文件共享</h3>
<h4 id="硬链接-基于索引节点" tabindex="-1"><a class="header-anchor" href="#硬链接-基于索引节点" aria-hidden="true">#</a> 硬链接（基于索引节点）</h4>
<ul>
<li>
<p>不同进程的打开文件表（目录）中该文件名对应的索引节点指针指向同一个inode</p>
</li>
<li>
<p>inode内部有引用计数count，一个用户从目录中删除该目录项后，count--。</p>
<p>count归0才能删除文件。</p>
</li>
<li>
<p>不同用户的硬链接文件的读写指针位置不同</p>
</li>
<li>
<p>fd1是文件描述符，是文件f1在打开文件表中的位置（索引值）</p>
</li>
</ul>
<img src="https://img1.imgtp.com/2022/07/30/0WspPhyQ.png" style="zoom:50%;" />
<h4 id="软链接-基于符号链" tabindex="-1"><a class="header-anchor" href="#软链接-基于符号链" aria-hidden="true">#</a> 软链接（基于符号链）</h4>
<ul>
<li>创建一个link文件（类似<strong>快捷方式</strong>），里面记录了原文件的路径，打开它本质上打开源文件</li>
<li>目录中link文件的inode的指针不指向源文件的inode</li>
<li>link文件inode的引用计数count直接复制源文件的，之后就没有关系了</li>
<li>当源文件被删除，link文件也就失效了</li>
</ul>
<p>硬链接速度比软链接快</p>
<h3 id="_5-文件保护" tabindex="-1"><a class="header-anchor" href="#_5-文件保护" aria-hidden="true">#</a> 5.文件保护</h3>
<p>口令保护：打开文件需要密码</p>
<p>加密保护：把文件从明文加密成密文，需要密钥解密</p>
<p>访问控制：为每个文件和目录增加一个<strong>访问控制表</strong>，规定每个用户对文件的访问方式（m个用户，n种权限，则需要mn位）</p>
<h2 id="_4-2-文件系统实现" tabindex="-1"><a class="header-anchor" href="#_4-2-文件系统实现" aria-hidden="true">#</a> 4.2 文件系统实现</h2>
<h3 id="一、文件系统层次结构" tabindex="-1"><a class="header-anchor" href="#一、文件系统层次结构" aria-hidden="true">#</a> 一、文件系统层次结构</h3>
<p>用户调用接口</p>
<p>文件目录系统：查找文件索引信息</p>
<p>存取控制验证模块</p>
<p>逻辑文件系统和文件信息缓冲区：用户要读写的记录-》逻辑地址</p>
<p>物理文件系统：逻辑地址-》物理地址</p>
<p>辅助分配模块：释放空间</p>
<p>设备管理程序模块：空间用来输入输出</p>
<h3 id="二、目录实现" tabindex="-1"><a class="header-anchor" href="#二、目录实现" aria-hidden="true">#</a> 二、目录实现</h3>
<p>线性列表：文件名直接映射地址</p>
<p>哈希表：根据hash(文件名)，返回一个地址</p>
<h3 id="三、文件分配" tabindex="-1"><a class="header-anchor" href="#三、文件分配" aria-hidden="true">#</a> 三、文件分配</h3>
<p>如何为文件分配磁盘块</p>
<h4 id="_1-连续分配" tabindex="-1"><a class="header-anchor" href="#_1-连续分配" aria-hidden="true">#</a> （1）连续分配</h4>
<p>一个文件占用若干连续的磁盘块</p>
<p>逻辑地址：【逻辑块号|块内偏移】</p>
<p>文件目录项：【文件名|起始块号|长度】</p>
<p>访问磁盘块时，起始块号+逻辑块号=物理块号</p>
<p>优点：<strong>随机访问</strong></p>
<p>缺点：文件增删改不方便，删除文件会产生外部碎片</p>
<h4 id="_2-链接分配-fat文件分配表" tabindex="-1"><a class="header-anchor" href="#_2-链接分配-fat文件分配表" aria-hidden="true">#</a> （2）链接分配，FAT文件分配表</h4>
<p>隐式链接：一个文件的每个磁盘块有指向下一块的指针。只能沿着链表顺序访问，访问磁盘次数太多。目录项为【文件名|起始块号|结束块号】。文件拓展方便，没有外部碎片</p>
<p>显式链接：<strong>整个磁盘</strong>在内存中有一个FAT（<strong>文件分配表</strong>），表项【块号|下一块的块号】。</p>
<ul>
<li>这样访问磁盘块时，只需先在FAT中沿着链查找，所以对磁盘是<strong>随机访问</strong>。</li>
<li>下一块的块号：-1表示结束，-2表示空闲。文件拓展方便，没有外部碎片</li>
</ul>
<img src="https://img1.imgtp.com/2022/07/30/Ge7LQ6cS.png" style="zoom:50%;" />
<p>优点：增删改方便</p>
<p>缺点：查不方便，只能<strong>顺序访问</strong>，需要额外存储空间存放链接指针</p>
<p>每个目录有一个目录文件，这个目录文件就位于该目录所在的簇中，里面存储该目录下每个文件的起始簇号。然后根据FAT，顺序找到每个文件的所有簇</p>
<h4 id="_3-索引分配" tabindex="-1"><a class="header-anchor" href="#_3-索引分配" aria-hidden="true">#</a> （3）索引分配</h4>
<p>每个文件把一个磁盘块作为索引块，里面是索引表【逻辑块号|物理块号】，目录中是【文件名|索引块号】</p>
<p>这样先找到索引块，然后里面按顺序记录了该文件所有块的物理块号。</p>
<p>优点：<strong>随机访问</strong>，增删改方便</p>
<p>缺点：索引表占空间</p>
<p>如果一个文件包含的块太多，一个索引表装不下，则有下面方法：</p>
<ul>
<li>索引链接：将多个索引块用链表连接，查得慢</li>
<li>多层索引：类似多级页表，最后一级页表直接指向盘块。如果inode已经在内存中，m级页表则需要读磁盘m+1次才能找到盘块</li>
<li>混合索引：为了避免多层索引时要读的物理块很少却要读很多次索引表，对顶级索引表的不同项采取不同的索引方法（不同层的多层索引）</li>
</ul>
<img src="https://img1.imgtp.com/2022/07/30/JlZ2IGyr.png" style="zoom: 67%;" />
<p>计算题：求单个文件的最大长度</p>
<p>多级索引就是索引数的n次方x块大小</p>
<h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4>
<table>
<thead>
<tr>
<th></th>
<th>访问方式</th>
<th>增删改</th>
<th>借助工具</th>
</tr>
</thead>
<tbody>
<tr>
<td>连续分配</td>
<td>随机访问</td>
<td>不方便</td>
<td>/</td>
</tr>
<tr>
<td>链接分配</td>
<td>顺序访问</td>
<td>方便</td>
<td>FAT表</td>
</tr>
<tr>
<td>索引分配</td>
<td>随机访问</td>
<td>方便</td>
<td>索引表</td>
</tr>
</tbody>
</table>
<h3 id="四、磁盘空闲空间管理" tabindex="-1"><a class="header-anchor" href="#四、磁盘空闲空间管理" aria-hidden="true">#</a> 四、磁盘空闲空间管理</h3>
<p>文件卷：把磁盘分成若干逻辑盘，如C盘，D盘</p>
<p>空闲块的分配和回收</p>
<h4 id="_1-空闲表法-连续分配" tabindex="-1"><a class="header-anchor" href="#_1-空闲表法-连续分配" aria-hidden="true">#</a> （1）空闲表法：连续分配</h4>
<p>空闲盘块表：【序号|第一个空闲块号|空闲块数】</p>
<p>在为文件分配空闲块时，先顺序查找空闲盘块表，直到大小满足要求，分配，修改表。回收时，分为前后无空闲块、前后均空闲、前空闲、后空闲四种合并情况。</p>
<h4 id="_2-空闲链表法" tabindex="-1"><a class="header-anchor" href="#_2-空闲链表法" aria-hidden="true">#</a> （2）空闲链表法</h4>
<p>空闲盘块链：将空闲空间以盘块为单位连成链表，从链头分配，盘块回收后挂到链尾</p>
<p>空闲盘区链：以多个连续盘块（盘区）为单位连成链表</p>
<h4 id="_3-位图法-bitmap" tabindex="-1"><a class="header-anchor" href="#_3-位图法-bitmap" aria-hidden="true">#</a> （3）位图法：bitmap</h4>
<p>设字长为n，则位图的一行有n位，每位代表一个盘块的分配情况，0表示空闲，1表示已分配</p>
<p>位图的第i行第j列（字号为i，位号为j）表示盘块号b为ni+j的分配情况（默认i从0开始，若从1开始，盘块号为n(i-1)+j）</p>
<p>反过来，若盘块号为b，则字号为b/n，位号为b%n</p>
<p><img src="https://img1.imgtp.com/2022/07/30/hjQMoqrB.png" alt="" loading="lazy"></p>
<h4 id="_4-成组链接法" tabindex="-1"><a class="header-anchor" href="#_4-成组链接法" aria-hidden="true">#</a> （4）成组链接法</h4>
<p>Unix操作系统，内存中有一个超级块，它的第一个单元记录了一组空闲盘块的数量，第二个单元指向下一组空闲盘块（又相当于一个超级块）的首地址，后面每个单元指向一个空闲盘块。这样把所有空闲盘块串起来，适合大型文件，一下子找到许多空闲块</p>
<h2 id="_4-3-磁盘组织与管理" tabindex="-1"><a class="header-anchor" href="#_4-3-磁盘组织与管理" aria-hidden="true">#</a> 4.3 磁盘组织与管理</h2>
<h3 id="磁盘结构" tabindex="-1"><a class="header-anchor" href="#磁盘结构" aria-hidden="true">#</a> 磁盘结构</h3>
<p>一个盘面有上千个同心圆，称为磁道，每个磁道划分为几百个扇区（也叫盘块），扇区是寻址的最小单位。</p>
<p>所有盘片上相同位置的磁道组成柱面，读写磁头同时读一个柱面上的不同盘面</p>
<p><strong>磁盘地址</strong>：【柱面号|盘面号|扇区号】</p>
<p>柱面号确定哪一个磁道</p>
<p>盘面号确定哪张盘，即哪个磁头对应的位置，也称为磁头号</p>
<p>例：2019.44</p>
<h3 id="磁盘读写时间" tabindex="-1"><a class="header-anchor" href="#磁盘读写时间" aria-hidden="true">#</a> 磁盘读写时间</h3>
<p>磁盘读写时间=寻道时间+延迟时间（旋转到某扇区）+传输时间</p>
<ul>
<li>
<p>平均寻道时间=mn+s，m是常数，n是跨越磁道数，s是启动磁臂时间。一般题中直接给</p>
</li>
<li>
<p>平均旋转时间=一转的时间/2</p>
</li>
<li>
<p>传输时间=传输字节数/传输速率</p>
<p>假设已知每个磁道的扇区数，则传输一个扇区的时间=一转的时间/扇区数</p>
</li>
</ul>
<h3 id="磁盘调度算法" tabindex="-1"><a class="header-anchor" href="#磁盘调度算法" aria-hidden="true">#</a> 磁盘调度算法</h3>
<p>多个进程请求读写磁盘，操作系统决定先为哪个请求服务</p>
<p>（1）先来先服务FCFS：按照请求的先后顺序服务</p>
<p>（2）最短寻找时间优先SSTF：总是先找离当前位置最近的磁道，会使远的饥饿</p>
<p>（3）扫描SCAN（电梯调度）：开始选定磁头移动方向，然后走到<strong>最靠边的有请求的磁道</strong>再反方向移动。不会饥饿，对内外磁道响应频率不平均【来回扫】</p>
<p>（4）循环扫描C-SCAN：磁头只能单向移动，一旦移动到最右侧的序号，就立刻回到最左侧序号，不处理中间的请求【单向扫】</p>
<ul>
<li>例如序列30,50,90,120，当前磁头100向磁道号增大方向移动</li>
<li>SCAN路径为：100-&gt;120-&gt;90-&gt;50-&gt;30</li>
<li>C-SCAN路径为100-&gt;120-&gt;30-&gt;50-&gt;90，共移动了20+90+60=170个磁道</li>
<li><strong>两种方法都不走到尽头，只走到有请求的</strong></li>
</ul>
<p>（5）LOOK调度：SCAN不走到头，只走到最边缘的请求</p>
<h3 id="磁盘记录排列问题" tabindex="-1"><a class="header-anchor" href="#磁盘记录排列问题" aria-hidden="true">#</a> 磁盘记录排列问题</h3>
<p>读完一块信息后需要处理，而此时磁盘仍在旋转，所以希望旋转后正好到达下一个需要的块，这就涉及到如何更好地排列连续的记录问题。</p>
<p>王道8.4（21）</p>
<p>减少延迟时间的方法：同一盘面交替编号，不同盘面错位命名</p>
<h3 id="磁盘的初始化" tabindex="-1"><a class="header-anchor" href="#磁盘的初始化" aria-hidden="true">#</a> 磁盘的初始化</h3>
<p>硬盘出厂时只有若干磁道，之后</p>
<ul>
<li>物理格式化：
<ul>
<li>各个磁道分成<strong>扇区</strong>，编物理地址。确定管理扇区的数据结构，包括扇区校验码，校验扇区内数据是否错误</li>
<li>将磁盘<strong>分区</strong>，如CDE盘，每个分区由若干柱面组成</li>
</ul>
</li>
<li>逻辑格式化：
<ul>
<li>创建<strong>文件系统</strong>，包括文件系统根目录</li>
<li>对空闲磁盘块管理的数据结构初始化（如位图，空闲分区表）</li>
</ul>
</li>
</ul>
<p>磁盘分成簇/块是操作系统层面的，创建文件时以簇为单位分配空间</p>
<p>引导块：计算机启动时需要自举程序初始化硬件，启动操作系统。自举程序一部分存在ROM中，完整功能的自举程序存在磁盘的启动块上（引导块）</p>
<p>坏块：硬件故障，FAT标明坏的扇区</p>
<p>操作系统以簇为单位分配磁盘空间</p>
<h2 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h2>
<p>注意如下概念：目录，索引节点，打开文件表，FAT表，索引表</p>
<p>目录的单位是FCB，用于从文件名找到文件地址</p>
<p>为了减小目录大小引出索引节点，目录项指向inode，inode里面保存信息和文件地址</p>
<p>进程的打开文件表就是个目录</p>
<p>为文件分配盘块有三种方式</p>
<p>1.连续分配时，目录包括文件名，起始块号，长度</p>
<p>2.链接分配时，目录包括文件名，起始块号，然后根据FAT表不断找下一块的块号</p>
<p>3.索引分配时，每个文件有个索引表，表项指向不同的盘块，或者多级索引表套娃</p>
</div></template>
