import{_ as s,c as a,o as n,a as e}from"./app.d637ae10.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"query-task.md"}'),l={name:"query-task.md"},p=e(`<p><strong><em>TASK</em></strong> query will return a single task with selected field(s)</p><br><h5 id="query-structure" tabindex="-1"><em>Query Structure:</em> <a class="header-anchor" href="#query-structure" aria-hidden="true">#</a></h5><hr><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">task(id: ID!): Task</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><br><h5 id="argument-s" tabindex="-1"><em>Argument(s):</em> <a class="header-anchor" href="#argument-s" aria-hidden="true">#</a></h5><hr><p>This query must be made with a <strong><em>Task ID</em></strong> as argument:</p><ol><li><p>Task Id</p><p><span style="color:darkorange;">id</span> : <span style="color:magenta;"><em>ID</em></span> - <span style="color:darkorange;"> the unique identifier of a task </span> (compulsory)</p></li></ol><br><h5 id="response" tabindex="-1"><em>Response:</em> <a class="header-anchor" href="#response" aria-hidden="true">#</a></h5><hr><p>An object containing details of a single task</p><hr><blockquote><p>This query will return all the fields of a TASK, as described in the types section. However, you can return whatever field(s) you choose.</p></blockquote><br><h5 id="query-template" tabindex="-1"><em>Query Template:</em> <a class="header-anchor" href="#query-template" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query task($id: ID!){</span></span>
<span class="line"><span style="color:#A6ACCD;">    task(id:$id){</span></span>
<span class="line"><span style="color:#A6ACCD;">        task_id</span></span>
<span class="line"><span style="color:#A6ACCD;">        task_status</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//Variables</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &quot;id&quot;: &quot;&quot; }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><h5 id="example" tabindex="-1"><em>Example:</em> <a class="header-anchor" href="#example" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query {</span></span>
<span class="line"><span style="color:#A6ACCD;">  task (id: &quot;9c2ec735-e4c6-1b10-0636-9738aba762cf&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    task_id</span></span>
<span class="line"><span style="color:#A6ACCD;">    task_status</span></span>
<span class="line"><span style="color:#A6ACCD;">    task_type</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESPONSE:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;task&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;task_id&quot;: &quot;9c2ec735-e4c6-1b10-0636-9738aba762cf&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;task_status&quot;: &quot;unassigned&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;task_type&quot;: &quot;delivery&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,22),t=[p];function o(r,c,i,u,d,C){return n(),a("div",null,t)}const h=s(l,[["render",o]]);export{y as __pageData,h as default};
