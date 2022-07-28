<template><div><h2 id="_7-1-查找的基本概念" tabindex="-1"><a class="header-anchor" href="#_7-1-查找的基本概念" aria-hidden="true">#</a> 7.1 查找的基本概念</h2>
<p>查找</p>
<p>查找表（查找结构）</p>
<p>静态查找表</p>
<p>关键字</p>
<p>平均查找长度</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>A</mi><mi>S</mi><mi>L</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>P</mi><mi>i</mi></msub><msub><mi>C</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">ASL = \sum^n_{i=1}P_iC_i
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mord mathnormal">L</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.9291em;vertical-align:-1.2777em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></p>
<h2 id="_7-2-顺序查找和折半查找" tabindex="-1"><a class="header-anchor" href="#_7-2-顺序查找和折半查找" aria-hidden="true">#</a> 7.2 顺序查找和折半查找</h2>
<h3 id="顺序查找" tabindex="-1"><a class="header-anchor" href="#顺序查找" aria-hidden="true">#</a> 顺序查找</h3>
<ul>
<li>一般线性表的顺序查找</li>
<li>有序表的顺序查找</li>
</ul>
<h3 id="折半查找" tabindex="-1"><a class="header-anchor" href="#折半查找" aria-hidden="true">#</a> 折半查找</h3>
<h3 id="分块查找-索引顺序查找" tabindex="-1"><a class="header-anchor" href="#分块查找-索引顺序查找" aria-hidden="true">#</a> 分块查找 / 索引顺序查找</h3>
<h4 id="平均查找长度" tabindex="-1"><a class="header-anchor" href="#平均查找长度" aria-hidden="true">#</a> 平均查找长度</h4>
<p>内和索引表中均采用顺序查找时</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>A</mi><mi>S</mi><mi>L</mi><mo>=</mo><msub><mi>L</mi><mi>I</mi></msub><mo>+</mo><msub><mi>L</mi><mi>S</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>s</mi><mo>+</mo><mi>n</mi></mrow><mrow><mn>2</mn><mi>s</mi></mrow></mfrac></mrow><annotation encoding="application/x-tex">ASL = L_I+L_S=\frac {s^2+2s+n}{2s}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mord mathnormal">L</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">L</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.07847em;">I</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">L</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05764em;">S</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.1771em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.4911em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span><span class="mord mathnormal">s</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">2</span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<p>当<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mo>=</mo><msqrt><mi>n</mi></msqrt></mrow><annotation encoding="application/x-tex">s=\sqrt{n}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.2397em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8003em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord mathnormal">n</span></span></span><span style="top:-2.7603em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
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
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2397em;"><span></span></span></span></span></span></span></span></span> 时，平均查找长度取最小值<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mi>n</mi></msqrt><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">\sqrt{n}+1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.2397em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8003em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord mathnormal">n</span></span></span><span style="top:-2.7603em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
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
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2397em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span></p>
<p>若对索引表采用折半查找时，则平均查找长度为</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>A</mi><mi>S</mi><mi>L</mi><mo>=</mo><msub><mi>L</mi><mi>I</mi></msub><mo>+</mo><msub><mi>L</mi><mi>S</mi></msub><mo>=</mo><mo stretchy="false">⌈</mo><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mo stretchy="false">(</mo><mi>b</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">⌉</mo><mo>+</mo><mfrac><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow><annotation encoding="application/x-tex">ASL = L_I+L_S=\lceil\log_2(b+1)\rceil+\frac {s+1}2
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mord mathnormal">L</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">L</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.07847em;">I</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">L</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05764em;">S</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⌈</span><span class="mop"><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.207em;"><span style="top:-2.4559em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2441em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)⌉</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:2.0074em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<!-- ### 习题

- 2 由n个数据元素组成的两个表：一个递增有序，一个无序。采用顺序查找算法，对有序表从头开始查找，发现当前元素已不小于待查元素时，停止查找，确定查找不成功，已知查找任一元素的概率是相同的，则在两种表中成功查找
  A 平均时间后者小
  B 平均时间两者相同
  C 平均时间前者小
  D 无法确定→B
- 8【2010】已知一个长度为16的顺序表L，其元素按关键字有序排列，若采用折半查找法查找一个L中不存在的元素，则关键字的比较次数最多是→5
- 13
- 14
- 15【2017】
- 20【2015】
- 24【2016】
- 综合题5【2013】 -->
<h2 id="_7-3-b-树和-b-树" tabindex="-1"><a class="header-anchor" href="#_7-3-b-树和-b-树" aria-hidden="true">#</a> 7.3 B 树和 B+树</h2>
<ul>
<li>B 树的概念（又称多路平衡查找树）
<ul>
<li>终端结点</li>
<li>叶子结点</li>
</ul>
</li>
<li>B 树及其基本操作
<ul>
<li>B 树的高度（磁盘存取次数）</li>
<li>B 树的查找</li>
<li>B 树的插入</li>
<li>B 树的删除</li>
</ul>
</li>
<li>B+树的基本概念<!-- ### 习题
- 2
- 7
- 8
- 9【2013】在一棵高度为2的5阶B树中，所含关键字的个数至少是→5
- 10【2014】在一棵具有15个关键字的4阶B树中，含关键字的结点个数最多是→15
- 15【2016】B+树不同于B树的特点之一是
  A 能支持顺序查找
  B 结点中含有关键字
  C 根结点至少有两个分支
  D 所有叶结点都在同一层上→A
- 16【2017】下列应用中，适合使用B+树的是
  A 编译器的词法分析
  B 关系数据库系统中的索引
  C 网络中的路由表快速查找
  D 操作系统的磁盘空闲块管理→B
- 17【2018】高度为5的3阶B树含有的关键字个数至少是→31
- 18【2020】依次将关键字5，6，9，13，8，2，12，15插入初始为空的4阶B树后，根结点中包含的关键字是→6和9
- 思考：高度为3的5阶B树，根结点含有的关键字个数至少是→1 -->
</li>
</ul>
<h2 id="_7-4-散列表" tabindex="-1"><a class="header-anchor" href="#_7-4-散列表" aria-hidden="true">#</a> 7.4 散列表</h2>
<h3 id="散列表的基本概念" tabindex="-1"><a class="header-anchor" href="#散列表的基本概念" aria-hidden="true">#</a> 散列表的基本概念</h3>
<p>散列函数</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi mathvariant="normal">H</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">h</mi><mo stretchy="false">(</mo><mi mathvariant="normal">k</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">y</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">A</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">r</mi></mrow><annotation encoding="application/x-tex">\rm Hash(key) = Addr
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathrm">Hash</span><span class="mopen">(</span><span class="mord mathrm" style="margin-right:0.01389em;">key</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathrm">Addr</span></span></span></span></span></span></p>
<p>散列表：根据关键字而直接进行访问的数据结构。也就是说，散列表建立了关键字和存储地址之间的一种直接映射关系</p>
<h3 id="散列函数的构造方法" tabindex="-1"><a class="header-anchor" href="#散列函数的构造方法" aria-hidden="true">#</a> 散列函数的构造方法</h3>
<ul>
<li>直接定址法</li>
<li>除余留数法</li>
<li>数字分析法</li>
<li>平方取中法</li>
</ul>
<h3 id="处理冲突的方法" tabindex="-1"><a class="header-anchor" href="#处理冲突的方法" aria-hidden="true">#</a> 处理冲突的方法</h3>
<ul>
<li>开放定址法
<ul>
<li>线性探测法</li>
<li>平方探测法</li>
<li>再散列法</li>
<li>伪随机序列法</li>
</ul>
</li>
</ul>
<h3 id="散列查找及性能分析" tabindex="-1"><a class="header-anchor" href="#散列查找及性能分析" aria-hidden="true">#</a> 散列查找及性能分析</h3>
<!-- ### 习题

- 6 设有一个含有 200 个表项的散列表，用线性探测法解决冲突，按关键字查询时找到一个表项的平均探测次数不超过 1.5，则散列表表项应能够容纳多少个表项（设查找成功的平均查找长度为 ASL = [1+1/(1-α)]/2，其中 α 为装填因子）→400
- 7
- 10【2011】
- 11【2014】
- 12
- 17【2018】
- 18【2019】现有长度为 11 且初始为空的散列表 HT，散列函数是 H(key) = key%7，采用线性探测法（线性探测再散列）法解决冲突。将关键字序列`87 40 30 6 11 22 98 20`依次插入 HT 后，HT 查找失败的平均查找长度是 →ASL=5.25
- 综合题 5【2010】将关键字序列`7 8 30 11 18 9 14 `散列存储到散列表中。散列表的存储空间是一个下标从 0 开始的一维数组，散列函数为 H(key) = (key × 3) MOD 7，处理冲突采用线性探测再散列法，要求装填（载）因子为 0.7。画出所构造的散列表，分别计算等概率的情况下，查找成功和查找不成功的平均查找长度 →ASL 成功=12/7，ASL 失败=18/7 -->
</div></template>
