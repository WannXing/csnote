<template><div><h2 id="_6-1-图的基本概念" tabindex="-1"><a class="header-anchor" href="#_6-1-图的基本概念" aria-hidden="true">#</a> 6.1 图的基本概念</h2>
<h3 id="图的定义" tabindex="-1"><a class="header-anchor" href="#图的定义" aria-hidden="true">#</a> 图的定义</h3>
<ul>
<li>有向图</li>
<li>无向图</li>
<li>简单图</li>
<li>多重图</li>
<li>完全图 / 简单完全图</li>
<li>子图</li>
<li>连通、连通图和连通分量</li>
<li>强连通图、强连通分量</li>
<li>生成树</li>
<li>生成森林</li>
<li>顶点的度、入度和出度</li>
<li>边的权和网</li>
<li>稠密图、稀疏图</li>
<li>路径、路径长度和回路</li>
<li>简单路径、简单回路</li>
<li>距离</li>
<li>有向树</li>
</ul>
<!-- ### 习题

#### 4【2011】下列关于图的叙述中，正确的是（）

① 回路是简单路径
② 存储稀疏图，用邻接矩阵比邻接表更省空间
③ 若有向图中存在拓扑序列，则该图不存在回路 → 仅 ③，① 错：回路对应路径，简单回路对应简单路径

- 6【2009
- 7【2010】
- 9【2013】

#### 15【2017】

#### 16 设有无向图 G=(V, E)和 G'(V', E')，若 G'是 G 的生成树，则下列不正确的是

① G'为 G 的连通分量
② G'为 G 的无环子图
③ G'为 G 的极小连通子图且 V'=V→ 只有 ① -->
<h2 id="_6-2-图的存储及基本操作" tabindex="-1"><a class="header-anchor" href="#_6-2-图的存储及基本操作" aria-hidden="true">#</a> 6.2 图的存储及基本操作</h2>
<ul>
<li>邻接矩阵法</li>
<li>邻接表法</li>
<li>十字链表</li>
<li>邻接多重表</li>
<li>图的基本操作
<ul>
<li>Adjacent(G, x, y)</li>
<li>Neighbors(G, x)</li>
<li>InsertVertex(G, x)</li>
<li>AddEdge(G, x, y)</li>
<li>RemoveEdge(G, x, y)</li>
<li>FirstNeighbor(G, x)</li>
<li>NextNeighbor(G, x, y)</li>
<li>Get_edge_value(G, x, y)</li>
<li>Set_edge_value(G, x, y, v)</li>
</ul>
</li>
</ul>
<h3 id="_6-2习题" tabindex="-1"><a class="header-anchor" href="#_6-2习题" aria-hidden="true">#</a> 6.2习题</h3>
<ul>
<li>4 带权有向图G用邻接矩阵存储，则vi的入度等于邻接矩阵中
A 第i行非∞的元素个数
B 第i列非∞的元素个数
C 第i行非∞且非0的元素个数
D 第i列非∞且非0的元素个数→D</li>
<li>13 假设有n个顶点、e条边的有向图用邻接表表示，则删除与某个顶点v相关的所有边的时间复杂度为多少？答案→O(n+e)</li>
</ul>
<h2 id="_6-3-图的遍历" tabindex="-1"><a class="header-anchor" href="#_6-3-图的遍历" aria-hidden="true">#</a> 6.3 图的遍历</h2>
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
<h2 id="_6-4-图的应用" tabindex="-1"><a class="header-anchor" href="#_6-4-图的应用" aria-hidden="true">#</a> 6.4 图的应用</h2>
<h3 id="最小生成树-minimum-spanning-tree-mst" tabindex="-1"><a class="header-anchor" href="#最小生成树-minimum-spanning-tree-mst" aria-hidden="true">#</a> 最小生成树 Minimum-Spanning-Tree, MST</h3>
<ul>
<li>伪代码</li>
<li>Prim 算法</li>
<li>Kruskal 算法</li>
</ul>
<h3 id="最短路径-short-path-first-spf" tabindex="-1"><a class="header-anchor" href="#最短路径-short-path-first-spf" aria-hidden="true">#</a> 最短路径 Short Path First, SPF</h3>
<ul>
<li>Dijkstra 算法——求单源最短路径问题
<ul>
<li>迪杰斯特拉 Dijkstra
<ul>
<li>Dijkstra 算法</li>
</ul>
</li>
</ul>
</li>
<li>Floyd 算法——求各顶点之间最短路径问题</li>
<li>~OSPF 算法</li>
<li>~SPFA 算法 Shortest Path Faster Algorithm</li>
</ul>
<h3 id="有向无环图描述表达式" tabindex="-1"><a class="header-anchor" href="#有向无环图描述表达式" aria-hidden="true">#</a> 有向无环图描述表达式</h3>
<ul>
<li>有向无环图 Direct Acyclic Graph</li>
</ul>
<h3 id="拓扑排序" tabindex="-1"><a class="header-anchor" href="#拓扑排序" aria-hidden="true">#</a> 拓扑排序</h3>
<ul>
<li>AOV 网：Activity On Vertex Network</li>
<li>AOE 网：Activity On Edge Network</li>
</ul>
<h3 id="关键路径" tabindex="-1"><a class="header-anchor" href="#关键路径" aria-hidden="true">#</a> 关键路径</h3>
<ul>
<li>事件 v_k 的最早发生时间 ve(k)</li>
<li>事件 v_k 的最迟发生时间 vl(k)</li>
<li>活动 a_i 的最早开始时间 e(i)</li>
<li>活动 a_i 的最迟开始时间 l(i)</li>
<li>一个活动 a_i 的最迟开始时间 l(i)和其最早开始时间 e(i)的差额 d(i)=l(i)-e(i)</li>
</ul>
<h3 id="_6-4习题" tabindex="-1"><a class="header-anchor" href="#_6-4习题" aria-hidden="true">#</a> 6.4习题</h3>
<ul>
<li>1【2010】</li>
<li>4</li>
<li>5【2012】下列关于最小生成树的叙述中，正确的是
① 最小生成树的代价唯一
② 所有权值最小的边一定会出现在所有的最小生成树中
③ 使用 Prim 算法从不同定点开始得到的最小生成树一定相同
④ 使用 Prim 算法和 Kruskal 算法得到的最小生成树总不相同 →①</li>
<li>6</li>
<li>8【2012】</li>
<li>9【2016】</li>
<li>10</li>
<li>11【2016】若对 n 个顶点、e 条弧的有向图采用邻接表存储，则拓扑排序算法的时间复杂度是 →<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo>+</mo><mi>e</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n+e)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">e</span><span class="mclose">)</span></span></span></span></li>
<li>13</li>
<li>14</li>
<li>15</li>
<li>16【2014】</li>
<li>20</li>
<li>21</li>
<li>24【2012】</li>
<li>25【2015】</li>
<li>26【2018】</li>
<li>27</li>
<li>28【2019】</li>
<li>29【2019】用有向无环图描述表达式<code v-pre>(x+y)((x+y)/x)</code>，需要的顶点个数至少是 →5</li>
<li>30【2020】</li>
<li>30【2020】</li>
<li>31【2020】修改递归方式实现的图的深度优先搜索（DFS）算法，将输出（访问）顶点信息的语句移到退出递归前（即执行输出语句后立刻退出递归）。采用修改后的算法遍历有向无环图 G，若输出结果中包含 G 的全部顶点，则输出的顶点序列是 G 的
A 拓扑有序序列
B 逆拓扑有序序列
C 广度优先搜索序列
D 深度优先搜索序列 →B</li>
</ul>
</div></template>
