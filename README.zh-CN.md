# hello-langchain-doc

[English](./README.md) | 简体中文

基于 VitePress、从初学者视角出发的 LangChain 入门与实践教程，支持中英文，默认语言为英文。使用稳定版 VitePress 1.6.4，支持本地全文搜索、明暗主题、章节导航与 Markdown 写作。

文档项目 `hello-langchain-doc` 用于教程文章；实践代码计划独立放在同级 `hello-langchain` 项目中。

## 本地运行

推荐 Node.js 22 或更高版本，使用 npm：

```bash
npm install
npm run docs:dev
```

打开终端输出的本地地址。

## 构建与预览

```bash
npm run docs:build
npm run docs:preview
```

静态输出位于 `docs/.vitepress/dist`，可以部署到静态托管服务。如果部署在子路径（例如 GitHub Pages 的 `/hello-langchain-doc/`），需要在配置中设置对应的 `base`。

## 内容目录

```text
docs/
├── index.md                 # 英文首页（默认）
├── introduction/index.md    # 前言：面向谁、如何阅读
├── catalogue/index.md       # 阅读顺序与待写规划
├── getting-started/index.md # 开始之前的准备说明
├── zh/                      # 相同路径结构的中文页面
└── .vitepress/              # 共用配置、双语导航与主题
```

后续有基础文章时再添加 `fundamentals/`；完整项目教程放在 `practice/<project>/`。共用图片可放在 `docs/public/images/`，不需要提前创建空目录。

## 新增与发布章节

整个站点是一套连续教程。每篇文章讲清一个主题，也可以独立发布到博客平台；站内不另设博客列表或维护重复文章。

1. 使用简短英文主题作为文件名，不加日期和章节编号，例如 `getting-started/first-call.md`。分组入口使用 `index.md`。
2. 添加路径一致的中英文页面，例如 `docs/getting-started/first-call.md` 与 `docs/zh/getting-started/first-call.md`。可以先用熟悉的语言起草，加入导航前准备好两个版本。
3. 更新双语目录页，以及 `docs/.vitepress/en.mts`、`zh.mts` 中手动排序的侧边栏。待写主题仅在目录中用文字列出，不链接到空章节。
4. 正文优先使用相对链接；中文首页和导航链接以 `/zh/` 开头。共用图片使用 `/images/example.png` 引用。
5. 执行 `npm run docs:build`，然后在预览中检查语言切换、链接与搜索。

文章结构随主题决定：讲清问题、逐步实践、展示如何验证。涉及代码时说明运行环境与依赖版本。完整示例放在 `hello-langchain`，需要保证复现时链接到具体提交或版本。待代码仓库可用后，再增加示例代码导航入口。

语言切换保留当前页面路径，翻译手动维护，搜索按语言独立索引。默认语言仍为英文。最后更新时间来自 Git 提交历史。

目前已有前言、目录与准备说明。模型调用、知识库问答、工具与 Agent 等仍属于待写规划。本站未安装 LangChain 运行依赖，也尚未发布可运行的 LangChain 示例。文档代码块中不要包含真实凭据。

## 依赖审计记录

初始化时 `npm audit` 报告 3 项开发依赖告警（2 moderate、1 high），来自稳定版 VitePress 的 Vite / esbuild 依赖链，审计未提供自动修复。暂保留稳定版；开发服务仅供本机使用，后续升级时重新审计。
