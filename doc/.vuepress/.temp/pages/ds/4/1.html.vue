<template><div><h3 id="什么是串" tabindex="-1"><a class="header-anchor" href="#什么是串" aria-hidden="true">#</a> 什么是串</h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>串的基本操作，可以看下面两个链接</p>
<p><a href="https://cplusplus.com/reference/cstring/" target="_blank" rel="noopener noreferrer">c 语言的库：<cstring><ExternalLinkIcon/></a></p>
<p><a href="https://cplusplus.com/reference/string/string/" target="_blank" rel="noopener noreferrer">c++的库：<string><ExternalLinkIcon/></a></p>
<p>主要包括构造、销毁、清空、求串长、求字串等</p>
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
</div></template>
