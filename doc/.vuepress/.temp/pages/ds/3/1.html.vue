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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ### 习题

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

#### 28【2020】 -->
</div></template>
