<template><div><h2 id="_4-1-串的定义和实现" tabindex="-1"><a class="header-anchor" href="#_4-1-串的定义和实现" aria-hidden="true">#</a> 4.1 串的定义和实现</h2>
<h3 id="什么是串" tabindex="-1"><a class="header-anchor" href="#什么是串" aria-hidden="true">#</a> 什么是串</h3>
<p>字符串，简称串，在 c++语言中使用关键字 string 来定义</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code>string a <span class="token operator">=</span> <span class="token string">"this is a string"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="串的存储结构" tabindex="-1"><a class="header-anchor" href="#串的存储结构" aria-hidden="true">#</a> 串的存储结构</h3>
<p>结构类型定义（本质上就是字符数组）</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAXLEN</span> <span class="token expression"><span class="token number">255</span></span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> ch<span class="token punctuation">[</span>MAXLEN <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 一般下标从1开始，0不用，这样可以简便一些算法</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span>
<span class="token punctuation">}</span> SString<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>串的实际长度只能小于等于 MAXLEN，超过预定义长度的串值会被舍去，称为截断</li>
<li>堆分配存储表示</li>
<li>块链存储表示</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">CHUNKSIZE</span> <span class="token expression"><span class="token number">80</span>       </span><span class="token comment">// 块的大小可由用户自定义</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">Chunk</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> ch<span class="token punctuation">[</span>CHUNKSIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">// 称为块</span>
    <span class="token keyword">struct</span> <span class="token class-name">Chunk</span><span class="token operator">*</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span> Chunk<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    Chunk <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token operator">*</span>tail<span class="token punctuation">;</span>    <span class="token comment">// 串的头指针和尾指针</span>
    <span class="token keyword">int</span> curlen             <span class="token comment">// 串的当前长度</span>
<span class="token punctuation">}</span>LString<span class="token punctuation">;</span>                   <span class="token comment">// 字符串的块链结构</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="串的基本操作" tabindex="-1"><a class="header-anchor" href="#串的基本操作" aria-hidden="true">#</a> 串的基本操作</h3>
<ul>
<li>串的基本操作，可以看下面两个链接</li>
<li>主要包括构造、销毁、清空、求串长、求字串等
<a href="https://cplusplus.com/reference/cstring/" target="_blank" rel="noopener noreferrer">&quot;c 语言的库cstring&quot;<ExternalLinkIcon/></a></li>
</ul>
<p><a href="https://cplusplus.com/reference/string/string/" target="_blank" rel="noopener noreferrer">&quot;c++的库string&quot;<ExternalLinkIcon/></a></p>
<!-- - 串的基本操作
  - StrAssign(&T, chars)：串赋值
  - StrCompare(S, T)：串比较
  - StrLength(S)：求串长
  - Concat(&T, S1, S2)：串连结
  - SubString(&Sub, S, pos, len)：求子串
  - StrCopy(&T, S)：串拷贝
  - StrEmpty(S)：串判空
  - ClearString(&S)：清空串
  - Index(S,T,pos)：子串的位置
  - Repalce(&S, T, V)：串替换
  - StrInsert(&S, pos, T)：子串插入
  - StrDelete(&S, pos, len)：子串删除
  - DestoryString(&S)：串销毁 -->
<h2 id="_4-2-串的匹配模式" tabindex="-1"><a class="header-anchor" href="#_4-2-串的匹配模式" aria-hidden="true">#</a> 4.2 串的匹配模式</h2>
<ul>
<li>简单的模式匹配算法——BF 算法</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">Index_BF</span><span class="token punctuation">(</span>SString S<span class="token punctuation">,</span> SString T<span class="token punctuation">,</span> <span class="token keyword">int</span> pos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">int</span> i <span class="token operator">=</span> pos<span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> S<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> T<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>S<span class="token punctuation">.</span>ch<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> T<span class="token punctuation">.</span>ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 比较成功则继续匹配下一个字符串</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
    j<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 比较不成功则回溯</span>
    i <span class="token operator">=</span> i <span class="token operator">-</span> j <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
    j<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">></span> T<span class="token punctuation">.</span>length<span class="token punctuation">)</span>  <span class="token keyword">return</span>  i <span class="token operator">-</span> T<span class="token punctuation">.</span>length<span class="token punctuation">;</span>  <span class="token comment">// 看下文注释</span>
