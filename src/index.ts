import { PrismaClient } from '@prisma/client'
import { Elysia } from 'elysia'
import modelRoutes from './routes/models'

const app = new Elysia()

app.group('/api', app => app.use(modelRoutes)).listen(process.env.PORT || 3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

const prisma = new PrismaClient()
