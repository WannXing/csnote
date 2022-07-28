<template><div><p>1.2 算法的基本概念（书本定义，看下就好）</p>
<h2 id="重要特性" tabindex="-1"><a class="header-anchor" href="#重要特性" aria-hidden="true">#</a> 重要特性</h2>
<ul>
<li>有穷性：步骤有穷，执行时间有穷</li>
<li>确定性：没有二义性</li>
<li>可行性：算法是可执行的</li>
<li>输入：有零个或多个输入</li>
<li>输出：有一个或多个输出</li>
</ul>
<h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标" aria-hidden="true">#</a> 目标</h2>
<ul>
<li>正确性 Correctness</li>
<li>可读性 Readability</li>
<li>健壮性 Robustness</li>
<li>高效性 Efficiency</li>
</ul>
<h2 id="算法效率的度量-🤩" tabindex="-1"><a class="header-anchor" href="#算法效率的度量-🤩" aria-hidden="true">#</a> 算法效率的度量 🤩</h2>
<h3 id="时间复杂度-time-complex" tabindex="-1"><a class="header-anchor" href="#时间复杂度-time-complex" aria-hidden="true">#</a> 时间复杂度 <a href="https://en.wikipedia.org/wiki/Time_complexity" target="_blank" rel="noopener noreferrer">Time Complex<ExternalLinkIcon/></a></h3>
<ul>
<li>定义：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>=</mo><mi>O</mi><mo stretchy="false">(</mo><mi>f</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">T(n) = O(f(n))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">))</span></span></span></span></li>
</ul>
<!-- - 算法的基本操作执行次数还随问题的 输入数据集的不同而不同
- 最坏时间复杂度
- 平均时间复杂度
- 最好时间复杂度
- 运算规则
- 加法规则
  - $T(n) = T_1(n)+T_2(n) = O(f(n))+O(g(n)) = O(\max(f(n),g(n)))$
- 乘法规则
  - $T(n) = T_1(n)\times T_2(n)=O(f(n))\times O(g(n)) = O(f(n)\times g(n))$
- 常见的渐进时间复杂度为
- $O(1) < O(\log_2n)<O(n)<O(n \log_2n)<O(n^2)<O(n^3)<O(n^k)<O(n!)<O(2^n)$ -->
<h3 id="空间复杂度-space-complexity" tabindex="-1"><a class="header-anchor" href="#空间复杂度-space-complexity" aria-hidden="true">#</a> 空间复杂度 <a href="https://en.wikipedia.org/wiki/Space_complexity" target="_blank" rel="noopener noreferrer">Space Complexity<ExternalLinkIcon/></a></h3>
<ul>
<li>定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>S</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>=</mo><mi>O</mi><mo stretchy="false">(</mo><mi>g</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">S(n) = O(g(n))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">))</span></span></span></span></li>
</ul>
<p>示例：如何实现数组逆序？
方案一：空间复杂度为 1 的情况，即<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>S</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>=</mo><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">S(n) = O(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span></p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">/</span> <span class="token number">2</span>；i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token comment">// 遍历半个数组</span>
<span class="token punctuation">{</span>
	t <span class="token operator">=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>              <span class="token comment">// 临时变量t</span>
	a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>n<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>       <span class="token comment">// 交换数值</span>
	a<span class="token punctuation">[</span>n<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> t<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方案二：空间复杂度为 n 的情况，即<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>S</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo><mo>=</mo><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">S(n) = O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n； i<span class="token operator">++</span><span class="token punctuation">)</span>  <span class="token comment">// 辅助数组b逆序存储a</span>
	b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>n<span class="token operator">-</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">,</span> i<span class="token operator">++</span><span class="token punctuation">)</span>   <span class="token comment">// 重新赋值给a</span>
	a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ### 习题 -->
<!-- #### 4【2011】

#### 5【2012】

#### 6【2013】

#### 7【2014】

#### 8【2017】

#### 10

#### 12 「算法原地工作的含义是指不需要任何额外的辅助空间」→ 错误，算法原地工作的含义是指辅助空间是常量

#### 13【2019】

#### 综合题 1 一个算法所需时间由下述递归方程表示，试求出该算法的时间复杂度的级别（或阶） $$T(n) = \begin{cases} 1, & n=1 \\ 2T(n/2)+n, & n>1 \end{cases}$$ 式中，n 是问题的规模，为简单起见，设 n 是 2 的整数次幂 →$$O(n\log_2n)$$

 -->
<h4 id="思考-斐波那契数列-用递归算法和非递归算法的时间复杂度如何-😜" tabindex="-1"><a class="header-anchor" href="#思考-斐波那契数列-用递归算法和非递归算法的时间复杂度如何-😜" aria-hidden="true">#</a> 思考：斐波那契数列，用<em>递归算法</em>和<em>非递归算法</em>的时间复杂度如何？😜</h4>
<ul>
<li>递归算法<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><msup><mn>2</mn><mi>n</mi></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(2^n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></li>
<li>非递归算法<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span></li>
</ul>
</div></template>
