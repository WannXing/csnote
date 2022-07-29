<template><div><h2 id="_3-1-栈-stack" tabindex="-1"><a class="header-anchor" href="#_3-1-栈-stack" aria-hidden="true">#</a> 3.1 栈 Stack</h2>
<h3 id="栈的基本概念" tabindex="-1"><a class="header-anchor" href="#栈的基本概念" aria-hidden="true">#</a> 栈的基本概念</h3>
<ul>
<li>栈的定义
<ul>
<li>栈是只允许在一端进行插入或删除操作的线性表</li>
<li>特性：后进先出 Last In First Out, LIFO</li>
<li>栈的数学性质：卡特兰数 Catalan Number
<ul>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msubsup><mi>C</mi><mrow><mn>2</mn><mi>n</mi></mrow><mi>n</mi></msubsup></mrow><annotation encoding="application/x-tex">\frac 1{n+1}C^n_{2n}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2484em;vertical-align:-0.4033em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4033em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-2.4519em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="mord mathnormal mtight">n</span></span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2481em;"><span></span></span></span></span></span></span></span></span></span></li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>|     |  &lt;-- 栈顶（top)
|     |
| ... |
|  b  |
|  a  |  &lt;-- 栈底（bottom）
+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="栈的基本操作" tabindex="-1"><a class="header-anchor" href="#栈的基本操作" aria-hidden="true">#</a> 栈的基本操作</h3>
<ul>
<li>InitStack(&amp;S)：初始化操作</li>
<li>DestroyStack(&amp;S)：销毁栈操作 []</li>
<li>StackEmpty(S)：判定 S 是否为空栈</li>
<li>StackLength(S)：求栈的长度 <a href="https://cplusplus.com/reference/stack/stack/size/" target="_blank" rel="noopener noreferrer">cpp::std::stack::size<ExternalLinkIcon/></a></li>
<li>GetTop(S, &amp;e)：取栈顶元素 <a href="https://cplusplus.com/reference/stack/stack/top/" target="_blank" rel="noopener noreferrer">cpp::std::stack::top<ExternalLinkIcon/></a></li>
<li>ClearStack(&amp;S)：栈置空操作 <a href="https://cplusplus.com/reference/stack/stack/empty/" target="_blank" rel="noopener noreferrer">cpp::std::stack::empty<ExternalLinkIcon/></a></li>
<li>Push(&amp;S, e)：入栈操作（压栈）<a href="https://cplusplus.com/reference/stack/stack/push/" target="_blank" rel="noopener noreferrer">cpp::std::stack::push<ExternalLinkIcon/></a></li>
<li>Pop(&amp;S, &amp;e)：出栈操作（弹栈）</li>
</ul>
<h3 id="栈的顺序存储结构" tabindex="-1"><a class="header-anchor" href="#栈的顺序存储结构" aria-hidden="true">#</a> 栈的顺序存储结构</h3>
<ul>
<li>结点的类型定义</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAXSIZE</span> <span class="token expression"><span class="token number">100</span></span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  ElemType data<span class="token punctuation">[</span>MAXSIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> top<span class="token punctuation">;</span>  <span class="token comment">// 栈顶指针</span>
<span class="token punctuation">}</span> SqStack<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>顺序栈的基本运算</p>
<ul>
<li>初始化</li>
<li>判栈空</li>
<li>入栈</li>
<li>出栈</li>
<li>读栈顶元素</li>
</ul>
</li>
<li>
<p>共享栈</p>
</li>
<li>
<p>栈的链式存储结构</p>
</li>
</ul>
<p>结点的类型定义</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">StackNode</span> <span class="token punctuation">{</span>
  SElemType data<span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">StackNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span> StackNode<span class="token punctuation">,</span> <span class="token operator">*</span>LinkStack<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- 
### 3.1习题

#### 14【2010】若元素 abcdef 一次进栈，允许出栈、退栈操作交替进行，但不允许连续 3 次进行退栈操作，不可能得到的出栈序列是

A d c e b f a
B c b d a e f
C b c a e f d
D a f e d c b→D

#### 15【2018】

#### 16【2009】

#### 22【2013】

#### 24【2011】

#### 26【2017】

