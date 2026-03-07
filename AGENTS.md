# AGENTS.md

Repository instructions for Codex, Claude Code, and other agents that read `AGENTS.md`.

## Project Profile

TanVite is a production-oriented React 19 starter with:

- Vite + TypeScript
- OpenSpec for spec-driven change tracking
- `.agents/skills/` as the shared skill catalog
- TanStack Router + TanStack Query
- OpenAPI / Orval / MSW / Prism
- Biome, Vitest, Playwright
- GitHub Pages showcase support

## Working Rules

- Use `pnpm` for all package management and scripts.
- Prefer editing source files over editing generated files.
- Keep public-facing copy aligned across:
  - `README.md`
  - `README.zh-CN.md`
  - `src/routes/index.tsx`
  - `src/routes/guide.tsx`
- Preserve bilingual behavior on the landing page and guide page.
- When changing project positioning, update both OpenSpec-facing docs and public showcase copy.

## Shared Agent Assets

The repository-level skill catalog lives in:

```text
.agents/skills/
```

These skills are intended to be reused across Codex and Claude Code.

OpenSpec command assets currently live in:

```text
.claude/commands/opsx/
```

If you change workflow wording or OpenSpec collaboration patterns, check both `.agents/skills/` and `.claude/commands/opsx/`.

## Key Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm build:pages
pnpm test:run
pnpm check

pnpm routes:generate
pnpm openapi:check
pnpm openapi:generate
pnpm openapi:mock

openspec list
openspec new change <name>
openspec validate
```

## Important Paths

```text
src/routes/            Route files and public-facing pages
src/lib/               Shared runtime logic, API config, query client, utilities
src/mocks/             MSW browser mocks
src/lib/site-language.ts
                       Shared language state for landing and guide pages

openspec/changes/      Active change proposals
openspec/specs/        Baseline specifications
openspec/config.yaml   OpenSpec config

.agents/skills/        Shared skill catalog for agents
.claude/commands/opsx/ OpenSpec command assets for Claude Code
```

## Generated Files

Do not hand-edit generated artifacts unless the task explicitly requires it.

- `src/routeTree.gen.ts`
- `src/lib/api/generated/`
- `dist/`
- `dist-pages/`

If generated output is wrong, fix the source configuration or generation script first.

## Docs and UI Sync

When changing any of the following, update all relevant surfaces in the same pass:

- project description
- supported agent workflows
- OpenSpec workflow
- OpenAPI workflow
- GitHub Pages behavior
- starter commands

Relevant files:

- `README.md`
- `README.zh-CN.md`
- `src/routes/index.tsx`
- `src/routes/guide.tsx`
- `AGENTS.md`

## Verification

Run the smallest useful verification set for the change:

- docs/copy only: `pnpm build`
- TypeScript or UI code: `pnpm build`
- tooling/runtime changes: `pnpm test:run && pnpm build`
- formatting/lint issues: `pnpm check`

## Deployment Notes

- Standard app builds output to `dist/`
- GitHub Pages builds output to `dist-pages/`
- GitHub Pages runs under the `/TanVite/` base path

Any change touching links, asset paths, router behavior, or preview instructions must keep the Pages deployment path working.
