import { NotFoundError } from 'elysia'
import prisma from '../../libs/prisma'

export async function getUsers() {
  try {
    return await prisma.user.findMany({
      include: { model: true }
    })
  } catch (error: unknown) {
    console.log(`Erreur durant l'obtention des utilisateurs : ${error}`)
  }
}

export async function getUser(id: number) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { model: true }
    })

    if (!user) {
      throw new NotFoundError('Utilisateur non trouvé')
    }

    return user
  } catch (error: unknown) {
    console.log(`Erreur durant l'obtention d'un utilisateur : ${error}`)
  }
}

export async function createUser(data: any) {
  try {
    return await prisma.user.create({ data })
  } catch (error: unknown) {
    console.log(`Erreur durant la création d'un utilisateur : ${error}`)
  }
}

export async function updateUser(
  id: number,
  options: {
    email?: string
    password?: string
    firstName?: string
    lastName?: string
  }
) {
  try {
    return await prisma.user.update({
      where: { id },
      data: options
    })
  } catch (error: unknown) {
    console.log(`Erreur durant la modification d'un utilisateur : ${error}`)
  }
}

export async function deleteUser(id: number) {
  try {
    return await prisma.user.delete({ where: { id } })
  } catch (error: unknown) {
    console.log(`Erreur durant la suppression d'un utilisateur : ${error}`)
  }
}
