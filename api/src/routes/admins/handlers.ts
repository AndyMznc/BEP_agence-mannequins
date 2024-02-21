import { NotFoundError } from 'elysia'
import prisma from '../../libs/prisma'

export async function getAdmins() {
  try {
    return await prisma.admin.findMany()
  } catch (error: unknown) {
    console.log(`Erreur durant l'obtention des administrateurs : ${error}`)
  }
}

export async function getAdmin(id: number) {
  try {
    const admin = await prisma.admin.findUnique({
      where: { id }
    })

    if (!admin) {
      throw new NotFoundError('Administrateur non trouvé')
    }

    return admin
  } catch (error: unknown) {
    console.log(`Erreur durant l'obtention de l'administrateur : ${error}`)
  }
}

export async function createAdmin(data: any) {
  try {
    return await prisma.admin.create({ data })
  } catch (error: unknown) {
    console.log(`Erreur durant la création d'une administrateur : ${error}`)
  }
}

export async function updateAdmin(
  id: number,
  options: {
    accessLevel: number
  }
) {
  try {
    return await prisma.admin.update({
      where: { id },
      data: options
    })
  } catch (error: unknown) {
    console.log(`Erreur durant la modification d'une administrateur : ${error}`)
  }
}

export async function deleteAdmin(id: number) {
  try {
    return await prisma.admin.delete({ where: { id } })
  } catch (error: unknown) {
    console.log(`Erreur durant la suppression d'une administrateur : ${error}`)
  }
}
