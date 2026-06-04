# Security Policy

## Versões suportadas

| Versão  | Suportada               |
| ------- | ----------------------- |
| `0.1.x` | ✅ (em desenvolvimento) |
| `< 0.1` | ❌                      |

## Reportando uma vulnerabilidade

Se você descobrir uma vulnerabilidade de segurança, **não** abra issue pública.

Envie um e-mail para **security@mvp-dashboard.local** (placeholder — substituir pelo contato real) com:

- Descrição do problema
- Passos para reproduzir
- Impacto potencial
- Sugestão de mitigação (opcional)

Comprometemo-nos a responder em até **5 dias úteis** e a manter a confidencialidade até a divulgação coordenada.

## Práticas de segurança no código

- Nenhum segredo em commit. Use `.env.local` (gitignored) e variáveis de ambiente.
- Cookies de sessão com flags `HttpOnly`, `Secure`, `SameSite=Lax` (ou `Strict`).
- Validação de entrada em **toda** fronteira (Zod em componentes, class-validator na API).
- Sanitização de HTML em qualquer renderização de conteúdo do usuário.
- Dependências monitoradas via **Dependabot** (alertas de segurança).
- SAST semanal via **CodeQL**.
- Logs nunca devem conter PII, senhas ou tokens.
