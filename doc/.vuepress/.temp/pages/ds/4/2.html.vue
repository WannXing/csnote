<template><div><h2 id="_4-2-串的匹配模式" tabindex="-1"><a class="header-anchor" href="#_4-2-串的匹配模式" aria-hidden="true">#</a> 4.2 串的匹配模式</h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 获得next函数
</code></pre>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- 时间复杂度$O(m+n)$ ，其中$O(m)$ 来自于求next数组，$O(n)$ 来自KMP算法的里层循环（普通模式匹配算法的时间复杂度是$O(mn)$
</code></pre>
<ul>
<li>KMP 算法的进一步优化
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
