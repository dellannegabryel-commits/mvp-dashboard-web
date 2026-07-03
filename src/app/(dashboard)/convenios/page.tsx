'use client'

import { useState } from 'react'
import { useConvenios } from '@/hooks/use-convenios'
import { ConvenioTable } from '@/components/convenios/convenio-table'
import { ConvenioFiltersBar } from '@/components/convenios/convenio-filters'
import { Skeleton } from '@/components/ui/skeleton'

export default function ConveniosPage() {
  const [search, setSearch] = useState('')
  const { data, isLoading } = useConvenios({ search: search || undefined })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Convênios</h1>
        <p className="text-muted-foreground">Gerencie os convênios do portal</p>
      </div>

      <ConvenioFiltersBar search={search} onSearchChange={setSearch} />

      {isLoading ? (
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      ) : (
        <ConvenioTable convenios={data?.data ?? []} />
      )}
    </div>
  )
}
