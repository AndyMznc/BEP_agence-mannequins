import { EyesColor, Gender, HairColor } from '@prisma/client'
import prisma from '../../libs/prisma'

export async function createSubmittedProfile(data: {
  phone: string
  birthDate: string
  firstName: string
  lastName: string
  eyescolor: EyesColor
  haircolor: HairColor
  gender: Gender
  photo: string
  pastExperiences: string
}) {
  const validatedData = {
    ...data,
    birthDate: new Date(data.birthDate)
  }
  try {
    const submitProfile = await prisma.submitProfile.create({
      data: validatedData
    })
    return submitProfile
  } catch (error: unknown) {
    console.log(`Erreur durant la soumission d'un profil : ${error}`)
    throw new Error("Erreur durant la soumission d'un profil")
  }
}
