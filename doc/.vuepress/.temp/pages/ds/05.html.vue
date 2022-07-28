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
<h2 id="_5-2-二叉树的概念" tabindex="-1"><a class="header-anchor" href="#_5-2-二叉树的概念" aria-hidden="true">#</a> 5.2 二叉树的概念</h2>
<!-- ### 二叉树的定义及其主要特性 -->
<h3 id="二叉树的定义" tabindex="-1"><a class="header-anchor" href="#二叉树的定义" aria-hidden="true">#</a> 二叉树的定义</h3>
<p>每个结点至多只有两棵子树，且子树有左右之分</p>
<h3 id="几个特殊的二叉树" tabindex="-1"><a class="header-anchor" href="#几个特殊的二叉树" aria-hidden="true">#</a> 几个特殊的二叉树</h3>
<p>满二叉树：假设高度为 3，那么满二叉树的结点数就是（1+2+4=7）7 个，每层都是满的</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>     1
    / \
   2   3     &lt;== 这就是满二叉树
  / \ / \
 4  5 6  7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完全二叉树：其实就是满二叉树删除最后 x 个结点，比如一颗完全二叉树的高度是 3，下图都是完全二叉树</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>     1           1           1
    / \         / \         / \
   2   3       2   3       2   3
  / \ /       / \         /
 4  5 6      4  5        4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>二叉排序树：对于任何一个结点，左子树比它小，右子树比它大</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>     5           5             5
    /           / \           / \
   3           3   7         3   7   ......好多好多
  /           /     \       /   /
 1           1       10    1   6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>平衡二叉树：可以理解为更加严格的二叉排序树</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>     5       👈这是二叉排序树😋                3
    /        但不是平衡二叉树                  / \
   3         你可以理解为左轻右重             1   5
  /          很不美观，调整后👉
 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于平衡二叉树其实有更加严格的定义，请自行查阅</p>
<!-- - 满二叉树 Full Binary Tree

  - 定义：高度为 h 且有$2^h-1$ 个结点的二叉树称为满二叉树
- 完全二叉树 Complete Binary Tree
  - 定义―深度为 h 的具有 n 个结点的二叉树，当且仅当其每一个结点都与深度为 h 的满二叉树中编号 1~n 的结点一一对应时，称之为完全二叉树
  - ① 若$i<[n/2]$ ，则结点 i 为分支结点，否则为叶子结点
  - ② 叶子结点只可能在层次最大的两层上出现。对于最大层中的叶子结点，都一次排列在该层最左边的位置上
  - ③ 若有度为 1 的结点，则只可能有一个，且该结点只有左孩子而无右孩子（重要特征）
  - ④ 按层序编号后，一旦出现某结点（编号为 i）为叶子结点或只有左孩子，则编号大于 i 的结点均为叶子结点
  - ⑤ 若 n 为奇数，则每个分支结点都有左孩子和右孩子；若 n 为偶数，则编号最大的分支结点（编号为 n/2）只有左孩子，没有右孩子，其余分支结点左、右孩子都有
- 二叉排序树 Binary Search Tree / Binary Sort Tree
  - 概念―左子树上所有结点的关键字均小于根结点的关键字；右子树上的所有结点的关键字均大于根结点的关键字；左子树和右子树又各是一棵二叉排序树
- 平衡二叉树 Balanced Binary Tree / AVL Tree
  - 概念―树上任一结点的左子树和右子树的深度之差不超过 1 -->
<h3 id="二叉树的性质" tabindex="-1"><a class="header-anchor" href="#二叉树的性质" aria-hidden="true">#</a> 二叉树的性质</h3>
<p>TODO 之前的笔记晦涩难懂，要重新写一下</p>
<!-- - 非空二叉树上的叶子结点数等于?→ 度为 2 的结点数加 1，即$n_0=n_2+1$

- 非空二叉树上第 k 层上至多有多少个结点，总共至多有多少个结点―$2^{k-1}$ 个结点，$2^k-1$ 个结点
- 高度为 h 的二叉树至多有多少个结点?→$2^h-1$ 个结点
- 对完全二叉树按从上到下、从左到右的顺序依次编号 1，2，...，n，则有以下关系
  - ① 当 i >1 时，结点 i 的双亲的编号为 [ i/2 ]，即当 i 为偶数时，其双亲编号为 i/2，它是双亲的左孩子；当 i 为奇数时，其双亲的编号为 (i-1) / 2，它是双亲的右孩子
  - ② 当 2i ≤ n 时，结点 i 的左孩子编号为 2i，否则无左孩子
  - ③ 当 2i + 1 ≤ n 时，结点 i 的右孩子编号为 2i，否则无右孩子
  - ④ 结点 i 所在的层次（深度）为 $[ \log_2 i]+1$
