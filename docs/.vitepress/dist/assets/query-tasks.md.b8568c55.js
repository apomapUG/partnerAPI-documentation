import{_ as s,c as n,o as a,a as l}from"./app.d637ae10.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"query-tasks.md"}'),p={name:"query-tasks.md"},e=l(`<p><strong><em>TASKS</em></strong> query will return a collection of tasks (i.e. multiple tasks)</p><br><h5 id="query-structure" tabindex="-1"><em>Query Structure:</em> <a class="header-anchor" href="#query-structure" aria-hidden="true">#</a></h5><hr><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">tasks(ownerid: ID, status: String): [Task]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><br><h5 id="argument-s" tabindex="-1"><em>Argument(s):</em> <a class="header-anchor" href="#argument-s" aria-hidden="true">#</a></h5><hr><p>This query can be made with or without the following arguments:</p><ol><li><p>Owner Id</p><p><span style="color:darkorange;">ownerid</span> : <span style="color:magenta;"><em>ID</em></span> - <span style="color:darkorange;"> the unique identifier of an apomap account owner </span> (optional)</p></li><li><p>Status</p><p><span style="color:darkorange;">status</span> : <span style="color:magenta;">String</span> - <span style="color:darkorange;"> the status of a task </span> (optional)</p></li></ol><br><h5 id="response" tabindex="-1"><em>Response:</em> <a class="header-anchor" href="#response" aria-hidden="true">#</a></h5><hr><p>An array (collection) of tasks</p><hr><blockquote><p>This query will return all the fields of a TASK, as described in the types section. However, you can return whatever field(s) you choose.</p></blockquote><br><h5 id="query-template" tabindex="-1"><em>Query Template:</em> <a class="header-anchor" href="#query-template" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query tasks($status: String){</span></span>
<span class="line"><span style="color:#A6ACCD;">    tasks(status:$status){</span></span>
<span class="line"><span style="color:#A6ACCD;">    task_type</span></span>
<span class="line"><span style="color:#A6ACCD;">    task_status</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//Variables</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{&quot;ownerid&quot;: &quot;&quot;} or {&quot;status&quot;: &quot;&quot;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><h5 id="examples" tabindex="-1"><em>Examples:</em> <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h5><ul><li>A query without any argument</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query {</span></span>
<span class="line"><span style="color:#A6ACCD;">  tasks {</span></span>
<span class="line"><span style="color:#A6ACCD;">    task_type</span></span>
<span class="line"><span style="color:#A6ACCD;">    task_status</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESPONSE:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;tasks&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;task_type&quot;: &quot;delivery&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;task_status&quot;: &quot;unassigned&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;task_type&quot;: &quot;delivery&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;task_status&quot;: &quot;unassigned&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;task_type&quot;: &quot;pickup&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;task_status&quot;: &quot;unassigned&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;task_type&quot;: &quot;delivery&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;task_status&quot;: &quot;unassigned&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;task_type&quot;: &quot;delivery&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;task_status&quot;: &quot;unassigned&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;task_type&quot;: &quot;delivery&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">                &quot;task_status&quot;: &quot;declined&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>A query with &quot;Owner Id&quot; as an argument</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query {</span></span>
<span class="line"><span style="color:#A6ACCD;">  tasks (ownerid: &quot;dkTu3J6YTGW4gUqI2t0GnNrBLUz2&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    task_type</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESPONSE:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;tasks&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_type&quot;: &quot;delivery&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_type&quot;: &quot;delivery&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_type&quot;: &quot;delivery&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_type&quot;: &quot;delivery&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_type&quot;: &quot;pickup&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_type&quot;: &quot;delivery&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_type&quot;: &quot;delivery&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_type&quot;: &quot;delivery&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_type&quot;: &quot;pickup&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_type&quot;: &quot;delivery&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_type&quot;: &quot;delivery&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_type&quot;: &quot;delivery&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_type&quot;: &quot;delivery&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>A query with &quot;Status&quot; as an argument</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">query {</span></span>
<span class="line"><span style="color:#A6ACCD;">  tasks (status: &quot;declined&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    task_status</span></span>
<span class="line"><span style="color:#A6ACCD;">    task_type</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RESPONSE:</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;tasks&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_status&quot;: &quot;declined&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;task_type&quot;: &quot;delivery&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,27),o=[e];function t(c,r,C,A,i,u){return a(),n("div",null,o)}const D=s(p,[["render",t]]);export{q as __pageData,D as default};
