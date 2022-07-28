<template><div><h2 id="_7-4-散列表" tabindex="-1"><a class="header-anchor" href="#_7-4-散列表" aria-hidden="true">#</a> 7.4 散列表</h2>
<h3 id="散列表的基本概念" tabindex="-1"><a class="header-anchor" href="#散列表的基本概念" aria-hidden="true">#</a> 散列表的基本概念</h3>
<p>散列函数</p>
<p class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi mathvariant="normal">H</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">h</mi><mo stretchy="false">(</mo><mi mathvariant="normal">k</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">y</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">A</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">r</mi></mrow><annotation encoding="application/x-tex">\rm Hash(key) = Addr
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathrm">Hash</span><span class="mopen">(</span><span class="mord mathrm" style="margin-right:0.01389em;">key</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathrm">Addr</span></span></span></span></span></span></p>
<p>散列表：根据关键字而直接进行访问的数据结构。也就是说，散列表建立了关键字和存储地址之间的一种直接映射关系</p>
<h3 id="散列函数的构造方法" tabindex="-1"><a class="header-anchor" href="#散列函数的构造方法" aria-hidden="true">#</a> 散列函数的构造方法</h3>
<ul>
<li>直接定址法</li>
<li>除余留数法</li>
<li>数字分析法</li>
<li>平方取中法</li>
</ul>
<h3 id="处理冲突的方法" tabindex="-1"><a class="header-anchor" href="#处理冲突的方法" aria-hidden="true">#</a> 处理冲突的方法</h3>
<ul>
<li>开放定址法
<ul>
<li>线性探测法</li>
<li>平方探测法</li>
<li>再散列法</li>
<li>伪随机序列法</li>
</ul>
</li>
</ul>
<h3 id="散列查找及性能分析" tabindex="-1"><a class="header-anchor" href="#散列查找及性能分析" aria-hidden="true">#</a> 散列查找及性能分析</h3>
<!-- ### 习题

- 6 设有一个含有 200 个表项的散列表，用线性探测法解决冲突，按关键字查询时找到一个表项的平均探测次数不超过 1.5，则散列表表项应能够容纳多少个表项（设查找成功的平均查找长度为 ASL = [1+1/(1-α)]/2，其中 α 为装填因子）→400
- 7
- 10【2011】
- 11【2014】
- 12
- 17【2018】
- 18【2019】现有长度为 11 且初始为空的散列表 HT，散列函数是 H(key) = key%7，采用线性探测法（线性探测再散列）法解决冲突。将关键字序列`87 40 30 6 11 22 98 20`依次插入 HT 后，HT 查找失败的平均查找长度是 →ASL=5.25
- 综合题 5【2010】将关键字序列`7 8 30 11 18 9 14 `散列存储到散列表中。散列表的存储空间是一个下标从 0 开始的一维数组，散列函数为 H(key) = (key × 3) MOD 7，处理冲突采用线性探测再散列法，要求装填（载）因子为 0.7。画出所构造的散列表，分别计算等概率的情况下，查找成功和查找不成功的平均查找长度 →ASL 成功=12/7，ASL 失败=18/7 -->
</div></template>
