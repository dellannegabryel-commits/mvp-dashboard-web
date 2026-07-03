import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api-client'
import type { InstrumentoListResponse, InstrumentoFilters } from '@/types/instrumento'

export function useInstrumentos(filters: InstrumentoFilters = {}) {
  return useQuery({
    queryKey: ['instrumentos', filters],
    queryFn: () =>
      api.get<InstrumentoListResponse>('/api/instrumentos', {
        params: Object.fromEntries(
          Object.entries(filters).filter(([, v]) => v !== undefined && v !== ''),
        ),
      }),
  })
}
