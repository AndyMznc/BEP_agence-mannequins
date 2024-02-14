import { Elysia, t } from 'elysia'
import {
  createModel,
  deleteModel,
  getModel,
  getModels,
  updateModel
} from './handlers'

const modelRoutes = new Elysia({ prefix: '/models' })
  .get('/', () => getModels())

  .get('/:id', ({ params: { id } }) => getModel(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })

  .post('/', ({ body }) => createModel(body), {
    body: t.Object({
      birthDate: t.String(),
      description: t.String(),
      height: t.Number(),
      weight: t.Number()
    })
  })

  .patch('/:id', ({ params: { id }, body }) => updateModel(id, body), {
    params: t.Object({
      id: t.Numeric()
    }),
    body: t.Object({
      birthDate: t.String(),
      description: t.String(),
      height: t.Number(),
      weight: t.Number()
    })
  })

  .delete('/:id', ({ params: { id } }) => deleteModel(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })

export default modelRoutes
