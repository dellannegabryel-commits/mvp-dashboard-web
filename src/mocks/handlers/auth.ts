import { http, HttpResponse } from 'msw'

interface LoginBody {
  email: string
  password: string
}

const DEMO_USER = {
  id: '1',
  name: 'Admin',
  email: 'admin@mvp.gov.br',
  role: 'ADMIN',
}

export const authHandlers = [
  http.post('/api/auth/login', async ({ request }) => {
    const body = (await request.json()) as LoginBody

    if (body.email === 'admin@mvp.gov.br' && body.password === 'admin') {
      return HttpResponse.json({
        user: DEMO_USER,
        token: 'demo-jwt-token',
      })
    }

    return new HttpResponse(JSON.stringify({ error: 'Credenciais inválidas' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }),

  http.post('/api/auth/logout', () => {
    return HttpResponse.json({ success: true })
  }),

  http.get('/api/auth/me', ({ request }) => {
    const auth = request.headers.get('Authorization')

    if (auth?.startsWith('Bearer ')) {
      return HttpResponse.json({ user: DEMO_USER })
    }

    return new HttpResponse(null, { status: 401 })
  }),
]
