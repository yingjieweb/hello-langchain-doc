import type { DefaultTheme } from 'vitepress'

export const zhTheme: DefaultTheme.Config = {
  nav: [
    { text: '前言', link: '/zh/introduction/' },
    { text: '目录', link: '/zh/catalogue/' },
    { text: '开始阅读', link: '/zh/getting-started/' },
  ],
  sidebar: [
    { text: '前言', link: '/zh/introduction/' },
    { text: '目录', link: '/zh/catalogue/' },
    {
      text: '开始学习',
      items: [{ text: '开始之前', link: '/zh/getting-started/' }],
    },
  ],
  outline: { label: '本页目录', level: [2, 3] },
  docFooter: { prev: '上一篇', next: '下一篇' },
  lastUpdated: { text: '最后更新' },
  darkModeSwitchLabel: '切换主题',
  sidebarMenuLabel: '目录',
  returnToTopLabel: '返回顶部',
  footer: { message: '边学边做，把实践写成自己的知识。' },
  langMenuLabel: '选择语言',
  skipToContentLabel: '跳转到内容',
  lightModeSwitchTitle: '切换到浅色主题',
  darkModeSwitchTitle: '切换到深色主题',
}
