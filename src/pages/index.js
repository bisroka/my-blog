import React, { useState, useEffect, useContext } from "react"
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
import { VanillaTilt } from "../animations/tilt-3d/tilt"
// import { cardAnimation } from "../animations/tilt-3d/index-tilt"

// VanillaTilt.init(document.querySelectorAll(".news-card"), {
//     max: 5,
//     speed: 400
// })

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

  const { newsLimit, setNewsLimit} = useContext(StoreContext)

  useEffect(()=>{
    headerAnimation()
    desktopMenuAnimation()
    sectionAnimation()
    
    // cardAnimation(document.querySelectorAll(".news-card"))
  },[])


  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".news-card"), {
      max: 5,
      speed: 400
      })
  }, [newsLimit])

  const setNewsLimitHandler = e => {
    e.preventDefault()
    // console.log(data)
    if(data.allDatoCmsArticle.edges.length > newsLimit ){
      setNewsLimit(
        newsLimit+3
      )
    }else {
      location.href = '/blog';
    }
  }

    return (
      <>
        <GlobalStyle />
        {/* <HelmetComponent data={ this.props.data.allDatoCmsSeo }/> */}
        <StoreProvider>
          <ThemeProvider theme={theme}>
            <Navigation homePage={true} buttons={pageContent.buttons.navButtons} />
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
                button2={data.allDatoCmsArticle.edges.length > newsLimit ? pageContent.buttons.loadMorePostButton:"Sprawdź wszystkie posty"}
                limit={newsLimit}
                data={data}
                click={setNewsLimitHandler}
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
        </StoreProvider>
      </>
    )
  }


export default IndexPage
