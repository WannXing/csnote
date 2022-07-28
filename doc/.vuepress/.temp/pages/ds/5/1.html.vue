<template><div><h2 id="_5-1-树的基本概念" tabindex="-1"><a class="header-anchor" href="#_5-1-树的基本概念" aria-hidden="true">#</a> 5.1 树的基本概念</h2>
<h3 id="树的定义" tabindex="-1"><a class="header-anchor" href="#树的定义" aria-hidden="true">#</a> 树的定义</h3>
<ul>
<li>树的特点
<ul>
<li>树的根结点没有前驱，除根结点外的所有结点有且只有一个前驱</li>
<li>树中所有结点可以有零个或多个后继</li>
</ul>
</li>
</ul>
<h3 id="基本术语" tabindex="-1"><a class="header-anchor" href="#基本术语" aria-hidden="true">#</a> 基本术语</h3>
<ul>
<li>根结点：非空树种无前驱结点的结点</li>
<li>结点的度：结点拥有的子树数</li>
<li>树的度：树内各结点的度的最大值</li>
<li>叶子（终端结点）：没有后继元素（度 = 0）</li>
<li>分支结点（非终端结点）：度 != 0；</li>
<li>内部结点：根结点以外的分支结点</li>
<li>孩子，双亲：结点的子树的根称为该结点的孩子，该结点称为孩子的双亲</li>
<li>兄弟结点：有共同的双亲</li>
<li>堂兄弟：双亲在同一层的结点</li>
<li>结点的祖先：从根到该结点所经分支上的所有结点</li>
<li>结点的子孙：以某结点为根的子树中的任一结点</li>
<li>树的深度：树中结点的最大层次</li>
<li>有序树：树中结点的各子树从左至右有次序（最左边为第一个孩子）</li>
<li>无须树：树中结点的各子树无次序</li>
<li>森林：是m（m≥0）棵互不相交的树的集合，把根结点删除，树就变成了森林，一棵树可以看成是一个特殊的森林，给森林中的各子树加上一个双亲结点，森林就变成了树（树一定是森林，森林不一定是树）</li>
</ul>
<h3 id="树的性质" tabindex="-1"><a class="header-anchor" href="#树的性质" aria-hidden="true">#</a> 树的性质</h3>
<ul>
<li>树中的结点数等于―所有结点的度数之和+1</li>
<li>度为m的树中第i层上至多有<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>m</mi><mrow><mi>i</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding="application/x-tex">m^{i-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8247em;"></span><span class="mord"><span class="mord mathnormal">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span>个结点（i≥1）</li>
<li>高度为h的m叉树至多有<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><msup><mi>m</mi><mi>h</mi></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><mi>m</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(m^h-1)/(m-1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0991em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">h</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mord">/</span><span class="mopen">(</span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span> 个结点</li>
<li>具有n个结点的m叉树的最小高度为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">⌈</mo><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mi>m</mi></msub><mrow><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">(</mo><mi>m</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><mo stretchy="false">⌉</mo></mrow><annotation encoding="application/x-tex">\lceil  \log_m{(n(m-1)+1)} \rceil</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⌈</span><span class="mop"><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.0573em;"><span style="top:-2.4559em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2441em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mopen">(</span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mclose">)</span></span><span class="mclose">⌉</span></span></span></span></li>
</ul>
<h3 id="习题" tabindex="-1"><a class="header-anchor" href="#习题" aria-hidden="true">#</a> 习题</h3>
<ul>
<li>思考：树中的结点数等于→所有结点的度数之和+1</li>
<li>3 树的路径长度是从树根到每个结点的路径长度的什么→总和，注意与哈夫曼树的带权路径长度的区别</li>
<li>7 【2010】在一棵度为4的树T中，若有20个度为4的结点，10个度为3的结点，1个度为2的结点，10个度为1的结点，则树T的叶节点个数为多少 ?→82</li>
</ul>
</div></template>
