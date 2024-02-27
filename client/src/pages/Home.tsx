import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home__content">
        <section className="home__hero__header">
          <div className="home__hero__header__bubble">
            <h1 className="home__hero__header__bubble__media">
              <img
                src="/images/hero_logo.png"
                alt="Ynda Models"
                className="home__hero__header__bubble__media--image"
              />
            </h1>
            <p className="home__hero__header__bubble--description">
              Nos mannequins ont du <span className="color-white">talents</span>
            </p>
            <p className="home__hero__header__bubble--location">
              Agence de mannequins basé à Lyon.
            </p>
          </div>
        </section>

        <section className="home__explore">
          <div className="home__explore__texts">
            <h2 className="home__explore__texts--title">
              Expérience. Talent. Excellente.
            </h2>
            <p className="home__explore__texts--description">
              Notre mission est de faire découvrir les visages de demain du
              monde de la mode. De toutes les genres et de toutes les
              morphologies.
            </p>

            <div className="home__explore__navigation">
              <div className="home__explore__navigation__left">
                <Link
                  to="/mannequins"
                  className="home__explore__navigation__left__link"
                >
                  <figure className="home__explore__navigation__left__link__media">
                    <img
                      src="/images/brian-lawson-unsplash.png"
                      alt="Femmes"
                      className="home__explore__navigation__left__link__media--image"
                    />
                  </figure>
                  <div className="home__explore__navigation__left__link__genre">
                    <span className="home__explore__navigation__left__link__genre--femme">
                      Femmes
                    </span>
                  </div>
                </Link>
              </div>

              <div className="home__explore__navigation__right">
                <Link
                  to="/mannequins"
                  className="home__explore__navigation__right__link"
                >
                  <figure className="home__explore__navigation__right__link__media">
                    <img
                      src="/images/taylor-hernandez-unsplash.jpg"
                      alt="Hommes"
                      className="home__explore__navigation__right__link__media--image"
                    />
                  </figure>
                  <div className="home__explore__navigation__right__link__genre">
                    <span className="home__explore__navigation__right__link__genre--homme">
                      Hommes
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="home__presentation">
          <div className="home__presentation__texts">
            <h2 className="home__presentation__texts--title">
              Là où tout commence
            </h2>
            <div className="home__presentation__texts--description">
              <p>
                Ynda Models est une agence de mannequins fictive basée à Lyon
                qui se démarque par sa promotion de la diversité et de
                l'élégance, incarnant une fusion parfaite entre la beauté et le
                professionnalisme.
              </p>
              <p>
                Depuis ses débuts, Ynda Models s'engage à découvrir et à
                promouvoir les talents émergents, représentant avec fierté des
                mannequins de tous genres et morphologies pour refléter la
                diversité de la beauté.
              </p>
              <p>
                L'approche inclusive de Ynda Models inspire non seulement
                l'industrie, mais aussi les talents prometteurs, en offrant des
                opportunités uniques pour briller et redéfinir les normes de la
                beauté dans le monde de la mode.
              </p>
            </div>
          </div>
        </section>

        <section className="home__postuler">
          <div className="home__postuler__texts">
            <h2 className="home__postuler__texts--title">
              Prêt à briller avec nous ?
            </h2>
            <div className="home__postuler__texts--description">
              <p>
                Vous avez ce qu'il faut pour être un mannequin Ynda ? Postulez
                dès maintenant !
              </p>
              <p>
                Nous sommes à la recherche de talents émergents de tous genres
                et de toutes morphologies pour rejoindre notre agence et
                représenter la diversité de la beauté.
              </p>
            </div>

            <Link to="/postuler" className="home__postuler__texts--link">
              Je postule
            </Link>
          </div>

          <figure className="home__postuler__media">
            <img
              src="https://picsum.photos/id/47/544/798?grayscale=true"
              className="home__postuler__media--image"
            />
          </figure>
        </section>
      </div>
    </div>
  )
}

export default Home
