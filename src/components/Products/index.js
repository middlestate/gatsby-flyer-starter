import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Products = ({ gridItems, logo }) => (
  <Fragment>
    <div className='columns is-centered '>
      <div className='column is-four-fifths'>
        <div className='columns is-multiline is-centered '>
          {gridItems.map(item => (
            <div key={item.image} className='column is-one-third'>
              <section className='section has-section-padding-none'>
                <div className='center'>
                  <Link to={`/products/${item.slug}`}>
                    <div style={{ background: `url(${item.image}) no-repeat center / cover`, height: 251, width: 168, margin: 20 }} />
                  </Link>
                </div>
                <h3 className='is-size-5 has-text-weight-bold has-text-ea-black' style={{ padding: 10 }} >{item.name}</h3>
                <p className='has-text-ea-black' style={{ padding: 5 }}>{item.text}</p>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='columns is-centered'>
      <div className='column is-half'>
        <div className='columns is-mobile is-centered level'>
          {logo.map(logo => (
            <div key={logo.image} className='column is-3'>
              <section className='section' style={{ padding: 10 }}>
                <figure className='image is-96x96 level-item'>
                  <img alt='partner logo' src={logo.image} style={{ paddingRight: 10 }} />
                </figure>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Fragment>
)

Products.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      slug: PropTypes.string,
      name: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  logo: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
    }),
  ),
}

export default Products
