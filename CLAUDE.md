# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install              # Install dependencies
pnpm dev                  # Start Vite dev server (port 4319)
pnpm dev:mock             # Start dev server with MSW browser mocks
pnpm build                # Build app to dist/
pnpm build:pages          # Build GitHub Pages site to dist-pages/
pnpm preview              # Preview dist/ (port 4419)
pnpm preview:pages        # Preview dist-pages/ (port 4419)

pnpm test                 # Run Vitest in watch mode
pnpm test:run             # Run unit tests once
pnpm test:coverage        # Run tests with coverage report
pnpm test:e2e             # Run Playwright E2E tests
pnpm test:e2e:ui          # Run Playwright in UI mode

pnpm check                # Run Biome lint + format with fixes
pnpm lint                 # Run Biome lint
pnpm format               # Run Biome format

pnpm routes:generate      # Generate TanStack Router route tree
pnpm openapi:check        # Validate OpenAPI schema
pnpm openapi:generate     # Generate API clients, hooks, MSW mocks
pnpm openapi:mock         # Start Prism standalone mock server (port 4010)

openspec list             # List OpenSpec changes
openspec new change <name> # Create new change proposal
openspec validate         # Validate OpenSpec config
```

## Architecture

**Tech Stack:**
- React 19 + TypeScript + Vite 5
- TanStack Router (file-based routing) + TanStack Query v5
- Tailwind CSS + shadcn/ui utilities
- Biome for linting/formatting
- Vitest (unit) + Playwright (E2E)
- OpenAPI/Orval for API client generation
- MSW (browser mocks) + Prism (standalone mock server)

**Path Aliases:**
- `@/*` → `./src/*`

**Key Directories:**
- `src/routes/` — Route files (TanStack Router)
- `src/lib/` — Shared utilities, API config, query client
- `src/lib/api/generated/` — Generated API layer (Orval output)
- `src/mocks/` — MSW browser mocks
- `openspec/` — OpenSpec workspace (changes/, specs/, config.yaml)
- `.agents/skills/` — Shared skill catalog for Codex/Claude Code
- `.claude/commands/opsx/` — OpenSpec command assets

**Generated Files (do not hand-edit):**
- `src/routeTree.gen.ts`
- `src/lib/api/generated/*`
- `dist/`, `dist-pages/`

## Development Patterns

**API Workflow:**
1. Set `OPENAPI_SCHEMA_URL` in `.env.local` (copy from `.env.example`)
2. Run `pnpm openapi:check` then `pnpm openapi:generate`
3. Use `pnpm dev:mock` (MSW) or `pnpm openapi:mock` (Prism server)

**OpenSpec Workflow:**
- Active proposals: `openspec/changes/`
- Baseline specs: `openspec/specs/`
- Uses `spec-driven` schema

**Sync surfaces when changing copy/positioning:**
- `README.md`, `README.zh-CN.md`
- `src/routes/index.tsx`, `src/routes/guide.tsx`
- `AGENTS.md`

**GitHub Pages:**
- Build: `pnpm build:pages` → outputs to `dist-pages/` with `/TanVite/` base
- Uses GitHub Actions deployment (not manual `docs/` commit)
- Keep `404.html` and `.nojekyll` in Pages output

**Conventions:**
- Use `pnpm` for all package operations
- Biome rules: 2-space indent, 100 char line width, double quotes, always semicolons
- TypeScript strict mode with noUnusedLocals/Parameters enabled
