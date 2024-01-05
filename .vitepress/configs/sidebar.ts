import type { DefaultTheme } from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = {
  // VPS使用指南
  '/guide/vps/': { base: '/guide/vps/', items: Sidebar_vps() },
  // 前端物语
  '/fe/': { base: '/fe/', items: Sidebar_Fe() },
  // 华硕路由器固件
  '/guide/asus/': { base: '/guide/asus/', items: Sidebar_Asus() },
  // 入门指南
  '/guide/Getting-Started-Guide/': { base: '/guide/Getting-Started-Guide/', items: Sidebar_Guide() },
  // esxi安装指南
  '/guide/esxi/': { base: '/guide/esxi/', items: Sidebar_esxi() },
  // 青龙面板
  '/guide/ql/': { base: '/guide/ql/', items: Sidebar_ql() },
  // 文档记录
  '/record/': { base: '/record/', items: Sidebar_record() },
  // 账号合租平台
  '/sharing/': { base: '/sharing/', items: Sidebar_sharing() },
  // 推荐 Netflix 机场
  '/airport/': { base: '/airport/', items: Sidebar_airport() },
  // 流媒体观影指南
  '/streaming/': { base: '/streaming/', items: Sidebar_streaming() }
}

// 文档记录
export function Sidebar_record() {
  return [
    {
      // 分组名称
      // text: '文档记录',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/record/',
      // 分组页面
      items: [
        { text: 'PicGo + Github 搭建图床', link: 'build-picture-bed' },
        { text: 'VitePress 添加 Giscu评论', link: 'giscu' },
        { text: 'VS Code 使用技巧', link: 'vscode' },
        { text: '为项目添加 Prettier 格式化代码', link: 'prettier' },
        { text: 'NPM 使用国内镜像及恢复默认源', link: 'npm-mirror' },
        { text: 'VitePress实现单击图片放大', link: 'Picture-enlargement' },
        { text: 'oh-my-zsh 安装 & 配置', link: 'oh-my-zsh' },
        { text: 'VitePress 打造个人前端导航网站', link: 'Front-end-navigation' },
        { text: '使用 GPG 签名 Git Commit', link: 'gpg' },
        { text: '使用 nvm 管理不同版本的 node', link: 'nvm' },
        { text: '优化 iOS/Android 来电、信息界面体验', link: 'vcards' }
      ]
    }
  ]
}

// 前端物语
export function Sidebar_Fe() {
  return [
    {
      // 分组名称
      text: 'JavaScript 基础知识',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/fe/javascript/',
      // 分组页面
      items: [
        { text: '数据类型', link: 'types' },
        { text: '引用类型的拷贝', link: 'clone' },
        { text: '类型转换', link: 'conversions' },
        { text: '原型和原型链', link: 'prototype' },
        { text: '继承', link: 'inherit' }
      ]
    },
    {
      // 分组名称
      // text: "ES6 常用知识点",
      // 下拉开关
      // collapsed: false,
      // 分组路径
      base: '/fe/es6',
      // 分组页面
      items: [{ text: 'ES6 常用知识点', link: '/' }]
    },
    {
      // 分组名称
      text: 'TypeScript',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/fe/typescript/',
      // 分组页面
      items: [{ text: '基础知识', link: 'base' }]
    },
    {
      // 分组名称
      text: 'HTML / CSS',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/fe/',
      // 分组页面
      items: [
        { text: 'HTML 理论知识点', link: 'html/' },
        { text: 'CSS 理论知识点', link: 'css/' }
      ]
    },
    {
      // 分组名称
      text: '工程化项目原理',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/fe/gc/',
      // 分组页面
      items: [
        { text: '掌握 package ', link: 'GC-01' },
        { text: '掌握 tsconfig ', link: 'GC-02' },
        { text: 'JS 模块化原理 ', link: 'GC-03' }
      ]
    },
    {
      // 分组名称
      text: '浏览器知识',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/fe/',
      // 分组页面
      items: [
        { text: '浏览器相关知识点', link: 'browser/' },
        { text: 'TCP', link: 'network/tcp' },
        { text: 'HTTP', link: 'network/http' }
      ]
    },
    {
      // 分组名称
      text: '概念知识点',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/fe/concept/',
      // 分组页面
      items: [
        { text: '模块化', link: 'module' },
        { text: '前端页面渲染方式', link: 'page-rendering' }
      ]
    },
    {
      // 分组名称
      // text: "编程题",
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/fe/',
      // 分组页面
      items: [{ text: '编程题', link: 'coding/' }]
    }
  ]
}
// 华硕路由器固件
export function Sidebar_Asus() {
  return [
    {
      // 分组名称
      // text: '梅林操作文档',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/asus/',
      // 分组页面
      items: [
        { text: '刷机需知', link: 'Flashing-prerequisites' },
        { text: '固件平台介绍', link: 'Firmware-platform-introduction' },
        { text: 'fancyss', link: 'fancyss' },
        { text: 'Merlin Clash', link: 'Merlin-Clash' }
      ]
    }
  ]
}