<span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
j >= T.length 是错误的，举个反例：
S = {"abcdef"}; T = {"fg"}
when i = 6;
S.ch[i] = T.ch[j] = 'f';
Then i=7; j=2;
此时不符合循环条件跳出。明显j = 2匹配成功了
*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>改进的模式匹配算法——KMP 算法
<ul>
<li>主函数</li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">Index_KMP</span><span class="token punctuation">(</span>SString S<span class="token punctuation">,</span> SString T<span class="token punctuation">,</span> <span class="token keyword">int</span> pos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">int</span> i <span class="token operator">=</span> pos<span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> S<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> T<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> S<span class="token punctuation">.</span>ch<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> T<span class="token punctuation">.</span>ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// j == 0或者比较成功则继续匹配下一个字符串</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>
    j<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span>
    j <span class="token operator">=</span> next<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token comment">// 比较不成功则回溯</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">></span> T<span class="token punctuation">.</span>length<span class="token punctuation">)</span>  <span class="token keyword">return</span>  i <span class="token operator">-</span> T<span class="token punctuation">.</span>length<span class="token punctuation">;</span>  <span class="token comment">// 看下文注释</span>
<span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>获得next函数</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">Get_next</span><span class="token punctuation">(</span>SString T<span class="token punctuation">,</span> <span class="token keyword">int</span> nextval<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
nextval<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token function">strlen</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> T<span class="token punctuation">.</span>ch<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> T<span class="token punctuation">.</span>ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> next<span class="token punctuation">[</span><span class="token operator">++</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">++</span>j<span class="token punctuation">;</span>
    <span class="token keyword">else</span> next<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> next<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> j <span class="token operator">=</span> next<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 隐含着非常厉害的递归思想</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>时间复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>m</mi><mo>+</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(m+n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span> ，其中<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>m</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(m)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">m</span><span class="mclose">)</span></span></span></span> 来自于求next数组，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span> 来自KMP算法的里层循环（普通模式匹配算法的时间复杂度是<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>m</mi><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(mn)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">mn</span><span class="mclose">)</span></span></span></span></p>
</li>
<li>
<p>KMP 算法的进一步优化</p>
<ul>
<li>获得 nextval 函数</li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">Get_next</span><span class="token punctuation">(</span>SString T<span class="token punctuation">,</span> <span class="token keyword">int</span> nextval<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
nextval<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token function">strlen</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> T<span class="token punctuation">.</span>ch<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> T<span class="token punctuation">.</span>ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i<span class="token operator">++</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>T<span class="token punctuation">.</span>ch<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> T<span class="token punctuation">.</span>ch<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> nextval<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span>
    <span class="token keyword">else</span> nextval<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nextval<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> j <span class="token operator">=</span> nextval<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 隐含着非常厉害的递归思想</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ### 习题
  - 思考：手算next数组→①next[ 1 ] = 0②next[ 2 ] = 1③next[ i ] = 前缀 和 后缀 最大交集 + 1
  - 思考：` {aba} ` 的前缀和后缀分别是什么?→前缀{a, ab}（没有b，必须连续且包含第一个字符），后缀{a, ba}（必须连续且包含最后一个字符）
  - 思考：模式串为` a b a b a a ` 求next数组→0 1 1 2 3 4
  - 思考：模式串为` a a a a b `，求next和nextval数组?→0 1 2 3 4；0 0 0 0 4
  - 5 和 7，串 ` a b a b a a a b a b a a ` 的next数组和nextval值为?→011234223456 ；010104210104
  - 9【2019】设主串` a b a a b a a b c a b a a b c ` ，模式串 S = ` a b a a b c `，采用KMP算法进行模式匹配，到匹配成功时为止，在匹配过程中进行的单个字符间的比较次数是?→10次，abaabc的next数组为 0 1 1 2 2 3，开始匹配到主串的第六个字符a时匹配失败，然后 j = next[j] = 3，继续比较当前值，匹配成功，共10次 -->
</div></template>
