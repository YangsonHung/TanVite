import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { SiteLanguage } from "../lib/site-language";
import { useSiteLanguage } from "../lib/site-language";

type GuideSection = {
  title: string;
  points: ReactNode[];
};

type GuideCopy = {
  pageLabel: string;
  title: string;
  backToLanding: string;
  overviewLabel: string;
  overviewBody: string;
  sections: GuideSection[];
  commandsLabel: string;
  commandsTitle: string;
  commandCards: [string, string][];
  linksLabel: string;
  linksTitle: string;
  linksBody: string;
  openSite: string;
  openRepository: string;
  reportIssue: string;
};

const guideCopy: Record<SiteLanguage, GuideCopy> = {
  en: {
    pageLabel: "TanVite Guide",
    title: "Lightweight docs for a spec-driven, AI-ready starter",
    backToLanding: "Back to landing",
    overviewLabel: "Overview",
    overviewBody:
      "Use this page as the fast path into TanVite. It gives new visitors enough structure to evaluate the starter, understand the shared .agents/skills catalog for Codex and Claude Code, wire a backend contract into the stack, and jump into the repository without turning the showcase into a heavy documentation site.",
    sections: [
      {
        title: "Getting started",
        points: [
          <>
            Install dependencies with <code>pnpm install</code>.
          </>,
          <>
            Copy <code>.env.example</code> to <code>.env.local</code> and replace{" "}
            <code>OPENAPI_SCHEMA_URL</code> with your backend Swagger/OpenAPI URL.
          </>,
          <>
            Validate the contract with <code>pnpm openapi:check</code> and generate clients with{" "}
            <code>pnpm openapi:generate</code>.
          </>,
          <>
            Start the local development environment with <code>pnpm dev</code>.
          </>,
          <>
            Use <code>pnpm build</code> for the standard production bundle.
          </>,
          <>
            Use <code>pnpm build:pages</code> when preparing the public showcase site.
          </>,
        ],
      },
      {
        title: "Included stack",
        points: [
          "React 19 + TypeScript + Vite 5",
          "OpenSpec in spec-driven mode and a shared .agents/skills catalog",
          "Codex and Claude Code support on top of TanStack Router, TanStack Query, Orval, MSW, Prism, Biome, Vitest, and Playwright",
        ],
      },
      {
        title: "Spec and agent workflow",
        points: [
          "Track proposals under openspec/, keep reusable skills under .agents/skills, and version both with the project",
          "Use shared skills for frontend design, code review, browser testing, React and TypeScript guidance, and git delivery",
          "Regenerate OpenAPI clients on demand and keep product code on top of the existing routing, styling, testing, and CI baseline",
        ],
      },
    ],
    commandsLabel: "Commands",
    commandsTitle: "Starter commands",
    commandCards: [
      ["Install", "pnpm install"],
      ["OpenSpec", "openspec list"],
      ["Check schema", "pnpm openapi:check"],
      ["Generate API", "pnpm openapi:generate"],
      ["Develop", "pnpm dev"],
      ["Mock in app", "pnpm dev:mock"],
    ],
    linksLabel: "Project links",
    linksTitle: "Open the project, the code, or the issue tracker",
    linksBody:
      "Start with the public site for the polished overview, then move to the repository when you want source code, template usage, contribution details, or issue tracking.",
    openSite: "Open site",
    openRepository: "Open repository",
    reportIssue: "Report an issue",
  },
  "zh-CN": {
    pageLabel: "TanVite 指南",
    title: "面向 spec-driven 与 AI 协作 starter 的轻量说明页",
    backToLanding: "返回首页",
    overviewLabel: "概览",
    overviewBody:
      "把这个页面当成进入 TanVite 的快速入口。它会先让访客看懂这个 starter 的定位、面向 Codex 与 Claude Code 的共享 .agents/skills 技能目录、后端契约接入方式，以及如何继续深入仓库，而不把展示页做成一套笨重的文档站。",
    sections: [
      {
        title: "快速上手",
        points: [
          <>
            使用 <code>pnpm install</code> 安装依赖。
          </>,
          <>
            将 <code>.env.example</code> 复制为 <code>.env.local</code>，并把{" "}
            <code>OPENAPI_SCHEMA_URL</code> 改成你的后端 Swagger/OpenAPI 地址。
          </>,
          <>
            先执行 <code>pnpm openapi:check</code> 校验契约，再运行{" "}
            <code>pnpm openapi:generate</code> 生成客户端。
          </>,
          <>
            使用 <code>pnpm dev</code> 启动本地开发环境。
          </>,
          <>
            常规生产构建使用 <code>pnpm build</code>。
          </>,
          <>
            对外展示站构建使用 <code>pnpm build:pages</code>。
          </>,
        ],
      },
      {
        title: "内置能力",
        points: [
          "React 19 + TypeScript + Vite 5",
          "spec-driven 模式的 OpenSpec 与共享 .agents/skills 技能目录",
          "在 TanStack Router、TanStack Query、Orval、MSW、Prism、Biome、Vitest 和 Playwright 之上支持 Codex 与 Claude Code",
        ],
      },
      {
        title: "规格与技能工作流",
        points: [
          "在 openspec/ 中管理提案，在 .agents/skills 中维护复用技能，并让两者一起进入版本控制",
          "把共享技能用于前端设计、代码审查、浏览器测试、React / TypeScript 专项支持和 Git 交付流程",
          "按需重新生成 OpenAPI 客户端，同时让业务代码继续建立在现有路由、样式、测试和 CI 基线上",
        ],
      },
    ],
    commandsLabel: "命令",
    commandsTitle: "Starter 常用命令",
    commandCards: [
      ["安装", "pnpm install"],
      ["查看 OpenSpec", "openspec list"],
      ["校验契约", "pnpm openapi:check"],
      ["生成 API", "pnpm openapi:generate"],
      ["开发", "pnpm dev"],
      ["应用内 Mock", "pnpm dev:mock"],
    ],
    linksLabel: "项目链接",
    linksTitle: "打开站点、源码仓库或问题跟踪",
    linksBody: "先看展示站掌握整体定位，再进入仓库查看源码、模板用法、贡献说明和 issue 跟踪。",
    openSite: "打开站点",
    openRepository: "打开仓库",
    reportIssue: "提交问题",
  },
};

