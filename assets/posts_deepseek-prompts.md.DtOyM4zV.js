import{_ as s,c as n,o as e,ag as p}from"./chunks/framework.CP8pidWN.js";const u=JSON.parse('{"title":"DeepSeek 提示词使用指南","description":"","frontmatter":{},"headers":[],"relativePath":"posts/deepseek-prompts.md","filePath":"posts/deepseek-prompts.md"}'),l={name:"posts/deepseek-prompts.md"};function i(t,a,o,c,h,d){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="deepseek-提示词使用指南" tabindex="-1">DeepSeek 提示词使用指南 <a class="header-anchor" href="#deepseek-提示词使用指南" aria-label="Permalink to &quot;DeepSeek 提示词使用指南&quot;">​</a></h1><p>DeepSeek 是一个强大的开源大语言模型，要充分发挥它的能力，合适的提示词（Prompt）设计至关重要。本文将分享一些实用的提示词技巧。</p><h2 id="基础提示词模式" tabindex="-1">基础提示词模式 <a class="header-anchor" href="#基础提示词模式" aria-label="Permalink to &quot;基础提示词模式&quot;">​</a></h2><h3 id="_1-角色设定" tabindex="-1">1. 角色设定 <a class="header-anchor" href="#_1-角色设定" aria-label="Permalink to &quot;1. 角色设定&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你是一位专业的[职业]，请帮我[具体任务]。</span></span></code></pre></div><p>这种模式可以让模型更好地理解上下文，提供更专业的回答。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你是一位资深的前端工程师，请帮我优化这段 React 代码。</span></span></code></pre></div><h3 id="_2-任务描述" tabindex="-1">2. 任务描述 <a class="header-anchor" href="#_2-任务描述" aria-label="Permalink to &quot;2. 任务描述&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请帮我完成以下任务：</span></span>
<span class="line"><span>1. [具体要求1]</span></span>
<span class="line"><span>2. [具体要求2]</span></span>
<span class="line"><span>3. [具体要求3]</span></span>
<span class="line"><span>输出格式：[期望的格式说明]</span></span></code></pre></div><h2 id="高级提示词技巧" tabindex="-1">高级提示词技巧 <a class="header-anchor" href="#高级提示词技巧" aria-label="Permalink to &quot;高级提示词技巧&quot;">​</a></h2><h3 id="_1-思维链-chain-of-thought" tabindex="-1">1. 思维链（Chain of Thought） <a class="header-anchor" href="#_1-思维链-chain-of-thought" aria-label="Permalink to &quot;1. 思维链（Chain of Thought）&quot;">​</a></h3><p>通过引导模型一步步思考，获得更准确的结果：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>让我们一步步思考：</span></span>
<span class="line"><span>1. 首先，我们需要理解问题的核心是什么</span></span>
<span class="line"><span>2. 然后，分析可能的解决方案</span></span>
<span class="line"><span>3. 最后，选择最优方案并实施</span></span></code></pre></div><h3 id="_2-上下文增强" tabindex="-1">2. 上下文增强 <a class="header-anchor" href="#_2-上下文增强" aria-label="Permalink to &quot;2. 上下文增强&quot;">​</a></h3><p>提供足够的背景信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>背景：[项目背景]</span></span>
<span class="line"><span>目标：[具体目标]</span></span>
<span class="line"><span>限制条件：[限制条件]</span></span>
<span class="line"><span>请基于以上信息，[具体要求]</span></span></code></pre></div><h3 id="_3-格式控制" tabindex="-1">3. 格式控制 <a class="header-anchor" href="#_3-格式控制" aria-label="Permalink to &quot;3. 格式控制&quot;">​</a></h3><p>明确指定输出格式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请使用以下格式回答：</span></span>
<span class="line"><span>标题：</span></span>
<span class="line"><span>概述：</span></span>
<span class="line"><span>具体步骤：</span></span>
<span class="line"><span>- 步骤1</span></span>
<span class="line"><span>- 步骤2</span></span>
<span class="line"><span>注意事项：</span></span></code></pre></div><h2 id="实战示例" tabindex="-1">实战示例 <a class="header-anchor" href="#实战示例" aria-label="Permalink to &quot;实战示例&quot;">​</a></h2><h3 id="_1-代码优化" tabindex="-1">1. 代码优化 <a class="header-anchor" href="#_1-代码优化" aria-label="Permalink to &quot;1. 代码优化&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>你是一位资深的软件工程师，请帮我优化以下代码：</span></span>
<span class="line"><span>[代码块]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>1. 提高性能</span></span>
<span class="line"><span>2. 增加可读性</span></span>
<span class="line"><span>3. 遵循最佳实践</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请提供：</span></span>
<span class="line"><span>1. 优化后的代码</span></span>
<span class="line"><span>2. 优化说明</span></span>
<span class="line"><span>3. 性能提升分析</span></span></code></pre></div><h3 id="_2-文章创作" tabindex="-1">2. 文章创作 <a class="header-anchor" href="#_2-文章创作" aria-label="Permalink to &quot;2. 文章创作&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请以专业技术作者的身份，创作一篇关于[主题]的文章。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>1. 文章结构清晰</span></span>
<span class="line"><span>2. 包含实际示例</span></span>
<span class="line"><span>3. 适合技术读者阅读</span></span>
<span class="line"><span></span></span>
<span class="line"><span>文章大纲：</span></span>
<span class="line"><span>1. 引言</span></span>
<span class="line"><span>2. 核心概念</span></span>
<span class="line"><span>3. 实践应用</span></span>
<span class="line"><span>4. 最佳实践</span></span>
<span class="line"><span>5. 总结</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li><strong>明确性</strong>：提示词要尽可能具体和明确</li><li><strong>结构化</strong>：使用清晰的结构和格式</li><li><strong>上下文</strong>：提供足够的背景信息</li><li><strong>限制条件</strong>：明确说明任何限制或要求</li><li><strong>迭代优化</strong>：根据返回结果调整提示词</li></ol><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h3 id="_1-提示词过于模糊" tabindex="-1">1. 提示词过于模糊 <a class="header-anchor" href="#_1-提示词过于模糊" aria-label="Permalink to &quot;1. 提示词过于模糊&quot;">​</a></h3><p>错误示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>帮我写代码</span></span></code></pre></div><p>正确示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请使用 Python 编写一个函数，实现冒泡排序算法。要求：</span></span>
<span class="line"><span>1. 包含详细的注释</span></span>
<span class="line"><span>2. 处理边界情况</span></span>
<span class="line"><span>3. 遵循 PEP8 规范</span></span></code></pre></div><h3 id="_2-缺少上下文" tabindex="-1">2. 缺少上下文 <a class="header-anchor" href="#_2-缺少上下文" aria-label="Permalink to &quot;2. 缺少上下文&quot;">​</a></h3><p>错误示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>这段代码怎么优化？</span></span></code></pre></div><p>正确示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>这是一个 Node.js 后端项目中的用户认证模块代码。</span></span>
<span class="line"><span>当前遇到的问题是：并发请求时性能下降。</span></span>
<span class="line"><span>项目要求：需要保持代码可维护性的同时提升性能。</span></span>
<span class="line"><span>请帮我优化以下代码：</span></span>
<span class="line"><span>[代码块]</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>编写好的提示词是充分利用 DeepSeek 模型能力的关键。通过合理的角色设定、清晰的任务描述、结构化的格式要求，以及提供充分的上下文信息，我们可以获得更好的输出结果。在实践中，要注意不断调整和优化提示词，以获得最佳效果。</p><p><em>发布于 2024年3月15日</em></p>`,40)]))}const b=s(l,[["render",i]]);export{u as __pageData,b as default};
