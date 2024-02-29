import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
import { Model } from '../types'

export const ModelList: React.FC = () => {
  const [models, setModels] = React.useState<Model[]>([])

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await api.get<Model[]>('/models')
        console.log(response.data) // * Debuggings;
        setModels(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchModels()
  }, [])

  return (
    <div className="mannequins">
      <ul className="mannequins__liste">
        {models.map(model => (
          <li key={model.id}>
            <Link to={`/mannequins/${model.id}`}>
              <div className="mannequin__carte">
                <figure className="mannequin__carte__media">
                  <img
                    src={model.profilePicture?.url}
                    alt={`${model.user.firstName} ${model.user.lastName}`}
                    className="mannequin__carte__media--image"
                  />
                </figure>
                <p className="mannequin__carte--nom">
                  {model.user.firstName} {model.user.lastName}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
