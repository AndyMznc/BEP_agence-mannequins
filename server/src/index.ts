import { cors } from '@elysiajs/cors'
import { PrismaClient } from '@prisma/client'
import { Elysia } from 'elysia'
import addressRoutes from './routes/addresses'
import adminRoutes from './routes/admins'
import modelRoutes from './routes/models'
import pastExperiencesRoutes from './routes/pastExperiences'
import photoRoutes from './routes/photos'
import submitProfileRoutes from './routes/submitProfiles'
import userRoutes from './routes/users'

const app = new Elysia()

app
  .use(cors())
  .group('/api', app =>
    app
      .use(addressRoutes)
      .use(adminRoutes)
      .use(modelRoutes)
      .use(pastExperiencesRoutes)
      .use(photoRoutes)
      .use(submitProfileRoutes)
      .use(userRoutes)
  )
  .listen(process.env.PORT || 3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}. e.g: http://localhost:${app.server?.port}/api/models`
)

const prisma = new PrismaClient()
