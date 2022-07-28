import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as o,b as n,a as e,e as s,d as p,r as i}from"./app.5205d589.js";const c={},u=n("h2",{id:"_3-1-\u6808-stack",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-1-\u6808-stack","aria-hidden":"true"},"#"),s(" 3.1 \u6808 Stack")],-1),r=n("h3",{id:"\u6808\u7684\u57FA\u672C\u6982\u5FF5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6808\u7684\u57FA\u672C\u6982\u5FF5","aria-hidden":"true"},"#"),s(" \u6808\u7684\u57FA\u672C\u6982\u5FF5")],-1),d=n("ul",null,[n("li",null,[s("\u6808\u7684\u5B9A\u4E49 "),n("ul",null,[n("li",null,"\u6808\u662F\u53EA\u5141\u8BB8\u5728\u4E00\u7AEF\u8FDB\u884C\u63D2\u5165\u6216\u5220\u9664\u64CD\u4F5C\u7684\u7EBF\u6027\u8868"),n("li",null,"\u7279\u6027\uFF1A\u540E\u8FDB\u5148\u51FA Last In First Out, LIFO"),n("li",null,[s("\u6808\u7684\u6570\u5B66\u6027\u8D28\uFF1A\u5361\u7279\u5170\u6570 Catalan Number "),n("ul",null,[n("li",null,[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mfrac",null,[n("mn",null,"1"),n("mrow",null,[n("mi",null,"n"),n("mo",null,"+"),n("mn",null,"1")])]),n("msubsup",null,[n("mi",null,"C"),n("mrow",null,[n("mn",null,"2"),n("mi",null,"n")]),n("mi",null,"n")])]),n("annotation",{encoding:"application/x-tex"},"\\frac 1{n+1}C^n_{2n}")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1.2484em","vertical-align":"-0.4033em"}}),n("span",{class:"mord"},[n("span",{class:"mopen nulldelimiter"}),n("span",{class:"mfrac"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8451em"}},[n("span",{style:{top:"-2.655em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mathnormal mtight"},"n"),n("span",{class:"mbin mtight"},"+"),n("span",{class:"mord mtight"},"1")])])]),n("span",{style:{top:"-3.23em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),n("span",{style:{top:"-3.394em"}},[n("span",{class:"pstrut",style:{height:"3em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"1")])])])]),n("span",{class:"vlist-s"},"\u200B")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.4033em"}},[n("span")])])])]),n("span",{class:"mclose nulldelimiter"})]),n("span",{class:"mord"},[n("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.6644em"}},[n("span",{style:{top:"-2.4519em","margin-left":"-0.0715em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},[n("span",{class:"mord mtight"},"2"),n("span",{class:"mord mathnormal mtight"},"n")])])]),n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathnormal mtight"},"n")])])]),n("span",{class:"vlist-s"},"\u200B")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.2481em"}},[n("span")])])])])])])])])])])])])])],-1),k=p(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>|     |  &lt;-- \u6808\u9876\uFF08top)
|     |
| ... |
|  b  |
|  a  |  &lt;-- \u6808\u5E95\uFF08bottom\uFF09
+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6808\u7684\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6808\u7684\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> \u6808\u7684\u57FA\u672C\u64CD\u4F5C</h3>`,2),m=n("li",null,"InitStack(&S)\uFF1A\u521D\u59CB\u5316\u64CD\u4F5C",-1),v=n("li",null,"DestroyStack(&S)\uFF1A\u9500\u6BC1\u6808\u64CD\u4F5C []",-1),b=n("li",null,"StackEmpty(S)\uFF1A\u5224\u5B9A S \u662F\u5426\u4E3A\u7A7A\u6808",-1),h=s("StackLength(S)\uFF1A\u6C42\u6808\u7684\u957F\u5EA6 "),g={href:"https://cplusplus.com/reference/stack/stack/size/",target:"_blank",rel:"noopener noreferrer"},y=s("cpp::std::stack::size"),f=s("GetTop(S, &e)\uFF1A\u53D6\u6808\u9876\u5143\u7D20 "),Q={href:"https://cplusplus.com/reference/stack/stack/top/",target:"_blank",rel:"noopener noreferrer"},_=s("cpp::std::stack::top"),w=s("ClearStack(&S)\uFF1A\u6808\u7F6E\u7A7A\u64CD\u4F5C "),x={href:"https://cplusplus.com/reference/stack/stack/empty/",target:"_blank",rel:"noopener noreferrer"},S=s("cpp::std::stack::empty"),E=s("Push(&S, e)\uFF1A\u5165\u6808\u64CD\u4F5C\uFF08\u538B\u6808\uFF09"),L={href:"https://cplusplus.com/reference/stack/stack/push/",target:"_blank",rel:"noopener noreferrer"},I=s("cpp::std::stack::push"),N=n("li",null,"Pop(&S, &e)\uFF1A\u51FA\u6808\u64CD\u4F5C\uFF08\u5F39\u6808\uFF09",-1),z=p(`<h3 id="\u6808\u7684\u987A\u5E8F\u5B58\u50A8\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6808\u7684\u987A\u5E8F\u5B58\u50A8\u7ED3\u6784" aria-hidden="true">#</a> \u6808\u7684\u987A\u5E8F\u5B58\u50A8\u7ED3\u6784</h3><ul><li>\u7ED3\u70B9\u7684\u7C7B\u578B\u5B9A\u4E49</li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAXSIZE</span> <span class="token expression"><span class="token number">100</span></span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  ElemType data<span class="token punctuation">[</span>MAXSIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> top<span class="token punctuation">;</span>  <span class="token comment">// \u6808\u9876\u6307\u9488</span>
<span class="token punctuation">}</span> SqStack<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u987A\u5E8F\u6808\u7684\u57FA\u672C\u8FD0\u7B97</p><ul><li>\u521D\u59CB\u5316</li><li>\u5224\u6808\u7A7A</li><li>\u5165\u6808</li><li>\u51FA\u6808</li><li>\u8BFB\u6808\u9876\u5143\u7D20</li></ul></li><li><p>\u5171\u4EAB\u6808</p></li><li><p>\u6808\u7684\u94FE\u5F0F\u5B58\u50A8\u7ED3\u6784</p></li></ul><p>\u7ED3\u70B9\u7684\u7C7B\u578B\u5B9A\u4E49</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">StackNode</span> <span class="token punctuation">{</span>
  SElemType data<span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">StackNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span> StackNode<span class="token punctuation">,</span> <span class="token operator">*</span>LinkStack<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-\u961F\u5217-queue" tabindex="-1"><a class="header-anchor" href="#_3-2-\u961F\u5217-queue" aria-hidden="true">#</a> 3.2 \u961F\u5217 Queue</h2><h3 id="\u961F\u5217\u7684\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217\u7684\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> \u961F\u5217\u7684\u57FA\u672C\u6982\u5FF5</h3><h3 id="\u961F\u5217\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217\u7684\u5B9A\u4E49" aria-hidden="true">#</a> \u961F\u5217\u7684\u5B9A\u4E49</h3><ul><li>\u961F\u5217\u7B80\u79F0\u961F\uFF0C\u4E5F\u662F\u4E00\u79CD\u64CD\u4F5C\u53D7\u9650\u7684\u7EBF\u6027\u8868\uFF0C\u53EA\u5141\u8BB8\u5728\u8868\u7684\u4E00\u7AEF\u8FDB\u884C\u63D2\u5165\uFF0C\u800C\u5728\u8868\u7684\u53E6\u4E00\u7AEF\u8FDB\u884C\u5220\u9664</li><li>\u5411\u961F\u5217\u4E2D\u63D2\u5165\u5143\u7D20\u79F0\u4E3A\u5165\u961F\u6216\u8FDB\u961F</li><li>\u5220\u9664\u5143\u7D20\u79F0\u4E3A\u51FA\u961F\u6216\u79BB\u961F</li><li>\u7279\u6027\uFF1A\u5148\u8FDB\u5148\u51FA First In First Out, FIFO</li></ul><h3 id="\u961F\u5217\u5E38\u89C1\u7684\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217\u5E38\u89C1\u7684\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> \u961F\u5217\u5E38\u89C1\u7684\u57FA\u672C\u64CD\u4F5C</h3><ul><li>InitQueue(&amp;Q)\uFF1A\u521D\u59CB\u5316\u961F\u5217</li><li>DestoryQueue(&amp;Q)\uFF1A\u9500\u6BC1\u961F\u5217</li><li>ClearQueue(&amp;Q)\uFF1A\u6E05\u7A7A\u961F\u5217</li><li>QueueLength(Q)\uFF1A\u6C42\u961F\u5217\u957F\u5EA6</li><li>GetHead(Q,&amp;e)\uFF1A\u5F97\u5230\u961F\u5934\u5143\u7D20</li><li>EnQueue(&amp;Q, e)\uFF1A\u63D2\u5165\u5143\u7D20</li><li>DeQueue(&amp;Q, &amp;e)\uFF1A\u5220\u9664\u5143\u7D20</li></ul><h3 id="\u961F\u5217\u7684\u987A\u5E8F\u5B58\u50A8\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217\u7684\u987A\u5E8F\u5B58\u50A8\u7ED3\u6784" aria-hidden="true">#</a> \u961F\u5217\u7684\u987A\u5E8F\u5B58\u50A8\u7ED3\u6784</h3><p>\u7ED3\u70B9\u7C7B\u578B\u5B9A\u4E49</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAXSIZE</span> <span class="token expression"><span class="token number">100</span> </span><span class="token comment">// \u6700\u5927\u961F\u5217\u957F\u5EA6</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    QElemType <span class="token operator">*</span>base<span class="token punctuation">;</span> <span class="token comment">// \u521D\u59CB\u5316\u7684\u52A8\u6001\u5206\u914D\u5B58\u50A8\u7A7A\u95F4</span>
    <span class="token keyword">int</span> front<span class="token punctuation">;</span>       <span class="token comment">// \u961F\u5934\u6307\u9488</span>
    <span class="token keyword">int</span> rear<span class="token punctuation">;</span>        <span class="token comment">// \u961F\u5C3E\u6307\u9488</span>
<span class="token punctuation">}</span> SqQueue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5FAA\u73AF\u961F\u5217</p><ul><li>\u5229\u7528\u6A21\u8FD0\u7B97\uFF08%\uFF09</li><li>\u4E3A\u4E86\u533A\u5206\u662F\u961F\u7A7A\u8FD8\u662F\u961F\u6EE1\uFF0C\u6709\u4E09\u79CD\u5904\u7406\u65B9\u5F0F <ul><li>\u727A\u7272\u4E00\u4E2A\u5355\u5143\u6765\u533A\u5206\u961F\u7A7A\u548C\u961F\u6EE1</li><li>\u7C7B\u578B\u4E2D\u589E\u8BBE\u8868\u793A\u5143\u7D20\u4E2A\u6570\u7684\u6570\u636E\u6210\u5458</li><li>\u7C7B\u578B\u4E2D\u589E\u8BBE tag \u6570\u636E\u6210\u5458</li></ul></li></ul><h3 id="\u5FAA\u73AF\u961F\u5217\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u961F\u5217\u7684\u64CD\u4F5C" aria-hidden="true">#</a> \u5FAA\u73AF\u961F\u5217\u7684\u64CD\u4F5C</h3><p>\u521D\u59CB\u5316</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">InitQueue</span><span class="token punctuation">(</span>SqQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Q<span class="token punctuation">.</span>base <span class="token operator">=</span> <span class="token keyword">new</span> QElemType<span class="token punctuation">[</span>MAXSIZE<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>Q<span class="token punctuation">.</span>base<span class="token punctuation">)</span> <span class="token function">exit</span><span class="token punctuation">(</span>OVERFLOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>front <span class="token operator">=</span> Q<span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> OK<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5224\u961F\u7A7A</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>SqQueue Q<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear <span class="token operator">==</span> Q<span class="token punctuation">.</span>front<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  <span class="token comment">// \u961F\u7A7A</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5165\u961F</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">EnQueue</span><span class="token punctuation">(</span>SqQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> QElemType e<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> MAXQSIZE <span class="token operator">==</span> Q<span class="token punctuation">.</span>front<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u961F\u6EE1</span>
    Q<span class="token punctuation">.</span>base<span class="token punctuation">[</span>Q<span class="token punctuation">.</span>rear<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> MAXQSIZE<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FA\u961F</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">DeQueue</span><span class="token punctuation">(</span>SqQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> QElemType <span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear <span class="token operator">==</span> Q<span class="token punctuation">.</span>front<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u961F\u7A7A</span>
    e <span class="token operator">=</span> Q<span class="token punctuation">.</span>base<span class="token punctuation">[</span>Q<span class="token punctuation">.</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>front <span class="token operator">=</span> <span class="token punctuation">(</span>Q<span class="token punctuation">.</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> MAXQSIZE<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u961F\u5217\u7684\u94FE\u5F0F\u5B58\u50A8\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217\u7684\u94FE\u5F0F\u5B58\u50A8\u7ED3\u6784" aria-hidden="true">#</a> \u961F\u5217\u7684\u94FE\u5F0F\u5B58\u50A8\u7ED3\u6784</h3><p>\u7ED3\u70B9\u7C7B\u578B\u5B9A\u4E49</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ElemType data<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">LinkNode</span><span class="token operator">*</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>LinkNode<span class="token punctuation">;</span>

<span class="token keyword">typedef</span> <span class="token keyword">struct</span><span class="token punctuation">{</span>
    LinkNode <span class="token operator">*</span>front<span class="token punctuation">,</span> <span class="token operator">*</span>rear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>LinkQueue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u94FE\u5F0F\u961F\u5217\u7684\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u94FE\u5F0F\u961F\u5217\u7684\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> \u94FE\u5F0F\u961F\u5217\u7684\u57FA\u672C\u64CD\u4F5C</h3><p>\u521D\u59CB\u5316</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">InitQueue</span><span class="token punctuation">(</span>LinkQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">)</span><span class="token punctuation">{</span>
    Q<span class="token punctuation">.</span>front <span class="token operator">=</span> Q<span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token keyword">new</span> QElemType<span class="token punctuation">;</span>
    <span class="token function">If</span><span class="token punctuation">(</span><span class="token operator">!</span>Q<span class="token punctuation">.</span>front<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">exit</span><span class="token punctuation">(</span>OVERFLOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>front <span class="token operator">-&gt;</span> next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5224\u961F\u7A7A</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>LinkQueue Q<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>front <span class="token operator">==</span> Q<span class="token punctuation">.</span>rear<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5165\u961F</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">EnQueue</span><span class="token punctuation">(</span>LinkQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> QElemType e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    QNode<span class="token operator">*</span> p<span class="token punctuation">;</span>
    p <span class="token operator">=</span> <span class="token keyword">new</span> QNode<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>p<span class="token punctuation">)</span> <span class="token function">exit</span><span class="token punctuation">(</span>OVERFLOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
    p<span class="token operator">-&gt;</span>data <span class="token operator">=</span> e<span class="token punctuation">;</span>
    p<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>rear<span class="token operator">-&gt;</span>next <span class="token operator">=</span> p<span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>rear <span class="token operator">=</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FA\u961F</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">DeQueue</span><span class="token punctuation">(</span>LinkQueue <span class="token operator">&amp;</span>Q<span class="token punctuation">,</span> QElemType <span class="token operator">&amp;</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>front <span class="token operator">==</span> Q<span class="token punctuation">.</span>rear<span class="token punctuation">)</span> <span class="token keyword">return</span> ERROR<span class="token punctuation">;</span>
    QNode<span class="token operator">*</span> p<span class="token punctuation">;</span>
    p <span class="token operator">=</span> Q<span class="token punctuation">.</span>front<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    e <span class="token operator">=</span> p<span class="token operator">-&gt;</span>data<span class="token punctuation">;</span>
    Q<span class="token punctuation">.</span>front<span class="token operator">-&gt;</span>next <span class="token operator">=</span> p<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Q<span class="token punctuation">.</span>rear <span class="token operator">==</span> p<span class="token punctuation">)</span> Q<span class="token punctuation">.</span>rear <span class="token operator">=</span> Q<span class="token punctuation">.</span>front<span class="token punctuation">;</span><span class="token comment">// \u8FD9\u4E2A\u60C5\u51B5\u6BD4\u8F83\u7279\u6B8A</span>
    <span class="token keyword">delete</span> p<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u53CC\u7AEF\u961F\u5217 <ul><li>\u53CC\u7AEF\u961F\u5217\u662F\u6307\u5141\u8BB8\u4E24\u7AEF\u90FD\u53EF\u4EE5\u8FDB\u884C\u5165\u961F\u548C\u51FA\u961F\u64CD\u4F5C\u7684\u961F\u5217\uFF0C\u5176\u5143\u7D20\u7684\u903B\u8F91\u7ED3\u6784\u4ECD\u662F\u7EBF\u6027\u7ED3\u6784</li><li>\u5C06\u961F\u5217\u7684\u4E24\u7AEF\u5206\u522B\u79F0\u4E3A\u524D\u7AEF\u548C\u540E\u7AEF\uFF0C\u4E24\u7AEF\u90FD\u53EF\u4EE5\u5165\u961F\u548C\u51FA\u961F</li><li>\u8F93\u51FA\u53D7\u9650\u7684\u53CC\u7AEF\u961F\u5217\uFF1A\u5141\u8BB8\u5728\u4E00\u7AEF\u8FDB\u884C\u63D2\u5165\u548C\u5220\u9664\uFF0C\u53E6\u4E00\u7AEF\u53EA\u5141\u8BB8\u63D2\u5165</li><li>\u8F93\u5165\u53D7\u9650\u7684\u53CC\u7AEF\u961F\u5217\uFF1A\u5141\u8BB8\u5728\u4E00\u7AEF\u8FDB\u884C\u63D2\u5165\u548C\u5220\u9664\uFF0C\u53E6\u4E00\u7AEF\u53EA\u5141\u8BB8\u5220\u9664</li></ul></li></ul><h2 id="_3-3-\u6808\u548C\u961F\u5217\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_3-3-\u6808\u548C\u961F\u5217\u7684\u5E94\u7528" aria-hidden="true">#</a> 3.3 \u6808\u548C\u961F\u5217\u7684\u5E94\u7528</h2><ul><li>\u6808\u5728\u62EC\u53F7\u5339\u914D\u4E2D\u7684\u5E94\u7528</li><li>\u6808\u5728\u8868\u8FBE\u5F0F\u6C42\u503C\u4E2D\u7684\u5E94\u7528 <ul><li>\u524D\u7F00\u8868\u8FBE\u5F0F</li><li>\u4E2D\u7F00\u8868\u8FBE\u5F0F</li><li>\u540E\u7F00\u8868\u8FBE\u5F0F</li></ul></li><li>\u6808\u5728\u9012\u5F52\u4E2D\u7684\u5E94\u7528 <ul><li>\u6590\u6CE2\u90A3\u5951\u6570\u5217</li></ul></li></ul><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">// \u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684\u5B9E\u73B0</span>
<span class="token keyword">int</span> <span class="token function">Fib</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>        <span class="token comment">// \u8FB9\u754C\u6761\u4EF6</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>        <span class="token comment">// \u8FB9\u754C\u6761\u4EF6</span>
    <span class="token keyword">return</span> <span class="token function">Fib</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Fib</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9012\u5F52\u8868\u8FBE\u5F0F</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u9012\u5F52\u6A21\u578B\u5FC5\u987B\u6EE1\u8DB3\u4E0B\u5217\u4E24\u4E2A\u6761\u4EF6 <ul><li>\u9012\u5F52\u8868\u8FBE\u5F0F\uFF08\u9012\u5F52\u4F53\uFF09</li><li>\u8FB9\u754C\u6761\u4EF6\uFF08\u9012\u5F52\u51FA\u53E3\uFF09</li></ul></li><li>\u961F\u5217\u5728\u5C42\u6B21\u904D\u5386\u4E2D\u7684\u5E94\u7528</li><li>\u961F\u5217\u5728\u8BA1\u7B97\u673A\u7CFB\u7EDF\u4E2D\u7684\u5E94\u7528</li></ul><h2 id="_3-4-\u7279\u6B8A\u77E9\u9635\u548C\u538B\u7F29\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#_3-4-\u7279\u6B8A\u77E9\u9635\u548C\u538B\u7F29\u5B58\u50A8" aria-hidden="true">#</a> 3.4 \u7279\u6B8A\u77E9\u9635\u548C\u538B\u7F29\u5B58\u50A8</h2><ul><li>\u6570\u7EC4\u7684\u5B9A\u4E49 <ul><li>\u6570\u7EC4\u662F\u7531 n \u4E2A\u76F8\u540C\u7C7B\u578B\u7684\u6570\u636E\u5143\u7D20\u6784\u6210\u7684\u6709\u9650\u5E8F\u5217\uFF0C\u6BCF\u4E2A\u6570\u636E\u5143\u7D20\u79F0\u4E3A\u4E00\u4E2A\u6570\u7EC4\u5143\u7D20</li></ul></li></ul><p>\u4E3E\u4F8B\u8BF4\u660E</p>`,46),F=n("p",{"1,":"","2,":"","3,":"",4:""},"\u200B```cpp int array[3][3] =",-1),O=p(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
- \u7ED3\u8BBA
  - \u7EBF\u6027\u8868\u7ED3\u6784\u662F\u6570\u7EC4\u7ED3\u6784\u7684\u4E00\u4E2A\u7279\u4F8B
  - \u800C\u6570\u7EC4\u7ED3\u6784\u53C8\u662F\u7EBF\u6027\u8868\u7ED3\u6784\u7684\u6269\u5C55
- \u7279\u70B9
  - \u7ED3\u6784\u56FA\u5B9A\uFF1A\u5B9A\u4E49\u540E\uFF0C\u7EF4\u6570\u548C\u7EF4\u754C\u4E0D\u518D\u6539\u53D8
- \u57FA\u672C\u64CD\u4F5C

  - \u9664\u4E86\u7ED3\u6784\u7684\u521D\u59CB\u5316\u548C\u9500\u6BC1\u4E4B\u5916\uFF0C\u53EA\u6709\u53D6\u5143\u7D20\u548C\u4FEE\u6539\u5143\u7D20\u503C\u7684\u64CD\u4F5C

- \u6570\u7EC4\u7684\u5B58\u50A8\u7ED3\u6784
- \u77E9\u9635\u7684\u538B\u7F29\u5B58\u50A8
  - \u538B\u7F29\u5B58\u50A8
  - \u7279\u6B8A\u77E9\u9635
  - \u5BF9\u79F0\u77E9\u9635
  - \u4E09\u89D2\u77E9\u9635
  - \u4E09\u5BF9\u89D2\u77E9\u9635
- \u7A00\u758F\u77E9\u9635
  - \u6570\u7EC4\u5B58\u50A8
  - \u5341\u5B57\u94FE\u8868\u6CD5\u5B58\u50A8

&lt;!-- ### \u4E60\u9898
- 6\u30102016\u3011\u6709\u4E00\u4E2A100\u9636\u7684\u4E09\u5BF9\u89D2\u77E9\u9635M\uFF0C\u5176\u5143\u7D20$m_{i,j}(1\\le i,j \\le100)$\u6309\u884C\u4F18\u5148\u4F9D\u6B21\u538B\u7F29\u5B58\u5165\u4E0B\u6807\u4ECE0\u5F00\u59CB\u7684\u4E00\u7EF4\u6570\u7EC4N\u4E2D\u3002\u5143\u7D20$m_{30,30}$ \u5728N\u4E2D\u7684\u4E0B\u6807\u662F\u219287
- 9\u30102017\u3011\u9002\u7528\u4E8E\u538B\u7F29\u5B58\u50A8\u7A00\u758F\u77E9\u9635\u7684\u4E24\u79CD\u5B58\u50A8\u7ED3\u6784\u662F
A \u4E09\u5143\u7EC4\u8868\u548C\u5341\u5B57\u94FE\u8868
B \u4E09\u5143\u7EC4\u8868\u548C\u90BB\u63A5\u77E9\u9635
C \u5341\u5B57\u94FE\u8868\u548C\u4E8C\u53C9\u94FE\u8868
D \u90BB\u63A5\u77E9\u9635\u548C\u5341\u5B57\u94FE\u8868\u2192\u4E09\u5143\u7EC4\u8868\u548C\u5341\u5B57\u94FE\u8868
- 10\u30102018\u3011
- 11\u30102020\u3011 --&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,2);function T(M,q){const a=i("ExternalLinkIcon");return l(),o("div",null,[u,r,d,k,n("ul",null,[m,v,b,n("li",null,[h,n("a",g,[y,e(a)])]),n("li",null,[f,n("a",Q,[_,e(a)])]),n("li",null,[w,n("a",x,[S,e(a)])]),n("li",null,[E,n("a",L,[I,e(a)])]),N]),z,F,O])}var V=t(c,[["render",T],["__file","03.html.vue"]]);export{V as default};
