import { EyesColor, Gender } from '@prisma/client'
import { Elysia, t } from 'elysia'
import { createPastExperience } from '../pastExperiences/handlers'

const submitProfileRoutes = new Elysia({ prefix: '/submitProfiles' }).post(
  '/',
  ({ body }) => createPastExperience(body),
  {
    body: t.Object({
      phone: t.String(),
      birthDate: t.String(),
      firstName: t.String(),
      lastName: t.String(),
      eyescolor: t.Enum(EyesColor),
      haircolor: t.Enum(EyesColor),
      gender: t.Enum(Gender),
      photo: t.String(),
      pastExperiences: t.String()
    })
  }
)

export default submitProfileRoutes
