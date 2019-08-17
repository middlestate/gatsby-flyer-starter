import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const HighlightsPageTemplate = ({
  title,
  meta_title,
  meta_description,
  heading,
  subheading,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-white is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HighlightsPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
}

export default HighlightsPageTemplate
