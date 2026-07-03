export type TipoInstrumento = 'TERMO_COPERACAO' | 'CONVENIO' | 'CONTRATO_REPASSE' | 'TERMO_FOMENTO'

export type StatusInstrumento = 'RASCUNHO' | 'ASSINADO' | 'EM_EXECUCAO' | 'ENCERRADO'

export interface Instrumento {
  id: string
  tipo: TipoInstrumento
  numero: string
  objeto: string
  status: StatusInstrumento
  convenioId: string
  convenioNome: string
  valor: number
  dataAssinatura: string | null
  dataVigenciaInicio: string
  dataVigenciaFim: string
  createdAt: string
  updatedAt: string
}

export const instrumentos: Instrumento[] = [
  {
    id: '1',
    tipo: 'TERMO_COPERACAO',
    numero: 'TC-2025/001',
    objeto: 'Cooperação para assistência básica à saúde',
    status: 'EM_EXECUCAO',
    convenioId: '1',
    convenioNome: 'Convênio de Saúde Municipal',
    valor: 500000,
    dataAssinatura: '2025-01-15',
    dataVigenciaInicio: '2025-01-15',
    dataVigenciaFim: '2026-12-31',
    createdAt: '2025-01-10T10:00:00Z',
    updatedAt: '2025-06-15T14:30:00Z',
  },
  {
    id: '2',
    tipo: 'CONVENIO',
    numero: 'CV-2025/042',
    objeto: 'Infraestrutura para creches comunitárias',
    status: 'EM_EXECUCAO',
    convenioId: '2',
    convenioNome: 'Projeto de Educação Infantil',
    valor: 1200000,
    dataAssinatura: '2025-03-01',
    dataVigenciaInicio: '2025-03-01',
    dataVigenciaFim: '2027-02-28',
    createdAt: '2025-02-20T09:00:00Z',
    updatedAt: '2025-07-01T11:00:00Z',
  },
  {
    id: '3',
    tipo: 'CONTRATO_REPASSE',
    numero: 'CR-2024/108',
    objeto: 'Obras de tratamento de esgoto',
    status: 'EM_EXECUCAO',
    convenioId: '3',
    convenioNome: 'Modernização de Saneamento',
    valor: 3500000,
    dataAssinatura: '2024-06-01',
    dataVigenciaInicio: '2024-06-01',
    dataVigenciaFim: '2026-05-31',
    createdAt: '2024-05-15T08:00:00Z',
    updatedAt: '2025-05-20T16:45:00Z',
  },
  {
    id: '4',
    tipo: 'TERMO_FOMENTO',
    numero: 'TF-2023/015',
    objeto: 'Reflorestamento e preservação de nascentes',
    status: 'ENCERRADO',
    convenioId: '4',
    convenioNome: 'Programa de Meio Ambiente',
    valor: 800000,
    dataAssinatura: '2023-01-01',
    dataVigenciaInicio: '2023-01-01',
    dataVigenciaFim: '2024-12-31',
    createdAt: '2023-01-05T10:00:00Z',
    updatedAt: '2025-01-10T09:00:00Z',
  },
  {
    id: '5',
    tipo: 'TERMO_COPERACAO',
    numero: 'TC-2025/003',
    objeto: 'Pavimentação e sinalização de vias',
    status: 'EM_EXECUCAO',
    convenioId: '5',
    convenioNome: 'Infraestrutura Viária Urbana',
    valor: 2000000,
    dataAssinatura: '2025-02-01',
    dataVigenciaInicio: '2025-02-01',
    dataVigenciaFim: '2026-01-31',
    createdAt: '2025-01-25T10:00:00Z',
    updatedAt: '2025-07-02T08:15:00Z',
  },
  {
    id: '6',
    tipo: 'CONVENIO',
    numero: 'CV-2025/067',
    objeto: 'Crédito rural e assistência técnica',
    status: 'ASSINADO',
    convenioId: '6',
    convenioNome: 'Apoio à Agricultura Familiar',
    valor: 950000,
    dataAssinatura: '2025-04-01',
    dataVigenciaInicio: '2025-04-01',
    dataVigenciaFim: '2026-03-31',
    createdAt: '2025-03-20T09:30:00Z',
    updatedAt: '2025-06-28T15:00:00Z',
  },
]
