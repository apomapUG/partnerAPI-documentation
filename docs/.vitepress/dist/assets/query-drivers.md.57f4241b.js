import{_ as s,c as a,o as n,a as e}from"./app.d637ae10.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"query-drivers.md"}'),l={name:"query-drivers.md"},p=e(`<p><strong><em>DRIVERS</em></strong> query will return a collection of drivers (i.e. multiple drivers)</p><br><h5 id="query-structure" tabindex="-1"><em>Query Structure:</em> <a class="header-anchor" href="#query-structure" aria-hidden="true">#</a></h5><hr><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">drivers: [Driver]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><br><h5 id="argument-s" tabindex="-1"><em>Argument(s):</em> <a class="header-anchor" href="#argument-s" aria-hidden="true">#</a></h5><hr><p>None</p><br><h5 id="response" tabindex="-1"><em>Response:</em> <a class="header-anchor" href="#response" aria-hidden="true">#</a></h5><hr><p>An array (collection) of drivers</p><hr><blockquote><p>This query will return all the fields of a DRIVER, as described in the types section. However, you can return whatever field(s) you choose.</p></blockquote><br><h5 id="query-template" tabindex="-1"><em>Query Template:</em> <a class="header-anchor" href="#query-template" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query drivers{</span></span>
<span class="line"><span style="color:#A6ACCD;">  drivers {</span></span>
<span class="line"><span style="color:#A6ACCD;">    firstName</span></span>
<span class="line"><span style="color:#A6ACCD;">    lastName</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><h5 id="example" tabindex="-1"><em>Example:</em> <a class="header-anchor" href="#example" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query {</span></span>
<span class="line"><span style="color:#A6ACCD;">  drivers {</span></span>
<span class="line"><span style="color:#A6ACCD;">    firstName</span></span>
<span class="line"><span style="color:#A6ACCD;">    lastName</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESPONSE:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;drivers&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;firstName&quot;: &quot;Max&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;lastName&quot;: &quot;Munstermann&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,21),r=[p];function o(t,c,i,C,d,A){return n(),a("div",null,r)}const h=s(l,[["render",o]]);export{y as __pageData,h as default};
