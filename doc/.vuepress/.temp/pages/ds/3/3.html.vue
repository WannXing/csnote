<template><div><h2 id="_3-3-栈和队列的应用" tabindex="-1"><a class="header-anchor" href="#_3-3-栈和队列的应用" aria-hidden="true">#</a> 3.3 栈和队列的应用</h2>
<ul>
<li>栈在括号匹配中的应用</li>
<li>栈在表达式求值中的应用
<ul>
<li>前缀表达式</li>
<li>中缀表达式</li>
<li>后缀表达式</li>
</ul>
</li>
<li>栈在递归中的应用
<ul>
<li>斐波那契数列</li>
</ul>
</li>
</ul>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token comment">// 斐波那契数列的实现</span>
<span class="token keyword">int</span> <span class="token function">Fib</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>        <span class="token comment">// 边界条件</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>        <span class="token comment">// 边界条件</span>
    <span class="token keyword">return</span> <span class="token function">Fib</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Fib</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归表达式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>递归模型必须满足下列两个条件
<ul>
<li>递归表达式（递归体）</li>
<li>边界条件（递归出口）</li>
</ul>
</li>
<li>队列在层次遍历中的应用</li>
<li>队列在计算机系统中的应用</li>
</ul>
<!-- ### 习题

#### 4【2009】为解决计算机主机与打印机之间速度不匹配的问题，通常设置一个打印数据缓冲区，主机将要输出的数据依次写入该缓冲区，而打印机则依次从该缓冲区中取出数据。该缓冲区的逻辑结构应该是

A 栈
B 队列
C 树
D 图 →B

#### 9 执行什么操作时，需要使用队列作为辅助存储空间

A 查找散列（哈希）表
B 广度优先搜索图
C 前序（根）遍历二叉树
D 深度优先搜索图 →B

#### 11【2012】已知操作符包括+、-、_、/、( 和 )。将中缀表达式`a + b - a _ ( ( c + d) / e - f ) + g `转换为等价的后缀表达式`a b + a c d + e / f - \* - g + `时，用栈来存放暂时还不能确定运算次序的操作符。若栈初始为空，则转换过程中同时保存在栈中的操作符的最大个数是 →5

#### 12【2014】假设栈初始为空，将中缀表达式 `a / b + ( c * d - e * f ) / g` 转化为等价 的后缀表达式的过程中，当扫描到 f 时，栈中的元素依次是 →`+ ( - *`

#### 13【2015】已知程序如下

```c
int S(int n){
    return (n<=0)?0:S(n-1)+n;
}
void main(){
    cout << S(1);
}
```

程序运行时使用栈来保存调用过程的信息，自栈底到栈顶保存的信息依次对应的是

```
| S(0)   | <--- 栈顶
| S(1)   |
| mian() | <--- 栈底
```

所以依次保存的信息是 `main()-> S(1)->S(0)` -->
</div></template>
