import type { SVGProps } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import type { SiteLanguage } from "../lib/site-language";
import { useSiteLanguage } from "../lib/site-language";

export const Route = createFileRoute("/")({
  component: HomePage,
});

type StatItem = [string, string, string];
type ToolchainItem = [string, string, string];
type WorkflowItem = [string, string];
type CommandItem = [string, string];

type HomeCopy = {
  heroBadge: string;
  heroTitle: string;
  heroBody: string;
  primaryCta: string;
  guideCta: string;
  supportCta: string;
  repoLabel: string;
  statusBadge: string;
  starterStats: StatItem[];
  toolchainLabel: string;
  toolchainTitle: string;
  toolchainItems: ToolchainItem[];
  startHere: string;
  workflowLabel: string;
  workflowTitle: string;
  workflowItems: WorkflowItem[];
  commandsLabel: string;
  commandsTitle: string;
  commandItems: CommandItem[];
  snapshotLabel: string;
  snapshotTitle: string;
  snapshotBody: string;
  codePreview: string;
};

const homeCopy: Record<SiteLanguage, HomeCopy> = {
  en: {
    heroBadge: "AI-ready Web Starter",
    heroTitle:
      "Build sharp React apps with specs, shared agent skills, contracts, and testing already wired.",
    heroBody:
      "TanVite is a focused front-end baseline for teams that want OpenSpec, a shared .agents/skills catalog for Codex and Claude Code, React 19, TanStack Router, TanStack Query, OpenAPI tooling, Tailwind CSS, Biome, Vitest, and Playwright working together without carrying the usual starter clutter.",
    primaryCta: "Explore the stack",
    guideCta: "Read the guide",
    supportCta: "Codex + Claude Code",
    repoLabel: "Open GitHub repository",
    statusBadge: "Ready to Ship",
    starterStats: [
      ["01", "React 19 + TypeScript", "Current React APIs with a strict TS baseline."],
      [
        "02",
        "OpenSpec + Agent Skills",
        "Spec-driven change tracking and a shared skill catalog for Codex and Claude Code are prepared together.",
      ],
      [
        "03",
        "OpenAPI + Testing",
        "Contract generation, mock workflows, unit tests, and E2E checks are already part of the flow.",
      ],
    ],
    toolchainLabel: "Toolchain",
    toolchainTitle: "Production-minded defaults",
    toolchainItems: [
      [
        "Spec",
        "OpenSpec",
        "Spec-driven change proposals and baseline specs live inside the repository from day one.",
      ],
      [
        "Skills",
        ".agents/skills",
        "The shared skill catalog supports Codex and Claude Code with frontend design, review, testing, React, TypeScript, and git workflows.",
      ],
      ["Routing", "TanStack Router", "File-based routes with generated route tree support."],
      [
        "Data",
        "TanStack Query + OpenAPI",
        "Shared query defaults plus generated API hooks, clients, and mocks.",
      ],
      [
        "Quality",
        "Biome + Playwright",
        "Linting, formatting, unit tests, E2E checks, and mock flows are already scripted.",
      ],
    ],
    startHere: "Start here",
    workflowLabel: "Workflow",
    workflowTitle: "Starter mechanics without starter chaos",
    workflowItems: [
      [
        "Bootstrap",
        "Install dependencies, generate the route tree, and start the Vite dev server with one predictable path.",
      ],
      [
        "Specify and build",
        "Track changes in openspec/, reuse shared skills from .agents/skills, add routes under src/routes, and regenerate API clients from OpenAPI.",
      ],
      [
        "Verify and ship",
        "Run Biome, unit tests, Playwright, and mock flows before production builds so starter quality stays enforceable.",
      ],
    ],
    commandsLabel: "CLI Quickstart",
    commandsTitle: "Commands you actually need on day one",
    commandItems: [
      ["Install", "pnpm install"],
      ["Develop", "pnpm dev"],
      ["OpenSpec", "openspec list"],
      ["OpenAPI", "pnpm openapi:generate"],
      ["Generate routes", "pnpm routes:generate"],
      ["Test once", "pnpm test:run"],
      ["Build", "pnpm build"],
      ["E2E", "pnpm test:e2e"],
    ],
    snapshotLabel: "Project Snapshot",
    snapshotTitle: "File layout that stays legible as the app grows",
    snapshotBody:
      "Spec artifacts, agent skills, routes, shared utilities, and generated contracts are separated clearly, so adding more screens does not immediately collapse into a generic template mess.",
    codePreview: `src/
├── routes/
│   ├── __root.tsx
│   └── index.tsx
├── lib/
│   ├── api/
│   ├── query-client.ts
│   └── utils.ts
└── routeTree.gen.ts

openspec/
├── changes/
├── specs/
└── config.yaml

.agents/
└── skills/
    ├── frontend-design/
    ├── react-expert/
    └── webapp-testing/

openspec list
pnpm openapi:generate
pnpm routes:generate
pnpm dev`,
  },
  "zh-CN": {
    heroBadge: "AI 协作型 Web Starter",
    heroTitle: "把规格、共享技能、接口契约和测试链路一次性接好的 React 项目基线。",
    heroBody:
      "TanVite 是一个聚焦型前端工程基线，适合希望把 OpenSpec、面向 Codex 与 Claude Code 的共享 .agents/skills 技能目录、React 19、TanStack Router、TanStack Query、OpenAPI 工具链、Tailwind CSS、Biome、Vitest 和 Playwright 一起用起来的团队。",
    primaryCta: "查看技术栈",
    guideCta: "阅读指南",
    supportCta: "支持 Codex / Claude Code",
    repoLabel: "打开 GitHub 仓库",
    statusBadge: "开箱可用",
    starterStats: [
      ["01", "React 19 + TypeScript", "基于当前 React API 与严格 TypeScript 约束。"],
      [
        "02",
        "OpenSpec + 技能层",
        "Spec-driven 变更管理和面向 Codex、Claude Code 的共享技能目录已经一并准备好。",
      ],
      ["03", "OpenAPI + 测试", "接口生成、Mock 工作流、单测和 E2E 校验已经纳入仓库默认链路。"],
    ],
    toolchainLabel: "工具链",
    toolchainTitle: "面向生产环境的默认配置",
    toolchainItems: [
      ["规格", "OpenSpec", "变更提案与基础规格从第一天开始就沉淀在仓库内部。"],
      [
        "技能",
        ".agents/skills",
        "共享技能目录同时服务 Codex 和 Claude Code，覆盖前端设计、评审、测试、React、TypeScript 和 Git 工作流。",
      ],
      ["路由", "TanStack Router", "文件路由与生成式路由树已经接好。"],
      [
        "数据",
        "TanStack Query + OpenAPI",
        "共享 Query 默认配置，以及基于契约生成的 API hooks、client 和 mock。",
      ],
      ["质量", "Biome + Playwright", "Lint、格式化、单测、E2E 与 mock 工作流都已经脚本化。"],
    ],
    startHere: "从这里开始",
    workflowLabel: "工作流",
    workflowTitle: "保留工程秩序，不保留模板噪音",
    workflowItems: [
      ["初始化", "安装依赖、生成路由树、启动 Vite 开发服务器，整个起步路径保持可预测。"],
      [
        "规格到实现",
        "在 openspec/ 中跟踪变更，复用 .agents/skills 里的共享技能，在 src/routes 下扩展页面，并按需重新生成 OpenAPI 客户端。",
      ],
      [
        "验证与交付",
        "在生产构建前运行 Biome、单测、Playwright 和 mock 流程，让 starter 的质量基线真正可执行。",
      ],
    ],
    commandsLabel: "CLI 快速开始",
    commandsTitle: "第一天真正会用到的命令",
    commandItems: [
      ["安装", "pnpm install"],
      ["开发", "pnpm dev"],
      ["查看 OpenSpec", "openspec list"],
      ["生成 OpenAPI", "pnpm openapi:generate"],
      ["生成路由", "pnpm routes:generate"],
      ["执行单测", "pnpm test:run"],
      ["构建", "pnpm build"],
      ["E2E", "pnpm test:e2e"],
    ],
    snapshotLabel: "项目快照",
    snapshotTitle: "随着项目变大依然清晰可读的文件结构",
    snapshotBody:
      "规格资产、共享技能、路由、公共工具和生成产物分层清晰，不会在页面增多后立刻塌成普通模板项目。",
    codePreview: `src/
├── routes/
│   ├── __root.tsx
│   └── index.tsx
├── lib/
│   ├── api/
│   ├── query-client.ts
│   └── utils.ts
└── routeTree.gen.ts

openspec/
├── changes/
├── specs/
└── config.yaml

.agents/
└── skills/
    ├── frontend-design/
    ├── react-expert/
    └── webapp-testing/

openspec list
pnpm openapi:generate
pnpm routes:generate
pnpm dev`,
  },
};

function GitHubMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.8 3.44 22.29 8.21 23.88C8.81 23.99 9.03 23.62 9.03 23.3C9.03 23.01 9.02 22.05 9.02 20.97C5.67 21.7 4.97 19.35 4.97 19.35C4.42 17.95 3.63 17.58 3.63 17.58C2.55 16.84 3.71 16.86 3.71 16.86C4.9 16.94 5.52 18.08 5.52 18.08C6.58 19.89 8.31 19.37 8.98 19.06C9.09 18.29 9.39 17.76 9.72 17.46C7.05 17.16 4.24 16.12 4.24 11.49C4.24 10.17 4.71 9.09 5.48 8.24C5.36 7.94 4.94 6.72 5.6 5.07C5.6 5.07 6.61 4.75 8.99 6.36C9.95 6.09 10.98 5.95 12 5.95C13.02 5.95 14.05 6.09 15.01 6.36C17.39 4.75 18.4 5.07 18.4 5.07C19.06 6.72 18.64 7.94 18.52 8.24C19.29 9.09 19.76 10.17 19.76 11.49C19.76 16.13 16.95 17.16 14.27 17.46C14.69 17.82 15.08 18.54 15.08 19.64C15.08 21.22 15.06 22.88 15.06 23.3C15.06 23.62 15.28 24 15.89 23.88C20.66 22.29 24.1 17.8 24.1 12.5C24.1 5.87 18.73 0.5 12.1 0.5H12Z" />
    </svg>
  );
}

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

