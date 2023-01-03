import{_ as s,c as a,o as n,a as e}from"./app.d637ae10.js";const y=JSON.parse('{"title":"Mutate Location","description":"","frontmatter":{},"headers":[],"relativePath":"mutate-location.md"}'),o={name:"mutate-location.md"},t=e(`<h1 id="mutate-location" tabindex="-1">Mutate Location <a class="header-anchor" href="#mutate-location" aria-hidden="true">#</a></h1><p>This query allows users to decide what field of a LOCATION object they want to change. However, you can change only one field at a time.</p><br><h5 id="query-structure" tabindex="-1"><em>Query Structure:</em> <a class="header-anchor" href="#query-structure" aria-hidden="true">#</a></h5><hr><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">updateLocation(</span></span>
<span class="line"><span style="color:#A6ACCD;">    locationid: ID!</span></span>
<span class="line"><span style="color:#A6ACCD;">    key: String!</span></span>
<span class="line"><span style="color:#A6ACCD;">    value: String!</span></span>
<span class="line"><span style="color:#A6ACCD;">): Location</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><br><h5 id="argument-s" tabindex="-1"><em>Argument(s):</em> <a class="header-anchor" href="#argument-s" aria-hidden="true">#</a></h5><hr><p>This query must be made with the following arguments:</p><ol><li><p>Location Id</p><p><span style="color:darkorange;">locationid</span> : <span style="color:magenta;"><em>ID</em></span> - <span style="color:darkorange;"> the unique identifier of a location </span> (compulsory)</p></li><li><p>Key</p><p><span style="color:darkorange;">id</span> : <span style="color:magenta;"><em>String</em></span> - <span style="color:darkorange;"> the field name of a location object </span> (compulsory)</p></li><li><p>Value</p><p><span style="color:darkorange;">id</span> : <span style="color:magenta;"><em>String | Float | Int</em></span> - <span style="color:darkorange;"> the new value of a field (compulsory). It can either be a string, integer or float </span> (compulsory)</p></li></ol><br><blockquote><p>The key of a mutation query must be in accordance with the Type Definitions and Schema of a LOCATION as described in the section above.</p></blockquote><hr><br><h5 id="response" tabindex="-1"><em>Response:</em> <a class="header-anchor" href="#response" aria-hidden="true">#</a></h5><hr><p>A location with new (updated) details. The response type is an <em>Object</em></p><hr><br><h5 id="example" tabindex="-1"><em>Example:</em> <a class="header-anchor" href="#example" aria-hidden="true">#</a></h5><ul><li>Changing the address of a location</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">FORMER DATA:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;location&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;name&quot;: &quot;Jad Apotheke&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;address&quot;: &quot;Hermannstraße 22, 33813 Oerlinghausen, Deutschland&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;system&quot;: &quot;cida_nova_plus&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;type&quot;: &quot;branch&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;id&quot;: &quot;0a839781-73a3-387e-25eb-54d82627042d&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>In this example, the address of a location will be changed from <strong><em>&quot;Hermannstraße 22, 33813 Oerlinghausen, Deutschland&quot;</em></strong> to <strong><em>&quot;Flutterstraße 23, 32791 Lage, Deutschland&quot;</em></strong>. Therefore, the <strong><em>&quot;key&quot;</em></strong> of the mutation will be <strong><em>&quot;address&quot;</em></strong> and the <strong><em>&quot;value&quot;</em></strong> will be <strong><em>&quot;Flutterstraße 23, 32791 Lage, Deutschland&quot;</em></strong>.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">WRITING THE MUTATION:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mutation {</span></span>
<span class="line"><span style="color:#A6ACCD;">  updateLocation(</span></span>
<span class="line"><span style="color:#A6ACCD;">    locationid: &quot;0a839781-73a3-387e-25eb-54d82627042d&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    key: &quot;address&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    value: &quot;Flutterstraße 23, 32791 Lage, Deutschland&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name</span></span>
<span class="line"><span style="color:#A6ACCD;">    address</span></span>
<span class="line"><span style="color:#A6ACCD;">    system</span></span>
<span class="line"><span style="color:#A6ACCD;">    type</span></span>
<span class="line"><span style="color:#A6ACCD;">    id</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESPONSE (with new data)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;updateLocation&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;name&quot;: &quot;Jad Apotheke&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;address&quot;: &quot;Flutterstraße 23, 32791 Lage, Deutschland&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;system&quot;: &quot;cida_nova_plus&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;type&quot;: &quot;branch&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;id&quot;: &quot;0a839781-73a3-387e-25eb-54d82627042d&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,25),l=[t];function p(c,r,i,u,d,A){return n(),a("div",null,l)}const h=s(o,[["render",p]]);export{y as __pageData,h as default};
