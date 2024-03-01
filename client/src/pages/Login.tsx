import { useNavigate } from 'react-router-dom'
import { useAuth } from '../provider/authProvider'

const Login = () => {
  const { setToken } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    setToken('token')
    navigate('/', { replace: true })
  }

  setTimeout(() => {
    handleLogin()
  }, 3 * 1000)

  return <>Login Page</>
}

export default Login
