# Contributing

Obrigado por contribuir com o **MVP Dashboard — Portal de Gestão de Convênios e Instrumentos** 🎉

Este documento cobre o **fluxo de trabalho, padrões de commit, branches, PRs e qualidade**. Leia uma vez antes do primeiro PR.

---

## Stack

- Next.js 16 (App Router) + TypeScript strict
- TailwindCSS v4 + shadcn/ui (preset `base-nova`)
- TanStack Query, Zod, React Hook Form
- next-auth v5 (Auth.js) — provider Credentials
- MSW para mocks
- Vitest + Testing Library (unit) · Playwright (e2e)
- Husky + commitlint + lint-staged
- ESLint 9 (flat config) + Prettier

---

## Primeiros passos

```bash
nvm use                # usa a versão de .nvmrc
npm ci                 # instala dependências a partir do lockfile
cp .env.example .env.local  # se houver
npm run dev            # http://localhost:3000
```

Verifique que tudo está OK:

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

---

## Branches

- `main` — **sempre verde**, sempre deployável. Sem commits diretos.
- `tipo/scope-descrição-curta` — branches de trabalho.

**Tipos aceitos:**

| Tipo       | Uso                                 | Exemplo                            |
| ---------- | ----------------------------------- | ---------------------------------- |
| `feat`     | Nova funcionalidade                 | `feat/instruments-list`            |
| `fix`      | Correção de bug                     | `fix/risk-badge-color-dark`        |
| `chore`    | Manutenção, configs, deps           | `chore/upgrade-next-16`            |
| `docs`     | Apenas documentação                 | `docs/readme-quickstart`           |
| `refactor` | Refatoração sem mudar comportamento | `refactor/extract-instrument-hook` |
| `test`     | Adicionar/ajustar testes            | `test/instruments-list-filters`    |
| `perf`     | Ganho de performance                | `perf/instruments-list-virtualize` |
| `ci`       | Mudança em CI                       | `ci/cache-playwright`              |
| `build`    | Mudança em build/dependências       | `build/switch-pnpm`                |

**Regras:**

- Branches devem viver no máximo **1 dia útil**. Acima disso, justifique no PR.
- 1 PR = 1 fatia vertical (UX + lógica + teste).
- Mantenha a branch atualizada com `main` (rebase ou merge, **nunca** rebase forçado de algo já compartilhado).

---

## Commits (Conventional Commits)

Formato: `tipo(scope): descrição em minúsculas, sem ponto final`

Exemplos válidos:

```
feat(instruments): add risk badge to list
fix(auth): redirect to /login on 401 from api
docs(readme): add quickstart section
chore(deps): bump next to 16.2.7
test(risk-badge): cover dark-mode contrast
```

**Regras:**

- Imperativo no presente ("add", não "added" ou "adds").
- Corpo e footer **opcionais**; use corpo para explicar o **porquê**, não o quê.
- Footer para `BREAKING CHANGE: ...` ou `Refs: #123`.

**Hooks ativos:**

- `pre-commit` — `lint-staged` (prettier, eslint, vitest related)
- `commit-msg` — `commitlint` (rejeita mensagens fora do padrão)
- `pre-push` — `typecheck`

---

## Pull Requests

1. Abra PR contra `main` usando o template (`.github/pull_request_template.md`).
2. Garanta CI verde: `lint`, `format:check`, `typecheck`, `test`, `build`, `e2e`.
3. Vincule a issue (`Closes #N`).
4. Para PRs de UI, anexe screenshots/GIF.
5. Após aprovação e merge (squash), delete a branch.

**Definição de Pronto (DoD):**

- [ ] Branch segue `tipo/scope-descrição-curta`
- [ ] Commits seguem Conventional Commits
- [ ] CI local verde (todos os checks acima)
- [ ] Sem warnings novos
- [ ] Testes adicionados/atualizados (≥ 80% no escopo do PR)
- [ ] A11y básica considerada
- [ ] Sem segredos, sem `console.log` esquecido, sem `any` novo
- [ ] Screenshots/GIF (se UI)
- [ ] Issue/feature linkada
- [ ] Branch de até 1 dia útil

---

## Estrutura de pastas

```
src/
├─ app/              # Next.js App Router (rotas, layouts, pages)
├─ components/
│  ├─ ui/            # shadcn/ui (gerados, não editar)
│  └─ {feature}/      # componentes da feature
├─ lib/              # utils, clientes, auth
├─ hooks/            # hooks compartilhados
├─ mocks/            # MSW handlers + fixtures
├─ types/            # tipos compartilhados
└─ styles/           # CSS adicional, se necessário
e2e/                 # testes Playwright
```

---

## Testes

- **Unit (Vitest + Testing Library):** componentes puros, hooks, utilitários.
- **E2E (Playwright):** fluxos críticos (login, criar instrumento, ver dashboard).
- **Cobertura mínima sugerida:** 70% no escopo do PR.

```bash
npm run test            # unit (one-shot)
npm run test:watch      # unit (watch)
npm run test:coverage   # unit + coverage v8
npm run test:e2e        # Playwright
npm run test:e2e:ui     # Playwright UI
```

---

## Estilo de código

- **TypeScript strict**. Nada de `any` novo.
- ESLint com `eslint-config-next` + `prettier`.
- Imports ordenados (plugin `import`).
- Componentes funcionais, hooks nomeados (`useFoo`).
- Sem `console.log` em código de produção; use o `lib/logger.ts` se necessário.
- Comentários só quando o **porquê** não é óbvio.

---

## Mocks vs API real

Durante a Fase 1 (web-first), todas as chamadas HTTP são interceptadas pelo **MSW**. O estado é controlado via `src/mocks/`.

Para **alternar mock → real**, edite `src/lib/api-client.ts` (a ser criado na fatia 1.2) e o `MSWProvider` em `src/app/providers.tsx`.

---

## Releases e versionamento

- Versionamento **semântico** (`MAJOR.MINOR.PATCH`), começando em `0.1.0`.
- Tags e changelog gerados automaticamente por **release-please** a partir de conventional commits.
- Não edite `CHANGELOG.md` manualmente.

---

## Comunicação

- PRs e issues são a fonte de verdade.
- Discussões longas vão para a issue correspondente, não para o PR.
- Mudanças com impacto em contrato (DTOs, enums) exigem PR na **`mvp-dashboard-shared`** e bump coordenado.

---

## Dúvidas?

Abra uma issue com a label `question`.
