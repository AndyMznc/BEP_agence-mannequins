import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'
import { Model } from '../types'

const ModelSingle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const [modelSingle, setModelSingle] = React.useState<Model>()

  const stringInNormalCase = (value: string | undefined) => {
    if (!value) return ''

    return (
      value.toLowerCase().charAt(0).toUpperCase() + value.toLowerCase().slice(1)
    )
  }

  const calculateAge = (birthDate: Date): number => {
    const today = new Date()
    const birthDateInMilliseconds = birthDate.getTime()
    const todayInMilliseconds = today.getTime()
    const ageInMilliseconds = todayInMilliseconds - birthDateInMilliseconds
    const ageInYears = Math.floor(
      ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
    )
    return ageInYears
  }

  useEffect(() => {
    const fetchModel = async () => {
      try {
        const response = await api.get<Model>(`/models/${slug}`)
        console.log(response.data) // * Debuggings;
        setModelSingle(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchModel()
  }, [slug])

  return (
    <div className="mannequin">
      <div className="mannequin__bouton">
        <span className="mannequin__bouton--left">Left</span>
        <span className="mannequin__bouton--right">Right</span>
      </div>

      <div className="mannequin__details">
        <div className="mannequin__presentation">
          <h1>
            {modelSingle?.user.firstName} {modelSingle?.user.lastName}
          </h1>

          <p>{modelSingle?.description}</p>
          <div className="mannequin__presentation__experiences">
            <p>Expériences :</p>
            <ul>
              {modelSingle?.pastExperience.map(experience => (
                <li key={experience.id}>{experience.description}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mannequin__informations">
          <figure className="mannequin__informations__media">
            <img
              src={modelSingle?.profilePicture?.url}
              alt="Photo de profil"
              className="mannequin__informations__media--media"
            />
          </figure>
          <div className="mannequin__informations__info">
            <ul>
              <li>
                Age:{' '}
                {modelSingle?.birthDate
                  ? calculateAge(new Date(modelSingle.birthDate))
                  : 'Age non disponible'}{' '}
                ans
              </li>

              <li>{modelSingle?.height}cm</li>
              <li>Taille: {modelSingle?.height} cm</li>
              <li>Poids: {modelSingle?.weight}cm</li>
              <li>
                Couleurs des yeux: {stringInNormalCase(modelSingle?.eyescolor)}
              </li>
              <li>
                Couleurs des cheveux:{' '}
                {stringInNormalCase(modelSingle?.haircolor)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelSingle
