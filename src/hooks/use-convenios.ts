import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api-client'
import type { ConvenioListResponse, ConvenioFilters } from '@/types/convenio'

export function useConvenios(filters: ConvenioFilters = {}) {
  return useQuery({
    queryKey: ['convenios', filters],
    queryFn: () =>
      api.get<ConvenioListResponse>('/api/convenios', {
        params: Object.fromEntries(
          Object.entries(filters).filter(([, v]) => v !== undefined && v !== ''),
        ),
      }),
  })
}