#### 28【2020】 --> -->
<h2 id="_3-2-队列-queue" tabindex="-1"><a class="header-anchor" href="#_3-2-队列-queue" aria-hidden="true">#</a> 3.2 队列 Queue</h2>
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
<!-- ### 3.2习题

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
④ 给出入队操作和出队操作的基本过程  --> -->
<h2 id="_3-3-栈和队列的应用" tabindex="-1"><a class="header-anchor" href="#_3-3-栈和队列的应用" aria-hidden="true">#</a> 3.3 栈和队列的应用</h2>
<ul>
<li>栈在括号匹配中的应用</li>
<li>栈在表达式求值中的应用
<ul>
<li>前缀表达式</li>
<li>中缀表达式</li>
<li>后缀表达式</li>
</ul>
</li>
<li>栈在递归中的应用
<ul>
<li>斐波那契数列</li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token comment">// 斐波那契数列的实现</span>
<span class="token keyword">int</span> <span class="token function">Fib</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>        <span class="token comment">// 边界条件</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>        <span class="token comment">// 边界条件</span>
    <span class="token keyword">return</span> <span class="token function">Fib</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Fib</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归表达式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>递归模型必须满足下列两个条件
<ul>
<li>递归表达式（递归体）</li>
<li>边界条件（递归出口）</li>
</ul>
</li>
<li>队列在层次遍历中的应用</li>
<li>队列在计算机系统中的应用</li>
</ul>
<!-- ### 3.3习题

- 4【2009】为解决计算机主机与打印机之间速度不匹配的问题，通常设置一个打印数据缓冲区，主机将要输出的数据依次写入该缓冲区，而打印机则依次从该缓冲区中取出数据。该缓冲区的逻辑结构应该是

A 栈
B 队列
C 树
D 图 →B

#### 9 执行什么操作时，需要使用队列作为辅助存储空间

A 查找散列（哈希）表
B 广度优先搜索图
C 前序（根）遍历二叉树
D 深度优先搜索图 →B

#### 11【2012】已知操作符包括+、-、_、/、( 和 )。将中缀表达式`a + b - a _ ( ( c + d) / e - f ) + g`转换为等价的后缀表达式`a b + a c d + e / f - \* - g +`时，用栈来存放暂时还不能确定运算次序的操作符。若栈初始为空，则转换过程中同时保存在栈中的操作符的最大个数是 →5

#### 12【2014】假设栈初始为空，将中缀表达式 `a / b + ( c * d - e * f ) / g` 转化为等价 的后缀表达式的过程中，当扫描到 f 时，栈中的元素依次是 →`+ ( - *`

#### 13【2015】已知程序如下

```c
int S(int n){
    return (n<=0)?0:S(n-1)+n;
}
void main(){
    cout << S(1);
}
```

程序运行时使用栈来保存调用过程的信息，自栈底到栈顶保存的信息依次对应的是

```
| S(0)   | <--- 栈顶
| S(1)   |
| mian() | <--- 栈底
```

所以依次保存的信息是 `main()-> S(1)->S(0)` -->
<h2 id="_3-4-特殊矩阵和压缩存储" tabindex="-1"><a class="header-anchor" href="#_3-4-特殊矩阵和压缩存储" aria-hidden="true">#</a> 3.4 特殊矩阵和压缩存储</h2>
<ul>
<li>数组的定义
<ul>
<li>数组是由 n 个相同类型的数据元素构成的有限序列，每个数据元素称为一个数组元素</li>
<li>类型定义</li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> elemtype array2<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// or</span>
<span class="token keyword">typedef</span> elemtype array1<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">typedef</span> array1 array2<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例说明</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<!-- ### 3.4习题
- 6【2016】有一个100阶的三对角矩阵M，其元素$m_{i,j}(1\le i,j \le100)$按行优先依次压缩存入下标从0开始的一维数组N中。元素$m_{30,30}$ 在N中的下标是→87
- 9【2017】适用于压缩存储稀疏矩阵的两种存储结构是
A 三元组表和十字链表
B 三元组表和邻接矩阵
C 十字链表和二叉链表
D 邻接矩阵和十字链表→三元组表和十字链表
- 10【2018】
- 11【2020】 -->
</div></template>