- 具有 n 个（n > 0）结点的完全二叉树的高度为$\lceil\log_2(n+1)\rceil或[\log_2n]+1$ -->
<h3 id="二叉树的存储结构" tabindex="-1"><a class="header-anchor" href="#二叉树的存储结构" aria-hidden="true">#</a> 二叉树的存储结构</h3>
<ul>
<li>顺序存储结构
<ul>
<li>完全二叉树和满二叉树采用顺序存储比较合适</li>
<li>对于一般的二叉树，需要添加并不存在的空结点</li>
<li>结点类型定义</li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAXSIZE</span> <span class="token expression"><span class="token number">100</span></span></span>
<span class="token keyword">typedef</span> TElemType SqBiTree<span class="token punctuation">[</span>MAXSIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
SqBiTree bt<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>链式存储结构</li>
</ul>
<p>二叉链表</p>
<p>二叉链表的结点类型定义</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">BiTNode</span><span class="token punctuation">{</span>
    TElemType data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">BiTNode</span> <span class="token operator">*</span>lchild<span class="token punctuation">,</span><span class="token operator">*</span>rchild<span class="token punctuation">;</span>
<span class="token punctuation">}</span>BiTNode<span class="token punctuation">,</span> <span class="token operator">*</span>BiTree<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思考：在含有 n 个结点的二叉链表中，含有多少个空链域？?→n+1 个空链域</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo fence="true">{</mo><mtable rowspacing="0.36em" columnalign="left left" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn>1</mn><msub><mi>n</mi><mn>0</mn></msub><mo>+</mo><mn>1</mn><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn><msub><mi>n</mi><mn>2</mn></msub><mo>=</mo><mi>n</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mtext>结点数之和</mtext></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn>0</mn><msub><mi>n</mi><mn>0</mn></msub><mo>+</mo><mn>1</mn><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>n</mi><mn>2</mn></msub><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mtext>度和结点关系</mtext></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn>2</mn><msub><mi>n</mi><mn>0</mn></msub><mo>+</mo><mn>1</mn><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><mn>0</mn><msub><mi>n</mi><mn>2</mn></msub><mo>=</mo><mo stretchy="false">?</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mtext>求空链域</mtext></mstyle></mtd></mtr></mtable></mrow><annotation encoding="application/x-tex">\begin{cases}
1n_0+1n_1+1n_2=n&amp;结点数之和\\
0n_0+1n_1+2n_2=n-1&amp;度和结点关系\\
2n_0+1n_1+0n_2=?&amp;求空链域\\
\end{cases}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:4.32em;vertical-align:-1.91em;"></span><span class="minner"><span class="mopen"><span class="delimsizing mult"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.35em;"><span style="top:-2.2em;"><span class="pstrut" style="height:3.15em;"></span><span class="delimsizinginner delim-size4"><span>⎩</span></span></span><span style="top:-2.192em;"><span class="pstrut" style="height:3.15em;"></span><span style="height:0.316em;width:0.8889em;"><svg xmlns="http://www.w3.org/2000/svg" width='0.8889em' height='0.316em' style='width:0.8889em' viewBox='0 0 888.89 316' preserveAspectRatio='xMinYMin'><path d='M384 0 H504 V316 H384z M384 0 H504 V316 H384z'/></svg></span></span><span style="top:-3.15em;"><span class="pstrut" style="height:3.15em;"></span><span class="delimsizinginner delim-size4"><span>⎨</span></span></span><span style="top:-4.292em;"><span class="pstrut" style="height:3.15em;"></span><span style="height:0.316em;width:0.8889em;"><svg xmlns="http://www.w3.org/2000/svg" width='0.8889em' height='0.316em' style='width:0.8889em' viewBox='0 0 888.89 316' preserveAspectRatio='xMinYMin'><path d='M384 0 H504 V316 H384z M384 0 H504 V316 H384z'/></svg></span></span><span style="top:-4.6em;"><span class="pstrut" style="height:3.15em;"></span><span class="delimsizinginner delim-size4"><span>⎧</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.85em;"><span></span></span></span></span></span></span><span class="mord"><span class="mtable"><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.41em;"><span style="top:-4.41em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord">1</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">n</span></span></span><span style="top:-2.97em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord">0</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">2</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span></span></span><span style="top:-1.53em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord">2</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">0</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mclose">?</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.91em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:1em;"></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.41em;"><span style="top:-4.41em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord cjk_fallback">结点数之和</span></span></span><span style="top:-2.97em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord cjk_fallback">度和结点关系</span></span></span><span style="top:-1.53em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord cjk_fallback">求空链域</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.91em;"><span></span></span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<p>再来看看三叉链表，它的结点类型定义如下</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">TriNode</span><span class="token punctuation">{</span>
  TElemType data<span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">TriNode</span> <span class="token operator">*</span>lchild<span class="token punctuation">,</span><span class="token operator">*</span>rchild<span class="token punctuation">,</span><span class="token operator">*</span>parent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>TriNode<span class="token punctuation">,</span> <span class="token operator">*</span>TriTree<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看着很吓人，其实仔细阅读并不难</p>
<!-- ### 习题

- 6 设二叉树有2n个结点，且m<n，则不可能存在（）的结点
  A n个度为0
  B 2m个度为0
  C 2m个度为1
  D 2m个度为2→C
- 11【2009】已知一棵完全二叉树的第6层（设根为第1层）有8个叶结点，则完全二叉树的结点个数最少是?→39
- 14 【2011】若一棵完全二叉树有768个结点，则该二叉树中叶结点的个数为→384
- 22【2018】设一棵非空完全二叉树T的所有叶结点均位于同一层，且每个非叶结点都有2个子节点。若T有k个叶结点，则T的结点总数是→2k-1
- 23 【2020】对于任意一棵高度为5且有10个结点的二叉树，若采用顺序存储结构保存，每个结点占1个存储单元（仅存放结点的数据信息），则存放该二叉树需要的存储单元数量至少是→31，为了满足任意性，要把1~5层的结点都存储起来 -->
<h2 id="_5-3-二叉树的遍历和线索二叉树" tabindex="-1"><a class="header-anchor" href="#_5-3-二叉树的遍历和线索二叉树" aria-hidden="true">#</a> 5.3 二叉树的遍历和线索二叉树</h2>
<h3 id="二叉树的遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历" aria-hidden="true">#</a> 二叉树的遍历</h3>
<h4 id="先序遍历-preorder" tabindex="-1"><a class="header-anchor" href="#先序遍历-preorder" aria-hidden="true">#</a> 先序遍历 PreOrder</h4>
<p>遍历结点的顺序如下，先是 根结点、再是左子树，最后右子树</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    1                1
   / \     =>       / \
  2   3            2   5
                  / \ / \
                 3  4 6  7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先序遍历的算法实现（递归）</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">PreOrder</span><span class="token punctuation">(</span>BiTree T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>T <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>         <span class="token comment">// 如果二叉树非空，则继续</span>
    <span class="token function">visit</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">// 访问根结点内容</span>
    <span class="token function">PreOrder</span><span class="token punctuation">(</span>T<span class="token operator">-></span>lchild<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 访问左子树内容</span>
    <span class="token function">PreOrder</span><span class="token punctuation">(</span>T<span class="token operator">-></span>rchild<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 访问右子树内容</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="中序遍历-inorder" tabindex="-1"><a class="header-anchor" href="#中序遍历-inorder" aria-hidden="true">#</a> 中序遍历 InOrder</h4>
<p>遍历结点的顺序如下，先是 左子树、再是根节点，最后右子树</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    2                4
   / \     =>       / \
  1   3            2   6
                  / \ / \
                 1  3 5  7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中序遍历的算法实现（递归）</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">InOrder</span><span class="token punctuation">(</span>BiTree T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>T <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">InOrder</span><span class="token punctuation">(</span>T<span class="token operator">-></span>lchild<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">visit</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">InOrder</span><span class="token punctuation">(</span>T<span class="token operator">-></span>rchild<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="后续遍历-postorder" tabindex="-1"><a class="header-anchor" href="#后续遍历-postorder" aria-hidden="true">#</a> 后续遍历 PostOrder</h4>
<p>遍历结点的顺序如下，先是 左子树、再是根节点，最后右子树</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>    3                7
   / \     =>       / \
  1   2            3   6
                  / \ / \
                 1  2 4  5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">PostOrder</span><span class="token punctuation">(</span>BiTree T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>T <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">PostOrder</span><span class="token punctuation">(</span>T<span class="token operator">-></span>lchild<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">PostOrder</span><span class="token punctuation">(</span>T<span class="token operator">-></span>rchild<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">visit</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="递归算法和非递归算法的转换" tabindex="-1"><a class="header-anchor" href="#递归算法和非递归算法的转换" aria-hidden="true">#</a> 递归算法和非递归算法的转换</h4>
<p>中序遍历的非递归算法</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">InOrder2</span><span class="token punctuation">(</span>BiTree T<span class="token punctuation">,</span> SqStack S<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">InitStack</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span>
  BiTree p <span class="token operator">=</span> T<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">IsEmpty</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">Push</span><span class="token punctuation">(</span>S<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>
        p <span class="token operator">=</span> p<span class="token operator">-></span>lchild<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">Pop</span><span class="token punctuation">(</span>S<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">visit</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
        p <span class="token operator">=</span> p<span class="token operator">-></span>rchild<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先序遍历非递归</p>
<p>TODO</p>
<p>后续遍历非递归（比较难）</p>
<p>TODO</p>
<h4 id="层次遍历" tabindex="-1"><a class="header-anchor" href="#层次遍历" aria-hidden="true">#</a> 层次遍历</h4>
<p>字面意思，一行一行遍历</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>     1
    / \
   2   3
  / \ / \
 4  5 6  7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">LevelOrder</span><span class="token punctuation">(</span>BiNode T<span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// 输入根结点</span>
  <span class="token function">InitQueue</span><span class="token punctuation">(</span>Q<span class="token punctuation">)</span>
  BiTree p<span class="token punctuation">;</span>
  <span class="token function">EnQueue</span><span class="token punctuation">(</span>Q<span class="token punctuation">,</span> T<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">IsEmpty</span><span class="token punctuation">(</span>Q<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>      <span class="token comment">// 判断队列是否为空</span>
    <span class="token function">DeQueue</span><span class="token punctuation">(</span>Q<span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">visit</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">// 访问p结点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token operator">-></span>lchild <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
        <span class="token function">EnQueue</span><span class="token punctuation">(</span>Q<span class="token punctuation">,</span> p<span class="token operator">-></span>lchild<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token operator">-></span>rchild <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
        <span class="token function">EnQueue</span><span class="token punctuation">(</span>Q<span class="token punctuation">,</span> p<span class="token operator">-></span>rchild<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二级推论" tabindex="-1"><a class="header-anchor" href="#二级推论" aria-hidden="true">#</a> 二级推论</h4>
<ul>
<li>（先序 + 中序） =&gt; 唯一的二叉树</li>
<li>（后序 + 中序） =&gt; 唯一的二叉树</li>
<li>（层序 + 中序） =&gt; 唯一的二叉树</li>
</ul>
<h4 id="线索二叉树" tabindex="-1"><a class="header-anchor" href="#线索二叉树" aria-hidden="true">#</a> 线索二叉树</h4>
<p>TODO</p>
<!-- - 由遍历序列构造二叉树

  - 由二叉树的先序序列和中序序列可以唯一地确定一棵二叉树
  - 由二叉树的后序序列和中序序列也可以唯一地确定一棵二叉树
  - 由二叉树层序序列和中序序列也可以唯一地确定一棵二叉树
  - 思考：知道哪些组合可以构造一棵二叉树?→ 先序+中序；中序+后序；中序+层次
- 线索二叉树 Threaded Binary Tree
  - 线索二叉树的基本概念
  - 中序线索二叉树的构造
  - 中序线索二叉树的遍历
  - 先序线索二叉树和后序线索二叉树 -->
<!-- ### 习题

- 5 在二叉树中有两个结点 m 和 n，若 m 是 n 的祖先，则使用什么遍历方法可以找到 m 到 n 的路径 → 后序遍历
- 6 在二叉树的前序序列、中序序列和后序序列中，所有叶子结点的先后顺序相同吗？若不全相同，则哪几种遍历方式的先后顺序相同 → 完全相同
- 12【2009】
- 14 【2011】若一棵二叉树的前序遍历序列和后序遍历序列分别为{ 1, 2, 3, 4}和{4, 3, 2, 1}，则该二叉树的中序遍历序列不会是
  A. 1234
  B. 2341
  C. 3241
  D. 4321→C
- 15 【2012】若一棵二叉树的前序遍历序列为{ a, e, b, d, c}，后序遍历序列为{ b, c, d, e, a}，则根结点的孩子结点 → 只有 e。虽然从先序和后序无法唯一确定一棵二叉树，但是可以确定结点的子孙关系
- 16【2017】
- 21【2017】
- 23 线索二叉树是一种什么结构？「逻辑、逻辑和存储、物理、线性」?→ 物理
- 26 一棵左子树为空的二叉树在先序线索化后，其中空的链域的个数是 →2 个
- 28【2010】符合后序线索树定义的是
- 29 二叉树在线索化后，仍不能有效求解的问题是？
  A 先序线索二叉树中求先序后继
  B 中序线索二叉树中求中序后继
  C 中序线索二叉树中求中序前驱
  D 后序线索二叉树中求后序后继 →D
- 31 （ ）的遍历仍需要栈的支持
  A 前序线索树
  B 中序线索树
  C 后序线索树
  D 所有线索树 →C
- 32【2013】
- 33【2014】
- 34【2015】
- 36【2020】
- 综合题 19【2014】
- 综合题 20【2017】 -->
<h2 id="_5-4-树、森林-tree-forest" tabindex="-1"><a class="header-anchor" href="#_5-4-树、森林-tree-forest" aria-hidden="true">#</a> 5.4 树、森林 Tree Forest</h2>
<h3 id="树的存储结构" tabindex="-1"><a class="header-anchor" href="#树的存储结构" aria-hidden="true">#</a> 树的存储结构</h3>
<ul>
<li>双亲表示法</li>
<li>孩子表示法</li>
<li>孩子兄弟表示法</li>
</ul>
<h3 id="树、森林与二叉树的转换" tabindex="-1"><a class="header-anchor" href="#树、森林与二叉树的转换" aria-hidden="true">#</a> 树、森林与二叉树的转换</h3>
<h3 id="树和森林的遍历" tabindex="-1"><a class="header-anchor" href="#树和森林的遍历" aria-hidden="true">#</a> 树和森林的遍历</h3>
<ul>
<li>先根遍历</li>
<li>后根遍历（部分教材也将森林中的中根遍历称为后根遍历）</li>
</ul>
<h3 id="树的应用——并查集" tabindex="-1"><a class="header-anchor" href="#树的应用——并查集" aria-hidden="true">#</a> 树的应用——并查集</h3>
<ul>
<li>Union(S, Root1, Root2)</li>
<li>Find(S, x)</li>
<li>Initial(S)</li>
<li>并查集的结构定义</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">SIZE</span> <span class="token expression"><span class="token number">100</span></span></span>
<span class="token keyword">int</span> UFSets<span class="token punctuation">[</span>SIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>并查集的初始化操作</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">initUFSets</span><span class="token punctuation">(</span><span class="token keyword">int</span> S<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> SIZE<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
S<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>并查集的查找操作</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">Find</span><span class="token punctuation">(</span><span class="token keyword">int</span> S<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>S<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> x <span class="token operator">=</span> S<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>并查集的合并操作</li>
</ul>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">Union</span><span class="token punctuation">(</span><span class="token keyword">int</span> S<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> Root1<span class="token punctuation">,</span> <span class="token keyword">int</span> Root2<span class="token punctuation">)</span><span class="token punctuation">{</span>
S<span class="token punctuation">[</span>Root2<span class="token punctuation">]</span> <span class="token operator">=</span> Root1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ### 习题

- 2 利用二叉链表存储森林时，根结点的右指针是
  A 指向最左兄弟
  B 指向最右兄弟
  C 一定为空
  D 不一定为空 →D

- 3【2009】将森林转换为对应的二叉树，若在二叉树中，结点 u 是结点 v 的父结点的父结点，则在原来的森林中，u 和 v 可能具有的关系是
  ① 父子关系
  ② 兄弟关系
  ③ u 的父结点与 v 的父结点是兄弟关系 →①②

- 5
- 8【2011】
- 9【2014】将森林 F 转换为对应的二叉树 T，F 中叶结点的个数等于
  A T 中叶结点的个数
  B T 中度为 1 的结点的个数
  C T 中左孩子指针为空的结点个数
  D T 中右孩子指针为空的结点个数 →C
- 12【2016】
- 15【2019】
- 16 【2020】已知森林 F 及与之对应的二叉树 T，若 F 的先根遍历序列是{ a, b, c, d, e, e}，中根遍历序列是{ b, a, d, e, e, c}，则 T 的后根遍历序列是？→{ b, e, e, d, c, a }
- 综合题 4【2016】 -->
<h2 id="_5-5-树与二叉树的应用" tabindex="-1"><a class="header-anchor" href="#_5-5-树与二叉树的应用" aria-hidden="true">#</a> 5.5 树与二叉树的应用</h2>
<h3 id="二叉排序树-bst" tabindex="-1"><a class="header-anchor" href="#二叉排序树-bst" aria-hidden="true">#</a> 二叉排序树（BST）</h3>
<ul>
<li>二叉排序树的定义</li>
<li>二叉排序树的查找</li>
<li>二叉排序树的插入</li>
<li>二叉排序树的构造</li>
<li>二叉排序树的删除</li>
<li>二叉排序树的查找效率分析</li>
</ul>
<h3 id="平衡二叉树-balanced-binary-tree" tabindex="-1"><a class="header-anchor" href="#平衡二叉树-balanced-binary-tree" aria-hidden="true">#</a> 平衡二叉树 Balanced Binary Tree</h3>
<ul>
<li>平衡二叉树的定义
<ul>
<li>结点左子树与右子树的高度差为该结点的<strong>平衡因子</strong></li>
</ul>
</li>
<li>平衡二叉树的插入
<ul>
<li>LL 平衡旋转（右单旋转）</li>
<li>RR 平衡旋转（左单旋转）</li>
<li>LR 平衡旋转（先左后右双旋转）</li>
<li>RL 平衡旋转（先右后左双旋转）</li>
</ul>
</li>
<li>平衡二叉树的查找</li>
</ul>
<h3 id="哈夫曼树和哈夫曼编码" tabindex="-1"><a class="header-anchor" href="#哈夫曼树和哈夫曼编码" aria-hidden="true">#</a> 哈夫曼树和哈夫曼编码</h3>
<ul>
<li>哈夫曼树的定义
<ul>
<li>带权路径长度
<ul>
<li>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>W</mi><mi>P</mi><mi>L</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>w</mi><mi>i</mi></msub><msub><mi>l</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">WPL = \sum^n_{i=1}w_il_i
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord mathnormal">L</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.9291em;vertical-align:-1.2777em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0269em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0197em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></p>
</li>
</ul>
</li>
<li>哈夫曼树的构造</li>
<li>哈夫曼编码
<ul>
<li>固定长度编码</li>
<li>可变长度编码</li>
<li>前缀编码</li>
</ul>
</li>
</ul>
</li>
</ul>
<!-- ### 习题

- 6【2011】
- 9【2013】
- 13 含有 20 个结点的平衡二叉树的最大深度为?→6
- 15【2009】
- 16 【2010】
- 17【2012】
- 18【2013】将关键字 1，2，3，4，5，6，7 依次插入初始为空的平衡二叉树 T，则 T 中平衡因子为 0 的分支结点的个数是 →3
- 20【2010】
- 23【2014】
- 27 若度为 m 的哈夫曼树中，叶子结点个数为 n，则非叶子结点的个数为 →（n-1)/(m-1)
- 28【2015】
- 29【2015】
- 30【2017】
- 31【2018】
- 32【2018】
- 33【2019】在任意一棵非空平衡二叉树（AVL 树）T1 中，删除某节点 v 之后形成平衡二叉树 T2，再将 v 插入 T2 形成平衡二叉树 T3。下列关于 T1 与 T3 的叙述中，正确的是
  ① 若 v 是 T1 的叶结点，则 T1 与 T3 可能不相同
  ② 若 v 不是 T1 的叶结点，则 T1 与 T3 一定不相同
  ③ 若 v 不是 T1 的叶结点，则 T1 与 T3 一定相同 →① 正确
- 34【2019】
- 大题未做
- --></div></template>
