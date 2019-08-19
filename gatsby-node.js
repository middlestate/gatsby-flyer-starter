const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
// const createPaginatedPages = require('gatsby-paginate')

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
              templateKey
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

    const mainPages = result.data.allMarkdownRemark.edges
    const aboutPages = result.data.allMarkdownRemark.edges

    // Post pages:
    let mainPosts = []
    let aboutPosts = []
    // Iterate through each post/page, putting all found posts (where templateKey = article-page) into `posts`
    mainPages.forEach(edge => {
      if (_.isMatch(edge.node.frontmatter, { templateKey: 'main-page' })) {
        mainPosts = mainPosts.concat(edge)
      }
    })

    aboutPages.forEach(edge => {
      if (_.isMatch(edge.node.frontmatter, { templateKey: 'about-page' })) {
        aboutPosts = aboutPosts.concat(edge)
      }
    })

    mainPosts.forEach(edge => {
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

    aboutPosts.forEach(edge => {
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
