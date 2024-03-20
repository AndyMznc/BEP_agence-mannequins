import RoutesConfig from '../routes/RouteConfig'

const Navbar = () => {
  return (
    <header>
      <nav className="navigation">
        <div className="navigation__wrapper">
          <div className="navigation__logo">
            <a href="/">
              <figure className="navigation__logo__media">
                Ynda Models [LOGO]
              </figure>
            </a>
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
                      <a href={route.path}>{route.name}</a>
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
