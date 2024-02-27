import { Link } from 'react-router-dom'
import RoutesConfig from '../routes/RouteConfig'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content__logo">
          <Link to="/">
            <figure className="footer__content__logo__media">
              Ynda Models [LOGO]
            </figure>
          </Link>
        </div>
        <div className="footer__content__details">
          <p className="footer__content__informations">
            Explorez un monde de beauté et de diversité avec Ynda Models - Où
            l'élégance rencontre l'authenticité. Rejoignez-nous pour célébrer la
            singularité de chacun. Ensemble, rayonnons dans la diversité.
          </p>

          <div className="footer__content__menu">
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
        <div className="footer__content__contact">
          <p className="footer__content__contact--address">
            123, rue de la mode
          </p>
          <Link to="tel:0123456789" className="footer__content__contact--phone">
            01 23 45 67 89
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2024 Ynda Models. Tous droits réservés.</span>
        <Link to="/mentions-legales" className="footer__bottom--link">
          Mentions légales
        </Link>
        <Link to="#" className="footer__bottom--link">
          Politique de confidentialité
        </Link>
      </div>
    </footer>
  )
}

export default Footer
