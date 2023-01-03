import{_ as s,c as a,o as n,a as e}from"./app.d637ae10.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"query-driver.md"}'),l={name:"query-driver.md"},p=e(`<p><strong><em>DRIVER</em></strong> query will return a single driver with selected field(s)</p><br><h5 id="query-structure" tabindex="-1"><em>Query Structure:</em> <a class="header-anchor" href="#query-structure" aria-hidden="true">#</a></h5><hr><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">driver(driverid: ID!): Driver</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><br><h5 id="argument-s" tabindex="-1"><em>Argument(s):</em> <a class="header-anchor" href="#argument-s" aria-hidden="true">#</a></h5><hr><p>This query must be made with a <strong><em>Driver ID</em></strong> as argument:</p><ol><li><p>Driver Id</p><p><span style="color:darkorange;">driverid</span> : <span style="color:magenta;"><em>ID</em></span> - <span style="color:darkorange;"> the unique identifier of a Driver </span> (compulsory)</p></li></ol><br><h5 id="response" tabindex="-1"><em>Response:</em> <a class="header-anchor" href="#response" aria-hidden="true">#</a></h5><hr><p>An object containing details of a single driver</p><hr><blockquote><p>This query will return all the fields of a DRIVER, as described in the types section. However, you can return whatever field(s) you choose.</p></blockquote><br><h5 id="query-template" tabindex="-1"><em>Query Template:</em> <a class="header-anchor" href="#query-template" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query driver($driverid: ID!){</span></span>
<span class="line"><span style="color:#A6ACCD;">    driver(driverid:$driverid){</span></span>
<span class="line"><span style="color:#A6ACCD;">     firstName</span></span>
<span class="line"><span style="color:#A6ACCD;">     lastName</span></span>
<span class="line"><span style="color:#A6ACCD;">     id</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//Variables</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &quot;driverid&quot;: &quot;&quot; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><h5 id="example" tabindex="-1"><em>Example:</em> <a class="header-anchor" href="#example" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query {</span></span>
<span class="line"><span style="color:#A6ACCD;">  driver (driverid: &quot;8908019a-0eeb-eefa-d0ca-f4c94074c70a&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    firstName</span></span>
<span class="line"><span style="color:#A6ACCD;">    lastName</span></span>
<span class="line"><span style="color:#A6ACCD;">    id</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESPONSE:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;driver&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;firstName&quot;: &quot;Max&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;lastName&quot;: &quot;Munstermann&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;id&quot;: &quot;8908019a-0eeb-eefa-d0ca-f4c94074c70a&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,22),r=[p];function o(t,c,i,d,u,C){return n(),a("div",null,r)}const h=s(l,[["render",o]]);export{y as __pageData,h as default};
