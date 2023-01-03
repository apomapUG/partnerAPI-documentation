import{_ as s,c as a,o as n,a as e}from"./app.d637ae10.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"query-tour.md"}'),l={name:"query-tour.md"},p=e(`<p><strong><em>TOUR</em></strong> query will return a single tour with selected field(s)</p><br><h5 id="query-structure" tabindex="-1"><em>Query Structure:</em> <a class="header-anchor" href="#query-structure" aria-hidden="true">#</a></h5><hr><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">tour(tourid: ID!): Tour</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><br><h5 id="argument-s" tabindex="-1"><em>Argument(s):</em> <a class="header-anchor" href="#argument-s" aria-hidden="true">#</a></h5><hr><p>This query must be made with a <strong><em>Tour ID</em></strong> as argument:</p><ol><li><p>Tour Id</p><p><span style="color:darkorange;">tourid</span> : <span style="color:magenta;"><em>ID</em></span> - <span style="color:darkorange;"> the unique identifier of a tour </span> (compulsory)</p></li></ol><br><h5 id="response" tabindex="-1"><em>Response:</em> <a class="header-anchor" href="#response" aria-hidden="true">#</a></h5><hr><p>An object containing details of a single task</p><hr><blockquote><p>This query will return all the fields of a TOUR, as described in the types section. However, you can return whatever field(s) you choose.</p></blockquote><br><h5 id="query-template" tabindex="-1"><em>Query Template:</em> <a class="header-anchor" href="#query-template" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query tour($tourid: ID!){</span></span>
<span class="line"><span style="color:#A6ACCD;">    tour(tourid:$tourid){</span></span>
<span class="line"><span style="color:#A6ACCD;">        vehicle</span></span>
<span class="line"><span style="color:#A6ACCD;">        distance</span></span>
<span class="line"><span style="color:#A6ACCD;">        status</span></span>
<span class="line"><span style="color:#A6ACCD;">        id</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//Variables</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &quot;tourid&quot;: &quot;&quot; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><h5 id="example" tabindex="-1"><em>Example:</em> <a class="header-anchor" href="#example" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query {</span></span>
<span class="line"><span style="color:#A6ACCD;">  tour(tourid: &quot;14bb75b5-97bf-4143-8a21-ad512565aecb&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    vehicle</span></span>
<span class="line"><span style="color:#A6ACCD;">    distance</span></span>
<span class="line"><span style="color:#A6ACCD;">    status</span></span>
<span class="line"><span style="color:#A6ACCD;">    id</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESPONSE:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;tour&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;vehicle&quot;: &quot;car&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;distance&quot;: 3854.4610000000002,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;status&quot;: &quot;finished&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;id&quot;: &quot;14bb75b5-97bf-4143-8a21-ad512565aecb&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,22),o=[p];function t(r,c,i,u,C,d){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{y as __pageData,h as default};
