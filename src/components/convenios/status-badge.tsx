import { Badge } from '@/components/ui/badge'
import type { StatusConvenio } from '@/types/convenio'

const statusConfig: Record<
  StatusConvenio,
  { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }
> = {
  ATIVO: { label: 'Ativo', variant: 'default' },
  INATIVO: { label: 'Inativo', variant: 'secondary' },
  SUSPENSO: { label: 'Suspenso', variant: 'destructive' },
  ENCERRADO: { label: 'Encerrado', variant: 'outline' },
}

export function StatusBadge({ status }: { status: StatusConvenio }) {
  const config = statusConfig[status]

  return <Badge variant={config.variant}>{config.label}</Badge>
}
