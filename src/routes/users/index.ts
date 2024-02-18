import { Elysia, t } from 'elysia'
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser
} from './handlers'

const userRoutes = new Elysia({ prefix: '/users' })
  .get('/', () => getUsers())

  .get('/:id', ({ params: { id } }) => getUser(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })

  .post('/', ({ body }) => createUser(body), {
    body: t.Object({
      email: t.String(),
      password: t.String(),
      firstName: t.String(),
      lastName: t.String()
    })
  })

  .patch('/:id', ({ params: { id }, body }) => updateUser(id, body), {
    params: t.Object({
      id: t.Numeric()
    }),
    body: t.Object({
      email: t.String(),
      password: t.String(),
      firstName: t.String(),
      lastName: t.String()
    })
  })

  .delete('/:id', ({ params: { id } }) => deleteUser(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })

export default userRoutes
