import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pageContent } from "../utils/pageContent"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../utils/theme"
import { StyledPageWrapper } from "../utils/pageWrapper"
import { Navigation, HelloSection, AboutMeSection, FreeTimeSection, BlogSection, ContactSection, FooterSection } from "../sections/index.sections"

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

const IndexPage = ({data}) => {
  const [newsLimit, setNewsLimit] = useState(3)

  useEffect(()=>{
    const header = document.querySelector('.ldOIKQ')
    const subHeader = document.querySelector('.DvgXU')
    const image = document.querySelector('.cTCFdS')


    gsap.set([header, subHeader, image], {autoAlpha:0})
    const headerAnimation = gsap.timeline({defaults: {
              ease: 'power3.inOut'
           }})
           headerAnimation.fromTo(header,{y:'-=100'}, {y:"+=100", autoAlpha:1.5, duration:1, stagger:0.5})
           .fromTo(subHeader, {y:'-=100'}, {y:"+=100", autoAlpha:1, duration:1.5, stagger:0.5})
           .fromTo(image, {x:'+=150'}, {x:"-=150", autoAlpha:1, duration:1.5, stagger:0.5})
          //  .fromTo([...sections], {x:'+=150'}, {x:"-=150", autoAlpha:1, duration:1, stagger:0.5})


    gsap.registerPlugin(ScrollTrigger);
    const sections =  [...document.querySelectorAll('section:not(:first-child) *, footer')]
    const buttons = [...document.querySelectorAll('nav button')]
    console.log(buttons)
    sections.forEach(section=>{
      const sectionsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center bottom",
          ease: 'power3.inOut'
        },
      });
      sectionsTimeline.from(section, { scale:0.9, opacity: 0, stagger: 0.7, duration: 1.5 })
    })
    buttons.forEach(button=>{
        const buttonsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: 'nav',
            start: "center bottom",
          },
        });
        buttonsTimeline.from(button, {x:"+=50", opacity: 0, stagger: 0.2, duration: 2 }, "+=1")  
    })
    
  },[])

  const setNewsLimitHandler = e => {
    e.preventDefault()
    setNewsLimit({
      newsLimit: newsLimit +3
    })
  }


    return (
      <>
        <GlobalStyle />
        {/* <HelmetComponent data={ this.props.data.allDatoCmsSeo }/> */}
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
      </>
    )
  }


export default IndexPage
