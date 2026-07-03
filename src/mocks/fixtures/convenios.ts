import type { StatusConvenio, StatusRisco } from '@/types/convenio'

export type { StatusConvenio, StatusRisco }

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

export const convenios: Convenio[] = [
  {
    id: '1',
    nome: 'Convênio de Saúde Municipal',
    descricao: 'Programa de assistência básica à saúde',
    status: 'ATIVO',
    risco: 'VERDE',
    valorTotal: 500000,
    valorExecutado: 320000,
    dataInicio: '2025-01-15',
    dataTermino: '2026-12-31',
    convenente: 'Prefeitura Municipal de São Paulo',
    instrumento: 'Termo de Cooperação',
    numero: 'TC-2025/001',
    createdAt: '2025-01-10T10:00:00Z',
    updatedAt: '2025-06-15T14:30:00Z',
  },
  {
    id: '2',
    nome: 'Projeto de Educação Infantil',
    descricao: 'Infraestrutura para creches comunitárias',
    status: 'ATIVO',
    risco: 'AMARELO',
    valorTotal: 1200000,
    valorExecutado: 450000,
    dataInicio: '2025-03-01',
    dataTermino: '2027-02-28',
    convenente: 'Governo do Estado do Rio de Janeiro',
    instrumento: 'Convênio',
    numero: 'CV-2025/042',
    createdAt: '2025-02-20T09:00:00Z',
    updatedAt: '2025-07-01T11:00:00Z',
  },
  {
    id: '3',
    nome: 'Modernização de Saneamento',
    descricao: 'Obras de tratamento de esgoto',
    status: 'SUSPENSO',
    risco: 'LARANJA',
    valorTotal: 3500000,
    valorExecutado: 800000,
    dataInicio: '2024-06-01',
    dataTermino: '2026-05-31',
    convenente: 'Companhia de Saneamento Básico',
    instrumento: 'Contrato de Repasse',
    numero: 'CR-2024/108',
    createdAt: '2024-05-15T08:00:00Z',
    updatedAt: '2025-05-20T16:45:00Z',
  },
  {
    id: '4',
    nome: 'Programa de Meio Ambiente',
    descricao: 'Reflorestamento e preservação de nascentes',
    status: 'ENCERRADO',
    risco: 'VERMELHO',
    valorTotal: 800000,
    valorExecutado: 200000,
    dataInicio: '2023-01-01',
    dataTermino: '2024-12-31',
    convenente: 'Instituto de Meio Ambiente',
    instrumento: 'Termo de Fomento',
    numero: 'TF-2023/015',
    createdAt: '2023-01-05T10:00:00Z',
    updatedAt: '2025-01-10T09:00:00Z',
  },
  {
    id: '5',
    nome: 'Infraestrutura Viária Urbana',
    descricao: 'Pavimentação e sinalização de vias',
    status: 'ATIVO',
    risco: 'VERDE',
    valorTotal: 2000000,
    valorExecutado: 1500000,
    dataInicio: '2025-02-01',
    dataTermino: '2026-01-31',
    convenente: 'Prefeitura Municipal de Belo Horizonte',
    instrumento: 'Termo de Cooperação',
    numero: 'TC-2025/003',
    createdAt: '2025-01-25T10:00:00Z',
    updatedAt: '2025-07-02T08:15:00Z',
  },
  {
    id: '6',
    nome: 'Apoio à Agricultura Familiar',
    descricao: 'Crédito rural e assistência técnica',
    status: 'ATIVO',
    risco: 'AMARELO',
    valorTotal: 950000,
    valorExecutado: 600000,
    dataInicio: '2025-04-01',
    dataTermino: '2026-03-31',
    convenente: 'EMATER - Assistência Técnica',
    instrumento: 'Convênio',
    numero: 'CV-2025/067',
    createdAt: '2025-03-20T09:30:00Z',
    updatedAt: '2025-06-28T15:00:00Z',
  },
]
