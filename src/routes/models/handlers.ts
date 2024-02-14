import { EyesColor, Gender, HairColor } from '@prisma/client'
import { NotFoundError } from 'elysia'
import prisma from '../../libs/prisma'

export async function getModels() {
  try {
    return await prisma.model.findMany()
  } catch (error: unknown) {
    console.log(`Erreur durant l'obtention des mannequins : ${error}`)
  }
}

export async function getModel(id: number) {
  try {
    const model = await prisma.model.findUnique({ where: { id } })

    if (!model) {
      throw new NotFoundError('Mannequin non trouvé')
    }

    return model
  } catch (error: unknown) {
    console.log(`Erreur durant l'obtention du mannequin : ${error}`)
  }
}

export async function createModel(data: any) {
  try {
    return await prisma.model.create({ data })
  } catch (error: unknown) {
    console.log(`Erreur durant la création du mannequin : ${error}`)
  }
}

export async function updateModel(
  id: number,
  options: {
    birthDate?: Date | string
    description?: string
    eyescolor?: EyesColor
    haircolor?: HairColor
    gender?: Gender
    height?: number
    weight?: number
  }
) {
  try {
    if (typeof options.birthDate === 'string') {
      options.birthDate = new Date(options.birthDate)
    }
    return await prisma.model.update({
      where: { id },
      data: options
    })
  } catch (error: unknown) {
    console.log(`Erreur durant la modification du mannequin : ${error}`)
  }
}

export async function deleteModel(id: number) {
  try {
    return await prisma.model.delete({ where: { id } })
  } catch (error: unknown) {
    console.log(`Erreur durant la suppression du mannequin : ${error}`)
  }
}
