import About from '../pages/About'
import ApplyProfil from '../pages/ApplyProfil'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Models from '../pages/Models'

const RoutesConfig = [
  { path: '/', name: 'Accueil', component: Home },
  { path: '/about', name: 'A propos', component: About },
  { path: '/mannequins', name: 'Mannequins', component: Models },
  { path: '/postuler', name: 'Postuler', component: ApplyProfil },
  { path: '/contact', name: 'Contact', component: Contact },
]

export default RoutesConfig
