import { Elysia, t } from 'elysia'
import {
  createPhoto,
  deletePhoto,
  getPhoto,
  getPhotos,
  updatePhoto
} from './handlers'

const photoRoutes = new Elysia({ prefix: '/photos' })
  .get('/', () => getPhotos())

  .get('/:id', ({ params: { id } }) => getPhoto(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })

  .post('/', ({ body }) => createPhoto(body), {
    body: t.Object({
      url: t.String()
    })
  })

  .patch('/:id', ({ params: { id }, body }) => updatePhoto(id, body), {
    params: t.Object({
      id: t.Numeric()
    }),
    body: t.Object({
      url: t.String()
    })
  })

  .delete('/:id', ({ params: { id } }) => deletePhoto(id), {
    params: t.Object({
      id: t.Numeric()
    })
  })

export default photoRoutes
