import { NotFoundError } from 'elysia'
import prisma from '../../libs/prisma'

export async function getAddresses() {
  try {
    return await prisma.address.findMany()
  } catch (error: unknown) {
    console.log(`Erreur durant l'obtention des adresses : ${error}`)
  }
}

export async function getAddress(id: number) {
  try {
    const address = await prisma.address.findUnique({
      where: { id }
    })

    if (!address) {
      throw new NotFoundError('Adresse non trouvé')
    }

    return address
  } catch (error: unknown) {
    console.log(`Erreur durant l'obtention de l'adresse : ${error}`)
  }
}

export async function createAddress(data: any) {
  try {
    return await prisma.address.create({ data })
  } catch (error: unknown) {
    console.log(`Erreur durant la création d'une adresse : ${error}`)
  }
}

export async function updateAddress(
  id: number,
  options: {
    number: string
    street: string
    city: string
    zip: string
    country: string
  }
) {
  try {
    return await prisma.address.update({
      where: { id },
      data: options
    })
  } catch (error: unknown) {
    console.log(`Erreur durant la modification d'une adresse : ${error}`)
  }
}

export async function deleteAddress(id: number) {
  try {
    return await prisma.address.delete({ where: { id } })
  } catch (error: unknown) {
    console.log(`Erreur durant la suppression d'une adresse : ${error}`)
  }
}
