import { conveniosHandlers } from './handlers/convenios'
import { instrumentosHandlers } from './handlers/instrumentos'
import { authHandlers } from './handlers/auth'

export const handlers = [...conveniosHandlers, ...instrumentosHandlers, ...authHandlers]
