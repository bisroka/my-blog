const { createPages } = require('../../gatsby-node')
const path = require('path')

jest.mock('path', () => ({
  resolve: jest.fn(),
}))



describe('testing gatsby-node', () => {
    describe('given data', () => {
    const data = {
        allDatoCmsArticle: {
            edges: {
            title: 'SZÓSTY WPIS PRZYKŁADOWO TESTOWY',
            slug: 'szosty-wpis-przykladowo-testowy',
            content: 'szósty wpis przykładowo testowy',
            thumbnail: {
                url: 'https://www.datocms-assets.com/31772/1595523423-zrzut-ekranu-2020-07-15-o-23-57-53.png'
            }, 
            }
      }
    }

    describe('when querying for edges', () => {
      const graphql = jest.fn(() =>
        Promise.resolve({
          data,
        })
      )
      const createPage = jest.fn()
      const ChapterComponent = () => {}

      path.resolve.mockImplementation(() => ChapterComponent)

      beforeEach(() => {
        createPages({ graphql, actions: { createPage } })
      })

      it('then runs a graphql query', () => {
        expect(graphql.mock.calls[0][0]).toMatchSnapshot()
      })

      // it('then creates a page for each chapter', () => {
      //   const article = {
      //     title: 'SZÓSTY WPIS PRZYKŁADOWO TESTOWY',
      //     slug: 'szosty-wpis-przykladowo-testowy',
      //     content: 'szósty wpis przykładowo testowy',
      //     thumbnail: {
      //         url: 'https://www.datocms-assets.com/31772/1595523423-zrzut-ekranu-2020-07-15-o-23-57-53.png'
      //     }, 
      //   }
      //  expect(createPage).toHaveReturned({
      //       path: `blog/${article.slug}`,
      //       context: article.slug,
      //     })
      //   })
      // })
    })
    })
  })