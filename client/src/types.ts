export enum EyesColor {
  BLEU = 'Bleu',
  VERT = 'Vert',
  MARRON = 'Marron',
  NOIR = 'Noir',
  GRIS = 'Gris',
  VAIRONS = 'Vairons',
}

export enum HairColor {
  BLOND = 'Blond',
  MARRON = 'Marron',
  NOIR = 'Noir',
  ROUX = 'Roux',
  GRIS = 'Gris',
  CHAUVE = 'Chauve',
}

export enum Gender {
  HOMME = 'Homme',
  FEMME = 'Femme',
  AUTRE = 'Autre',
}

export interface Address {
  id: number
  createdAt: Date
  updatedAt: Date
  number: string
  street: string
  city: string
  zip: string
  country: string
  modelId?: number | null
  submitProfileId?: number | null
}

export interface Photo {
  id: number
  createdAt: Date
  updatedAt: Date
  url: string
  modelId: number
}

export interface PastExperience {
  id: number
  createdAt: Date
  updatedAt: Date
  description: string
  modelId: number
}

export interface Token {
  id: number
  createdAt: Date
  updatedAt: Date
  token: string
  userId: number
}

export interface User {
  id: number
  createdAt: Date
  updatedAt: Date
  email: string
  password: string
  firstName: string
  lastName: string
  modelId?: number | null
  adminId?: number | null
  token: Token[]
  submitProfile: SubmitProfile[]
}

export interface Admin {
  id: number
  accessLevel: number
  userId: number
}

export interface Model {
  id: number
  birthDate: Date
  description?: string | null
  eyescolor: EyesColor
  haircolor: HairColor
  gender: Gender
  height: number
  weight: number
  photo: Photo[]
  pastExperience: PastExperience[]
  userId: number
  address: Address[]
  submitToProfiles: SubmitToProfiles[]
  profilePictureId: number | null
  profilePicture: Photo | null
  user: User
}

export interface SubmitProfile {
  id: number
  createdAt: Date
  updatedAt: Date
  phone: string
  birthDate: Date
  firstName: string
  lastName: string
  eyescolor: EyesColor
  haircolor: HairColor
  photo: string
  pastExperiences: string
  userId?: number | null
  address: Address[]
  submitToProfiles: SubmitToProfiles[]
}

export interface SubmitToProfiles {
  id: number
  createdAt: Date
  updatedAt: Date
  submitProfileId: number
  modelId: number
}
