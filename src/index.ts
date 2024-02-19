import { PrismaClient } from '@prisma/client'
import { Elysia } from 'elysia'
import addressRoutes from './routes/addresses'
import adminRoutes from './routes/admins'
import modelRoutes from './routes/models'
import photoRoutes from './routes/photos'
import userRoutes from './routes/users'

const app = new Elysia()

app
  .group('/api', app =>
    app
      .use(modelRoutes)
      .use(userRoutes)
      .use(addressRoutes)
      .use(adminRoutes)
      .use(photoRoutes)
  )
  .listen(process.env.PORT || 3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

const prisma = new PrismaClient()
