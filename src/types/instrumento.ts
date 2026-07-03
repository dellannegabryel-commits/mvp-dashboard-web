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

export interface InstrumentoListResponse {
  data: Instrumento[]
  total: number
}

export interface InstrumentoFilters {
  search?: string
  status?: StatusInstrumento
  tipo?: TipoInstrumento
}
