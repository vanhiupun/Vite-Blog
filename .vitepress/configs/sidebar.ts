import { link } from 'fs'
import type { DefaultTheme } from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = {
  // VPS使用指南
  '/vps/': { base: '/vps/', items: Sidebar_vps() },
  // 华硕路由器固件
  '/asus/': { base: '/asus/', items: Sidebar_Asus() },
  // ESXi安装指南
  '/ESXi/': { base: '/ESXi/', items: Sidebar_ESXi() },
  // 青龙面板
  '/vps/ql/': { base: '/vps/ql/', items: Sidebar_ql() },
  // 入门指南
  '/FE/': { base: '/FE/', items: Sidebar_FE() },
  // 文档记录
  '/notes/': { base: '/notes/', items: Sidebar_notes() },
  // 服务推荐
  '/serve/': { base: '/serve/', items: Sidebar_serve() },
  // 流媒体观影指南
  '/streaming/': { base: '/streaming/', items: Sidebar_streaming() }
}

// 文档记录
export function Sidebar_notes() {
  return [
    {
      // 分组名称
      text: '文档记录',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/notes/',
      // 分组页面
      items: [
        { text: 'PicGo + Github 搭建图床', link: 'build-picture-bed' },
        { text: 'GitHub Actions 工作流程', link: 'github-actions' },
        { text: 'VS Code 使用技巧', link: 'vscode' },
        { text: '为项目添加 Prettier 格式化代码', link: 'prettier' },
        { text: 'NPM 使用国内镜像及恢复默认源', link: 'npm-mirror' },
        { text: '使用 GPG 签名 Git Commit', link: 'gpg' },
        { text: '使用 nvm 管理不同版本的 node', link: 'nvm' },
        { text: '优化 iOS/Android 来电信息界面', link: 'vcards' },
        { text: '添加 1Panel 第三方应用商店', link: '1Panel-third-party-app-store' },
        { text: 'Tabby 配置同步', link: 'tabby-sync' },
        { text: '添加 群晖DSM7.X 第三方套件源', link: 'Synology-third-party-suite' }
      ]
    },
    {
      // 分组名称
      text: 'VitePress 搭建记录',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/notes/vitepress/',
      // 分组页面
      items: [
        { text: '添加 Giscu评论', link: 'giscu' },
        { text: '实现单击图片放大', link: 'Picture-enlargement' },
        { text: '宝塔面板部署', link: 'aaPanel-deployment' }
      ]
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
      base: '/asus/',
      // 分组页面
      items: [
        { text: '刷机需知', link: 'Flashing-prerequisites' },
        { text: '固件平台介绍', link: 'Firmware-platform-introduction' },
        { text: 'fancyss', link: 'fancyss' },
        { text: 'Merlin Clash', link: 'Merlin-Clash' },
        { text: '官改/梅林固件 常用命令集合', link: 'common-commands' },
        { text: '提示检测非法关键词', link: 'illegal-keywords' }
      ]
    }
  ]
}

// 入门指南
export function Sidebar_FE() {
  return [
    {
      // 分组名称
      text: 'HomeBrew',
      // 下拉开关
      collapsed: true,
      // 分组路径
      base: '/FE/HomeBrew/',
      // 分组页面
      items: [
        { text: 'HomeBrew 简介与安装', link: 'install' },
        { text: 'HomeBrew 安装软件', link: 'software' },
        { text: 'HomeBrew tap使用', link: 'tap' },
        { text: 'HomeBrew 切换镜像源', link: 'mirror-source' }
      ]
    },
    {
      // 分组名称
      text: 'Docker',
      // 下拉开关
      collapsed: true,
      // 分组路径
      base: '/FE/Docker/',
      // 分组页面
      items: [
        { text: 'Docker 简介与安装', link: 'install' },
        { text: 'Docker 进程相关操作', link: 'process' },
        { text: 'Docker 国内镜像加速', link: 'mirror-source' },
        { text: 'Docker 镜像相关操作', link: 'mirror' },
        { text: 'Docker 容器相关操作', link: 'container' }
        // { text: 'HomeBrew 切换镜像源', link: 'mirror-source' }
      ]
    },
    {
      // 分组名称
      text: 'Git',
      // 下拉开关
      collapsed: true,
      // 分组路径
      base: '/FE/Git/',
      // 分组页面
      items: [
        { text: 'Git 简介与安装', link: 'install' },
        { text: 'Git 设置用户信息', link: 'user' },
        { text: 'Git 常用命令', link: 'command' },
        { text: 'Git 版本回退', link: 'reset' },
        { text: 'Git 合并commit', link: 'commit' },
        { text: 'Git 缩减仓库', link: 'clean-up' },
        { text: 'Git 重置提交记录', link: 'reset-commit' }
      ]
    },
    {
      // 分组名称
      text: 'Linux',
      // 下拉开关
      collapsed: true,
      // 分组路径
      base: '/FE/Linux/',
      // 分组页面
      items: [
        { text: 'Linux 目录结构', link: 'directory' },
        { text: 'Linux 文件操作', link: 'file' },
        { text: 'Linux 文件权限', link: 'file-permission' },
        { text: 'Linux 常用网络操作', link: 'network' },
        { text: 'Linux 进程管理', link: 'process' },
        { text: 'Linux 管道命令', link: 'pipe' },
        { text: 'Linux 打包与拆包', link: 'tar' },
        { text: 'Linux VIM 编辑器', link: 'vim' }
      ]
    },
    {
      // 分组名称
      text: '入门指南',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/FE/',
      // 分组页面
      items: [
        { text: 'Vercel-CLI', link: 'Vercel-CLI' },
        { text: 'Markdown', link: 'Markdown' },
        { text: 'Pnpm', link: 'PNPM' }
      ]
    }
  ]
}
// vps使用指南
export function Sidebar_vps() {
  return [
    {
      // 分组名称
      text: 'Debian/Ubuntu',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/vps/',
      // 分组页面
      items: [
        {
          text: '系统优化设置',
          link: 'Ubuntu'
        },
        { text: '更改中文语言', link: 'Chinese' },
        { text: '开启防火墙端口', link: 'firewall-port' },
        { text: 'Debian12 安装使用 Cloud 内核', link: 'Debian12-Cloud' },
        { text: 'oh-my-zsh 安装 & 配置', link: 'oh-my-zsh' },
        { text: '开机自动挂载 NAS磁盘', link: 'ubuntu-mount-nas' }
      ]
    },
    {
      // 分组名称
      text: '系统工具',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/vps/',
      // 分组页面
      items: [
        { text: '全能工具箱', link: 'All-purpose-toolbox' },
        { text: 'dd.sh 重装系统', link: 'dd.sh' },
        { text: 'R 探长开机脚本', link: 'R-Bot' },
        { text: 'IP 质量体检脚本', link: 'IPQuality' },
        { text: '一键检测流媒体解锁', link: 'Streaming-Unlocked' },
        { text: '一键检测机场奈飞解锁', link: 'Netflix-Unlocked' }
      ]
    },
    {
      // 分组名称
      text: '搭建服务',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/vps/',
      // 分组页面
      items: [
        { text: 'X-ui', link: 'X-ui' },
        { text: 'V2Ray', link: 'V2Ray' },
        { text: '哪吒面板', link: 'Install-Nezha-panel' },
        { text: '1Panel 面板', link: 'Install-1Panel' },
        { text: '独角数卡网站', link: 'Unicorn-Number-Card' },
        { text: 'Docker 搭建 aria2+AriaNg', link: 'aria2+AriaNg' },
        { text: '一键安装 小雅Xiaoya全家桶', link: 'xiaoya-alist' }
      ]
    }
  ]
}

