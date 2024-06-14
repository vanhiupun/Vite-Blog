// .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import { EnhanceAppContext, useRoute } from 'vitepress'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import { inject } from '@vercel/analytics'
import AsideSponsors from './components/pendant.vue'
import { h } from 'vue'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@shikijs/vitepress-twoslash/style.css'
import './styles/index.css'
import 'viewerjs/dist/viewer.min.css'

inject()

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-before': () => h(AsideSponsors)
    })
  },
  enhanceApp: ({ app }: EnhanceAppContext, ctx) => {
    app.use(TwoslashFloatingVue)
    googleAnalytics({ id: 'G-6QN23XNMXB' })
    app.component('vImageViewer', vImageViewer)
    app.use(NolebaseGitChangelogPlugin, {
      mapAuthors: [
        {
          name: 'Theo',
          username: 'Theo-messi',
          mapByNameAliases: ['Theo', 'vanhiupun'],
          mapByEmailAliases: ['fanxiaobin422@gmail.com', 'fanxiaobin422@sina.com', '771720405@qq.com']
        },
        {
          name: 'dependabot',
          username: 'dependabot',
          mapByEmailAliases: ['49699333+dependabot[bot]@users.noreply.github.com']
        }
      ]
    })
  },
  setup() {
    // 获取路由
    const route = useRoute()
    // 使用
    imageViewer(route)
  }
}
