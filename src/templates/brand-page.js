import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// import { HTMLContent } from '../components/Content'
import BrandPageTemplate from '../components/BrandPageTemplate'
import Layout from '../components/Layout'

const BrandPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <BrandPageTemplate
        navbar={frontmatter.navbar}
        product_slug={frontmatter.product_slug}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        hero_image={frontmatter.hero_image}
        brand_heading={frontmatter.brand_heading}
        offerings={frontmatter.offerings}
        partners={frontmatter.partners}
        quote={frontmatter.quote}
        advantages={frontmatter.advantages}
        footer={frontmatter.footer}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
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
        product_slug
        navbar {
          logo
          brand_slug
        }
        title
        heading
        subheading
        brand_heading
        footer {
          logo
          email
          newsletter
        }
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
          icon {
            image
            text
          }
        }
      }
    }
  }
`
