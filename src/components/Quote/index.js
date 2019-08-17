import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({ text, name, title }) => (
  <div className='section is-paddingless'>
    <div className='hero has-hero-image is-warning is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-two-thirds'>
              <div className='has-text-low-starch-blue has-text-centered has-text-weight-bold is-italic has-huge-text is-hidden-mobile'>"</div>
              <h1 className='is-size-5 has-text-white has-text-centered has-text-weight-bold'>{text}</h1>
              <h3
                className='is-size-6 has-text-low-starch-blue has-text-centered has-text-weight-bold'
                style={{ transform: 'translateY(25px)' }}
              >
                {name}
              </h3>
              <h5
                className='is-size-7 has-text-centered has-text-low-starch-blue'
                style={{ transform: 'translateY(25px)' }}
              >
                {title}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Quote.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
}

export default Quote
