import{_ as s,c as a,o as n,a as e}from"./app.d637ae10.js";const y=JSON.parse('{"title":"Mutate Tour","description":"","frontmatter":{},"headers":[],"relativePath":"mutate-task.md"}'),t={name:"mutate-task.md"},o=e(`<h1 id="mutate-tour" tabindex="-1">Mutate Tour <a class="header-anchor" href="#mutate-tour" aria-hidden="true">#</a></h1><p>This query allows users to decide what field of a TASK object they want to change. However, you can change only one field at a time.</p><br><h5 id="query-structure" tabindex="-1"><em>Query Structure:</em> <a class="header-anchor" href="#query-structure" aria-hidden="true">#</a></h5><hr><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">updateTask(</span></span>
<span class="line"><span style="color:#A6ACCD;">    taskid: ID!</span></span>
<span class="line"><span style="color:#A6ACCD;">    key: String!</span></span>
<span class="line"><span style="color:#A6ACCD;">    value: String!</span></span>
<span class="line"><span style="color:#A6ACCD;">): Task</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><br><h5 id="argument-s" tabindex="-1"><em>Argument(s):</em> <a class="header-anchor" href="#argument-s" aria-hidden="true">#</a></h5><hr><p>This query must be made with the following arguments:</p><ol><li><p>Task Id</p><p><span style="color:darkorange;">taskid</span> : <span style="color:magenta;"><em>ID</em></span> - <span style="color:darkorange;"> the unique identifier of a task </span> (compulsory)</p></li><li><p>Key</p><p><span style="color:darkorange;">id</span> : <span style="color:magenta;"><em>String</em></span> - <span style="color:darkorange;"> the field name of a task object </span> (compulsory)</p></li><li><p>Value</p><p><span style="color:darkorange;">id</span> : <span style="color:magenta;"><em>String | Float | Int</em></span> - <span style="color:darkorange;"> the new value of a field (compulsory). It can either be a string, integer or float </span> (compulsory)</p></li></ol><br><blockquote><p>The key of a mutation query must be in accordance with the Type Definitions and Schema of a TASK as described in the section above.</p></blockquote><hr><br><h5 id="response" tabindex="-1"><em>Response:</em> <a class="header-anchor" href="#response" aria-hidden="true">#</a></h5><hr><p>A task with new (updated) details. The response type is an <em>Object</em></p><hr><br><h5 id="example" tabindex="-1"><em>Example:</em> <a class="header-anchor" href="#example" aria-hidden="true">#</a></h5><ul><li>Changing the status of a task</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">FORMER DATA:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;task&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;task_type&quot;: &quot;delivery&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;task_status&quot;: &quot;unassigned&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;task_id&quot;: &quot;100ef5ea-19bf-e4b5-3609-4ee8ab999d11&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>In this example, the status of a task will be changed from <strong><em>&quot;unassigned&quot;</em></strong> to <strong><em>&quot;assigned&quot;</em></strong>. Therefore, the <strong><em>&quot;key&quot;</em></strong> of the mutation will be <strong><em>&quot;task_status&quot;</em></strong> and the <strong><em>&quot;value&quot;</em></strong> will be <strong><em>&quot;assigned&quot;</em></strong>.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">WRITING THE MUTATION:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mutation {</span></span>
<span class="line"><span style="color:#A6ACCD;">  updateTask(</span></span>
<span class="line"><span style="color:#A6ACCD;">    taskid: &quot;100ef5ea-19bf-e4b5-3609-4ee8ab999d11&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    key: &quot;task_status&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    value: &quot;assigned&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    task_type</span></span>
<span class="line"><span style="color:#A6ACCD;">    task_status</span></span>
<span class="line"><span style="color:#A6ACCD;">    task_id</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESPONSE (with new data)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;updateTask&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;task_type&quot;: &quot;delivery&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;task_status&quot;: &quot;assigned&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;task_id&quot;: &quot;100ef5ea-19bf-e4b5-3609-4ee8ab999d11&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,25),l=[o];function p(r,c,i,u,d,A){return n(),a("div",null,l)}const h=s(t,[["render",p]]);export{y as __pageData,h as default};
