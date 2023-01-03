import{_ as s,c as a,o as n,a as l}from"./app.d637ae10.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"query-tours.md"}'),e={name:"query-tours.md"},p=l(`<p><strong><em>TOURS</em></strong> query will return a collection of tours (i.e. multiple tours)</p><br><h5 id="query-structure" tabindex="-1"><em>Query Structure:</em> <a class="header-anchor" href="#query-structure" aria-hidden="true">#</a></h5><hr><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">tours(driverid: ID): [Tour]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><br><h5 id="argument-s" tabindex="-1"><em>Argument(s):</em> <a class="header-anchor" href="#argument-s" aria-hidden="true">#</a></h5><hr><p>This query can be made with or without a driver&#39;s id as an argument:</p><ol><li><p>Driver Id</p><p><span style="color:darkorange;">driverid</span> : <span style="color:magenta;"><em>ID</em></span> - <span style="color:darkorange;"> tthe unique identifier of a driver </span> (optional)</p></li></ol><br><h5 id="response" tabindex="-1"><em>Response:</em> <a class="header-anchor" href="#response" aria-hidden="true">#</a></h5><hr><p>An array (collection) of tours</p><hr><blockquote><p>This query will return all the fields of a TOUR, as described in the types section. However, you can return whatever field(s) you choose.</p></blockquote><br><h5 id="query-template" tabindex="-1"><em>Query Template:</em> <a class="header-anchor" href="#query-template" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query tours($driverid: ID){</span></span>
<span class="line"><span style="color:#A6ACCD;">    tours(driverid:$driverid){</span></span>
<span class="line"><span style="color:#A6ACCD;">     vehicle</span></span>
<span class="line"><span style="color:#A6ACCD;">     startTime</span></span>
<span class="line"><span style="color:#A6ACCD;">     actualEndTime</span></span>
<span class="line"><span style="color:#A6ACCD;">     distance</span></span>
<span class="line"><span style="color:#A6ACCD;">     status</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//Variables</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;driverid&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><h5 id="examples" tabindex="-1"><em>Examples:</em> <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h5><ul><li>A query without any argument</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query {</span></span>
<span class="line"><span style="color:#A6ACCD;">  tours {</span></span>
<span class="line"><span style="color:#A6ACCD;">    vehicle</span></span>
<span class="line"><span style="color:#A6ACCD;">    startTime</span></span>
<span class="line"><span style="color:#A6ACCD;">    actualEndTime</span></span>
<span class="line"><span style="color:#A6ACCD;">    distance</span></span>
<span class="line"><span style="color:#A6ACCD;">    status</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESPONSE:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;tours&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;vehicle&quot;: &quot;car&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;startTime&quot;: &quot;17:37&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;actualEndTime&quot;: &quot;16:23&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;distance&quot;: 3854.4610000000002,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;status&quot;: &quot;finished&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>A query with &quot;Driver Id&quot; as an argument</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query {</span></span>
<span class="line"><span style="color:#A6ACCD;">  tours (driverid: &quot;8908019a-0eeb-eefa-d0ca-f4c94074c70a&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    vehicle</span></span>
<span class="line"><span style="color:#A6ACCD;">    startTime</span></span>
<span class="line"><span style="color:#A6ACCD;">    actualEndTime</span></span>
<span class="line"><span style="color:#A6ACCD;">    distance</span></span>
<span class="line"><span style="color:#A6ACCD;">    status</span></span>
<span class="line"><span style="color:#A6ACCD;">    driver</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESPONSE:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;tours&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;vehicle&quot;: &quot;car&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;startTime&quot;: &quot;17:37&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;actualEndTime&quot;: &quot;16:23&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;distance&quot;: 3854.4610000000002,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;status&quot;: &quot;finished&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;driver&quot;: &quot;8908019a-0eeb-eefa-d0ca-f4c94074c70a&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,25),o=[p];function t(c,r,i,C,A,u){return n(),a("div",null,o)}const D=s(e,[["render",t]]);export{d as __pageData,D as default};
