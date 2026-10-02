# hello-langchain-doc

基于 VitePress 的中文 LangChain 学习小册与博客。使用稳定版 VitePress 1.6.4，支持本地全文搜索、明暗主题、章节导航与 Markdown 写作。

文档项目 `hello-langchain-doc` 用于博客和小册；实践代码计划独立放在同级 `hello-langchain` 项目中。

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

- `docs/index.md`：首页。
- `docs/guide/`：按章节组织的小册，初始内容为明确标注的写作提纲。
- `docs/blog/`：学习博客，包含一篇写作模板。
- `docs/.vitepress/config.mts`：站点名称、导航、侧边栏、搜索等配置。
- `docs/.vitepress/theme/style.css`：主题配色。

## 新增章节或文章

1. 在 `docs/guide/` 或 `docs/blog/` 新建 Markdown 文件，例如 `my-first-demo.md`。
2. 在相应的 `index.md` 中添加文章链接。
3. 在 `docs/.vitepress/config.mts` 的 `sidebar` 中添加对应条目。
4. 执行 `npm run docs:build`，检查构建及内部链接。

博客列表目前手动维护，不含自动归档、标签或 RSS。最后更新时间由 Git 提交历史生成，尚未提交的页面不会显示时间。

文档中的代码块会公开到网页，不要写入真实密钥。当前没有安装 LangChain 运行依赖；等选择 Python 或 TypeScript 实践路线后，再添加示例项目。

## 依赖审计记录

初始化时 `npm audit` 报告 3 项开发依赖告警（2 moderate、1 high），来自稳定版 VitePress 的 Vite / esbuild 依赖链，审计未提供自动修复。暂保留稳定版；开发服务仅供本机使用，后续升级时重新审计。
