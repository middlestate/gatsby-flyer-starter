import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/HomePageTemplate'
const HomePagePreview = ({ entry, getAsset }) => {
  return (
    <HomePageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      brands={{
        image: entry.getIn('data', 'brands', 'image'),
        alt: entry.getIn('data', 'brands', 'alt'),
        text: entry.getIn(['data', 'brands', 'text']),
        slug: entry.getIn('data', 'brands', 'slug'),
      }}
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
