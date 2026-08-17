# Paul Signac — Light, Divided

[![Live site](https://img.shields.io/badge/Live-gallery.krausswang.cn-0B4F6C?style=flat-square)](https://gallery.krausswang.cn/)
[![React](https://img.shields.io/badge/React-19-087EA4?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

> **光，被分割。** 一个以保罗·西涅克（Paul Signac）为主题的中英双语艺术家档案网站，围绕他的新印象派绘画、航海经历与分色主义理论展开叙事。

**在线访问：** [gallery.krausswang.cn](https://gallery.krausswang.cn/)

![Paul Signac — Light, Divided 社交分享图](public/og.png)

## 概览

本项目以展览图录般的节奏，呈现西涅克（1863—1935）的生平、艺术方法与代表作品。它既是一个可浏览的艺术教育网站，也保留了将内容替换为其他艺术家、工作室或创作者资料的清晰结构。

### 主要功能

- **中英双语切换**：导航栏一键切换中文与英文；优先记住访客的选择，首次访问时会参考浏览器语言。
- **五个响应式页面**：首页、关于、艺术旅程、作品与联系页面。
- **作品画廊**：按艺术阶段筛选作品，点击可查看详情、馆藏信息与外部博物馆记录。
- **可访问性设计**：键盘可用的作品详情弹层、Escape 关闭、焦点管理、跳至正文链接，以及对 `prefers-reduced-motion` 的支持。
- **内容与界面分离**：艺术家资料、时间线、作品与联系信息集中在数据层，便于维护与复用。
- **视觉语言**：以河流蓝、暮色紫、珊瑚红与金橙色回应西涅克的色彩实践；CSS 渐变和节制的色彩颗粒为长文阅读保留空间。

## 技术栈

- React 19
- TypeScript
- Vinext / Vite
- Next.js App Router 兼容层
- 原生 CSS
- Cloudflare Workers（部署）
- pnpm

## 本地开发

### 环境要求

- Node.js `>= 22.13.0`
- pnpm（可使用 Corepack 启用）

```bash
corepack enable
pnpm install
pnpm dev
```

默认启动后，按终端输出打开本地地址。

### 常用命令

```bash
# 构建生产版本
pnpm build

# 运行生产渲染测试
pnpm test

# 静态检查
pnpm lint

# 本地预览生产构建
pnpm start
```

> 如果没有全局安装 pnpm，可将上述命令中的 `pnpm` 替换为 `corepack pnpm`。

## 部署

站点部署在 Cloudflare Workers。先完成生产构建，再使用生成的 Wrangler 配置发布：

```bash
pnpm build
pnpm exec wrangler deploy --config dist/server/wrangler.json
```

部署前请确认 Wrangler 已登录，并拥有对应 Cloudflare 账户的 Workers 权限：

```bash
pnpm exec wrangler whoami
```

## 项目结构

```text
app/
├── about/                  # 艺术家介绍
├── contact/                # 联系页面
├── journey/                # 生平与艺术旅程时间线
├── works/                  # 作品画廊
├── components/
│   ├── ArtworkGallery.tsx  # 筛选、详情弹层与键盘交互
│   ├── LanguageContext.tsx # 中英语言状态、持久化与翻译
│   └── SiteChrome.tsx      # 站点导航、页脚与页面引言
├── data.ts                 # 艺术家、作品、时间线及联系信息
├── globals.css             # 视觉系统与响应式样式
└── layout.tsx              # 全局布局与 SEO 元数据
public/
├── artworks/               # 精选作品图像
└── og.png                  # 社交分享图
tests/
└── rendered-html.test.mjs  # 服务端渲染测试
worker/
└── index.ts                # Cloudflare Worker 入口
```

## 双语实现说明

语言状态由 `app/components/LanguageContext.tsx` 管理：

1. 访客可通过导航栏的「中文 / EN」按钮切换语言。
2. 选择会保存到浏览器的 `localStorage`（键名：`gallery-language`）。
3. 若没有保存过选择，站点会根据浏览器语言决定首次显示中文或英文。
4. 切换后会同步更新页面 `lang` 属性，以改善辅助技术和搜索引擎的语言识别。

## 作为模板复用

要将这个项目转换为另一位艺术家或创作者的网站，通常只需：

1. 在 `app/data.ts` 中替换人物信息、作品、时间线和联系链接。
2. 在 `public/artworks/` 中替换图像，并同步更新对应图片路径和替代文本。
3. 在 `app/components/LanguageContext.tsx` 中更新中英文展示文案。
4. 在 `app/globals.css` 中调整色彩变量、字体和版式。
5. 在 `app/layout.tsx`、`public/og.png` 中更新 SEO 元数据和社交分享图。

## 研究与图像说明

网站的艺术史资料参考了博物馆及艺术机构的艺术家档案与馆藏页面；作品对应的馆藏链接可在 `app/data.ts` 中查看。

项目内的艺术图像由项目方提供。若要再次发布、重新分发或替换图像，请自行确认作品、博物馆图像与相关权利人的授权范围。

## 许可

当前仓库未附加开源许可证。复用代码或素材前，请先取得项目所有者许可。
