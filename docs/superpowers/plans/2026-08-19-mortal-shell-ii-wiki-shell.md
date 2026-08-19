# Mortal Shell II Wiki Shell 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 搭建 Mortal Shell II 英文攻略站的纯前端壳（3 页：首页 / Shells 列表 / Shell 详情），布局参考 tabletoptavern.wiki，配色用 Mortal Shell 官方站黑+血红+金。

**Architecture:** Next.js 15 App Router + TypeScript + Tailwind CSS v4。所有组件为 Server Component（无交互状态），FAQ 用原生 `<details>` 实现。设计令牌集中在 `app/globals.css` 的 `@theme`；UI 文案集中在 `lib/i18n.ts`；占位数据集中在 `lib/data.ts`。不接 MDX、不接多语言路由、不引 shadcn。

**Tech Stack:** Next.js 15、TypeScript、Tailwind CSS v4、next/font（Cinzel + Cormorant Garamond）。

---

## 文件结构总览

```
hotword/
├─ app/
│  ├─ globals.css                # @theme 设计令牌 + base 样式
│  ├─ layout.tsx                 # 根布局：字体 + metadata + 全局壳(SiteHeader/SiteFooter)
│  ├─ page.tsx                   # 首页
│  ├─ favicon.ico                # 从 favicon/ 复制
│  └─ shells/
│     ├─ page.tsx                # Shells 列表页
│     └─ [slug]/page.tsx         # Shell 详情页
├─ components/
│  ├─ SiteHeader.tsx
│  ├─ SiteFooter.tsx
│  ├─ LanguageSwitcher.tsx
│  ├─ Hero.tsx
│  ├─ EntryCards.tsx
│  ├─ KeywordHub.tsx
│  ├─ GuideCardLibrary.tsx
│  ├─ PageHeader.tsx
│  ├─ EntityCard.tsx
│  ├─ FaqAccordion.tsx
│  ├─ ArticleHeader.tsx
│  ├─ ProseBody.tsx
│  └─ RelatedSidebar.tsx
├─ lib/
│  ├─ i18n.ts                    # 英文 UI 文案字典
│  └─ data.ts                    # Shell 占位数据 + 首页数据
└─ public/                       # favicon 各尺寸 png + webmanifest
```

---

## Task 1: 项目脚手架

**Files:**
- Create: Next.js 项目基础文件（由 create-next-app 生成）
- Modify: 无

- [ ] **Step 1: 用 create-next-app 初始化项目**

在 `f:/AI/code/hotword` 下运行（目录含资料文件，但无冲突文件，可正常脚手架）：

```bash
cd f:/AI/code/hotword
npx create-next-app@latest . --ts --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm --yes
```

预期：生成 `package.json`、`app/`、`public/`、`tsconfig.json`、`next.config.ts`、`postcss.config.mjs`、`eslint.config.mjs` 等。

若因目录非空触发交互提示，选择继续（保留资料文件）；若 `npm install` 过慢，改用 `cnpm i` 补齐依赖。

- [ ] **Step 2: 确认依赖版本**

Run: `node -e "console.log(require('./package.json').dependencies)"`

预期输出含 `next`（15.x）、`react`（19.x）、`tailwindcss`（4.x）。

- [ ] **Step 3: 验证可构建**

Run: `npm run build`

预期：BUILD SUCCESSFUL，无类型错误。

- [ ] **Step 4: 提交**

```bash
git add package.json package-lock.json tsconfig.json next.config.ts postcss.config.mjs eslint.config.mjs app public .gitignore
git commit -m "chore: scaffold Next.js 15 + Tailwind v4 project"
```

---

## Task 2: 设计系统（配色令牌 + 字体 + 元数据）

**Files:**
- Modify: `app/globals.css`（重写为 @theme 令牌）
- Modify: `app/layout.tsx`（字体 + metadata + favicon）
- Create: `app/favicon.ico`（复制）

- [ ] **Step 1: 重写 globals.css 定义设计令牌**

将 `app/globals.css` 完整替换为：

