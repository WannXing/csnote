<template><div><h2 id="_3-4-特殊矩阵和压缩存储" tabindex="-1"><a class="header-anchor" href="#_3-4-特殊矩阵和压缩存储" aria-hidden="true">#</a> 3.4 特殊矩阵和压缩存储</h2>
<ul>
<li>数组的定义
<ul>
<li>数组是由 n 个相同类型的数据元素构成的有限序列，每个数据元素称为一个数组元素</li>
</ul>
<!-- - 类型定义 -->
</li>
</ul>
<!-- ```cpp
typedef elemtype array2[m][n];
// or
typedef elemtype array1[n];
typedef array1 array2[m];
``` -->
<p>举例说明</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>
<p>结论</p>
<ul>
<li>线性表结构是数组结构的一个特例</li>
<li>而数组结构又是线性表结构的扩展</li>
</ul>
</li>
<li>
<p>特点</p>
<ul>
<li>结构固定：定义后，维数和维界不再改变</li>
</ul>
</li>
<li>
<p>基本操作</p>
<ul>
<li>除了结构的初始化和销毁之外，只有取元素和修改元素值的操作</li>
</ul>
</li>
<li>
<p>数组的存储结构</p>
</li>
<li>
<p>矩阵的压缩存储</p>
<ul>
<li>压缩存储</li>
<li>特殊矩阵</li>
<li>对称矩阵</li>
<li>三角矩阵</li>
<li>三对角矩阵</li>
</ul>
</li>
<li>
<p>稀疏矩阵</p>
<ul>
<li>数组存储</li>
<li>十字链表法存储</li>
</ul>
</li>
</ul>
<!-- ### 习题
- 6【2016】有一个100阶的三对角矩阵M，其元素$m_{i,j}(1\le i,j \le100)$按行优先依次压缩存入下标从0开始的一维数组N中。元素$m_{30,30}$ 在N中的下标是→87
- 9【2017】适用于压缩存储稀疏矩阵的两种存储结构是
A 三元组表和十字链表
B 三元组表和邻接矩阵
C 十字链表和二叉链表
D 邻接矩阵和十字链表→三元组表和十字链表
- 10【2018】
- 11【2020】 -->
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
