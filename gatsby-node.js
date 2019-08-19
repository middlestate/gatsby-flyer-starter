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
    let aboutPosts = []
    let brandPosts = []
    // Iterate through each post/page, putting all found posts (where templateKey = article-page) into `posts`

    allPages.forEach(edge => {
      if (_.isMatch(edge.node.frontmatter, { templateKey: 'brand-page' })) {
        brandPosts = brandPosts.concat(edge)
      }
    })

    allPages.forEach(edge => {
      if (_.isMatch(edge.node.frontmatter, { templateKey: 'about-page' })) {
        aboutPosts = aboutPosts.concat(edge)
      }
    })

    createPaginatedPages({
      edges: brandPosts,
      createPage: createPage,
      pageTemplate: 'src/templates/brand-page.js',
      pageLength: 6, // This is optional and defaults to 10 if not used
      pathPrefix: 'brand', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })

    createPaginatedPages({
      edges: aboutPosts,
      createPage: createPage,
      pageTemplate: 'src/templates/about-page.js',
      pathPrefix: 'about',
      contexr: {},
    })

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
