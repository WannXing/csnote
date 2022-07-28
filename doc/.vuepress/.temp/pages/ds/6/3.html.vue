<template><div><h2 id="_6-3-图的遍历" tabindex="-1"><a class="header-anchor" href="#_6-3-图的遍历" aria-hidden="true">#</a> 6.3 图的遍历</h2>
<h3 id="广度优先搜索-breadth-first-search-bfs" tabindex="-1"><a class="header-anchor" href="#广度优先搜索-breadth-first-search-bfs" aria-hidden="true">#</a> 广度优先搜索 Breadth-First-Search, BFS</h3>
<ul>
<li>伪代码</li>
<li>BFS 算法的性能分析
<ul>
<li>空间复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi mathvariant="normal">∣</mi><mi>V</mi><mi mathvariant="normal">∣</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(|V|)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mord">∣</span><span class="mclose">)</span></span></span></span></li>
<li>采用邻接表时间复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi mathvariant="normal">∣</mi><mi>V</mi><mi mathvariant="normal">∣</mi><mo>+</mo><mi mathvariant="normal">∣</mi><mi>E</mi><mi mathvariant="normal">∣</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(|V|+|E|)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord">∣</span><span class="mclose">)</span></span></span></span></li>
<li>采用邻接矩阵的时间复杂度为<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi mathvariant="normal">∣</mi><mi>V</mi><msup><mi mathvariant="normal">∣</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(|V|^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mord"><span class="mord">∣</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></li>
</ul>
</li>
<li>BFS 算法求解单源最短路径问题</li>
<li>广度优先生成树</li>
</ul>
<h3 id="深度优先搜索-depth-first-search-dfs" tabindex="-1"><a class="header-anchor" href="#深度优先搜索-depth-first-search-dfs" aria-hidden="true">#</a> 深度优先搜索 Depth-First-Search, DFS</h3>
<ul>
<li>伪代码</li>
<li>DFS 算法的性能分析
<ul>
<li>空间复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi mathvariant="normal">∣</mi><mi>V</mi><mi mathvariant="normal">∣</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(|V|)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mord">∣</span><span class="mclose">)</span></span></span></span></li>
<li>采用邻接表的时间复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>V</mi><mo>+</mo><mi>E</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(V+E)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mclose">)</span></span></span></span></li>
<li>采用邻接矩阵时间复杂度<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi mathvariant="normal">∣</mi><mi>V</mi><msup><mi mathvariant="normal">∣</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(|V|^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mord"><span class="mord">∣</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></li>
</ul>
</li>
<li>深度优先的生成树和生成森林</li>
</ul>
<h3 id="图的遍历与图的连通性" tabindex="-1"><a class="header-anchor" href="#图的遍历与图的连通性" aria-hidden="true">#</a> 图的遍历与图的连通性</h3>
<!-- ### 习题

#### 10【2013】

#### 11【2016】

#### 17【2015】 -->
</div></template>
