const { PrismaClient, Gender, EyesColor, HairColor } = require('@prisma/client')
const { faker } = require('@faker-js/faker')

const prisma = new PrismaClient()

const users = []
const models = []
const admins = []
const photos = []
const pastExperiences = []
const addresses = []
const submitProfiles = []
const tokens = []

const generateFakeData = count => {
  for (let i = 0; i < count; i++) {
    const email = faker.internet.email()
    const password = faker.internet.password()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    users.push({
      email,
      password,
      firstName,
      lastName
    })

    models.push({
      birthDate: faker.date.birthdate(),
      description: faker.lorem.paragraphs(3, '<br/>\n'),
      eyescolor: faker.helpers.arrayElement([
        EyesColor.BLEU,
        EyesColor.VERT,
        EyesColor.MARRON,
        EyesColor.NOIR,
        EyesColor.GRIS,
        EyesColor.VAIRONS
      ]),
      haircolor: faker.helpers.arrayElement([
        HairColor.BLOND,
        HairColor.MARRON,
        HairColor.NOIR,
        HairColor.ROUX,
        HairColor.GRIS
      ]),
      gender: faker.helpers.arrayElement([
        Gender.HOMME,
        Gender.FEMME,
        Gender.AUTRE
      ]),
      height: faker.number.int({ min: 150, max: 200 }),
      weight: faker.number.int({ min: 40, max: 100 })
    })

    admins.push({
      accessLevel: faker.number.int({ min: 1, max: 5 })
    })

    photos.push({
      url: faker.image.url()
    })

    pastExperiences.push({
      description: faker.lorem.sentence()
    })

    addresses.push({
      number: faker.location.buildingNumber(),
      street: faker.location.street(),
      city: faker.location.city(),
      zip: faker.location.zipCode(),
      country: faker.location.country()
    })

    submitProfiles.push({
      phone: faker.phone.number(),
      birthDate: faker.date.birthdate(),
      firstName,
      lastName,
      eyescolor: faker.helpers.arrayElement([
        EyesColor.BLEU,
        EyesColor.VERT,
        EyesColor.MARRON,
        EyesColor.NOIR,
        EyesColor.GRIS
      ]),
      haircolor: faker.helpers.arrayElement([
        HairColor.BLOND,
        HairColor.MARRON,
        HairColor.NOIR,
        HairColor.ROUX,
        HairColor.GRIS
      ]),
      photo: faker.image.url(),
      pastExperiences: faker.lorem.sentence()
    })

    tokens.push({
      token: faker.string.uuid()
    })
  }
}

const seed = async () => {
  console.log('Creating users, models & other data ...')

  generateFakeData(10)

  for (let i = 0; i < users.length; i++) {
    console.log('Creating user, model & other data:', users[i])

    const user = await prisma.user.create({
      data: users[i]
    })
    const model = await prisma.model.create({
      data: {
        ...models[i],
        user: {
          connect: {
            id: user.id
          }
        }
      }
    })

    const profilePicture = await prisma.photo.create({
      data: {
        ...photos[i],
        model: {
          connect: {
            id: model.id
          }
        }
      }
    })

    await prisma.model.update({
      where: {
        id: model.id
      },
      data: {
        profilePictureId: profilePicture.id
      }
    })

    const admin = await prisma.admin.create({
      data: {
        ...admins[i],
        userId: user.id
      }
    })

    const photo = await prisma.photo.create({
      data: {
        ...photos[i],
        modelId: model.id
      }
    })

    const pastExperience = await prisma.pastExperience.create({
      data: {
        ...pastExperiences[i],
        modelId: model.id
      }
    })

    const address = await prisma.address.create({
      data: {
        ...addresses[i],
        modelId: model.id
      }
    })

    const submitProfile = await prisma.submitProfile.create({
      data: {
        ...submitProfiles[i],
        userId: user.id
      }
    })

    const submitToProfiles = await prisma.submitToProfiles.create({
      data: {
        submitProfileId: submitProfile.id,
        modelId: model.id
      }
    })

    const token = await prisma.token.create({
      data: {
        ...tokens[i],
        userId: user.id
      }
    })
  }

  console.log('Data created/updated with success!')
}

seed()
  .catch(error => {
    console.error('Error:', error)
  })
  .finally(async () => {
    await prisma.$disconnect()
    console.log('Disconnect ing Prisma client ...')
  })
