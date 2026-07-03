'use client'

import { useEffect, useState, type ReactNode } from 'react'

export function MockInit({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function init() {
      if (process.env.NEXT_PUBLIC_USE_MSW === 'true') {
        try {
          const { worker } = await import('@/mocks/browser')
          await worker.start({
            onUnhandledRequest: 'bypass',
            serviceWorker: { url: '/mockServiceWorker.js' },
          })
        } catch (err) {
          console.error('[MSW] Failed to start:', err)
          setError(err instanceof Error ? err.message : 'MSW failed to start')
        }
      }
      setReady(true)
    }
    init()
  }, [])

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-destructive text-sm font-medium">MSW Error</p>
          <p className="text-muted-foreground mt-1 text-xs">{error}</p>
        </div>
      </div>
    )
  }

  if (!ready) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-muted-foreground text-sm">Carregando...</p>
      </div>
    )
  }

  return <>{children}</>
}
