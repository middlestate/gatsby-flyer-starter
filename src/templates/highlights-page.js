import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HighlightsPageTemplate from '../components/HighlightsPageTemplate'
import Layout from '../components/Layout'

const HighlightsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <HighlightsPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
      />
    </Layout>
  )
}

HighlightsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HighlightsPage

export const highlightsPageQuery = graphql`
  query HighlightsPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        heading
        subheading
        meta_title
        meta_description
      }
    }
  }
`
