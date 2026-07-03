import { Badge } from '@/components/ui/badge'
import type { StatusInstrumento } from '@/types/instrumento'

const statusConfig: Record<
  StatusInstrumento,
  { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }
> = {
  RASCUNHO: { label: 'Rascunho', variant: 'secondary' },
  ASSINADO: { label: 'Assinado', variant: 'default' },
  EM_EXECUCAO: { label: 'Em Execução', variant: 'outline' },
  ENCERRADO: { label: 'Encerrado', variant: 'destructive' },
}

export function StatusInstrumentoBadge({ status }: { status: StatusInstrumento }) {
  const config = statusConfig[status]
  return <Badge variant={config.variant}>{config.label}</Badge>
}
