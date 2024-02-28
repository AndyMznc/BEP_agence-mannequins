const { PrismaClient, Gender, EyesColor, HairColor } = require('@prisma/client')

const prisma = new PrismaClient()

const users = [
  {
    email: 'john.doe@gmail.com',
    password: 'Passw0rd1',
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    email: 'sarah_smith@hotmail.com',
    password: 'SaRaH123!',
    firstName: 'Sarah',
    lastName: 'Smith'
  }
  // Add more users as needed
]

const models = [
  {
    birthDate: new Date('1995-02-01'),
    eyescolor: EyesColor.BLUE,
    haircolor: HairColor.BLACK,
    gender: Gender.MALE,
    height: 180,
    weight: 75
  },
  {
    birthDate: new Date('1991-06-15'),
    eyescolor: EyesColor.GREEN,
    haircolor: HairColor.BROWN,
    gender: Gender.FEMALE,
    height: 170,
    weight: 60
  }
  // Add more models as needed
]

const admins = [
  {
    accessLevel: 1
  },
  {
    accessLevel: 2
  }
  // Add more admins as needed
]

const photos = [
  {
    url: 'https://unsplash.com/fr/photos/homme-portant-un-t-shirt-a-col-rond-vert-regardant-vers-le-haut-lkMJcGDZLVs',
    isProfilePicture: true
  },
  {
    url: 'https://unsplash.com/fr/photos/femme-faisant-la-pose-AoL-mVxprmk'
  }
  // Add more photos as needed
]

const pastExperiences = [
  {
    description: 'Experience 1'
  },
  {
    description: 'Experience 2'
  }
  // Add more past experiences as needed
]

const addresses = [
  {
    number: '123',
    street: 'Main St',
    city: 'New York',
    zip: '10001',
    country: 'USA'
  },
  {
    number: '456',
    street: 'Market St',
    city: 'San Francisco',
    zip: '94105',
    country: 'USA'
  }
  // Add more addresses as needed
]

const submitProfiles = [
  {
    phone: '123-456-7890',
    birthDate: new Date('1995-02-01'),
    firstName: 'John',
    lastName: 'Doe',
    eyescolor: EyesColor.BLUE,
    haircolor: HairColor.BLACK,
    photo: 'https://example.com/photo3.jpg',
    pastExperiences: 'Experience 3'
  },
  {
    phone: '987-654-3210',
    birthDate: new Date('1991-06-15'),
    firstName: 'Sarah',
    lastName: 'Smith',
    eyescolor: EyesColor.GREEN,
    haircolor: HairColor.BROWN,
    photo: 'https://example.com/photo4.jpg',
    pastExperiences: 'Experience 4'
  }
  // Add more submit profiles as needed
]

const tokens = [
  {
    token: 'random_token_1'
  },
  {
    token: 'random_token_2'
  }
  // Add more tokens as needed
]

const seed = async () => {
  console.log('Creating users, models & other data ...')

  for (let i = 0; i < users.length; i++) {
    console.log('Creating user, model & other data:', users[i])

    const user = await prisma.user.create({
      data: users[i]
    })

    const model = await prisma.model.create({
      data: {
        ...models[i],
        userId: user.id
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
        // Omit `submitProfileId` if address is not related to a submit profile
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
