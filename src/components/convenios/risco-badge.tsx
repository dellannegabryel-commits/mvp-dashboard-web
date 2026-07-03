import { Badge } from '@/components/ui/badge'
import type { StatusRisco } from '@/types/convenio'

const riscoConfig: Record<StatusRisco, { label: string; className: string }> = {
  VERDE: {
    label: 'Verde',
    className:
      'border-[var(--risk-verde-border)] bg-[var(--risk-verde-bg)] text-[var(--risk-verde-fg)]',
  },
  AMARELO: {
    label: 'Amarelo',
    className:
      'border-[var(--risk-amarelo-border)] bg-[var(--risk-amarelo-bg)] text-[var(--risk-amarelo-fg)]',
  },
  LARANJA: {
    label: 'Laranja',
    className:
      'border-[var(--risk-laranja-border)] bg-[var(--risk-laranja-bg)] text-[var(--risk-laranja-fg)]',
  },
  VERMELHO: {
    label: 'Vermelho',
    className:
      'border-[var(--risk-vermelho-border)] bg-[var(--risk-vermelho-bg)] text-[var(--risk-vermelho-fg)]',
  },
}

export function RiscoBadge({ risco }: { risco: StatusRisco }) {
  const config = riscoConfig[risco]

  return (
    <Badge variant="outline" className={config.className}>
      {config.label}
    </Badge>
  )
}
