import Navbar from './layout/Navbar'
import AuthProvider from './provider/authProvider'
import Routes from './routes'
import './styles/index.scss'

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes />
      </AuthProvider>
    </>
  )
}

export default App
