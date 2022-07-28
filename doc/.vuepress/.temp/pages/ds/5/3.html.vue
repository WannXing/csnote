<template><div><h2 id="_5-3-二叉树的遍历和线索二叉树" tabindex="-1"><a class="header-anchor" href="#_5-3-二叉树的遍历和线索二叉树" aria-hidden="true">#</a> 5.3 二叉树的遍历和线索二叉树</h2>
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
</div></template>
