import { Elysia, t } from 'elysia'
import { getModel, getModels, updateModel } from './handlers'

const modelRoutes = new Elysia({ prefix: '/models' })
  .get('/', () => getModels())

  .get('/:id', ({ params: { id } }) => getModel(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })

  .post('/', () => 'Create a model')

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

  .delete('/', () => `Delete model`)

export default modelRoutes