// ESXi安装指南
export function Sidebar_ESXi() {
  return [
    {
      // 分组名称
      text: 'ESXi 8.0 部署指南',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/ESXi/Install/',
      // 分组页面
      items: [
        { text: 'ESXi 安装指南', link: 'guide' },
        { text: '安装 Openwrt', link: 'Openwrt' },
        { text: '安装 AdGuardHome', link: 'AdGuardHome' },
        { text: '安装 Windows 11', link: 'Windows11' }
      ]
    },
    {
      // 分组名称
      text: 'OpenWrt/iStoreOS',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/ESXi/openwrt/',
      // 分组页面
      items: [
        { text: 'iStore 插件包', link: 'iStore-plugin-package' },
        { text: 'PPPOE拨号', link: 'PPPOE-dial-up' },
        { text: '关闭IPV6', link: 'Turn-off-IPv6' },
        { text: '实时抓包', link: 'openwrt-real-time-packet-capture' },
        { text: '动态DNS设置', link: 'ddns-settings' },
        { text: '刷新 DNS 缓存', link: 'clear-dns-cache' },
        { text: 'iStoreOS 文件共享步骤', link: 'iStoreOS-file-sharing-steps' },
        { text: 'H3C NX30Pro 刷 openwrt', link: 'H3C-NX30Pro' },
        { text: 'openwrt 安装 clouddrive2', link: 'openwrt-install-clouddrive2' },
        { text: '旁路由设置', link: 'Bypass' }
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
      base: '/vps/ql/',
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
      base: '/vps/ql/',
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
      base: '/vps/ql/',
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
      // text: 'Netflix 观看指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/streaming/',
      // 分组页面
      items: [
        {
          text: `Netflix 观看指南`,
          link: 'Netflix-guide',
          items: [
            { text: '秘密分类的技巧', link: 'Netflix-secret-classification' },
            { text: '全球各国影视剧数量', link: 'Netflix-Number-of-movies-and-TV-series' },
            { text: '常用浏览器插件汇总', link: 'Netflix-Browser-plug-in-summary' }
          ]
        },
        { text: 'Disney+ 观看指南', link: 'Disney-introduce' },
        { text: 'Spotify Premium 指南', link: 'Spotify' },
        { text: 'YouTube Premium 会员权益及订阅指南', link: 'YouTube' },
        { text: 'Hulu 国内观看指南', link: 'Hulu' },
        { text: 'HBO Max 国内观看指南', link: 'HBO-Max' }
      ]
    }
  ]
}

// 账号合租平台
export function Sidebar_serve() {
  return [
    {
      // 分组名称
      text: '账号合租平台',
      link: 'sharing/Account-sharing-guide',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/serve/',
      // 分组页面
      items: [
        { text: '银河录像局', link: 'sharing/nf-video' },
        { text: '奈飞小铺', link: 'sharing/ihezu' }
      ]
    },
    {
      // 分组名称
      text: '优质机场',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/serve/',
      // 分组页面
      items: [
        { text: 'FlyingBird - 飞鸟机场', link: 'airport/FlyingBird' },
        { text: 'Bridge the Wise', link: 'airport/Bridge-the-Wise' }
      ]
    },
    {
      // 分组名称
      text: '接码平台',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/serve/',
      // 分组页面
      items: [{ text: 'SMS-Activate', link: 'code/SMS-Activate' }]
    }
  ]
}
