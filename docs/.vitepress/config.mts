import { defineConfig } from 'vitepress'
import { enTheme } from './en.mts'
import { zhTheme } from './zh.mts'

export default defineConfig({
  title: 'hello-langchain-doc',
  lastUpdated: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'A growing, practical LangChain tutorial for beginners.',
      themeConfig: enTheme,
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      description: '一套从初学者视角出发、持续更新的 LangChain 入门与实践教程',
      themeConfig: zhTheme,
    },
  },
  themeConfig: {
    i18nRouting: true,
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
              modal: {
                displayDetails: '显示详细列表',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有找到相关内容',
                resetButtonTitle: '清除搜索',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
              },
            },
          },
        },
      },
    },
  },
})
