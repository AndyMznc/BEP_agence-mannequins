import React from 'react'
import { FetchModels } from '../components/FetchModels'

const Models: React.FC = () => {
  return (
    <div className="mannequins">
      <h1>Mannequins</h1>

      <FetchModels />
    </div>
  )
}

export default Models
