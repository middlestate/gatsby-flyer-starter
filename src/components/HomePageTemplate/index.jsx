import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const HomePageTemplate = ({ brands, title, subtitle }) => (
  <div>
    <h1 className='is-size-3'>{title}</h1>
    <h2 className='is-size-5'>{subtitle}</h2>
    <div className='container'>
      <div className='columns is-multiline is-mobile'>
        {brands.links.map((link, keys) => (
          <Link key={keys} to={`brand/${link.slug}`} >
            <div className='column is-3'>
              <figure className='image is-256x256'>
                <img src={link.image} alt={link.alt} />
              </figure>
              <p className='is-size-6'>{link.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
)

HomePageTemplate.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      alt: PropTypes.string,
      text: PropTypes.string,
      slug: PropTypes.string,
    })
  ),
}

export default HomePageTemplate
