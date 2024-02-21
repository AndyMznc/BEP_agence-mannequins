import { Elysia, t } from 'elysia'
import {
  createAdmin,
  deleteAdmin,
  getAdmin,
  getAdmins,
  updateAdmin
} from './handlers'

const adminRoutes = new Elysia({ prefix: '/admins' })
  .get('/', () => getAdmins())

  .get('/:id', ({ params: { id } }) => getAdmin(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })

  .post('/', ({ body }) => createAdmin(body), {
    body: t.Object({
      accessLevel: t.Integer()
    })
  })

  .patch('/:id', ({ params: { id }, body }) => updateAdmin(id, body), {
    params: t.Object({
      id: t.Numeric()
    }),
    body: t.Object({
      accessLevel: t.Integer()
    })
  })

  .delete('/:id', ({ params: { id } }) => deleteAdmin(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })

export default adminRoutes
