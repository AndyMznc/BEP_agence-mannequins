const { PrismaClient, Gender, EyesColor, HairColor } = require('@prisma/client')

const prisma = new PrismaClient()

const users = [
  {
    email: 'user1@gmail.com',
    password: 'Password123',
    firstName: 'FirstName1',
    lastName: 'LastName1'
  },
  {
    email: 'user2@gmail.com',
    password: 'Password123',
    firstName: 'FirstName2',
    lastName: 'LastName2'
  },
  {
    email: 'user3@gmail.com',
    password: 'Password123',
    firstName: 'FirstName3',
    lastName: 'LastName3'
  }
]

const models = [
  {
    birthDate: new Date('1980-02-01'),
    eyescolor: EyesColor.BLUE,
    haircolor: HairColor.BLACK,
    gender: Gender.MALE,
    height: 180,
    weight: 75
  },
  {
    birthDate: new Date('1985-03-02'),
    eyescolor: EyesColor.GREEN,
    haircolor: HairColor.BROWN,
    gender: Gender.FEMALE,
    height: 170,
    weight: 60
  },
  {
    birthDate: new Date('1990-04-03'),
    eyescolor: EyesColor.BROWN,
    haircolor: HairColor.BLONDE,
    gender: Gender.OTHER,
    height: 175,
    weight: 65
  }
]

const seed = async () => {
  console.log('Creating users & models ...')

  for (let i = 0; i < users.length; i++) {
    console.log('Creating user & model:', users[i])

    const user = await prisma.user.upsert({
      data: users[i]
    })

    await prisma.model.upsert({
      data: {
        ...models[i],
        userId: user.id
      }
    })
  }
}

seed()
  .then(() => {
    console.log('Users & Models created/updated with success!')
  })
  .catch(error => {
    console.error('Error:', error)
  })
  .finally(async () => {
    await prisma.$disconnect()
    console.log('Disconnecting Prisma client ...')
  })
