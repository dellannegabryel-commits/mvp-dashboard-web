<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project context

- **What**: Next.js 16 frontend for "Portal de Gestao de Convencios e Instrumentos" (grants/instruments management)
- **Status**: MVP Phase 1 — all HTTP calls mocked via MSW v2
- **Node**: 20.18.0 (`.nvmrc`)
- **Package manager**: npm (lockfile committed)

## Commands

```bash
npm run dev          # localhost:3000
npm run build        # production build
npm run lint         # ESLint (flat config)
npm run typecheck    # tsc --noEmit
npm run test         # Vitest (one-shot)
npm run test:watch   # Vitest (watch)
npm run test:e2e     # Playwright (auto-starts dev server)
```

**Verification order**: `lint → typecheck → test → build`

## Architecture

- **App Router** (`src/app/`) — routes, layouts, pages
- **shadcn/ui** components live in `src/components/ui/` (generated, do not hand-edit)
- **Feature components** go in `src/components/{feature}/`
- **Path alias**: `@/` maps to `./src/`
- **Lib utilities**: `src/lib/` (api-client, auth, utils)

## Key quirks

- **MSW everywhere**: In Phase 1, all API calls are intercepted by MSW. Mock handlers/fixtures live in `src/mocks/`.
- **next-auth v5 beta**: Uses Credentials provider. `AUTH_SECRET` required even in dev (use dummy value).
- **TailwindCSS v4**: Uses `@tailwindcss/postcss` plugin (no `tailwind.config.js`).
- **shadcn/ui style**: `base-nova` preset — run `npx shadcn@latest add <component>` to add components.
- **Playwright**: Auto-starts `npm run dev` as webServer; tests live in `e2e/`.

## Git workflow

- **Branches**: `tipo/scope-descricao-curta` (e.g., `feat/instruments-list`)
- **Commits**: Conventional Commits enforced by commitlint hook
  - Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
  - Allowed scopes: `app`, `web`, `api`, `ui`, `auth`, `design-system`, `deps`, `release`, `config`, `docs`, `tests`, `mocks`, `ci`, `github-actions`, `styles`, `scripts`, `package`, `env`
- **Hooks**: pre-commit (lint-staged: prettier + eslint + vitest related), commit-msg (commitlint), pre-push (typecheck)

## Code style

- TypeScript strict — no new `any`
- Prettier: no semicolons, single quotes, trailing commas, 100 char width, LF line endings
- No `console.log` in production code
- Components are functional, hooks named `useFoo`

## Testing

- **Unit**: Vitest + Testing Library (`src/**/*.test.{ts,tsx}`)
- **E2E**: Playwright (`e2e/`)
- **Coverage thresholds**: 70% lines/functions/statements, 65% branches
- **lint-staged** runs `vitest related --run` on staged `.ts/.tsx` files

## Related repos

| Repo                    | Purpose                                    |
| ----------------------- | ------------------------------------------ |
| `mvp-dashboard-api`     | Backend (NestJS + Prisma + PostgreSQL)     |
| `@mvp-dashboard/shared` | Shared types/enums (published by git tag)  |
| `MVP_dashboard`         | Documentation (scope, plan, ADRs, roadmap) |
