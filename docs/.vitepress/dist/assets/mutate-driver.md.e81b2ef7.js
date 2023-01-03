import{_ as s,c as a,o as n,a as e}from"./app.d637ae10.js";const m=JSON.parse('{"title":"Mutate Driver","description":"","frontmatter":{},"headers":[],"relativePath":"mutate-driver.md"}'),l={name:"mutate-driver.md"},t=e(`<h1 id="mutate-driver" tabindex="-1">Mutate Driver <a class="header-anchor" href="#mutate-driver" aria-hidden="true">#</a></h1><p>This query allows users to decide what field of a DRIVER object they want to change. However, you can change only one field at a time.</p><br><h5 id="query-structure" tabindex="-1"><em>Query Structure:</em> <a class="header-anchor" href="#query-structure" aria-hidden="true">#</a></h5><hr><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">updateDriver(</span></span>
<span class="line"><span style="color:#A6ACCD;">    driverid: ID!</span></span>
<span class="line"><span style="color:#A6ACCD;">    key: String!</span></span>
<span class="line"><span style="color:#A6ACCD;">    value: String!</span></span>
<span class="line"><span style="color:#A6ACCD;">): Driver</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><br><h5 id="argument-s" tabindex="-1"><em>Argument(s):</em> <a class="header-anchor" href="#argument-s" aria-hidden="true">#</a></h5><hr><p>This query must be made with the following arguments:</p><ol><li><p>Driver Id</p><p><span style="color:darkorange;">driverid</span> : <span style="color:magenta;"><em>ID</em></span> - <span style="color:darkorange;"> the unique identifier of a driver </span> (compulsory)</p></li><li><p>Key</p><p><span style="color:darkorange;">id</span> : <span style="color:magenta;"><em>String</em></span> - <span style="color:darkorange;"> the field name of a driver object </span> (compulsory)</p></li><li><p>Value</p><p><span style="color:darkorange;">id</span> : <span style="color:magenta;"><em>String | Float | Int</em></span> - <span style="color:darkorange;"> the new value of a field (compulsory). It can either be a string, integer or float </span> (compulsory)</p></li></ol><br><blockquote><p>The key of a mutation query must be in accordance with the Type Definitions and Schema of a DRIVER as described in the section above.</p></blockquote><hr><br><h5 id="response" tabindex="-1"><em>Response:</em> <a class="header-anchor" href="#response" aria-hidden="true">#</a></h5><hr><p>A driver with new (updated) details. The response type is an <em>Object</em></p><hr><br><h5 id="example" tabindex="-1"><em>Example:</em> <a class="header-anchor" href="#example" aria-hidden="true">#</a></h5><ul><li>Changing the last name of a driver</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">FORMER DATA:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;driver&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;firstName&quot;: &quot;Max&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;lastName&quot;: &quot;Munstermann&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;id&quot;: &quot;8908019a-0eeb-eefa-d0ca-f4c94074c70a&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>In this example, the last name of a driver will be changed from <strong><em>&quot;Munstermann&quot;</em></strong> to <strong><em>&quot;Falke&quot;</em></strong>. Therefore, the <strong><em>&quot;key&quot;</em></strong> of the mutation will be <strong><em>&quot;lastName&quot;</em></strong> and the <strong><em>&quot;value&quot;</em></strong> will be <strong><em>&quot;Falke&quot;</em></strong>.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">WRITING THE MUTATION:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mutation {</span></span>
<span class="line"><span style="color:#A6ACCD;">  updateDriver(</span></span>
<span class="line"><span style="color:#A6ACCD;">    driverid: &quot;8908019a-0eeb-eefa-d0ca-f4c94074c70a&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    key: &quot;lastName&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    value: &quot;Falke&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    firstName</span></span>
<span class="line"><span style="color:#A6ACCD;">    lastName</span></span>
<span class="line"><span style="color:#A6ACCD;">    id</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESPONSE (with new data)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;updateDriver&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;firstName&quot;: &quot;Max&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;lastName&quot;: &quot;Falke&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;id&quot;: &quot;8908019a-0eeb-eefa-d0ca-f4c94074c70a&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,25),o=[t];function p(r,c,i,u,d,C){return n(),a("div",null,o)}const y=s(l,[["render",p]]);export{m as __pageData,y as default};
