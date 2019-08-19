import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import BrandPageTemplate from '../components/BrandPageTemplate'
import Layout from '../components/Layout'

const BrandPage = ({ data }) => {
  const { markdownRemark: brandPosts } = data
  return (
    <Layout>
      <BrandPageTemplate
        content={brandPosts.html}
        contentComponent={HTMLContent}
        nav_logo={brandPosts.frontmatter.nav_logo}
        title={brandPosts.frontmatter.title}
        heading={brandPosts.frontmatter.heading}
        subheading={brandPosts.frontmatter.subheading}
        hero_image={brandPosts.frontmatter.hero_image}
        brand_heading={brandPosts.frontmatter.brand_heading}
        offerings={brandPosts.frontmatter.offerings}
        partners={brandPosts.frontmatter.partners}
        quote={brandPosts.frontmatter.quote}
        advantages={brandPosts.frontmatter.advantages}
        footer_logo={brandPosts.frontmatter.footer_logo}
        email={brandPosts.frontmatter.email}
        newsletter={brandPosts.frontmatter.newsletter}
        meta_title={brandPosts.frontmatter.meta_title}
        meta_description={brandPosts.frontmatter.meta_description}
      />
    </Layout>
  )
}

BrandPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BrandPage

export const pageQuery = graphql`
  query BrandPage($id: String!) {
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
