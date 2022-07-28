<template><div><h2 id="_5-4-树、森林-tree-forest" tabindex="-1"><a class="header-anchor" href="#_5-4-树、森林-tree-forest" aria-hidden="true">#</a> 5.4 树、森林 Tree Forest</h2>
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
</div></template>
