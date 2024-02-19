import { NotFoundError } from 'elysia'
import prisma from '../../libs/prisma'

export async function getPastExperiences() {
  try {
    return await prisma.pastExperience.findMany()
  } catch (error: unknown) {
    console.log(`Erreur durant l'obtention des expériences : ${error}`)
  }
}

export async function getPastExperience(id: number) {
  try {
    const pastExperience = await prisma.pastExperience.findUnique({
      where: { id }
    })

    if (!pastExperience) {
      throw new NotFoundError('Aucune expérience trouvé')
    }

    return pastExperience
  } catch (error: unknown) {
    console.log(`Erreur durant l'obtention des expériences : ${error}`)
  }
}

export async function createPastExperience(data: any) {
  try {
    return await prisma.pastExperience.create({ data })
  } catch (error: unknown) {
    console.log(
      `Erreur durant la création d'une nouvelles expérience : ${error}`
    )
  }
}

export async function updatePastExperience(
  id: number,
  options: {
    description: string
  }
) {
  try {
    return await prisma.pastExperience.update({
      where: { id },
      data: options
    })
  } catch (error: unknown) {
    console.log(`Erreur durant la modification de expérience : ${error}`)
  }
}

export async function deletePastExperience(id: number) {
  try {
    return await prisma.pastExperience.delete({ where: { id } })
  } catch (error: unknown) {
    console.log(`Erreur durant la suppression d'une expérience : ${error}`)
  }
}
