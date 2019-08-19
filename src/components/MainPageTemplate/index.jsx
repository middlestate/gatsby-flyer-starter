import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Products from '../Products'
import Quote from '../Quote'
import Advantage from '../Advantage'
import Partner from '../Partners'
import NavBar from '../NavBar'
import Footer from '../Footer'

const HomePageTemplate = ({
  title,
  meta_title,
  meta_description,
  nav_logo,
  hero,
  brand_heading,
  footer_logo,
  newsletter,
  email,
  heading,
  subheading,
  offerings,
  partners,
  quote,
  advantages,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <NavBar logo={nav_logo} />
    <section className='hero is-white has-section-padding-none'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns '>
            <div className='column is-4 is-offset-2'>
              <div className='section'>
                <h1 className='title is-size-3'>{heading}</h1>
                <h5 className='subtitle is-size-7'>{subheading}</h5>
              </div>
            </div>
            <div className='column is-6  '>
              <div className='section is-hidden-mobile'>
                <img
                  src={nav_logo}
                  style={{ height: 186, width: 350, marginTop: -10 }}
                  alt='brand logo'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section is-paddingless' style={{ padding: 0 }}>
      <figure className='is-3by1'>
        <img
          className='image'
          src={hero.image}
          style={{ marginTop: -50 }}
          alt={hero.alt}
        />
      </figure>
    </section>
    <section className='section is-white'>
      <div className='columns is-centered'>
        <div className='column is-half'>
          <div className='is-size-5 has-text-weight-bold has-text-centered has-text-black'>
            <u>{brand_heading}</u>
          </div>
        </div>
      </div>
      <Products gridItems={offerings.blurbs} logo={partners.logo} />
    </section>
    <Quote text={quote.text} name={quote.name} title={quote.title} />
    <Advantage gridItems={advantages.blurbs} />
    <Footer
      logo={footer_logo}
      email={email}
      newsletter={newsletter}
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  brand_heading: PropTypes.string,
  hero: PropTypes.shape({
    image: PropTypes.string,
    alt: PropTypes.string,
  }),
  nav_logo: PropTypes.string,
  footer_logo: PropTypes.string,
  newsletter: PropTypes.string,
  email: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  partners: PropTypes.shape({
    logo: PropTypes.array,
  }),
  quote: PropTypes.shape({
    text: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }),
  advantages: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

export default HomePageTemplate
