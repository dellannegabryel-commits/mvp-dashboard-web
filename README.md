# MVP Dashboard — Web

> Frontend (Next.js 16) do **Portal de Gestão de Convênios e Instrumentos**.
> Substitui a planilha operacional por um sistema web centralizado.

## Repositórios relacionados

| Repo                       | Função                                             |
| -------------------------- | -------------------------------------------------- |
| `mvp-dashboard-web` (este) | Frontend Next.js                                   |
| `mvp-dashboard-api`        | Backend NestJS + Prisma + PostgreSQL               |
| `@mvp-dashboard/shared`    | Tipos/enums compartilhados (publicado por tag git) |
| `MVP_dashboard`            | Documentação (escopo, plano, ADRs, roadmap)        |

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript strict**
- **TailwindCSS v4** + **shadcn/ui** (preset `base-nova`)
- **TanStack Query** (server state) · **Zod** (validação) · **React Hook Form** (formulários)
- **next-auth v5** (Auth.js) — provider Credentials
- **MSW v2** (mocks HTTP no browser e em testes)
- **Recharts** (gráficos) · **date-fns** (datas) · **lucide-react** (ícones)
- **Vitest** + **Testing Library** (unit) · **Playwright** (e2e)
- **Husky** + **commitlint** + **lint-staged** · **ESLint 9** (flat) · **Prettier**

## Quickstart

```bash
nvm use                # usa a versão de .nvmrc
npm ci                 # instala dependências (a partir do package-lock.json)
npm run dev            # http://localhost:3000
```

### Scripts

| Script                  | O que faz                                  |
| ----------------------- | ------------------------------------------ |
| `npm run dev`           | Servidor de desenvolvimento                |
| `npm run build`         | Build de produção                          |
| `npm run start`         | Inicia o servidor de produção (após build) |
| `npm run lint`          | ESLint                                     |
| `npm run lint:fix`      | ESLint com `--fix`                         |
| `npm run format`        | Prettier write                             |
| `npm run format:check`  | Prettier check (usado no CI)               |
| `npm run typecheck`     | `tsc --noEmit`                             |
| `npm run test`          | Vitest (one-shot)                          |
| `npm run test:watch`    | Vitest (watch)                             |
| `npm run test:coverage` | Vitest + coverage v8                       |
| `npm run test:e2e`      | Playwright (headless)                      |
| `npm run test:e2e:ui`   | Playwright (UI)                            |

## Estrutura

```
src/
├─ app/              # Next.js App Router
├─ components/
│  ├─ ui/            # shadcn/ui (gerados)
│  └─ {feature}/     # componentes por feature
├─ lib/              # utils, api-client, auth
├─ hooks/            # hooks compartilhados
├─ mocks/            # MSW handlers + fixtures
└─ types/            # tipos compartilhados
e2e/                 # testes Playwright
```

## Padrões de trabalho

- **Branches:** `tipo/scope-descrição-curta` (ver `CONTRIBUTING.md`).
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/) (enforçado por hook).
- **PRs:** pequenos (< 400 linhas), um por fatia, com template preenchido.
- **Releases:** gerados por `release-please` a partir de conventional commits; `main` sempre deployável.

## Documentação adicional

- [Escopo do produto](../MVP_dashboard/docs/MVP%20%E2%80%94%20Portal%20de%20Gest%C3%A3o%20de%20Conv%C3%AAnios%20e%20Instrumentos%2036f6109ec906804daedbc6c859c050f1.md)
- [Plano de implementação](../MVP_dashboard/docs/PLAN.md)
- [ADRs](../MVP_dashboard/docs/ADRS.md)
- [Roadmap](../MVP_dashboard/docs/ROADMAP.md)
- [Contributing](./CONTRIBUTING.md)
- [Security](./SECURITY.md)

## Status

🚧 **MVP — Fase 1 em construção.** Veja o roadmap em `../MVP_dashboard/docs/ROADMAP.md`.
