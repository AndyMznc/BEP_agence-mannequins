import axios from 'axios'
import { useState } from 'react'
import { useAuth } from '../provider/authProvider'

const Authentication = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setToken } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('/auth/login', {
        email,
        password,
      })
      const { token } = response.data
      setToken(token)
    } catch (error) {
      console.log("Erreur d'authentification", error)
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  )
}

export default Authentication
/**
 *  [ ] TODO : Créer le CRUD de l'authentification
 *  [ ] TODO : Y créer le handle et l'index, ainsi que la route pour y récupérer les données
 *  [ ] TODO : Éditer le post Axios de cette page
 * */
