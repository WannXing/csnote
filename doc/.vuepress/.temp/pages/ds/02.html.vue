<template><div><h2 id="_2-1-线性表的定义和基本操作" tabindex="-1"><a class="header-anchor" href="#_2-1-线性表的定义和基本操作" aria-hidden="true">#</a> 2.1 线性表的定义和基本操作</h2>
<!-- ### 线性表的定义

- 线性表是具有相同数据类型的 n(n≥0) 个数据元素的有限序列
- 特点
  - 表中元素个数有限
  - 表中元素具有逻辑上的顺序性，表中元素有其先后次序
  - 表中元素都是数据元素，每个元素都是单个元素
  - 表中元素的数据类型都相同，这意味着每个元素占有相同大小的存储空间
  - 表中元素具有抽象性 -->
<h3 id="什么是线性表-🤔" tabindex="-1"><a class="header-anchor" href="#什么是线性表-🤔" aria-hidden="true">#</a> 什么是线性表？🤔</h3>
<p>有点像函数</p>
<p>函数：一个 x 值只能对应一个 y 值
线性表：一个索引值只能有一个映射值</p>
<h3 id="线性表的基本操作" tabindex="-1"><a class="header-anchor" href="#线性表的基本操作" aria-hidden="true">#</a> 线性表的基本操作</h3>
<p>详细文档可以参考 c++容器<a href="https://cplusplus.com/reference/list/list/" target="_blank" rel="noopener noreferrer">list 的相关函数<ExternalLinkIcon/></a></p>
<p><a href="../code/2.1.list.cpp">c++代码示例</a></p>
<ul>
<li>初始化 构造器 constructor</li>
<li>求表长 length()或 size()</li>
<li>清空 empty()</li>
<li>获取元素</li>
<li>插入</li>
<li>删除</li>
<li>...</li>
</ul>
<!-- - InitList(&L) ：初始化表，构造一个空的线性表
- DestroyList(&L) ：销毁线性表
- ClearList(&L) ：清空线性表
- ListEmpty(&L) ：置空线性表
- ListLength(L) ： 求线性表长度
- GetElem(L, i, &e) ： 获取元素
- LocateElem(L, e, compare())
- PriorElem(L, cur_e, &pre_e) ： 获取元素的前驱
- NextElem(L,cur_e,&next_e) ： 获得元素的后继
- ListInsert(&L,i,e) ：插入
- ListDelete(&L,i&e) ：删除
- ListTraverse(&L, vistited()) ：遍历 -->
<h2 id="_2-2-线性表的顺序表示" tabindex="-1"><a class="header-anchor" href="#_2-2-线性表的顺序表示" aria-hidden="true">#</a> 2.2 线性表的顺序表示</h2>
<h3 id="顺序表的定义-sequence-list" tabindex="-1"><a class="header-anchor" href="#顺序表的定义-sequence-list" aria-hidden="true">#</a> 顺序表的定义 Sequence List</h3>
<ul>
<li>
<p><em>线性表</em>的顺序存储 -&gt; 顺序表</p>
</li>
<li>
<p>顺序表的特点是表中元素的逻辑顺序与其物理顺序相同</p>
</li>
<li>
<p>顺序表的结构类型定义</p>
<ul>
<li>静态分配</li>
<li>动态分配</li>
<li>C 的动态分配语句</li>
<li><code v-pre>L.data = (ElemType*)malloc(sizeof(ElemType)*InitSize;</code></li>
<li>C++的动态分配语句</li>
<li><code v-pre>L.data = new ElemType[InitSize];</code></li>
</ul>
</li>
</ul>
<h3 id="顺序表上基本操作的实现" tabindex="-1"><a class="header-anchor" href="#顺序表上基本操作的实现" aria-hidden="true">#</a> 顺序表上基本操作的实现</h3>
<ul>
<li>插入操作
<ul>
<li>最好情况：表尾插入，时间复杂度为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span></li>
<li>最坏情况：表头插入，时间复杂度为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></li>
</ul>
<!-- - 平均情况：$E_{ins} = \frac 1{n+1} \sum^{n+1}_{i=1}(n-i+1) = \frac 1{n+1}(n+\cdots + 1 + 0) = \frac n2$ ，时间复杂度为$O(n)$ -->
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token comment">// 插入操作代码</span>
<span class="token keyword">bool</span> <span class="token function">ListInsert</span><span class="token punctuation">(</span>SqList <span class="token operator">&amp;</span>L<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> ElemType e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> i <span class="token operator">></span> L<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">)</span>          <span class="token comment">// i值不合法</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>L<span class="token punctuation">.</span>length <span class="token operator">>=</span> MAXSIZE<span class="token punctuation">)</span>            <span class="token comment">// 当前存储空间已满</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> L<span class="token punctuation">.</span>length <span class="token punctuation">;</span> j <span class="token operator">>=</span> i <span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span>
        L<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> L<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>           <span class="token comment">// 插入位置及之后位置后移</span>
    L<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>                       <span class="token comment">// 将新元素放入第i个位置</span>
    L<span class="token punctuation">.</span>length<span class="token operator">++</span><span class="token punctuation">;</span>                              <span class="token comment">//表长增加1</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>删除操作
<ul>
<li>最好情况：删除表尾元素，时间复杂度为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span></li>
<li>最坏情况：删除表头元素，时间复杂度为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></li>
<li>平均情况：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>E</mi><mrow><mi>d</mi><mi>e</mi><mi>l</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><mo stretchy="false">(</mo><mi>n</mi><mo>−</mo><mi>i</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mfrac><mrow><mo stretchy="false">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mi>n</mi></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow><annotation encoding="application/x-tex">E_{del} = \frac 1n \sum^n_{i=1}(n-i)=\frac 1n \frac {(n-1)n}2 = \frac{n-1}2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">e</span><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8043em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">i</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.355em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span><span class="mclose mtight">)</span><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span> ，时间复杂度为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token comment">// 删除操作代码</span>
<span class="token keyword">bool</span> <span class="token function">ListDelete</span><span class="token punctuation">(</span>SqList<span class="token operator">&amp;</span> L<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> ElemType e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> i <span class="token operator">></span> L<span class="token punctuation">.</span>length<span class="token punctuation">)</span>             <span class="token comment">// 判断i值是否合理</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    e <span class="token operator">=</span> L<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> L<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span>
        L<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> L<span class="token punctuation">.</span>elem<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    L<span class="token punctuation">.</span>length<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>按值查找（顺序查找）
<ul>
<li>最好情况：查找的元素就在表头，时间复杂度为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span></li>
<li>最坏情况：查找的元素在表尾（或不存在），时间复杂度为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></li>
<li>平均情况：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>E</mi><mrow><mi>f</mi><mi>i</mi><mi>n</mi><mi>d</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><mi>i</mi><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow><annotation encoding="application/x-tex">E_{find} = \frac 1n \sum^n_{i=1}i= \frac{n+1}2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.10764em;">f</span><span class="mord mathnormal mtight">in</span><span class="mord mathnormal mtight">d</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8043em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span> ，时间复杂度为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token comment">// 按值查找（顺序查找）代码</span>
<span class="token keyword">int</span> <span class="token function">LocateElem</span><span class="token punctuation">(</span>SqList <span class="token operator">&amp;</span>L<span class="token punctuation">,</span> ElemType e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> L<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// TODO</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="习题" tabindex="-1"><a class="header-anchor" href="#习题" aria-hidden="true">#</a> 习题</h3>
<!-- - 11 顺序表的插入算法中，当 n 个空间已满时，可再申请增加分配 m 个空间，若申请失败，则说明系统没有（）可分配的存储空间 →n+m 个连续
- 综合题 10【2010】
- 综合题 11【2011】
- 综合题 12【2013】
- 综合题 13【2018】
- 综合题 14【2020】这题有点问题，比如 S1=[8, -1]，S2=[10, 0]，S3=[12, 1]，则 D= 8，而不是 4 -->
<h2 id="_2-3-线性表的链式表示" tabindex="-1"><a class="header-anchor" href="#_2-3-线性表的链式表示" aria-hidden="true">#</a> 2.3 线性表的链式表示</h2>
<h3 id="单链表的定义" tabindex="-1"><a class="header-anchor" href="#单链表的定义" aria-hidden="true">#</a> 单链表的定义</h3>
<ul>
<li>
<p>线性表的链式存储又称单链表</p>
</li>
<li>
<p>结点的类型定义</p>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">LNode</span><span class="token punctuation">{</span>     <span class="token comment">// 声明结点的类型和指向结点的指针类型</span>
  ElemType data<span class="token punctuation">;</span>        <span class="token comment">//结点的数据域</span>
  <span class="token keyword">struct</span> <span class="token class-name">LNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>   <span class="token comment">// 结点的指针域</span>
<span class="token punctuation">}</span>LNode<span class="token punctuation">,</span><span class="token operator">*</span>LinkList<span class="token punctuation">;</span>         <span class="token comment">// LinkList为指向结构体LNode的指针类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>通常用头指针来表示一个单链表</p>
</li>
<li>
<p>单链表上基本操作的实现</p>
</li>
<li>
<p>采用头插法建立单链表</p>
<ul>
<li>时间复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">CreateList_Head</span><span class="token punctuation">(</span>LinkList <span class="token operator">&amp;</span>L<span class="token punctuation">,</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    L <span class="token operator">=</span> <span class="token keyword">new</span> LNode<span class="token punctuation">;</span>
    L<span class="token operator">-></span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> <span class="token comment">//L指向头结点，头结点指向NULL指针</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    p <span class="token operator">=</span> <span class="token keyword">new</span> LNode<span class="token punctuation">;</span>
    cin <span class="token operator">>></span> p<span class="token operator">-></span>data<span class="token punctuation">;</span>
    p<span class="token operator">-></span>next <span class="token operator">=</span> L<span class="token operator">-></span>next<span class="token punctuation">;</span>
      L<span class="token operator">-></span>next <span class="token operator">=</span> p<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>采用尾插法建立单链表</p>
<ul>
<li>时间复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">CreateList_Tail</span><span class="token punctuation">(</span>LinkList<span class="token operator">&amp;</span> L<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  L <span class="token operator">=</span> <span class="token keyword">new</span> LNode<span class="token punctuation">;</span> 
  L<span class="token operator">-></span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
  LNode<span class="token operator">*</span> r<span class="token punctuation">;</span>
  LNode<span class="token operator">*</span> p<span class="token punctuation">;</span>
  r <span class="token operator">=</span> <span class="token keyword">new</span> LNode<span class="token punctuation">;</span> r <span class="token operator">=</span> L<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p <span class="token operator">=</span> <span class="token keyword">new</span> LNode<span class="token punctuation">;</span> p<span class="token operator">-></span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    cin <span class="token operator">>></span> p<span class="token operator">-></span>data<span class="token punctuation">;</span>
    r<span class="token operator">-></span>next <span class="token operator">=</span> p<span class="token punctuation">;</span>
    r <span class="token operator">=</span> p<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>按序号查找结点值</p>
<ul>
<li>时间复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code>Status <span class="token function">GetElem_L</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">,</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> ElemType <span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
  LNode<span class="token operator">*</span> p <span class="token operator">=</span> L<span class="token operator">-></span>next<span class="token punctuation">;</span>
  <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> L<span class="token punctuation">;</span>       <span class="token comment">// 若i等于0，则返回头结点</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>     <span class="token comment">// 若i无效，则返回头结点</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>p <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    p <span class="token operator">=</span> p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    j<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  e <span class="token operator">=</span> p<span class="token operator">-></span>data<span class="token punctuation">;</span>
  <span class="token keyword">return</span> OK<span class="token punctuation">;</span>	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>按值查找表结点</p>
<ul>
<li>时间复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">LocateElem_L_return_num</span><span class="token punctuation">(</span>LinkList L<span class="token punctuation">,</span>ElemType e<span class="token punctuation">)</span><span class="token punctuation">{</span>
  LNode<span class="token operator">*</span> p <span class="token operator">=</span> L<span class="token operator">-></span>next<span class="token punctuation">;</span>
  <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>p <span class="token operator">&amp;&amp;</span> p<span class="token operator">-></span>data <span class="token operator">!=</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
      p <span class="token operator">=</span> p<span class="token operator">-></span>next<span class="token punctuation">;</span>
      j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token keyword">return</span> j<span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>插入结点操作</p>
<ul>
<li>时间复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>  ，开销主要在查找第i-1个元素</li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code>Status <span class="token function">ListInsert_L</span><span class="token punctuation">(</span>LinkList<span class="token operator">&amp;</span> L<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> ElemType e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  LNode<span class="token operator">*</span> p <span class="token operator">=</span> L<span class="token punctuation">;</span>
  LNode<span class="token operator">*</span> s<span class="token punctuation">;</span>
  <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p <span class="token operator">=</span> p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    j<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">||</span> j <span class="token operator">></span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
  s <span class="token operator">=</span> <span class="token keyword">new</span> LNode<span class="token punctuation">;</span>
  s<span class="token operator">-></span>data <span class="token operator">=</span> e<span class="token punctuation">;</span>
  s<span class="token operator">-></span>next <span class="token operator">=</span> p<span class="token operator">-></span>next<span class="token punctuation">;</span>
  p<span class="token operator">-></span>next <span class="token operator">=</span> s<span class="token punctuation">;</span>
  <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>删除结点操作</p>
<ul>
<li>时间复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">ListDelete_L</span><span class="token punctuation">(</span>LinkList<span class="token operator">&amp;</span> L<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> ElemType <span class="token operator">&amp;</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  LNode<span class="token operator">*</span> p <span class="token operator">=</span> L<span class="token punctuation">;</span>
  LNode<span class="token operator">*</span> q <span class="token operator">=</span> <span class="token keyword">new</span> LNode<span class="token punctuation">;</span>
  <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p<span class="token operator">-></span>next <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p <span class="token operator">=</span> p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    j<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>p<span class="token operator">-></span>next<span class="token punctuation">)</span> <span class="token operator">||</span> j <span class="token operator">></span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    q<span class="token operator">-></span>next <span class="token operator">=</span> p<span class="token operator">-></span>next<span class="token punctuation">;</span>
  e <span class="token operator">=</span> q<span class="token operator">-></span>data<span class="token punctuation">;</span>
    <span class="token keyword">delete</span> q<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>求表长操作</li>
</ul>
<h3 id="双链表" tabindex="-1"><a class="header-anchor" href="#双链表" aria-hidden="true">#</a> 双链表</h3>
<ul>
<li>结点类型定义</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">DuLNode</span><span class="token punctuation">{</span>
  Elemtype data<span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">DuLNode</span> <span class="token operator">*</span>prior<span class="token punctuation">,</span><span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>DuLNode<span class="token punctuation">,</span> <span class="token operator">*</span>DuLinkList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>双链表的插入操作</p>
<ul>
<li>时间复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">ListInsert_DuL</span><span class="token punctuation">(</span>DuLinkList <span class="token operator">&amp;</span>L<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> ElemType e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    DuLNode<span class="token operator">*</span> p<span class="token punctuation">,</span> <span class="token operator">*</span>s<span class="token punctuation">;</span>
    <span class="token comment">//在带头结点的双向循环链表L中第i个位置之前插入元素e</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>p <span class="token operator">=</span> <span class="token function">GetElemP_DuL</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>

    s <span class="token operator">=</span> <span class="token keyword">new</span> DuLNode<span class="token punctuation">;</span>
    s<span class="token operator">-></span>data <span class="token operator">=</span> e<span class="token punctuation">;</span>

    s<span class="token operator">-></span>prior <span class="token operator">=</span> p<span class="token operator">-></span>prior<span class="token punctuation">;</span>
    p<span class="token operator">-></span>prior<span class="token operator">-></span>next <span class="token operator">=</span> s<span class="token punctuation">;</span>
    s<span class="token operator">-></span>next <span class="token operator">=</span> p<span class="token punctuation">;</span>
    p<span class="token operator">-></span>prior <span class="token operator">=</span> s<span class="token punctuation">;</span>
    <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token comment">// ListInsert_DuL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>双链表的删除操作</p>
<ul>
<li>时间复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">ListDelete_DuL</span><span class="token punctuation">(</span>DuLinkList<span class="token operator">&amp;</span> L<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> ElemType <span class="token operator">&amp;</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    DuLNode<span class="token operator">*</span> p<span class="token punctuation">;</span>
    <span class="token comment">//在带头结点的双向循环链表L中删除第i个元素，并返回e</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>p <span class="token operator">=</span> <span class="token function">GetElemP_DuL</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
    e <span class="token operator">=</span> p<span class="token operator">-></span>data<span class="token punctuation">;</span>
    p<span class="token operator">-></span>prior<span class="token operator">-></span>next <span class="token operator">=</span> p<span class="token operator">-></span>next<span class="token punctuation">;</span>
    p<span class="token operator">-></span>next<span class="token operator">-></span>prior <span class="token operator">=</span> p<span class="token operator">-></span>prior<span class="token punctuation">;</span>
    <span class="token keyword">delete</span> p<span class="token punctuation">;</span>
    <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token comment">//ListDelete_DuL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>循环链表</p>
<ul>
<li>循环单链表</li>
<li>循环双链表</li>
</ul>
</li>
<li>
<p>静态链表</p>
<ul>
<li>结点类型定义</li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MaxSize</span> <span class="token expression"><span class="token number">100</span></span></span>
typydef <span class="token keyword">struct</span><span class="token punctuation">{</span>
	ElemType data<span class="token punctuation">;</span>
	<span class="token keyword">int</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>SlinkList<span class="token punctuation">[</span>MaxSize<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>顺序表和链表的比较</p>
<ul>
<li>存储（读写）方式</li>
<li>逻辑结构与物理结构</li>
<li>查找、插入和删除操作</li>
<li>空间分配</li>
<li>在实际应用中应该怎样选取存储结构呢？
<ul>
<li>基于存储的考虑</li>
<li>基于运算的考虑</li>
<li>基于环境的考虑</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="习题-1" tabindex="-1"><a class="header-anchor" href="#习题-1" aria-hidden="true">#</a> 习题</h3>
<ul>
<li>7 给定有n个元素的一维数组，建立一个有序单链表的最低时间复杂度是?→$$O(n\log_2n)$$  先建立再排序，时间复杂度是<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>； 先排序再建立，排序的时间复杂度是<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n\log_2n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop"><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.207em;"><span style="top:-2.4559em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2441em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>，建立的时间复杂度是<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></li>
<li>15【2016】</li>
<li>21 一个链表最常用的操作是在最后一个元素之后插入一个元素和删除第一个元素，选用？最节省时间 A 不带头结点的单循环链表 B 双链表 C 不带头结点且有尾指针的单循环链表 D 单链表→C</li>
<li>23【2016】</li>
<li>25 某线性表用带头结点的循环单链表存储，头指针为head，当head-&gt;next-&gt;next=head 成立时，线性表长度可能是？→0或者1</li>
<li>综合题21【2009】已知一个嗲有表头结点的单链表，结点结构为data|link 假设该链表只给出了头指针list。在不改变链表的前提下，请设计一个尽可能高效的算法，查找链表中倒数第k个位置上的结点（k为正整数）。若查找成功，算法输出该结点的data域的值，并返回1；否则，只返回0。要求： ① 描述算法的基本设计思想 ② 描述算法的详细实现步骤 ③ 根据设计思想和实现步骤，采用程序设计语言描述算法，关键之处请给出简要注释</li>
<li>22【2012】</li>
<li>23【2015】</li>
<li>25【2019】</li>
</ul>
</div></template>
