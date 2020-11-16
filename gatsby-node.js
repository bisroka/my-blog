const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allDatoCmsArticle {
        edges {
          node {
            title
            slug
            content
            thumbnail {
              url
            }
          }
        }
      }
    }
  `).then(result => {
    const articles = result.data.allDatoCmsArticle.edges
    const articleTemplate = path.resolve("./src/blog/article.js")

    articles.forEach(({ node }) => {
      const { slug } = node
      const limit = 3
      createPage({
        path: `blog/${slug}`,
        component: articleTemplate,
        context: {
          slug,
          limit,
        },
      })
    })
  })
}
