import { http, HttpResponse } from 'msw'
import { convenios } from '../fixtures/convenios'

export const conveniosHandlers = [
  http.get('/api/convenios', ({ request }) => {
    const url = new URL(request.url)
    const search = url.searchParams.get('search')?.toLowerCase()
    const status = url.searchParams.get('status')
    const risco = url.searchParams.get('risco')

    let filtered = [...convenios]

    if (search) {
      filtered = filtered.filter(
        (c) =>
          c.nome.toLowerCase().includes(search) ||
          c.convenente.toLowerCase().includes(search) ||
          c.numero.toLowerCase().includes(search),
      )
    }

    if (status) {
      filtered = filtered.filter((c) => c.status === status)
    }

    if (risco) {
      filtered = filtered.filter((c) => c.risco === risco)
    }

    return HttpResponse.json({
      data: filtered,
      total: filtered.length,
    })
  }),

  http.get('/api/convenios/:id', ({ params }) => {
    const { id } = params
    const convenio = convenios.find((c) => c.id === id)

    if (!convenio) {
      return new HttpResponse(null, { status: 404 })
    }

    return HttpResponse.json({ data: convenio })
  }),
]
