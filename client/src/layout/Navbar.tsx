import { Link } from 'react-router-dom'
import RoutesConfig from '../routes/RouteConfig'

const Navbar = () => {
  return (
    <header>
      <nav className="navigation">
        <div className="navigation__wrapper">
          <div className="navigation__logo">
            <Link to="/">
              <figure className="navigation__logo__media">
                Ynda Models [LOGO]
              </figure>
            </Link>
          </div>

          <div className="navigation__menu">
            <ul className="navigation__menu__list">
              {RoutesConfig.map(route => {
                if (route.path !== '/') {
                  return (
                    <li
                      key={route.path}
                      className="navigation__menu__list--item"
                    >
                      <Link to={route.path}>{route.name}</Link>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
