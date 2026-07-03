export type StatusConvenio = 'ATIVO' | 'INATIVO' | 'SUSPENSO' | 'ENCERRADO'

export type StatusRisco = 'VERDE' | 'AMARELO' | 'LARANJA' | 'VERMELHO'

export interface Convenio {
  id: string
  nome: string
  descricao: string
  status: StatusConvenio
  risco: StatusRisco
  valorTotal: number
  valorExecutado: number
  dataInicio: string
  dataTermino: string
  convenente: string
  instrumento: string
  numero: string
  createdAt: string
  updatedAt: string
}

export interface ConvenioFilters {
  search?: string
  status?: StatusConvenio
  risco?: StatusRisco
}

export interface ConvenioListResponse {
  data: Convenio[]
  total: number
}
