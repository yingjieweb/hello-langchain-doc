import type { DefaultTheme } from 'vitepress'

export const enTheme: DefaultTheme.Config = {
  nav: [
    { text: 'Introduction', link: '/introduction/' },
    { text: 'Contents', link: '/catalogue/' },
    { text: 'Start Reading', link: '/getting-started/' },
  ],
  sidebar: [
    { text: 'Introduction', link: '/introduction/' },
    { text: 'Contents', link: '/catalogue/' },
    {
      text: 'Getting Started',
      items: [{ text: 'Before You Start', link: '/getting-started/' }],
    },
  ],
  outline: { label: 'On this page', level: [2, 3] },
  docFooter: { prev: 'Previous page', next: 'Next page' },
  lastUpdated: { text: 'Last updated' },
  footer: { message: 'Learn by doing. Turn practice into knowledge.' },
}
