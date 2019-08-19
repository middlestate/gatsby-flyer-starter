import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import AboutPageTemplate from '../components/AboutPageTemplate'
import Layout from '../components/Layout'

const AboutPage = ({ data }) => {
  const { markdownRemark: aboutPosts } = data
  return (
    <Layout>
      <AboutPageTemplate
        content={aboutPosts.html}
        contentComponent={HTMLContent}
        nav_logo={aboutPosts.frontmatter.nav_logo}
        title={aboutPosts.frontmatter.title}
        heading={aboutPosts.frontmatter.heading}
        subheading={aboutPosts.frontmatter.subheading}
        heading_image={aboutPosts.frontmatter.heading_image}
        hero_image={aboutPosts.frontmatter.hero_image}
        ingredients={aboutPosts.frontmatter.ingredients}
        partners={aboutPosts.frontmatter.partners}
        quote={aboutPosts.frontmatter.quote}
        advantages={aboutPosts.frontmatter.advantages}
        footer_logo={aboutPosts.frontmatter.footer_logo}
        email={aboutPosts.frontmatter.email}
        newsletter={aboutPosts.frontmatter.newsletter}
        meta_title={aboutPosts.frontmatter.meta_title}
        meta_description={aboutPosts.frontmatter.meta_description}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String) {
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
        heading_image
        ingredients
        footer_logo
        email
        newsletter
        hero_image {
          image
          alt
        }
        meta_title
        meta_description
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
