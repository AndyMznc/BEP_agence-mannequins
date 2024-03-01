import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import { useAuth } from '../provider/authProvider'
import { ProtectedRoute } from './ProtectedRoute'

const Routes = () => {
  const { token } = useAuth()

  const routesForPublic = [
    { path: '/service', element: <div>Service Page</div> },
    { path: '/about-us', element: <div>About Us</div> },
  ]

  const routesForAuthenticated = [
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        { path: '/', element: <div>User Home Page</div> },
        { path: '/profile', element: <div>User Profile</div> },
        { path: '/logout', element: <Logout /> },
      ],
    },
  ]

  const routesForNotAuthenticated = [
    { path: '/', element: <div>Home</div> },
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