// 入门指南
export function Sidebar_Guide() {
  return [
    {
      // 分组名称
      text: '入门指南',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/Getting-Started-Guide/',
      // 分组页面
      items: [
        { text: 'Homebrew', link: 'Homebrew' },
        { text: 'Git', link: 'Git' },
        { text: 'Docker', link: 'Docker' },
        { text: 'Linux', link: 'Linux' },
        { text: 'Markdown', link: 'Markdown' },
        { text: 'PNPM', link: 'PNPM' }
      ]
    }
  ]
}
// vps使用指南
export function Sidebar_vps() {
  return [
    {
      // 分组名称
      text: '基础设置',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/vps/',
      // 分组页面
      items: [
        { text: '甲骨文云防火墙设置', link: 'Oracle-Cloud' },
        { text: '谷歌云防火墙设置', link: 'Google-Cloud' },
        { text: '开启 Root 登陆', link: 'root-login' },
        { text: '开启防火墙端口', link: 'firewall-port' }
      ]
    },
    {
      // 分组名称
      text: '进阶使用',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/vps/',
      // 分组页面
      items: [
        { text: '简化重装系统', link: 'Simplify-system-reinstallation' },
        { text: '一键脚本部署开ARM机器', link: 'One-click-script' },
        { text: 'VPS全能工具箱', link: 'All-purpose-toolbox' }
      ]
    },
    {
      // 分组名称
      text: '搭建服务',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/vps/',
      // 分组页面
      items: [
        { text: '安装哪吒面板', link: 'Install-Nezha-panel' },
        { text: 'V2Ray搭建详细教程', link: 'V2Ray' },
        { text: 'X-ui搭建详细教程', link: 'X-ui' },
        { text: 'VPS一键检测流媒体解锁', link: 'streaming-Unlocked' },
        { text: '一键检测机场奈飞解锁', link: 'Netflix-Unlocked' },
        { text: '搭建独角数卡网站', link: 'Unicorn-Number-Card' }
      ]
    }
  ]
}

// esxi安装指南
export function Sidebar_esxi() {
  return [
    {
      // 分组名称
      text: 'ESXi 8.0 部署指南',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/esxi/',
      // 分组页面
      items: [
        { text: '安装指南', link: 'Installation-guide' },
        { text: 'ESXI 写盘', link: 'write-disk' },
        { text: '主板 BIOS 设置', link: 'bios' },
        { text: 'ESXI 安装', link: 'esxi-Install' },
        { text: 'ESXI 后台配置', link: 'Backend-configuration' },
        { text: 'ESXI 前台配置', link: 'Front-desk-configuration' }
      ]
    },
    {
      // 分组名称
      text: 'ESXI 部署 OpenWrt',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/esxi/',
      // 分组页面
      items: [
        { text: '安装 Openwrt', link: 'Installation-Openwrt' },
        { text: '关闭 IPV6', link: 'Turn-off-IPv6' },
        { text: 'PPPOE 拨号', link: 'PPPOE-dial-up' },
        { text: 'OpenWrt 扩容内存', link: 'OpenWrt-Expand-memory' }
      ]
    },
    {
      // 分组名称
      text: 'ESXI 部署 AdGuardHome',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/esxi/',
      // 分组页面
      items: [
        { text: '安装 AdGuardHome', link: 'Install-AdGuardHome' },
        { text: '配置 AdGuardHome', link: 'Configure-AdGuardHome' },
        { text: '配置 OpenWrt', link: 'Configure-OpenWrt' },
        { text: '扩容 AdGuardHome', link: 'Expanding-AdGuardHome' }
      ]
    }
  ]
}

