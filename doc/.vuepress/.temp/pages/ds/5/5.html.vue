<template><div><h2 id="_5-5-树与二叉树的应用" tabindex="-1"><a class="header-anchor" href="#_5-5-树与二叉树的应用" aria-hidden="true">#</a> 5.5 树与二叉树的应用</h2>
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
- -->
</div></template>
