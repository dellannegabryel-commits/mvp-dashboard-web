'use client'

import { useState } from 'react'
import { useInstrumentos } from '@/hooks/use-instrumentos'
import { InstrumentoTable } from '@/components/instrumentos/instrumento-table'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { Search } from 'lucide-react'

export default function InstrumentosPage() {
  const [search, setSearch] = useState('')
  const { data, isLoading } = useInstrumentos({ search: search || undefined })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Instrumentos</h1>
        <p className="text-muted-foreground">Gerencie os instrumentos dos convênios</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1 space-y-2">
          <Label htmlFor="search-inst">Buscar</Label>
          <div className="relative">
            <Search className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
            <Input
              id="search-inst"
              placeholder="Número, objeto ou convênio..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      ) : (
        <InstrumentoTable instrumentos={data?.data ?? []} />
      )}
    </div>
  )
}
