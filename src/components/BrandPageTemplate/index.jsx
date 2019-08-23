import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Products from '../Products'
import Quote from '../Quote'
import Advantage from '../Advantage'
// import Partner from '../Partners'
import NavBar from '../NavBar'
import Footer from '../Footer'

const BrandPageTemplate = ({
  title,
  meta_title,
  meta_description,
  navbar,
  hero_image,
  brand_heading,
  footer,
  heading,
  subheading,
  offerings,
  partners,
  quote,
  advantages,
  product_slug
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <NavBar logo={navbar.logo} slug={navbar.brand_slug} />
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
                  src={navbar.logo}
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
      <figure className='image is-3by1'>
        <img
          src={hero_image.image}
          style={{ marginTop: -50 }}
          alt={hero_image.alt}
        />
      </figure>
    </section>
    <section className='section is-white'>
      <div className='columns is-centered'>
        <div className='column is-half'>
          <div className='is-size-5 has-text-weight-bold has-text-centered has-text-black'>
            {brand_heading}
            <hr style={{width: '50%', maxWidth: '200px', borderTop: `2px solid black`, margin: 'auto' }} />
          </div>
        </div>
      </div>
      <Products gridItems={offerings.blurbs} logo={partners.logo} />
    </section>
    <Quote text={quote.text} name={quote.name} title={quote.title} image={quote.image}/>
    <Advantage gridItems={advantages.blurbs} />
    <Footer
      logo={footer.logo}
      email={footer.email}
      newsletter={footer.newsletter}
      />
  </div>
)

BrandPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  brand_heading: PropTypes.string,
  product_slug: PropTypes.string,
  hero_image: PropTypes.shape({
    image: PropTypes.string,
    alt: PropTypes.string,
  }),
  navbar: PropTypes.shape({
    logo: PropTypes.string,
    brand_slug: PropTypes.string
  }),
  footer: PropTypes.shape({
    logo: PropTypes.string,
    email: PropTypes.string,
    newsletter: PropTypes.string
  }),
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
    image: PropTypes.string
  }),
  advantages: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

export default BrandPageTemplate
