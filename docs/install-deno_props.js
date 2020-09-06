import Ga from '/_ga.js';
import projectConfig from '/pagic.config.js';
export default {
    'ga': React.createElement(Ga, { id: "UA-123999279-3" }),
    'sidebar': [
        {
            "text": "Deno 入门教程",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "text": "安装 Deno",
            "link": "docs/install-deno.html",
            "pagePath": "docs/install-deno.md"
        },
        {
            "text": "配置 Deno 开发环境",
            "link": "docs/setup-environment.html",
            "pagePath": "docs/setup-environment.md"
        }
    ],
    config: { "root": "/", ...projectConfig },
    'pagePath': "docs/install-deno.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/install-deno.html",
    'title': "安装 Deno",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>安装 Deno</h1>\n<p>Deno 目前可以安装在 Windows、Linux、macOS 系统上，只支持 64 位系统，暂时不支持 32 位。</p>\n<p>由于 Deno 只有 1 个可执行文件，没有任何第三方依赖，因此安装 Deno 非常简单。主流安装方式有：</p>\n<h2 id="%E4%BD%BF%E7%94%A8%E5%AE%89%E8%A3%85%E5%99%A8">使用安装器<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E5%AE%89%E8%A3%85%E5%99%A8">§</a></h2>\n<p>官方提供了 <a href="https://github.com/denoland/deno_install">denoland/deno_install</a> 安装脚本，可以通过运行一个命令完成 Deno 的下载和安装：</p>\n<p>macOS 和 Linux 系统上使用 shell:</p>\n<pre class="language-shell"><code class="language-shell"><span class="token function">curl</span> -fsSL <a class="token url-link" href="https://deno.land/x/install/install.sh">https://deno.land/x/install/install.sh</a> <span class="token operator">|</span> <span class="token function">sh</span>\n</code></pre>\n<p>Windows 系统上使用 PowerShell:</p>\n<pre class="language-autoit"><code class="language-autoit">iwr https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>deno<span class="token punctuation">.</span>land<span class="token operator">/</span>x<span class="token operator">/</span>install<span class="token operator">/</span>install<span class="token punctuation">.</span>ps1 <span class="token operator">-</span>useb | iex\n</code></pre>\n<p><strong>⚠️注意</strong>：deno_install 会从 GitHub Release 下载 Deno 可执行文件，由于 GitHub 文件托管在 aws 导致国内访问不是很顺畅。</p>\n<p>国内用户推荐使用 <a href="https://github.com/denocn/deno_install">denocn/deno_install</a> 提供的安装器来安装。用法和官方一样。</p>\n<p>macOS 和 Linux 系统上使用 shell:</p>\n<pre class="language-shell"><code class="language-shell"><span class="token function">curl</span> -fsSL <a class="token url-link" href="https://x.deno.js.cn/install.sh">https://x.deno.js.cn/install.sh</a> <span class="token operator">|</span> <span class="token function">sh</span>\n</code></pre>\n<p>Windows 系统上使用 PowerShell:</p>\n<pre class="language-autoit"><code class="language-autoit">iwr https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>x<span class="token punctuation">.</span>deno<span class="token punctuation">.</span>js<span class="token punctuation">.</span>cn<span class="token operator">/</span>install<span class="token punctuation">.</span>ps1 <span class="token operator">-</span>useb | iex\n</code></pre>\n<h2 id="%E4%BD%BF%E7%94%A8%E5%8C%85%E7%AE%A1%E7%90%86%E5%99%A8">使用包管理器<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E5%8C%85%E7%AE%A1%E7%90%86%E5%99%A8">§</a></h2>\n<p>你还可以使用如下包管理器来安装。</p>\n<p>使用 <a href="https://scoop.sh">Scoop</a>:</p>\n<pre class="language-powershell"><code class="language-powershell">scoop install deno\n</code></pre>\n<p>使用 <a href="https://formulae.brew.sh/formula/deno">Homebrew</a>:</p>\n<pre class="language-autoit"><code class="language-autoit">brew install deno\n</code></pre>\n<p>使用 <a href="https://chocolatey.org/packages/deno">Chocolatey</a>:</p>\n<pre class="language-powershell"><code class="language-powershell">choco install deno\n</code></pre>\n<p><strong>💡提示</strong>：如果你经常使用某个包管理器，你应该知道如何配置一个更快的国内源来提供更稳定的安装体验。</p>\n<h2 id="%E4%BD%BF%E7%94%A8%E5%A4%9A%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7">使用多版本管理工具<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E5%A4%9A%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7">§</a></h2>\n<p><strong>使用 <a href="https://asdf-vm.com">asdf</a> 和 <a href="https://github.com/asdf-community/asdf-deno">asdf-deno</a>:</strong></p>\n<pre class="language-autoit"><code class="language-autoit">asdf plugin<span class="token operator">-</span>add deno https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>asdf<span class="token operator">-</span>community<span class="token operator">/</span>asdf<span class="token operator">-</span>deno<span class="token punctuation">.</span>git\n\nasdf install deno <span class="token number">0.38</span><span class="token punctuation">.</span><span class="token number">0</span>\n\n# Activate globally <span class="token keyword">with</span><span class="token punctuation">:</span>\nasdf <span class="token keyword">global</span> deno <span class="token number">0.38</span><span class="token punctuation">.</span><span class="token number">0</span>\n\n# Activate locally <span class="token keyword">in</span> the current folder <span class="token keyword">with</span><span class="token punctuation">:</span>\nasdf <span class="token keyword">local</span> deno <span class="token number">0.38</span><span class="token punctuation">.</span><span class="token number">0</span>\n</code></pre>\n<p><strong>使用 <a href="https://github.com/lukesampson/scoop/wiki/Switching-Ruby-And-Python-Versions">Scoop</a>:</strong></p>\n<pre class="language-autoit"><code class="language-autoit"># 安装某个特定版本的 Deno：\nscoop install deno<span class="token variable">@0</span><span class="token punctuation">.</span><span class="token number">22.0</span>\n\n# 切换到 v0<span class="token punctuation">.</span><span class="token number">22.0</span>\nscoop reset deno<span class="token variable">@0</span><span class="token punctuation">.</span><span class="token number">22.0</span>\n\n#切换到最新版\nscoop reset deno\n</code></pre>\n<h2 id="%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6">直接下载二进制文件<a class="anchor" href="#%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6">§</a></h2>\n<p>你甚至可以手动下载 Deno 可执行文件然后放在电脑的任何目录下。将此目录配置到 <code>PATH</code> 环境变量，输入 <code>deno --version</code> 来验证是否安装成功。</p>\n<p>你还可以把 Deno 可执行文件放到你的项目里面，这样就把当前 Deno 版本和项目绑定在了一起。如此一来使得项目分发变得简单，当别人拿到你的项目时，即使他的电脑上没有安装 Deno 也可以运行你的项目，只需要运行：</p>\n<pre class="language-shell"><code class="language-shell">./deno mod.ts\n</code></pre>\n<h2 id="%E6%B5%8B%E8%AF%95%E5%AE%89%E8%A3%85%E6%98%AF%E5%90%A6%E6%88%90%E5%8A%9F">测试安装是否成功<a class="anchor" href="#%E6%B5%8B%E8%AF%95%E5%AE%89%E8%A3%85%E6%98%AF%E5%90%A6%E6%88%90%E5%8A%9F">§</a></h2>\n<p>检测 Deno 是否安装成功，可以通过执行 <code>deno --version</code> 验证。</p>\n<h2 id="%E5%8D%87%E7%BA%A7%E7%89%88%E6%9C%AC">升级版本<a class="anchor" href="#%E5%8D%87%E7%BA%A7%E7%89%88%E6%9C%AC">§</a></h2>\n<p>要升级已安装的 deno 版本，执行：</p>\n<pre class="language-shell"><code class="language-shell">deno upgrade\n</code></pre>\n<p>该命令会从 <a href="https://github.com/denoland/deno/releases">https://github.com/denoland/deno/releases</a> 获取最新的版本，解压并替换当前的可执行文件。\n也可以使用以下命令升级安装特定的版本：</p>\n<pre class="language-shell"><code class="language-shell">deno upgrade --version <span class="token number">1.0</span>.1\n</code></pre>\n<h2 id="%E9%99%84%E5%8A%A0%E8%AF%B4%E6%98%8E">附加说明<a class="anchor" href="#%E9%99%84%E5%8A%A0%E8%AF%B4%E6%98%8E">§</a></h2>\n<p>当你使用安装器成功把 Deno 安装到电脑上是，大部分情况安装脚本已经自动为你配置了 <code>DENO_INSTALL</code> 环境变量，指向 Deno 的安装路径。当你再一次执行安装脚本时，新的文件总会覆盖原有的。如果你改变了 <code>DENO_INSTALL</code> 的值，再次安装时会使用新的位置。</p>\n<p>在某些情况 <code>DENO_INSTALL</code> 环境变量无法自动添加到系统，此时安装完成后你会收到提示，需要你手动设置 <code>DENO_INSTALL</code> 变量，并把 Deno 执行路径手动添加到 <code>PATH</code>，提示内容大概为：</p>\n<pre class="language-autoit"><code class="language-autoit">您需要手动将 Deno 目录添加到 <span class="token variable">$HOME</span><span class="token operator">/</span><span class="token punctuation">.</span>bash_profile <span class="token punctuation">(</span>或者其它类似目录<span class="token punctuation">)</span>\n  export DENO_INSTALL<span class="token operator">=</span><span class="token string">"/Users/justjavac/.deno"</span>\n  export PATH<span class="token operator">=</span><span class="token string">"$DENO_INSTALL/bin:$PATH"</span>\n运行 <span class="token string">\'/Users/justjavac/.deno/bin/deno --help\'</span> 查看 Deno 帮助信息\n</code></pre>\n<hr>\n<p>下一章：<a href="./setup-environment.html">配置 Deno 开发环境</a></p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E4%BD%BF%E7%94%A8%E5%AE%89%E8%A3%85%E5%99%A8">使用安装器</a></li><li><a href="#%E4%BD%BF%E7%94%A8%E5%8C%85%E7%AE%A1%E7%90%86%E5%99%A8">使用包管理器</a></li><li><a href="#%E4%BD%BF%E7%94%A8%E5%A4%9A%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7">使用多版本管理工具</a></li><li><a href="#%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6">直接下载二进制文件</a></li><li><a href="#%E6%B5%8B%E8%AF%95%E5%AE%89%E8%A3%85%E6%98%AF%E5%90%A6%E6%88%90%E5%8A%9F">测试安装是否成功</a></li><li><a href="#%E5%8D%87%E7%BA%A7%E7%89%88%E6%9C%AC">升级版本</a></li><li><a href="#%E9%99%84%E5%8A%A0%E8%AF%B4%E6%98%8E">附加说明</a></li></ol></nav>'
        } })
};