function HomePage() {
  const { language, setLanguage } = useSiteLanguage();
  const copy = homeCopy[language];

  return (
    <main className="grain-overlay relative overflow-hidden">
      <div className="hero-ring left-[-8rem] top-16 h-72 w-72" />
      <div className="hero-ring right-[-10rem] top-[-3rem] h-96 w-96" />
      <div className="hero-ring bottom-[-10rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-6 py-8 md:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-foreground/10 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-foreground/45">
              React 19 x Vite 5
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-[0.08em] text-foreground">
              TanVite
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <a
              aria-label={copy.repoLabel}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-white/60 text-foreground/75 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/80 hover:text-foreground"
              href="https://github.com/YangsonHung/TanVite"
              rel="noreferrer"
              target="_blank"
            >
              <GitHubMark className="h-5 w-5" />
            </a>
            <div className="rounded-full border border-foreground/15 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.28em] text-foreground/65 backdrop-blur">
              {copy.statusBadge}
            </div>
          </div>
        </header>

        <div className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <section className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-foreground/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/60 panel-shadow">
              {copy.heroBadge}
            </p>
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-foreground md:text-7xl">
              {copy.heroTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/68 md:text-lg">
              {copy.heroBody}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:-translate-y-0.5 hover:bg-foreground/90"
                href="#toolchain"
              >
                {copy.primaryCta}
              </a>
              <Link
                className="rounded-full border border-foreground/15 bg-white/60 px-6 py-3 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:bg-white/80"
                to="/guide"
              >
                {copy.guideCta}
              </Link>
              <a
                className="rounded-full border border-foreground/15 bg-white/60 px-6 py-3 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:bg-white/80"
                href="#toolchain"
              >
                {copy.supportCta}
              </a>
            </div>

            <dl className="mt-12 grid gap-4 sm:grid-cols-3">
              {copy.starterStats.map(([index, title, description]) => (
                <div
                  key={title}
                  className="panel-shadow rounded-[1.6rem] border border-foreground/10 bg-white/70 p-5 backdrop-blur"
                >
                  <dt className="text-xs uppercase tracking-[0.35em] text-foreground/40">
                    {index}
                  </dt>
                  <dd className="mt-3 text-lg font-semibold text-foreground">{title}</dd>
                  <p className="mt-2 text-sm leading-6 text-foreground/60">{description}</p>
                </div>
              ))}
            </dl>
          </section>

          <aside
            id="toolchain"
            className="panel-shadow rounded-[2rem] border border-foreground/10 bg-white/70 p-6 backdrop-blur md:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-foreground/45">
                  {copy.toolchainLabel}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                  {copy.toolchainTitle}
                </h3>
              </div>
              <div className="rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-foreground/75">
                TanVite
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {copy.toolchainItems.map(([label, title, body]) => (
                <div
                  key={title}
                  className="rounded-[1.4rem] border border-foreground/10 bg-background/70 p-4 transition hover:border-accent/40"
                >
                  <div className="text-xs uppercase tracking-[0.28em] text-foreground/40">
                    {label}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-foreground">{title}</div>
                  <p className="mt-1 text-sm leading-6 text-foreground/60">{body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.6rem] bg-foreground px-5 py-5 text-background">
              <p className="text-xs uppercase tracking-[0.32em] text-background/60">
                {copy.startHere}
              </p>
              <code className="mt-3 block text-sm text-background/85">
                pnpm install && pnpm dev
              </code>
            </div>
          </aside>
        </div>

        <section className="grid gap-6 border-t border-foreground/10 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-12">
          <div className="rounded-[2rem] border border-foreground/10 bg-white/65 p-6 backdrop-blur panel-shadow md:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/45">
              {copy.workflowLabel}
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
              {copy.workflowTitle}
            </h3>
            <div className="mt-8 space-y-6">
              {copy.workflowItems.map(([title, description], index) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/15 bg-secondary text-sm font-semibold text-foreground">
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{title}</h4>
                    <p className="mt-2 text-sm leading-7 text-foreground/62">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-foreground/10 bg-foreground p-6 text-background panel-shadow md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-background/55">
                    {copy.commandsLabel}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                    {copy.commandsTitle}
                  </h3>
                </div>
                <div className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.22em] text-background/70">
                  pnpm
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {copy.commandItems.map(([label, command]) => (
                  <div
                    key={command}
                    className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-xs uppercase tracking-[0.28em] text-background/50">
                      {label}
                    </div>
                    <code className="mt-3 block text-sm text-background/88">{command}</code>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-foreground/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(247,232,214,0.92))] p-6 panel-shadow md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/45">
                {copy.snapshotLabel}
              </p>
              <div className="mt-4 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
                    {copy.snapshotTitle}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-foreground/62">{copy.snapshotBody}</p>
                </div>
                <pre className="overflow-x-auto rounded-[1.4rem] bg-[#123843] p-5 text-sm leading-7 text-[#f7ede1]">
                  <code>{copy.codePreview}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
