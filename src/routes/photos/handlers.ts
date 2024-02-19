import { NotFoundError } from 'elysia'
import prisma from '../../libs/prisma'

export async function getPhotos() {
  try {
    return await prisma.photo.findMany()
  } catch (error: unknown) {
    console.log(`Erreur durant l'obtention des photos : ${error}`)
  }
}

export async function getPhoto(id: number) {
  try {
    const photo = await prisma.photo.findUnique({
      where: { id }
    })

    if (!photo) {
      throw new NotFoundError('Photo non trouvé')
    }

    return photo
  } catch (error: unknown) {
    console.log(`Erreur durant l'obtention de la photo : ${error}`)
  }
}

export async function createPhoto(data: any) {
  try {
    return await prisma.photo.create({ data })
  } catch (error: unknown) {
    console.log(`Erreur durant la création de la photo : ${error}`)
  }
}

export async function updatePhoto(
  id: number,
  options: {
    url: string
  }
) {
  try {
    return await prisma.photo.update({
      where: { id },
      data: options
    })
  } catch (error: unknown) {
    console.log(`Erreur durant la modification de la photo : ${error}`)
  }
}

export async function deletePhoto(id: number) {
  try {
    return await prisma.photo.delete({ where: { id } })
  } catch (error: unknown) {
    console.log(`Erreur durant la suppression de la photo : ${error}`)
  }
}
