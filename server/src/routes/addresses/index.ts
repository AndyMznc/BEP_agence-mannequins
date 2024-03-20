import { Elysia, t } from 'elysia'
import {
  createAddress,
  deleteAddress,
  getAddress,
  getAddresses,
  updateAddress
} from './handlers'

const addressRoutes = new Elysia({ prefix: '/addresses' })
  .get('/', () => getAddresses())

  .get('/:id', ({ params: { id } }) => getAddress(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })

  .post('/', ({ body }) => createAddress(body), {
    body: t.Object({
      number: t.String(),
      street: t.String(),
      city: t.String(),
      zip: t.String(),
      country: t.String()
    })
  })

  .patch('/:id', ({ params: { id }, body }) => updateAddress(id, body), {
    params: t.Object({
      id: t.Numeric()
    }),
    body: t.Object({
      number: t.String(),
      street: t.String(),
      city: t.String(),
      zip: t.String(),
      country: t.String()
    })
  })

  .delete('/:id', ({ params: { id } }) => deleteAddress(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })

export default addressRoutes
