import axios from 'axios'
import React from 'react'

export const FetchModels: React.FC = () => {
  // const [models, setModels] = React.useState([])

  const API_URL = 'http://localhost:3000/api/models'

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="mannequins">
      <h1>Fetching models</h1>
    </div>
  )
}
