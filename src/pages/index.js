import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import { headerAnimation } from "../animations/headerAnimation/headerAnimation"
import { desktopMenuAnimation } from "../animations/menuAnimation/desktopMenuAnimation"
import { sectionAnimation } from "../animations/sectionAnimation/sectionAnimation"
import { pageContent } from "../utils/pageContent"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../utils/theme"
import { StyledPageWrapper } from "../utils/pageWrapper"
import { Navigation, HelloSection, AboutMeSection, FreeTimeSection, BlogSection, ContactSection, FooterSection } from "../sections/index.sections"
import StoreProvider, { StoreContext } from "../store/StoreProvider"


export const query = graphql`
  query queryIndex {
    allDatoCmsArticle(limit: 10) {
      edges {
        node {
          body {
            value
          }
          id
          slug
          description
          title
          thumbnail {
            url
          }
        }
      }
    }
    allDatoCmsSeo {
        edges {
          node {
            title
            description
            image
            canonical
            ogTitle
            ogDescription
            ogUrl
            ogImage
          }
        }
      }
    }
`

const IndexPage = ( {data} ) => {

  const { newsLimit} = useContext(StoreContext)

  useEffect(()=>{
    headerAnimation()
    desktopMenuAnimation()
    sectionAnimation()
  },[])

    return (
      <>
        <GlobalStyle />
        {/* <HelmetComponent data={ this.props.data.allDatoCmsSeo }/> */}
        <StoreProvider>
          <ThemeProvider theme={theme}>
            <Navigation navButtons={pageContent.buttons.navButtons} />
            <StyledPageWrapper>
              <HelloSection
                pageContent={pageContent.hello}
                />
              <AboutMeSection
                pageContent={pageContent.aboutMe}
                />
              <FreeTimeSection
              pageContent={pageContent.myFreeTime}
                />
              <BlogSection
                pageContent={pageContent.blog}
                showPostButton={pageContent.buttons.showPostButton}
                loadMorePostButton={data.allDatoCmsArticle.edges.length > newsLimit ? pageContent.buttons.loadMorePostButton:"Sprawdź wszystkie posty"}
                data={data}
                />
              <ContactSection
                pageContent={pageContent.contact}
                />
              <FooterSection footerContent={pageContent.footer.footerContent} /> 
            </StyledPageWrapper>
          </ThemeProvider>
        </StoreProvider>
      </>
    )
  }


export default IndexPage
