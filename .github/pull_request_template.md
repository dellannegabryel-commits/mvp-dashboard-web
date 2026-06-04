# Pull Request

<!--
Obrigado por abrir um PR! Preencha o template abaixo. PRs sem descrição completa podem ter o review atrasado.
Siga o DoD em CONTRIBUTING.md antes de marcar como pronto.
-->

## Resumo

<!-- 1-3 frases explicando o que este PR faz. -->

## Tipo de mudança

<!-- Marque com x o que se aplica. -->

- [ ] `feat` Nova funcionalidade
- [ ] `fix` Correção de bug
- [ ] `refactor` Mudança interna sem alterar comportamento
- [ ] `perf` Melhoria de performance
- [ ] `test` Adição/ajuste de testes
- [ ] `docs` Apenas documentação
- [ ] `ci` Mudança em CI/CD
- [ ] `chore` Tarefa de manutenção (deps, configs, etc.)
- [ ] `build` Mudança em build/dependências

## Issue / contexto

<!-- Link para a issue ou referência ao slice/sprint. Ex.: Sprint 1 - Slice 1.2 -->

Closes #

## Como testar

<!--
Liste os passos exatos para validar localmente:
1. `npm ci`
2. `npm run dev`
3. Acessar http://localhost:3000/...
-->

1.
2.
3.

## Screenshots / vídeo

<!-- Para PRs de UI, anexe antes/depois. -->

## Checklist (Definição de Pronto)

- [ ] Branch segue o padrão `tipo/scope-descrição-curta`
- [ ] Commits seguem Conventional Commits
- [ ] CI local verde (`npm run lint && npm run typecheck && npm run test && npm run build`)
- [ ] Sem warnings novos (`eslint`, `tsc --noEmit`)
- [ ] Testes adicionados/atualizados (≥ 80% no escopo do PR)
- [ ] A11y considerada: foco visível, `aria-*` em interativos, contraste
- [ ] Sem segredos, sem `console.log` esquecido, sem `any` novo
- [ ] Screenshots/GIF anexados (se UI)
- [ ] Issue/feature linkada
- [ ] Branch com até 1 dia útil de vida (ou justificado)
- [ ] `package.json` / `package-lock.json` revisados (mudanças intencionais)

## Notas para o revisor

<!-- Qualquer coisa que ajude o code review. -->