export const Route = createFileRoute("/guide")({
  component: GuidePage,
});

function LanguageToggle({
  language,
  setLanguage,
}: {
  language: SiteLanguage;
  setLanguage: (nextLanguage: SiteLanguage) => void;
}) {
  return (
    <div className="flex items-center rounded-full border border-foreground/15 bg-white/60 p-1 backdrop-blur">
      <button
        aria-pressed={language === "en"}
        className={`rounded-full px-3 py-2 text-xs font-medium transition ${
          language === "en"
            ? "bg-foreground text-background"
            : "text-foreground/65 hover:text-foreground"
        }`}
        onClick={() => setLanguage("en")}
        type="button"
      >
        EN
      </button>
      <button
        aria-pressed={language === "zh-CN"}
        className={`rounded-full px-3 py-2 text-xs font-medium transition ${
          language === "zh-CN"
            ? "bg-foreground text-background"
            : "text-foreground/65 hover:text-foreground"
        }`}
        onClick={() => setLanguage("zh-CN")}
        type="button"
      >
        中文
      </button>
    </div>
  );
}

function GuidePage() {
  const { language, setLanguage } = useSiteLanguage();
  const copy = guideCopy[language];

  return (
    <main className="grain-overlay relative min-h-screen overflow-hidden px-6 py-8 md:px-10 lg:px-12">
      <div className="hero-ring left-[-8rem] top-16 h-72 w-72" />
      <div className="hero-ring right-[-9rem] top-12 h-80 w-80" />

      <div className="relative mx-auto max-w-6xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-foreground/10 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/45">
              {copy.pageLabel}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-foreground md:text-6xl">
              {copy.title}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <Link
              className="rounded-full border border-foreground/15 bg-white/65 px-5 py-3 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:bg-white/85"
              to="/"
            >
              {copy.backToLanding}
            </Link>
          </div>
        </header>

        <section className="grid gap-6 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-foreground/10 bg-white/70 p-6 backdrop-blur panel-shadow md:p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-foreground/45">
              {copy.overviewLabel}
            </p>
            <p className="mt-4 text-lg leading-8 text-foreground/68">{copy.overviewBody}</p>

            <div className="mt-8 grid gap-4">
              {copy.sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-[1.5rem] border border-foreground/10 bg-background/70 p-5"
                >
                  <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground/62">
                    {section.points.map((point, index) => (
                      <li key={`${section.title}-${index}`}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <section className="rounded-[2rem] border border-foreground/10 bg-foreground p-6 text-background panel-shadow md:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-background/55">
                {copy.commandsLabel}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                {copy.commandsTitle}
              </h2>

              <div className="mt-8 grid gap-3">
                {copy.commandCards.map(([label, command]) => (
                  <div
                    key={command}
                    className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <div className="text-xs uppercase tracking-[0.28em] text-background/50">
                      {label}
                    </div>
                    <code className="mt-2 block text-sm text-background/88">{command}</code>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-foreground/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(247,232,214,0.92))] p-6 panel-shadow md:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-foreground/45">
                {copy.linksLabel}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                {copy.linksTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-foreground/62">{copy.linksBody}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  className="rounded-full border border-foreground/15 bg-white/70 px-4 py-2 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:bg-white/90"
                  href="https://yangsonhung.github.io/TanVite"
                  rel="noreferrer"
                  target="_blank"
                >
                  {copy.openSite}
                </a>
                <a
                  className="rounded-full border border-foreground/15 bg-white/70 px-4 py-2 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:bg-white/90"
                  href="https://github.com/YangsonHung/TanVite"
                  rel="noreferrer"
                  target="_blank"
                >
                  {copy.openRepository}
                </a>
                <a
                  className="rounded-full border border-foreground/15 bg-white/70 px-4 py-2 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:bg-white/90"
                  href="https://github.com/YangsonHung/TanVite/issues"
                  rel="noreferrer"
                  target="_blank"
                >
                  {copy.reportIssue}
                </a>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
