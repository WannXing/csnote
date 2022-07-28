<template><div><h2 id="_5-2-二叉树的概念" tabindex="-1"><a class="header-anchor" href="#_5-2-二叉树的概念" aria-hidden="true">#</a> 5.2 二叉树的概念</h2>
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
</div></template>