// 青龙面板
export function Sidebar_ql() {
  return [
    {
      // 分组名称
      text: '安装青龙面板',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/ql/',
      // 分组页面
      items: [
        { text: '安装 Docker', link: 'Install-Docker' },
        { text: '安装 青龙面板', link: 'Install-Qinglong-panel' },
        { text: '阿里云盘签到', link: 'Alipan-sign-in' },
        { text: '京东签到', link: 'JD-sign-in' },
        { text: 'BiliBili 签到', link: 'BiliBili-sign-in' }
      ]
    },
    {
      // 分组名称
      text: '获取京东Cookie',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/ql/',
      //分组页面
      items: [
        { text: '插件版', link: 'JD-Cookie-plug-in' },
        { text: '浏览器版', link: 'JD-Cookie-Browser' },
        { text: 'Boxjs', link: 'JD-Cookie-Boxjs' }
      ]
    },
    {
      // 分组名称
      text: '获取阿里云盘Cookie',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/ql/',
      // 分组页面
      items: [
        {
          text: '自动获取 - refresh_token',
          link: 'Alipan-Get-cookies-automatically'
        },
        {
          text: '手动获取 - refresh_token',
          link: 'Alipan-Get-cookies-manually'
        }
      ]
    }
  ]
}
// 流媒体观影指南
export function Sidebar_streaming() {
  return [
    {
      // 分组名称
      text: 'Netflix 观看指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/streaming/',
      // 分组页面
      items: [
        { text: '介绍', link: 'Netflix-introduce' },
        { text: '如何看4K及适配硬件', link: 'Netflix-watch-4K-and-adapting-hardware' },
        { text: '常见使用问题及答案', link: 'Netflix-Frequently-asked-questions-and-answers' },
        { text: '常见错误提示及解决方案', link: 'Netflix-Common-error-tips-and-solutions' },
        { text: '秘密分类的技巧', link: 'Netflix-secret-classification' },
        { text: '全球各国影视剧数量', link: 'Netflix-Number-of-movies-and-TV-series' },
        { text: '常用浏览器插件汇总', link: 'Netflix-Browser-plug-in-summary' },
        { text: '总结与建议', link: 'Netflix-Summarize' }
      ]
    },
    {
      // 分组名称
      text: 'Disney+ 观看指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/streaming/',
      // 分组页面
      items: [
        { text: '介绍', link: 'Disney-introduce' },
        { text: '订阅指南', link: 'Disney-Subscription-Guide' },
        { text: '合租介绍', link: 'Disney-Introduction-to-shared-housing' },
        { text: '会员使用指南', link: 'Disney-Member-User-Guide' },
        { text: '总结与建议', link: 'Disney-Summary-and-suggestions' }
      ]
    },
    {
      // 分组名称
      text: 'Spotify Premium 指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/streaming/',
      // 分组页面
      items: [{ text: 'Spotify Premium 指南', link: 'Spotify' }]
    },
    {
      // 分组名称
      text: 'YouTube Premium 会员权益及订阅指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/streaming/',
      // 分组页面
      items: [{ text: 'YouTube Premium 会员权益及订阅指南', link: 'YouTube' }]
    },
    {
      // 分组名称
      text: 'Hulu 国内观看指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/streaming/',
      // 分组页面
      items: [{ text: 'Hulu 国内观看指南', link: 'Hulu' }]
    },
    {
      // 分组名称
      text: 'HBO Max 国内观看指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/streaming/',
      // 分组页面
      items: [{ text: 'HBO Max 国内观看指南', link: 'HBO-Max' }]
    }
  ]
}

// 账号合租平台
export function Sidebar_sharing() {
  return [
    {
      // 分组名称
      // text: "账号合租平台",
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/sharing/',
      // 分组页面
      items: [
        { text: '账号合租指南', link: 'Account-sharing-guide' },
        { text: '银河录像局 - AI服务', link: 'nf-video' },
        { text: '蜜糖商店 - 流媒体账号', link: 'metshop' },
        { text: '奈飞小铺 - 流媒体账号', link: 'ihezu' }
      ]
    }
  ]
}

// 推荐 Netflix 机场
export function Sidebar_airport() {
  return [
    {
      // 分组名称
      // text: "推荐机场",
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/airport/',
      // 分组页面
      items: [
        { text: '解锁 4K Netflix 机场指南', link: 'Unlock-Netflix' },
        { text: 'FlyingBird - 飞鸟机场', link: 'FlyingBird' },
        { text: 'Bridge the Wise', link: 'Bridge-the-Wise' },
        { text: '一元机场', link: 'yiyuan' }
      ]
    }
  ]
}
