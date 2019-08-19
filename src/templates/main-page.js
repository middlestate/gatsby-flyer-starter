import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import MainPageTemplate from '../components/MainPageTemplate'
import Layout from '../components/Layout'

const MainPage = ({ data }) => {
  const { markdownRemark: mainPosts } = data
  return (
    <Layout>
      <MainPageTemplate
        content={mainPosts.html}
        contentComponent={HTMLContent}
        nav_logo={mainPosts.frontmatter.nav_logo}
        title={mainPosts.frontmatter.title}
        heading={mainPosts.frontmatter.heading}
        subheading={mainPosts.frontmatter.subheading}
        hero_image={mainPosts.frontmatter.hero_image}
        brand_heading={mainPosts.frontmatter.brand_heading}
        offerings={mainPosts.frontmatter.offerings}
        partners={mainPosts.frontmatter.partners}
        quote={mainPosts.frontmatter.quote}
        advantages={mainPosts.frontmatter.advantages}
        footer_logo={mainPosts.frontmatter.footer_logo}
        email={mainPosts.frontmatter.email}
        newsletter={mainPosts.frontmatter.newsletter}
        meta_title={mainPosts.frontmatter.meta_title}
        meta_description={mainPosts.frontmatter.meta_description}
      />
    </Layout>
  )
}

MainPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MainPage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        slug
        nav_logo
        title
        heading
        subheading
        brand_heading
        footer_logo
        email
        newsletter
        hero_image {
          image
          alt
        }
        meta_title
        meta_description
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
          image
        }
        advantages {
          blurbs {
            image
            text
          }
        }
      }
    }
  }
`
