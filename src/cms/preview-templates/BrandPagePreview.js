import React from 'react'
import PropTypes from 'prop-types'
import BrandPageTemplate from '../../components/BrandPageTemplate'
const BrandPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'offerings', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryPartnerLogo = entry.getIn(['data', 'partners', 'logo'])
  const logo = entryPartnerLogo ? entryPartnerLogo.toJS() : []

  const entryAdvantage = entry.getIn(['data', 'advantages', 'blurbs'])
  const advantage = entryAdvantage ? entryAdvantage.toJS() : []

  return (
    <BrandPageTemplate
      product_slug={entry.getIn(['data', 'product_slug'])}
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      hero_image={{
        image: entry.getIn(['data', 'hero_image', 'image']),
        alt: entry.getIn(['data', 'hero_image', 'alt']),
      }}
      navbar={{
        logo: entry.getIn(['data', 'navbar', 'logo']),
        brand_slug: entry.getIn(['data', 'navbar', 'brand_slug']),
      }}
      heading={entry.getIn(['data', 'heading'])}
      subheading={entry.getIn(['data', 'subheading'])}
      brand_heading={entry.getIn(['data', 'brand_heading'])}
      offerings={{ blurbs }}
      partners={{ logo }}
      quote={{
        text: entry.getIn(['data', 'quote', 'text']),
        name: entry.getIn(['data', 'quote', 'name']),
        title: entry.getIn(['data', 'quote', 'title']),
        image: entry.getIn(['data', 'quote', 'image']),
      }}
      advantages={{ advantage }}
      footer={{
        logo: entry.getIn(['data', 'footer', 'logo']),
        email: entry.getIn(['data', 'footer', 'email']),
        newsletter: entry.getIn(['data', 'footer', 'newsletter']),
      }}
    />
  )
}

BrandPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default BrandPagePreview
