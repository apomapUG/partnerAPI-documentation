import{_ as s,c as a,o as n,a as e}from"./app.d637ae10.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"query-location.md"}'),l={name:"query-location.md"},o=e(`<p><strong><em>LOCATION</em></strong> query will return a single location with selected field(s)</p><br><h5 id="query-structure" tabindex="-1"><em>Query Structure:</em> <a class="header-anchor" href="#query-structure" aria-hidden="true">#</a></h5><hr><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">location(locationid: ID!): Location</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><br><h5 id="argument-s" tabindex="-1"><em>Argument(s):</em> <a class="header-anchor" href="#argument-s" aria-hidden="true">#</a></h5><hr><p>This query must be made with a <strong><em>Location ID</em></strong> as argument:</p><ol><li><p>Location Id</p><p><span style="color:darkorange;">locationid</span> : <span style="color:magenta;"><em>ID</em></span> - <span style="color:darkorange;"> the unique identifier of a Location </span> (compulsory)</p></li></ol><br><h5 id="response" tabindex="-1"><em>Response:</em> <a class="header-anchor" href="#response" aria-hidden="true">#</a></h5><hr><p>An object containing details of a single location (pharmacy)</p><hr><blockquote><p>This query will return all the fields of a LOCATION, as described in the types section. However, you can return whatever field(s) you choose.</p></blockquote><br><h5 id="query-template" tabindex="-1"><em>Query Template:</em> <a class="header-anchor" href="#query-template" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query location($locationid: ID!){</span></span>
<span class="line"><span style="color:#A6ACCD;">    location(locationid:$locationid){</span></span>
<span class="line"><span style="color:#A6ACCD;">     name</span></span>
<span class="line"><span style="color:#A6ACCD;">     system</span></span>
<span class="line"><span style="color:#A6ACCD;">     type</span></span>
<span class="line"><span style="color:#A6ACCD;">     id</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//Variables</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &quot;locationid&quot;: &quot; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><h5 id="example" tabindex="-1"><em>Example:</em> <a class="header-anchor" href="#example" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query {</span></span>
<span class="line"><span style="color:#A6ACCD;">  location (locationid: &quot;0a839781-73a3-387e-25eb-54d82627042d&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name</span></span>
<span class="line"><span style="color:#A6ACCD;">    system</span></span>
<span class="line"><span style="color:#A6ACCD;">    type</span></span>
<span class="line"><span style="color:#A6ACCD;">    id</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESPONSE:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;location&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;name&quot;: &quot;Jad Apotheke&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;system&quot;: &quot;cida_nova_plus&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;type&quot;: &quot;branch&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;id&quot;: &quot;0a839781-73a3-387e-25eb-54d82627042d&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,22),p=[o];function t(c,r,i,C,A,d){return n(),a("div",null,p)}const h=s(l,[["render",t]]);export{y as __pageData,h as default};
