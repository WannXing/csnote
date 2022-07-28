<template><div><h2 id="_3-2-队列-queue" tabindex="-1"><a class="header-anchor" href="#_3-2-队列-queue" aria-hidden="true">#</a> 3.2 队列 Queue</h2>
<h3 id="队列的基本概念" tabindex="-1"><a class="header-anchor" href="#队列的基本概念" aria-hidden="true">#</a> 队列的基本概念</h3>
<h3 id="队列的定义" tabindex="-1"><a class="header-anchor" href="#队列的定义" aria-hidden="true">#</a> 队列的定义</h3>
<ul>
<li>队列简称队，也是一种操作受限的线性表，只允许在表的一端进行插入，而在表的另一端进行删除</li>
<li>向队列中插入元素称为入队或进队</li>
<li>删除元素称为出队或离队</li>
<li>特性：先进先出 First In First Out, FIFO</li>
</ul>
<h3 id="队列常见的基本操作" tabindex="-1"><a class="header-anchor" href="#队列常见的基本操作" aria-hidden="true">#</a> 队列常见的基本操作</h3>
<ul>
<li>InitQueue(&amp;Q)：初始化队列</li>
<li>DestoryQueue(&amp;Q)：销毁队列</li>
<li>ClearQueue(&amp;Q)：清空队列</li>
<li>QueueLength(Q)：求队列长度</li>
<li>GetHead(Q,&amp;e)：得到队头元素</li>
<li>EnQueue(&amp;Q, e)：插入元素</li>
<li>DeQueue(&amp;Q, &amp;e)：删除元素</li>
</ul>
<h3 id="队列的顺序存储结构" tabindex="-1"><a class="header-anchor" href="#队列的顺序存储结构" aria-hidden="true">#</a> 队列的顺序存储结构</h3>
<p>结点类型定义</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAXSIZE</span> <span class="token expression"><span class="token number">100</span> </span><span class="token comment">// 最大队列长度</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    QElemType <span class="token operator">*</span>base<span class="token punctuation">;</span> <span class="token comment">// 初始化的动态分配存储空间</span>
    <span class="token keyword">int</span> front<span class="token punctuation">;</span>       <span class="token comment">// 队头指针</span>
    <span class="token keyword">int</span> rear<span class="token punctuation">;</span>        <span class="token comment">// 队尾指针</span>
