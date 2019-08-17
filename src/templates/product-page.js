import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import ProductsPageTemplate from '../components/ProductsPageTemplate'
// import SE0 from '../components/SEO'
// import Share from '../components/Share'
// import Disqus from '../components/Disqus'
import Layout from '../components/Layout'

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <section className='section'>
        {/* <SE0
          title={post.frontmatter.title}
          meta_title={post.frontmatter.meta_title}
          meta_desc={post.frontmatter.meta_description}
          cover={post.frontmatter.cover}
          slug={post.fields.slug}
          date={post.frontmatter.date}
        /> */}
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <ProductsPageTemplate
                content={post.html}
                contentComponent={HTMLContent}
                product_image={post.frontmatter.product_image}
                meta_title={post.frontmatter.meta_title}
                meta_description={post.frontmatter.meta_description}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                heading={post.frontmatter.heading}
                subheading={post.frontmatter.subheading}
              />
              {/*  <Share
                title={post.frontmatter.title}
                slug={post.fields.slug}
                excerpt={post.frontmatter.meta_description}
              />
              <hr />
              <Disqus
                title={post.frontmatter.title}
                slug={post.fields.slug}
              />
            */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProductPage

export const pageQuery = graphql`
  query ProductsByID($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        title
        product_image
        heading
        subheading
        meta_title
        meta_description
        tags
      }
    }
  }
`
