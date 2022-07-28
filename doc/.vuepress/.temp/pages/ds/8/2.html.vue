<template><div><h2 id="_8-2-插入排序" tabindex="-1"><a class="header-anchor" href="#_8-2-插入排序" aria-hidden="true">#</a> 8.2 插入排序</h2>
<h3 id="直接插入排序-insert-sort" tabindex="-1"><a class="header-anchor" href="#直接插入排序-insert-sort" aria-hidden="true">#</a> 直接插入排序 Insert Sort</h3>
<p>代码实现</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">InsertSort</span><span class="token punctuation">(</span><span class="token keyword">int</span> A<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">int</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> A<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span>
            A<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        A<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="折半插入排序" tabindex="-1"><a class="header-anchor" href="#折半插入排序" aria-hidden="true">#</a> 折半插入排序</h3>
<p>代码实现 TODO</p>
<h3 id="希尔排序-shell-sort-缩小增量排序" tabindex="-1"><a class="header-anchor" href="#希尔排序-shell-sort-缩小增量排序" aria-hidden="true">#</a> 希尔排序 Shell Sort （缩小增量排序）</h3>
<ul>
<li>代码 TODO</li>
</ul>
<!-- ### 习题

- 1 对于5个不同的数据元素进行直接插入排序，最多需要进行的比较次数是（不包含与哨兵的比较）→10次；解析：4+3+2+1=10次，如果加上与哨兵的比较就是14次（5+4+3+2）
- 3【2012】 对同一待排序序列分别进行折半插入排序和直接插入排序，两者之间可能的不同之处是
① 排序的总趟数
② 元素的移动次数
③ 使用辅助空间的数量
④ 元素之间的比较次数→④元素之间的比较次数；
解析：
用 折半插入排序 的比较次数的数量级在$O(n\log_2n)$ ，
用 直接插入排序 的比较次数和初始状态有关，在$O(n)\sim O(n^2)$ 之间
- 4 对有 n 个元素的顺序表采用直接插入排序算法进行排序，在最坏情况下所需的比较次数是多少？最好情况呢？（不考虑和哨兵的比较）?→最坏情况 ( n - 1 ) n / 2，最好情况 n - 1
- 12【2009】 用希尔排序方法对一个数据序列排序，若第1趟排序结果为` 9 1 4 13 7 8 20 23 15` ，则采用的增量间隔可能是 ?→3
- 18【2015】希尔排序的组内排序采用的是
A 直接插入排序
B 折半插入排序
C 快速排序
D 归并排序→A 直接插入排序
- 19【2018】 -->
</div></template>
