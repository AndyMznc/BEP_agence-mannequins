import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from '../pages/About'
import ApplyProfil from '../pages/ApplyProfil'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import ModelSingle from '../pages/ModelSingle'
import Models from '../pages/Models'
import { useAuth } from '../provider/authProvider'
import { ProtectedRoute } from './ProtectedRoute'

const Routes = () => {
  const { token } = useAuth()

  const routesForPublic = [
    { path: '/about', element: <About /> },
    { path: '/mannequins', element: <Models /> },
    { path: '/contact', element: <Contact /> },
  ]

  const routesForAuthenticated = [
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/mannequins/:slug', element: <ModelSingle /> },
        { path: '/postuler', element: <ApplyProfil /> },
        { path: '/profile', element: <div>User Profile</div> }, // Exemple de page protégée
        { path: '/logout', element: <Logout /> },
      ],
    },
  ]

  const routesForNotAuthenticated = [
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
  ]

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticated : []),
    ...routesForAuthenticated,
  ])

  return <RouterProvider router={router} />
}

export default Routes
