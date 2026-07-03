import { http, HttpResponse } from 'msw'
import { instrumentos } from '../fixtures/instrumentos'

export const instrumentosHandlers = [
  http.get('/api/instrumentos', ({ request }) => {
    const url = new URL(request.url)
    const search = url.searchParams.get('search')?.toLowerCase()
    const status = url.searchParams.get('status')
    const tipo = url.searchParams.get('tipo')

    let filtered = [...instrumentos]

    if (search) {
      filtered = filtered.filter(
        (i) =>
          i.numero.toLowerCase().includes(search) ||
          i.objeto.toLowerCase().includes(search) ||
          i.convenioNome.toLowerCase().includes(search),
      )
    }

    if (status) {
      filtered = filtered.filter((i) => i.status === status)
    }

    if (tipo) {
      filtered = filtered.filter((i) => i.tipo === tipo)
    }

    return HttpResponse.json({
      data: filtered,
      total: filtered.length,
    })
  }),

  http.get('/api/instrumentos/:id', ({ params }) => {
    const { id } = params
    const instrumento = instrumentos.find((i) => i.id === id)

    if (!instrumento) {
      return new HttpResponse(null, { status: 404 })
    }

    return HttpResponse.json({ data: instrumento })
  }),
]
