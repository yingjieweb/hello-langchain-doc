import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'hello-langchain-doc',
  description: '一本边学边写的 LangChain 实践小册与学习博客',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学习小册', link: '/guide/' },
      { text: '博客', link: '/blog/' },
    ],
    sidebar: {
      '/guide/': [{
        text: 'LangChain 学习小册',
        items: [
          { text: '前言与学习路线', link: '/guide/' },
          { text: '01 · 开始之前', link: '/guide/getting-started' },
          { text: '02 · 第一个模型调用', link: '/guide/first-call' },
          { text: '03 · 构建知识库问答', link: '/guide/rag' },
          { text: '04 · 工具与 Agent', link: '/guide/agents' },
        ],
      }],
      '/blog/': [{
        text: '学习博客',
        items: [
          { text: '全部文章', link: '/blog/' },
          { text: '学习记录：从这里开始', link: '/blog/learning-log' },
        ],
      }],
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '没有找到相关内容',
                resetButtonTitle: '清除搜索',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
              },
            },
          },
        },
      },
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新' },
    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    footer: { message: '边学边做，把实践写成自己的知识。' },
  },
})
