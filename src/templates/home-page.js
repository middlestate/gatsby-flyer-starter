import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        offerings={frontmatter.offerings}
        partners={frontmatter.partners}
        quote={frontmatter.quote}
        advantages={frontmatter.advantages}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: {eq: $id}){
      frontmatter {
        title
        meta_title
        meta_description
        heading
        subheading
        offerings {
          blurbs {
            image
            slug
            name
            text
          }
        }
        partners {
          logo {
            image
          }
        }
        quote {
          text
          name
          title
        }
        advantages {
          blurbs{
            image
            text
          }
        }
      }
    }
  }
`