```css
@import "tailwindcss";

@theme {
  --color-background: #000000;
  --color-foreground: #d4d4d4;
  --color-primary: #920203;
  --color-gold: #ffb900;
  --color-muted: #89603a;
  --color-card: #0d0a08;
  --color-border: #2a1a12;

  --font-heading: var(--font-cinzel);
  --font-body: var(--font-cormorant);
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-body);
}
```

- [ ] **Step 2: 更新根布局（字体 + 元数据）**

将 `app/layout.tsx` 完整替换为：

```tsx
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mortal Shell II Wiki — Guide, Release Date",
  description:
    "Mortal Shell II Wiki helps players track release dates, editions, platforms, Shells, bosses, Tarstones, achievements, and early access updates in one fan hub.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: 接入 favicon**

```bash
cp favicon/favicon.ico app/favicon.ico
mkdir -p public
cp favicon/android-chrome-192x192.png favicon/android-chrome-512x512.png favicon/apple-touch-icon.png favicon/favicon-16x16.png favicon/favicon-32x32.png public/
```

- [ ] **Step 4: 更新 site.webmanifest**

创建 `public/site.webmanifest`：

```json
{
  "name": "Mortal Shell II Wiki",
  "short_name": "MS2 Wiki",
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#000000",
  "background_color": "#000000",
  "display": "standalone"
}
```

- [ ] **Step 5: 验证构建**

Run: `npm run build`

预期：BUILD SUCCESSFUL（此时 layout 尚未引入 SiteHeader/SiteFooter，可正常构建）。

- [ ] **Step 6: 提交**

```bash
git add app/globals.css app/layout.tsx app/favicon.ico public/
git commit -m "feat: add design tokens (black/crimson/gold) and fonts"
```

---

## Task 3: 数据与文案（lib/data.ts + lib/i18n.ts）

**Files:**
- Create: `lib/i18n.ts`
- Create: `lib/data.ts`

- [ ] **Step 1: 创建英文 UI 文案字典**

创建 `lib/i18n.ts`：

```ts
export const i18n = {
  nav: {
    brand: "Mortal Shell II Wiki",
    items: [
      { label: "Shells", href: "/shells" },
      { label: "Bosses", href: "/bosses" },
      { label: "Guides", href: "/guides" },
      { label: "News", href: "/news" },
      { label: "Editions", href: "/editions" },
      { label: "Download", href: "/download" },
    ],
    switchLanguage: "Switch language",
  },
  footer: {
    about:
      "An unofficial Mortal Shell II Wiki for Shells, bosses, Tarstones, editions, achievements, and early access updates.",
    email: "hello@mortalshell2.wiki",
    columns: [
      {
        title: "Wiki",
        links: [
          { label: "Shells", href: "/shells" },
          { label: "Bosses", href: "/bosses" },
          { label: "Guides", href: "/guides" },
          { label: "News", href: "/news" },
        ],
      },
      {
        title: "Guides",
        links: [
          { label: "Beginner Guide", href: "/guides/beginner-guide" },
          { label: "Shell Guide", href: "/guides/shell-guide" },
          { label: "Tarstone Guide", href: "/guides/tarstone-guide" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
          { label: "Disclaimer", href: "/disclaimer" },
        ],
      },
    ],
    copyright: "© 2026 Mortal Shell II Wiki All Rights Reserved.",
    disclaimer:
      "Unofficial fan wiki. Not affiliated with Cold Symmetry or Playstack.",
  },
} as const;
```

- [ ] **Step 2: 创建 Shell 占位数据与首页数据**

创建 `lib/data.ts`：

```ts
// PLACEHOLDER / early data — 非最终权威资料，正式上线前需二次核对拼写与数值。
export interface Shell {
  slug: string;
  name: string;
  description: string;
  confidence: "confirmed" | "community" | "roadmap";
  tags: [string, string, string];
  start: string;
  watch: string;
  source: string;
}

export const shells: Shell[] = [
  {
    slug: "tiel",
    name: "Tiel",
    description: "Agile, elusive, and strongest when fights stay clean.",
    confidence: "confirmed",
    tags: ["Rogue play", "Invisibility", "Hit-and-run"],
    start: "Use invisibility to land critical stabs, then re-engage from safety.",
    watch: "A fragile Shell that can be punished hard if caught in the open.",
    source: "Achievement unlock list (placeholder)",
  },
  {
    slug: "eredrim",
    name: "Eredrim",
    description: "A durable front-line Shell built to absorb and trade.",
    confidence: "confirmed",
    tags: ["High health", "Line-holding", "Slow tempo"],
    start: "Trade blows to build resolve, then spend it on heavy abilities.",
    watch: "Slow movement can leave you open to ranged pressure.",
    source: "Achievement unlock list (placeholder)",
  },
  {
    slug: "sariel",
    name: "Sariel",
    description: "A versatile Shell with balanced combat options.",
    confidence: "confirmed",
    tags: ["Balanced", "Flexible", "All-rounder"],
    start: "Adapt to the encounter instead of committing to one approach.",
    watch: "No single overwhelming strength against specialized threats.",
    source: "Achievement unlock list (placeholder)",
  },
  {
    slug: "lazlo",
    name: "Lazlo",
    description: "Heats its armor to unleash burning shockwaves.",
    confidence: "confirmed",
    tags: ["Fire", "Shockwave", "Heat meter"],
    start: "Live on the edge of the heat meter for bonus damage.",
    watch: "Overheating temporarily disables your armor.",
    source: "Achievement unlock list (placeholder)",
  },
  {
    slug: "proxima",
    name: "Proxima",
    description: "Fires a hook that pulls in and shocks enemies.",
    confidence: "confirmed",
    tags: ["Lightning", "Pull", "Damage-over-time"],
    start: "Pull fragile enemies toward you, then finish them at close range.",
    watch: "Lightning damage is over time, not burst.",
    source: "Achievement unlock list (placeholder)",
  },
  {
    slug: "smert",
    name: "Smert",
    description: "Halts time to stack chaos strikes that detonate at once.",
    confidence: "confirmed",
    tags: ["Time stop", "Chaos stacks", "Burst"],
    start: "Stack chaos during time stop, then detonate for burst damage.",
    watch: "The ability costs resolve and can push into overtime.",
    source: "Achievement unlock list (placeholder)",
  },
  {
    slug: "gragu",
    name: "Gragu",
    description: "A heavy brawler whose healing is earned through kills.",
    confidence: "confirmed",
    tags: ["Brawler", "Kill-heal", "Aggression"],
    start: "Stay aggressive to refill healing through takedowns.",
    watch: "Passive healing starts weaker until upgraded.",
    source: "Achievement unlock list (placeholder)",
  },
  {
    slug: "sester-genessa",
    name: "Sester Genessa",
    description: "Summons faithful doubles that copy your strikes.",
    confidence: "confirmed",
    tags: ["Summons", "Doubles", "Sustain"],
    start: "Summon doubles to double your damage output safely.",
    watch: "Becoming stray changes how your healing works.",
    source: "Achievement unlock list (placeholder)",
  },
];

export const home = {
  hero: {
    eyebrow: "Unofficial souls-like guide",
    title: "Mortal Shell II Wiki",
    description:
      "Mortal Shell II is a standalone dark fantasy action RPG sequel built around fast, high-risk combat and free exploration. Possess warrior Shells, master strange weapons, and dethrone false gods.",
    ctas: [
      { label: "Start Beginner Guide", href: "/guides/beginner-guide", primary: true },
      { label: "Open Steam", href: "https://store.steampowered.com/app/2584270/Mortal_Shell_II/", primary: false },
    ],
    stats: [
      { label: "Developer", value: "Cold Symmetry" },
      { label: "Release", value: "Aug 20, 2026" },
      { label: "Genre", value: "Action RPG" },
    ],
  },
  entryCards: [
    { title: "Beginner Guide", href: "/guides/beginner-guide", description: "Learn the core combat flow, Shell possession, and the safest first steps." },
    { title: "Shells", href: "/shells", description: "Compare playable Shells, their roles, and combat styles." },
    { title: "Bosses", href: "/bosses", description: "Prepare for Tar Golem, trial areas, and high-friction encounters." },
    { title: "Tarstones", href: "/tarstones", description: "Track collectible Tarstones and route them efficiently." },
    { title: "Editions", href: "/editions", description: "Compare Devout, Revered, and Standard editions." },
  ],
  keywordHub: {
    title: "Mortal Shell II searches routed to useful pages",
    items: [
      { label: "Mortal Shell II release date", href: "/release-date" },
      { label: "Mortal Shell II achievements", href: "/achievements" },
      { label: "Mortal Shell II tarstone locations", href: "/tarstones" },
      { label: "Mortal Shell II fast travel", href: "/guides/fast-travel" },
      { label: "Mortal Shell II review", href: "/review" },
      { label: "Mortal Shell II editions", href: "/editions" },
    ],
  },
  guides: [
    { title: "Beginner Guide", category: "Beginner", href: "/guides/beginner-guide", description: "A stable counter triangle before chasing rares." },
    { title: "Shell Guide", category: "Shells", href: "/guides/shell-guide", description: "Choose a Shell by the fight shape you enjoy." },
    { title: "Tarstone Guide", category: "Tarstones", href: "/guides/tarstone-guide", description: "Slot the Tarstone that fixes your real battle limit." },
  ],
};
```

- [ ] **Step 3: 验证类型检查**

Run: `npx tsc --noEmit`

预期：无输出（无类型错误）。

- [ ] **Step 4: 提交**

```bash
git add lib/
git commit -m "feat: add placeholder data and english UI dictionary"
```

---

## Task 4: 全局壳（SiteHeader + SiteFooter + LanguageSwitcher）

**Files:**
- Create: `components/LanguageSwitcher.tsx`
- Create: `components/SiteHeader.tsx`
- Create: `components/SiteFooter.tsx`
- Modify: `app/layout.tsx`（引入全局壳 SiteHeader + SiteFooter）

- [ ] **Step 1: 创建 LanguageSwitcher（占位，无切换逻辑）**

创建 `components/LanguageSwitcher.tsx`：

```tsx
import { i18n } from "@/lib/i18n";

export function LanguageSwitcher() {
  return (
    <button
      type="button"
      className="rounded border border-border px-3 py-1.5 text-sm text-foreground hover:border-gold hover:text-gold"
    >
      {i18n.nav.switchLanguage}
    </button>
  );
}
```

- [ ] **Step 2: 创建 SiteHeader**

创建 `components/SiteHeader.tsx`：

```tsx
import Link from "next/link";
import { i18n } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <img src="/favicon-32x32.png" alt="" className="h-8 w-8" />
          <span className="font-heading text-lg font-bold tracking-wide text-gold">
            {i18n.nav.brand}
          </span>
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {i18n.nav.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
```

- [ ] **Step 3: 创建 SiteFooter**

创建 `components/SiteFooter.tsx`：

```tsx
import Link from "next/link";
import { i18n } from "@/lib/i18n";

export function SiteFooter() {
  const { about, email, columns, copyright, disclaimer } = i18n.footer;
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <span className="font-heading text-lg font-bold text-gold">
              {i18n.nav.brand}
            </span>
            <p className="mt-3 max-w-sm text-sm text-muted">{about}</p>
            <Link href={`mailto:${email}`} className="mt-3 inline-block text-sm text-gold hover:underline">
              Email
            </Link>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-foreground">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted hover:text-gold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-border pt-6 text-sm text-muted">
          <p>{copyright}</p>
          <p className="mt-1">{disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: 在 layout.tsx 引入全局壳**

修改 `app/layout.tsx`，在 `import` 区添加：

```tsx
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
```

并把 `<body className="antialiased">{children}</body>` 替换为：

```tsx
<body className="antialiased">
  <SiteHeader />
  <main>{children}</main>
  <SiteFooter />
</body>
```

- [ ] **Step 5: 验证构建**

Run: `npm run build`

预期：BUILD SUCCESSFUL。

- [ ] **Step 6: 提交**

```bash
git add components/SiteHeader.tsx components/SiteFooter.tsx components/LanguageSwitcher.tsx app/layout.tsx
git commit -m "feat: add global shell (header, footer, language switcher)"
```

---

## Task 5: 首页

**Files:**
- Create: `components/Hero.tsx`
- Create: `components/EntryCards.tsx`
- Create: `components/KeywordHub.tsx`
- Create: `components/GuideCardLibrary.tsx`
- Modify: `app/page.tsx`（重写）

- [ ] **Step 1: 创建 Hero**

创建 `components/Hero.tsx`：

```tsx
import Link from "next/link";
import { home } from "@/lib/data";

export function Hero() {
  const { eyebrow, title, description, ctas, stats } = home.hero;
  return (
    <section className="relative border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm uppercase tracking-widest text-gold">{eyebrow}</p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-foreground sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          {ctas.map((cta) =>
            cta.primary ? (
              <Link
                key={cta.label}
                href={cta.href}
                className="rounded bg-gold px-5 py-2.5 font-semibold text-background hover:opacity-90"
              >
                {cta.label}
              </Link>
            ) : (
              <Link
                key={cta.label}
                href={cta.href}
                className="rounded border border-gold px-5 py-2.5 font-semibold text-gold hover:bg-gold hover:text-background"
              >
                {cta.label}
              </Link>
            ),
          )}
        </div>
        <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-sm text-muted">{stat.label}</dt>
              <dd className="mt-1 text-lg text-foreground">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: 创建 EntryCards**

创建 `components/EntryCards.tsx`：

```tsx
import Link from "next/link";
import { home } from "@/lib/data";

export function EntryCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {home.entryCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded border border-border bg-card p-5 transition-colors hover:border-gold"
          >
            <h2 className="font-heading text-lg font-semibold text-gold group-hover:text-foreground">
              {card.title}
            </h2>
            <p className="mt-2 text-sm text-muted">{card.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: 创建 KeywordHub**

创建 `components/KeywordHub.tsx`：

```tsx
import Link from "next/link";
import { home } from "@/lib/data";

export function KeywordHub() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="font-heading text-2xl font-semibold text-foreground">
        {home.keywordHub.title}
      </h2>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {home.keywordHub.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded border border-border bg-card px-4 py-3 transition-colors hover:border-gold"
          >
            <span className="text-sm text-foreground">{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: 创建 GuideCardLibrary**

创建 `components/GuideCardLibrary.tsx`：

```tsx
import Link from "next/link";
import { home } from "@/lib/data";

export function GuideCardLibrary() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="font-heading text-2xl font-semibold text-foreground">Guide library</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {home.guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group overflow-hidden rounded border border-border bg-card transition-colors hover:border-gold"
          >
            <div className="aspect-video w-full bg-border" aria-hidden />
            <div className="p-5">
              <span className="text-xs uppercase tracking-widest text-gold">{guide.category}</span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-foreground group-hover:text-gold">
                {guide.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{guide.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: 组装首页**

将 `app/page.tsx` 完整替换为：

```tsx
import { Hero } from "@/components/Hero";
import { EntryCards } from "@/components/EntryCards";
import { KeywordHub } from "@/components/KeywordHub";
import { GuideCardLibrary } from "@/components/GuideCardLibrary";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EntryCards />
      <KeywordHub />
      <GuideCardLibrary />
    </>
  );
}
```

- [ ] **Step 6: 验证构建**

Run: `npm run build`

预期：BUILD SUCCESSFUL。

- [ ] **Step 7: 提交**

```bash
git add app/page.tsx components/Hero.tsx components/EntryCards.tsx components/KeywordHub.tsx components/GuideCardLibrary.tsx
git commit -m "feat: add home page (hero, entry cards, keyword hub, guide library)"
```

---

## Task 6: Shells 列表页

**Files:**
- Create: `components/PageHeader.tsx`
- Create: `components/EntityCard.tsx`
- Create: `components/FaqAccordion.tsx`
- Create: `app/shells/page.tsx`

- [ ] **Step 1: 创建 PageHeader**

创建 `components/PageHeader.tsx`：

```tsx
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="text-sm uppercase tracking-widest text-gold">{eyebrow}</p>
        <h1 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">{description}</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: 创建 EntityCard**

创建 `components/EntityCard.tsx`：

```tsx
import Link from "next/link";
import type { Shell } from "@/lib/data";

const confidenceLabel: Record<Shell["confidence"], string> = {
  confirmed: "Confirmed",
  community: "Community reported",
  roadmap: "Roadmap",
};

export function EntityCard({ shell }: { shell: Shell }) {
  return (
    <article className="rounded border border-border bg-card p-6">
      <p className="text-xs uppercase tracking-widest text-gold">
        {confidenceLabel[shell.confidence]}
      </p>
      <h2 className="mt-2 font-heading text-xl font-semibold text-foreground">
        <Link href={`/shells/${shell.slug}`} className="hover:text-gold">
          {shell.name}
        </Link>
      </h2>
      <p className="mt-2 text-sm text-muted">{shell.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {shell.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-border px-2.5 py-1 text-xs text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 space-y-2 text-sm">
        <p>
          <span className="font-semibold text-gold">Start: </span>
          <span className="text-muted">{shell.start}</span>
        </p>
        <p>
          <span className="font-semibold text-gold">Watch: </span>
          <span className="text-muted">{shell.watch}</span>
        </p>
        <p>
          <span className="font-semibold text-gold">Source: </span>
          <span className="text-muted">{shell.source}</span>
        </p>
      </div>
    </article>
  );
}
```

- [ ] **Step 3: 创建 FaqAccordion（原生 details）**

创建 `components/FaqAccordion.tsx`：

```tsx
export function FaqAccordion({ items }: { items: string[] }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="font-heading text-2xl font-semibold text-foreground">FAQ</h2>
      <div className="mt-6 space-y-3">
        {items.map((question) => (
          <details
            key={question}
            className="group rounded border border-border bg-card px-5 py-4"
          >
            <summary className="cursor-pointer list-none font-semibold text-foreground group-open:text-gold">
              {question}
            </summary>
            <p className="mt-3 text-sm text-muted">
              Placeholder answer. This FAQ entry will be filled during the content phase.
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: 组装列表页**

创建 `app/shells/page.tsx`：

```tsx
import { shells } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { EntityCard } from "@/components/EntityCard";
import { FaqAccordion } from "@/components/FaqAccordion";

export default function ShellsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Shells"
        title="Mortal Shell II Shells"
        description="Choose Shells by playstyle. Confirmed launch Shells get decision guidance now; community labels stay marked until exact in-game data is stronger."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shells.map((shell) => (
            <EntityCard key={shell.slug} shell={shell} />
          ))}
        </div>
      </section>
      <FaqAccordion
        items={[
          "Which Shell is best for beginners?",
          "How many Shells are in Mortal Shell II?",
          "Can I switch Shells freely?",
        ]}
      />
    </>
  );
}
```

- [ ] **Step 5: 验证构建**

Run: `npm run build`

预期：BUILD SUCCESSFUL。

- [ ] **Step 6: 提交**

```bash
git add app/shells/page.tsx components/PageHeader.tsx components/EntityCard.tsx components/FaqAccordion.tsx
git commit -m "feat: add shells list page"
```

---

## Task 7: Shell 详情页

**Files:**
- Create: `components/ArticleHeader.tsx`
- Create: `components/ProseBody.tsx`
- Create: `components/RelatedSidebar.tsx`
- Create: `app/shells/[slug]/page.tsx`

- [ ] **Step 1: 创建 ArticleHeader**

创建 `components/ArticleHeader.tsx`：

```tsx
import type { Shell } from "@/lib/data";

export function ArticleHeader({ shell }: { shell: Shell }) {
  return (
    <div className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {shell.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border px-2.5 py-1 text-xs text-gold"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-5xl">
          {shell.name}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">{shell.description}</p>
        <div className="mt-8 aspect-video w-full max-w-3xl rounded border border-border bg-border" aria-hidden />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: 创建 ProseBody（组件假内容）**

创建 `components/ProseBody.tsx`：

```tsx
import type { Shell } from "@/lib/data";

export function ProseBody({ shell }: { shell: Shell }) {
  return (
    <div className="prose-invert mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="font-heading text-2xl font-semibold text-foreground">
        How to play {shell.name}
      </h2>
      <p className="mt-4 text-muted">{shell.start}</p>
      <p className="mt-4 text-muted">
        Placeholder body copy. This section will hold the full in-depth guide for
        this Shell during the content phase.
      </p>

      <h2 className="mt-10 font-heading text-2xl font-semibold text-foreground">
        What to watch for
      </h2>
      <p className="mt-4 text-muted">{shell.watch}</p>

      <h2 className="mt-10 font-heading text-2xl font-semibold text-foreground">
        Early notes
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
        <li>Placeholder bullet one — to be replaced with sourced guidance.</li>
        <li>Placeholder bullet two — to be replaced with sourced guidance.</li>
        <li>Placeholder bullet three — to be replaced with sourced guidance.</li>
      </ul>
    </div>
  );
}
```

- [ ] **Step 3: 创建 RelatedSidebar**

创建 `components/RelatedSidebar.tsx`：

```tsx
import Link from "next/link";

const related = [
  { label: "Shells", href: "/shells" },
  { label: "Bosses", href: "/bosses" },
  { label: "Beginner Guide", href: "/guides/beginner-guide" },
];

export function RelatedSidebar() {
  return (
    <aside className="px-4 py-8 sm:px-6">
      <h2 className="font-heading text-lg font-semibold text-foreground">Related pages</h2>
      <ul className="mt-4 space-y-3">
        {related.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-gold hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
```

- [ ] **Step 4: 组装详情页（含 generateStaticParams）**

创建 `app/shells/[slug]/page.tsx`：

```tsx
import { notFound } from "next/navigation";
import { shells } from "@/lib/data";
import { ArticleHeader } from "@/components/ArticleHeader";
import { ProseBody } from "@/components/ProseBody";
import { RelatedSidebar } from "@/components/RelatedSidebar";
import { FaqAccordion } from "@/components/FaqAccordion";

export function generateStaticParams() {
  return shells.map((shell) => ({ slug: shell.slug }));
}

export default async function ShellDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const shell = shells.find((s) => s.slug === slug);
  if (!shell) notFound();

  return (
    <>
      <ArticleHeader shell={shell} />
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[1fr_280px]">
        <ProseBody shell={shell} />
        <RelatedSidebar />
      </div>
      <FaqAccordion
        items={[
          `How do I unlock ${shell.name}?`,
          `What is ${shell.name}'s best build?`,
          `Is ${shell.name} good for new players?`,
        ]}
      />
    </>
  );
}
```

- [ ] **Step 5: 验证构建**

Run: `npm run build`

预期：BUILD SUCCESSFUL，`.next/server/app/shells/` 下生成 `tiel`、`eredrim` 等静态页。

- [ ] **Step 6: 提交**

```bash
git add "app/shells/[slug]/page.tsx" components/ArticleHeader.tsx components/ProseBody.tsx components/RelatedSidebar.tsx
git commit -m "feat: add shell detail page"
```

---

## Task 8: 构建验证 + 视觉验收

**Files:**
- 无新增

- [ ] **Step 1: 完整构建**

Run: `npm run build`

预期：BUILD SUCCESSFUL，无类型/构建错误。

- [ ] **Step 2: 启动开发服务器**

Run: `npm run dev`

预期：启动于 `http://localhost:3000`。

- [ ] **Step 3: 视觉对照三页**

用浏览器分别打开并截图，对照 tabletoptavern.wiki 检查结构与配色：
- `http://localhost:3000/`
- `http://localhost:3000/shells`
- `http://localhost:3000/shells/tiel`

检查项（对照设计文档 §9 验收标准）：
1. 三页区块顺序与对标站一致（导航 → hero/页头 → 卡片列表 → FAQ → 页脚）
2. 配色为黑 + 血红 `#920203` + 金 `#ffb900`，字体为 Cinzel 标题 / Cormorant 正文
3. 导航/页脚/语言切换按钮三页一致
4. 移动端（窄视口）布局不溢出

- [ ] **Step 4: 修正视觉问题并提交（如有）**

```bash
git add -A
git commit -m "fix: polish shell layout and responsive styling"
```

---

## Task 9: 补齐血红主色应用 + /shells 结论区

最终审查（final review）发现两处 spec 缺口，本任务补齐。

**Files:**
- Modify: `components/EntityCard.tsx`（confidence 标签用血红）
- Modify: `components/ArticleHeader.tsx`（tag chips 用血红）
- Modify: `components/FaqAccordion.tsx`（summary 展开态用血红）
- Create: `components/ConclusionSection.tsx`
- Modify: `app/shells/page.tsx`（插入结论区）

血红 `#920203`（`text-primary`）作为「强调/选中/状态」第三主色，与品牌金 `#ffb900`（`text-gold`，CTA/品牌/hover）并列；不改动任何 `text-gold` 的 CTA/品牌/hover 语义。

- [ ] **Step 1: EntityCard confidence 标签改为血红**

`components/EntityCard.tsx` 中，把 confidence 标签的 `text-gold` 改为 `text-primary`：

```tsx
<p className="text-xs uppercase tracking-widest text-primary">
  {confidenceLabel[shell.confidence]}
</p>
```

（其余 `Start:`/`Watch:`/`Source:` 的 `text-gold` 标签保持不变。）

- [ ] **Step 2: ArticleHeader tag chips 改为血红**

`components/ArticleHeader.tsx` 中，把 tag chips 的 `text-gold` 改为 `text-primary`：

```tsx
<span
  key={tag}
  className="rounded border border-border px-2.5 py-1 text-xs text-primary"
>
  {tag}
</span>
```

- [ ] **Step 3: FaqAccordion summary 展开态改为血红**

`components/FaqAccordion.tsx` 中，把 summary 的 `group-open:text-gold` 改为 `group-open:text-primary`：

```tsx
<summary className="cursor-pointer list-none font-semibold text-foreground group-open:text-primary">
  {question}
</summary>
```

- [ ] **Step 4: 创建 ConclusionSection**

创建 `components/ConclusionSection.tsx`：

```tsx
import Link from "next/link";

export function ConclusionSection({
  title,
  body,
  links,
}: {
  title: string;
  body: string;
  links: { label: string; href: string }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="rounded border border-border bg-card p-8">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-muted">{body}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded border border-gold px-5 py-2.5 font-semibold text-gold hover:bg-gold hover:text-background"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: 在 /shells 插入结论区**

`app/shells/page.tsx` 中：
1. 在 import 区添加 `import { ConclusionSection } from "@/components/ConclusionSection";`
2. 在 EntityCard 网格的 `</section>` 之后、`<FaqAccordion` 之前，插入：

```tsx
<ConclusionSection
  title="Choosing your first Shell"
  body="Start with a Shell that matches your preferred fight tempo. Confirm your pick against the in-game data before committing upgrade resources."
  links={[
    { label: "Beginner Guide", href: "/guides/beginner-guide" },
    { label: "Bosses", href: "/bosses" },
    { label: "Tarstones", href: "/tarstones" },
  ]}
/>
```

- [ ] **Step 6: 验证构建**

Run: `npm run build`

预期：BUILD SUCCESSFUL。

- [ ] **Step 7: 提交**

```bash
git add components/EntityCard.tsx components/ArticleHeader.tsx components/FaqAccordion.tsx components/ConclusionSection.tsx app/shells/page.tsx
git commit -m "fix: apply crimson primary color and add shells conclusion section"
```

---

## Self-Review 记录

- **Spec 覆盖**：设计文档 §2（技术栈）→ Task 1/2；§3（配色/字体）→ Task 2；§4（三页结构+组件清单）→ Task 4/5/6/7；§5（路由）→ Task 5/6/7；§6（目录结构）→ Task 1-7；§7（数据）→ Task 3。全部覆盖。
- **占位符扫描**：正文中的 "Placeholder ..." 文案是刻意为之（壳阶段占位，非计划占位符），符合设计文档 §8 范围界定。
- **类型一致性**：`Shell` 接口字段（slug/name/description/confidence/tags/start/watch/source）在 `lib/data.ts`、`EntityCard`、`ArticleHeader`、`ProseBody`、`app/shells/[slug]/page.tsx` 中一致使用；`i18n` 结构在 `SiteHeader`/`SiteFooter`/`LanguageSwitcher` 中一致使用。
