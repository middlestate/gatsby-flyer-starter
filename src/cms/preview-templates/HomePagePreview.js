import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/HomePageTemplate'
const HomePagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'offerings', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryPartnerLogo = entry.getIn(['data', 'partners', 'logo'])
  const logo = entryPartnerLogo ? entryPartnerLogo.toJS() : []

  const entryAdvantage = entry.getIn(['data', 'advantages', 'blurbs'])
  const advantage = entryAdvantage ? entryAdvantage.toJS() : []

  return (
    <HomePageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      heading={entry.getIn(['data', 'heading'])}
      subheading={entry.getIn(['data', 'subheading'])}
      description={entry.getIn(['data', 'description'])}
      offerings={{ blurbs }}
      partners={{ logo }}
      quote={{
        text: entry.getIn(['data', 'quote', 'text']),
        name: entry.getIn(['data', 'quote', 'name']),
        title: entry.getIn(['data', 'quote', 'title']),
      }}
      advantages={{ advantage }}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
