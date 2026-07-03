import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { RiscoBadge } from './risco-badge'
import { StatusBadge } from './status-badge'
import type { Convenio } from '@/types/convenio'
import { formatCurrency, formatDate } from '@/lib/format'

interface ConvenioTableProps {
  convenios: Convenio[]
}

export function ConvenioTable({ convenios }: ConvenioTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Número</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Convenente</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Risco</TableHead>
            <TableHead className="text-right">Valor Total</TableHead>
            <TableHead className="text-right">% Executado</TableHead>
            <TableHead>Término</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {convenios.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="text-muted-foreground h-24 text-center">
                Nenhum convênio encontrado.
              </TableCell>
            </TableRow>
          ) : (
            convenios.map((c) => {
              const percentExecutado =
                c.valorTotal > 0 ? Math.round((c.valorExecutado / c.valorTotal) * 100) : 0

              return (
                <TableRow key={c.id}>
                  <TableCell className="font-mono text-xs">{c.numero}</TableCell>
                  <TableCell className="font-medium">{c.nome}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{c.convenente}</TableCell>
                  <TableCell>
                    <StatusBadge status={c.status} />
                  </TableCell>
                  <TableCell>
                    <RiscoBadge risco={c.risco} />
                  </TableCell>
                  <TableCell className="text-right text-sm">
                    {formatCurrency(c.valorTotal)}
                  </TableCell>
                  <TableCell className="text-right text-sm">{percentExecutado}%</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {formatDate(c.dataTermino)}
                  </TableCell>
                </TableRow>
              )
            })
          )}
        </TableBody>
      </Table>
    </div>
  )
}
