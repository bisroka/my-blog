import React, { Component } from "react"
import { graphql } from "gatsby"
import { pageContent } from "../utils/pageContent"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../utils/theme"
import { Navigation, HelloSection, AboutMeSection, FreeTimeSection, BlogSection, ContactSection, FooterSection } from "../sections/index.sections"
import { StyledPageWrapper } from "../utils/pageWrapper"
export const query = graphql`
  query queryIndex {
    allDatoCmsArticle(limit: 9) {
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
`

class IndexPage extends Component {
  state = {
    newsLimit: 3,
  }
  loadMoreHandler = e => {
    e.preventDefault()
    const newsLimit = this.state.newsLimit + 3
    this.setState({
      newsLimit
    })
  }
  render() {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Navigation buttons={pageContent.buttons.navButtons} />
          <StyledPageWrapper>
            <HelloSection
              header={pageContent.hello.header}
              subheader={pageContent.hello.subheader}
              img={pageContent.hello.img}
              />
            <AboutMeSection
              header={pageContent.aboutMe.header}
              subheader={pageContent.aboutMe.subheader}
              paragraphes={pageContent.aboutMe.paragraphes}
              img={pageContent.aboutMe.img}
              />
            <FreeTimeSection
              header={pageContent.myFreeTime.header}
              activities={pageContent.myFreeTime.activities}
              />
            <BlogSection
              header={pageContent.blog.header}
              postTitle={pageContent.blog.postTitle}
              postDescription={pageContent.blog.postDescription}
              button1={pageContent.buttons.showPostButton}
              button2={pageContent.buttons.loadMorePostButton}
              limit={this.state.newsLimit}
              data={this.props.data}
              click={this.loadMoreHandler.bind(this)}
              />
            <ContactSection
              header={pageContent.contact.header}
              subheader={pageContent.contact.subheader}
              img={pageContent.contact.img}
              contactPictures={pageContent.contact.contactPictures}
              />
            <FooterSection footerContent={pageContent.footer.footerContent} />
          </StyledPageWrapper>
        </ThemeProvider>
      </>
    )
  }
}

export default IndexPage
