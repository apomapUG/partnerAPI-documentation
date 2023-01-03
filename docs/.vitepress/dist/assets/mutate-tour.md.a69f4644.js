import{_ as s,c as a,o as n,a as e}from"./app.d637ae10.js";const y=JSON.parse('{"title":"Mutate Tour","description":"","frontmatter":{},"headers":[],"relativePath":"mutate-tour.md"}'),o={name:"mutate-tour.md"},t=e(`<h1 id="mutate-tour" tabindex="-1">Mutate Tour <a class="header-anchor" href="#mutate-tour" aria-hidden="true">#</a></h1><p>This query allows users to decide what field of a TOUR object they want to change. However, you can change only one field at a time.</p><br><h5 id="query-structure" tabindex="-1"><em>Query Structure:</em> <a class="header-anchor" href="#query-structure" aria-hidden="true">#</a></h5><hr><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">updateTour(</span></span>
<span class="line"><span style="color:#A6ACCD;">    tourid: ID!</span></span>
<span class="line"><span style="color:#A6ACCD;">    key: String!</span></span>
<span class="line"><span style="color:#A6ACCD;">    value: String!</span></span>
<span class="line"><span style="color:#A6ACCD;">): Tour</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><br><h5 id="argument-s" tabindex="-1"><em>Argument(s):</em> <a class="header-anchor" href="#argument-s" aria-hidden="true">#</a></h5><hr><p>This query must be made with the following arguments:</p><ol><li><p>Tour Id</p><p><span style="color:darkorange;">tourid</span> : <span style="color:magenta;"><em>ID</em></span> - <span style="color:darkorange;"> the unique identifier of a tour </span> (compulsory)</p></li><li><p>Key</p><p><span style="color:darkorange;">id</span> : <span style="color:magenta;"><em>String</em></span> - <span style="color:darkorange;"> the field name of a tour object </span> (compulsory)</p></li><li><p>Value</p><p><span style="color:darkorange;">id</span> : <span style="color:magenta;"><em>String | Float | Int</em></span> - <span style="color:darkorange;"> the new value of a field (compulsory). It can either be a string, integer or float </span> (compulsory)</p></li></ol><br><blockquote><p>The key of a mutation query must be in accordance with the Type Definitions and Schema of a TOUR as described in the section above.</p></blockquote><hr><br><h5 id="response" tabindex="-1"><em>Response:</em> <a class="header-anchor" href="#response" aria-hidden="true">#</a></h5><hr><p>A tour with new (updated) details. The response type is an <em>Object</em></p><hr><br><h5 id="example" tabindex="-1"><em>Example:</em> <a class="header-anchor" href="#example" aria-hidden="true">#</a></h5><ul><li>Changing the vehicle type of a tour</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">FORMER DATA:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;tour&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;vehicle&quot;: &quot;car&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;status&quot;: &quot;finished&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;distance&quot;: 3854.4610000000002,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;id&quot;: &quot;14bb75b5-97bf-4143-8a21-ad512565aecb&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>In this example, the vehicle of a tour will be changed from <strong><em>&quot;car&quot;</em></strong> to <strong><em>&quot;bike&quot;</em></strong>. Therefore, the <strong><em>&quot;key&quot;</em></strong> of the mutation will be <strong><em>&quot;vehicle&quot;</em></strong> and the <strong><em>&quot;value&quot;</em></strong> will be <strong><em>&quot;bike&quot;</em></strong>.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">WRITING THE MUTATION:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mutation {</span></span>
<span class="line"><span style="color:#A6ACCD;">  updateTour(</span></span>
<span class="line"><span style="color:#A6ACCD;">    tourid: &quot;14bb75b5-97bf-4143-8a21-ad512565aecb&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    key: &quot;vehicle&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    value: &quot;bike&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    vehicle</span></span>
<span class="line"><span style="color:#A6ACCD;">    status</span></span>
<span class="line"><span style="color:#A6ACCD;">    distance</span></span>
<span class="line"><span style="color:#A6ACCD;">    id</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESPONSE (with new data)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;updateTour&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;vehicle&quot;: &quot;bike&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;status&quot;: &quot;finished&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;distance&quot;: 3854.4610000000002,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;id&quot;: &quot;14bb75b5-97bf-4143-8a21-ad512565aecb&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,25),l=[t];function p(r,c,i,u,C,A){return n(),a("div",null,l)}const h=s(o,[["render",p]]);export{y as __pageData,h as default};
