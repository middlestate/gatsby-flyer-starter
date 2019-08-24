import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/HomePageTemplate'
const HomePagePreview = ({ entry, getAsset }) => {
  const entryLinks = entry.getIn(['data', 'brands', 'links'])
  const links = entryLinks ? entryLinks.toJS() : []
  return (
    <HomePageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      brands={{ links }}
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
