# Mortal Shell II Wiki — 壳实现设计文档

日期：2026-08-19
状态：已批准（修订 v2，待实现计划）

## 1. 目标

搭建一个 Mortal Shell II（致命躯壳 2）英文 SEO 攻略站（fan wiki）的**纯前端壳**。

- **结构级复刻**：参考对标站 [Tabletop Tavern Wiki](https://www.tabletoptavern.wiki/) 的页面结构、区块顺序、信息密度与组件形态；**不复制**其品牌、文案、素材、广告位、站点专属样式，避免版权与视觉雷同风险。
- **视觉**：配色与字体采用 Mortal Shell II 官方站 [mortalshell.com](https://mortalshell.com/) 的主题（暗黑哥特奇幻风）。
- **本阶段范围**：只做 3 个页面的壳（完整布局 + 样式 + 假数据占位），**不接入 MDX**，不填真实攻略内容。用户验收壳通过后，再进入内容填充阶段。

## 2. 技术栈

| 项 | 选择 | 说明 |
|---|---|---|
| 框架 | Next.js 15（App Router）+ TypeScript | 与对标站同构 |
| 样式 | Tailwind CSS v4 | CSS 变量定义设计令牌（oklch 颜色）|
| 内容 | 组件假内容（`lib/data.ts`）| **本阶段不接 MDX**，详情页正文用组件渲染假内容 |
| 多语言 | 单语言（英文），预留 `lib/i18n.ts` | 先用英文；未来加语言时再引入 `[locale]` 路由 |
| 组件 | 手写 Tailwind 组件 | 不引入 shadcn/ui |

## 3. 设计系统（Mortal Shell 官方站配色）

来源：抓取自 `https://mortalshell.com/_nuxt/entry.*.css`。

```
--background: #000                          /* 纯黑背景 */
--foreground: #d4d4d4                       /* 浅灰白正文 */
--primary:    #920203                       /* 血红（强调/glow/选中）*/
--gold:       #ffb900                       /* 品牌金（CTA/高亮）*/
--emphasis:   oklch(41.54% 0.169 28.87)     /* 深血红（卡片/边框/按钮）*/
--muted:      #89603a                       /* 暗金/暖灰 */
```

字体（`next/font/google` 加载）：
- 标题：**Cinzel**（哥特衬线）
- 正文：**Cormorant Garamond**（衬线）

补充：复用 `hotword/favicon/` 下已备好的全套站点图标；圆角/阴影/间距沿用 Tailwind v4 默认令牌。

## 4. 路由

不引入 `[locale]`，`/` 即英文首页。路由仅三个：

| 路径 | 页面 |
|---|---|
| `/` | 首页（英文）|
| `/shells` | Shells 列表页 |
| `/shells/[slug]` | Shell 详情页（壳阶段数据仅含 `tiel`，故实际可访问 `/shells/tiel`）|

无 `middleware.ts`（本阶段无 locale 重定向需求；未来加多语言时再引入，届时 `middleware.ts` 置于项目根目录）。

## 5. 页面结构与组件

### 5.1 全局壳（三页共用）

- **SiteHeader**：Logo（左）+ 主导航菜单（右）+ "Switch language" 按钮（壳阶段按钮可先为占位，不切换）。
  - 菜单项（占位）：Shells / Bosses / Guides / News / Editions / Download
- **SiteFooter**：Logo + 简介段落 + Email 链接 + 三列链接（Wiki / Guides / Legal）+ 版权行 + "Unofficial fan wiki. Not affiliated with Cold Symmetry or Playstack." 免责声明。

### 5.2 首页 `/`

自顶向下参考对标站首页各区块：

1. **Hero**：背景图 + eyebrow（"Unofficial souls-like guide"）+ H1 "Mortal Shell II Wiki" + 描述段落 + 2 个 CTA（"Start Beginner Guide" / "Open Steam"）+ 3 个 stats（Developer / Release / Genre）
2. **入口卡片区**：5 张卡片（Beginner Guide / Shells / Bosses / Tarstones / Editions），每张 = link + H2 + 描述
3. **Keyword hub**：长尾关键词 → 页面路由（一组 link + H3 + 描述）
4. **Guide 卡片库**：带 cover 图 + 分类标签的文章卡片列表

### 5.3 Shells 列表页 `/shells`

1. **PageHeader**：eyebrow "Shells" + H1 + 描述段落
2. **EntityCard 列表**（读 `lib/data.ts` 的 Shell 占位数据）：每张 = 标签 + H2（Shell 名）+ 描述 + 3 个定位 chips + "Start / Watch" 两段文字
3. **结论区**：一段综述 + 3 个相关链接 CTA
4. **FaqAccordion**：3 题占位

### 5.4 Shell 详情页 `/shells/[slug]`

1. **ArticleHeader**：分类标签行（chips）+ H1 + 导语 + cover 占位图 + 视频占位
2. **ProseBody**：组件渲染的正文假内容（多个 h2 区块 + 段落 + 列表）
3. **FaqAccordion**：3 题占位
4. **RelatedSidebar**：Related pages 链接列表（Shells / Bosses / Guides）

### 5.5 组件清单

| 组件 | 用途 |
|---|---|
| `SiteHeader` | 全局导航 |
| `SiteFooter` | 全局页脚 |
| `LanguageSwitcher` | 语言切换按钮（占位）|
| `Hero` | 首页 hero |
| `EntryCards` | 首页入口卡片 |
| `KeywordHub` | 首页关键词路由区块 |
| `GuideCardLibrary` | 首页/列表页的 cover 卡片 |
| `PageHeader` | 列表页页头 |
| `EntityCard` | 列表页实体卡片 |
| `ArticleHeader` | 详情页文章头 |
| `ProseBody` | 详情页正文容器（组件假内容）|
| `FaqAccordion` | FAQ 手风琴 |
| `RelatedSidebar` | 详情页侧边栏 |

## 6. 目录结构

```
hotword/
├─ app/
│  ├─ layout.tsx                 # 根布局（字体/元数据/全局壳 SiteHeader+SiteFooter）
│  ├─ page.tsx                   # 首页
│  └─ shells/
│     ├─ page.tsx                # 列表页
│     └─ [slug]/page.tsx         # 详情页
├─ components/                   # 手写组件
├─ lib/
│  ├─ i18n.ts                    # 英文 UI 字典（预留多语言）
│  └─ data.ts                    # Shell 占位数据（placeholder）
├─ public/
└─ docs/superpowers/specs/       # 本设计文档
```

## 7. 数据与文案

- Shell 占位数据统一放 `lib/data.ts`，**标记为 `placeholder` / early data**，不作为最终权威资料。
- 8 个 Shell 名仅作占位（Tiel / Eredrim / Sariel / Lazlo / Proxima / Smert / Gragu / Sester Genessa，来源为资料中的奖杯解锁列表，正式上线前需二次核对拼写）。
- 首页 stats、入口卡片、Keyword hub 文案复用资料 `基础信息.md` 中已备内容（Developer: Cold Symmetry / Release: Aug 20, 2026 / Genre: Action RPG 等）。

## 8. 范围界定

**本阶段做（壳）**：全局壳 + 3 页布局 + 设计系统 + 占位数据 + 英文 UI 字典。

**本阶段不做（后续）**：
- MDX 内容管线（frontmatter / loader / content 目录）
- 真实攻略内容填充
- Bosses / Tarstones / Editions / Guides 等其余页面
- 完整多语言（`[locale]` 路由与翻译）
- 广告位 / 评论 / 搜索 / 用户系统

## 9. 验收标准（壳）

1. 三页（`/`、`/shells`、`/shells/tiel`）结构与对标站对应页一致（结构、层级、区块顺序）。
2. 配色与字体符合 Mortal Shell 官方站（黑 + 血红 `#920203` + 金 `#ffb900` + 衬线 Cinzel/Cormorant）。
3. 导航/页脚/语言切换按钮在三页一致。
4. 响应式：桌面与移动端布局正常。
5. `npm run build` 通过，无类型/构建错误。
