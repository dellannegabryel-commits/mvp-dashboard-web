import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { StatusInstrumentoBadge } from './status-instrumento-badge'
import type { Instrumento } from '@/types/instrumento'
import { formatCurrency, formatDate } from '@/lib/format'

const tipoLabel: Record<string, string> = {
  TERMO_COPERACAO: 'Termo de Cooperação',
  CONVENIO: 'Convênio',
  CONTRATO_REPASSE: 'Contrato de Repasse',
  TERMO_FOMENTO: 'Termo de Fomento',
}

interface InstrumentoTableProps {
  instrumentos: Instrumento[]
}

export function InstrumentoTable({ instrumentos }: InstrumentoTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Número</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Objeto</TableHead>
            <TableHead>Convênio</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Valor</TableHead>
            <TableHead>Vigência</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {instrumentos.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-muted-foreground h-24 text-center">
                Nenhum instrumento encontrado.
              </TableCell>
            </TableRow>
          ) : (
            instrumentos.map((i) => (
              <TableRow key={i.id}>
                <TableCell className="font-mono text-xs">{i.numero}</TableCell>
                <TableCell className="text-sm">{tipoLabel[i.tipo] ?? i.tipo}</TableCell>
                <TableCell className="text-muted-foreground text-sm">{i.objeto}</TableCell>
                <TableCell className="text-sm">{i.convenioNome}</TableCell>
                <TableCell>
                  <StatusInstrumentoBadge status={i.status} />
                </TableCell>
                <TableCell className="text-right text-sm">{formatCurrency(i.valor)}</TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {formatDate(i.dataVigenciaInicio)} — {formatDate(i.dataVigenciaFim)}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
