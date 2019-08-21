const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___slug] }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              slug
              nav_logo
              heading
              heading_image
              product_image
              ingredients
              hero_image {
                image
                alt
              }
              subheading
              brand_heading
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
              footer_logo
              email
              newsletter
              meta_title
              meta_description
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const allPages = result.data.allMarkdownRemark.edges
    // Post pages:

    allPages.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
