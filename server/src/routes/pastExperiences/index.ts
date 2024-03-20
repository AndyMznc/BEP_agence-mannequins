import { Elysia, t } from 'elysia'
import {
  createPastExperience,
  deletePastExperience,
  getPastExperience,
  getPastExperiences,
  updatePastExperience
} from './handlers'

const pastExperiencesRoutes = new Elysia({ prefix: '/pastExperiences' })
  .get('/', () => getPastExperiences())

  .get('/:id', ({ params: { id } }) => getPastExperience(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })

  .post('/', ({ body }) => createPastExperience(body), {
    body: t.Object({
      description: t.String()
    })
  })

  .patch('/:id', ({ params: { id }, body }) => updatePastExperience(id, body), {
    params: t.Object({
      id: t.Numeric()
    }),
    body: t.Object({
      description: t.String()
    })
  })

  .delete('/:id', ({ params: { id } }) => deletePastExperience(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })

export default pastExperiencesRoutes
