import AuthProvider from './provider/authProvider'
import Routes from './routes'
import './styles/index.scss'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  )
}

export default App