<span class="token punctuation">}</span> SqQueue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>循环队列</p>
<ul>
<li>利用模运算（%）</li>
<li>为了区分是队空还是队满，有三种处理方式
<ul>
<li>牺牲一个单元来区分队空和队满</li>
<li>类型中增设表示元素个数的数据成员</li>
<li>类型中增设 tag 数据成员</li>
</ul>
</li>
</ul>
<h3 id="循环队列的操作" tabindex="-1"><a class="header-anchor" href="#循环队列的操作" aria-hidden="true">#</a> 循环队列的操作</h3>
<p>初始化</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">InitQueue</span><span class="token punctuation">(</span>SqQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Q<span class="token punctuation">.</span>base <span class="token operator">=</span> <span class="token keyword">new</span> QElemType<span class="token punctuation">[</span>MAXSIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>Q<span class="token punctuation">.</span>base<span class="token punctuation">)</span> <span class="token function">exit</span><span class="token punctuation">(</span>OVERFLOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>front <span class="token operator">=</span> Q<span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判队空</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>SqQueue Q<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear <span class="token operator">==</span> Q<span class="token punctuation">.</span>front<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  <span class="token comment">// 队空</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>入队</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">EnQueue</span><span class="token punctuation">(</span>SqQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> QElemType e<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> MAXQSIZE <span class="token operator">==</span> Q<span class="token punctuation">.</span>front<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 队满</span>
    Q<span class="token punctuation">.</span>base<span class="token punctuation">[</span>Q<span class="token punctuation">.</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> MAXQSIZE<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出队</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">DeQueue</span><span class="token punctuation">(</span>SqQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> QElemType <span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear <span class="token operator">==</span> Q<span class="token punctuation">.</span>front<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 队空</span>
    e <span class="token operator">=</span> Q<span class="token punctuation">.</span>base<span class="token punctuation">[</span>Q<span class="token punctuation">.</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>front <span class="token operator">=</span> <span class="token punctuation">(</span>Q<span class="token punctuation">.</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> MAXQSIZE<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="队列的链式存储结构" tabindex="-1"><a class="header-anchor" href="#队列的链式存储结构" aria-hidden="true">#</a> 队列的链式存储结构</h3>
<p>结点类型定义</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ElemType data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">LinkNode</span><span class="token operator">*</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>LinkNode<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    LinkNode <span class="token operator">*</span>front<span class="token punctuation">,</span> <span class="token operator">*</span>rear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>LinkQueue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链式队列的基本操作" tabindex="-1"><a class="header-anchor" href="#链式队列的基本操作" aria-hidden="true">#</a> 链式队列的基本操作</h3>
<p>初始化</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">InitQueue</span><span class="token punctuation">(</span>LinkQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Q<span class="token punctuation">.</span>front <span class="token operator">=</span> Q<span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token keyword">new</span> QElemType<span class="token punctuation">;</span>
    <span class="token function">If</span><span class="token punctuation">(</span><span class="token operator">!</span>Q<span class="token punctuation">.</span>front<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">exit</span><span class="token punctuation">(</span>OVERFLOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>front <span class="token operator">-></span> next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判队空</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>LinkQueue Q<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>front <span class="token operator">==</span> Q<span class="token punctuation">.</span>rear<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>入队</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">EnQueue</span><span class="token punctuation">(</span>LinkQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> QElemType e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    QNode<span class="token operator">*</span> p<span class="token punctuation">;</span>
    p <span class="token operator">=</span> <span class="token keyword">new</span> QNode<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>p<span class="token punctuation">)</span> <span class="token function">exit</span><span class="token punctuation">(</span>OVERFLOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
    p<span class="token operator">-></span>data <span class="token operator">=</span> e<span class="token punctuation">;</span>
    p<span class="token operator">-></span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>rear<span class="token operator">-></span>next <span class="token operator">=</span> p<span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>rear <span class="token operator">=</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出队</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">DeQueue</span><span class="token punctuation">(</span>LinkQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> QElemType <span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>front <span class="token operator">==</span> Q<span class="token punctuation">.</span>rear<span class="token punctuation">)</span> <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
    QNode<span class="token operator">*</span> p<span class="token punctuation">;</span>
    p <span class="token operator">=</span> Q<span class="token punctuation">.</span>front<span class="token operator">-></span>next<span class="token punctuation">;</span>
    e <span class="token operator">=</span> p<span class="token operator">-></span>data<span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>front<span class="token operator">-></span>next <span class="token operator">=</span> p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear <span class="token operator">==</span> p<span class="token punctuation">)</span> Q<span class="token punctuation">.</span>rear <span class="token operator">=</span> Q<span class="token punctuation">.</span>front<span class="token punctuation">;</span><span class="token comment">// 这个情况比较特殊</span>
    <span class="token keyword">delete</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>双端队列
<ul>
<li>双端队列是指允许两端都可以进行入队和出队操作的队列，其元素的逻辑结构仍是线性结构</li>
<li>将队列的两端分别称为前端和后端，两端都可以入队和出队</li>
<li>输出受限的双端队列：允许在一端进行插入和删除，另一端只允许插入</li>
<li>输入受限的双端队列：允许在一端进行插入和删除，另一端只允许删除</li>
</ul>
</li>
</ul>
<!-- ### 习题

- 8【2011】 已知循环队列存储在一维数组A[0...n-1]中，且队列非空时front和rear分别指向队头元素和队尾元素。若初试队列为空，且要求第一个进入队列的元素存储在A[0]处，则初始时front和rear的值分别是→0，n-1
- 10【2014】
- 14 用链式存储方式的队列进行删除操作时需要
A 仅修改头指针
B 仅修改尾指针
C 头尾指针都要修改
D 头尾指针可能都要修改→D，当队列元素>1时，删除操作只修改头指针；当队列元素=1时，删除操作头尾指针都要修改
    - 16 假设循环单链表表示的队列长度为n，队头固定在链表尾，若只设头指针，则进队操作的时间复杂度为→O(n)
- 18【2010】
- 19【2018】
- 20【2016】
- 综合题4【2019】请设计一个队列，要求满足：
① 初始队列为空；
② 入队时，允许增加队列占用空间；
③ 出队后，出队元素所占用的空间可重复使用，即整个队列所占用的空间只增不减；
④ 入队操作和出队操作的时间复杂度始终保持为$O(1)$
请回答下列问题
① 该队列是选择链式存储结构，还是应选择顺序存储结构？
② 画出队列的初始状态，并给出判断队空和队满的条件
③ 画出第一个元素入队后的队列状态
④ 给出入队操作和出队操作的基本过程  -->
</div></template>
