import React, { Component } from "react"
import { createGlobalStyle } from "styled-components"
import bans from "../assets/images/bans.png"
import calm from "../assets/images/calm.png"
import github from "../assets/images/github.png"
import guitarist from "../assets/images/guitarist.png"
import gym from "../assets/images/gym.png"
import hej1 from "../assets/images/hej1.png"
import hi2 from "../assets/images/hi2.png"
import linkedin from "../assets/images/linkedin.png"
import messenger from "../assets/images/messenger.png"
import triangle from "../assets/images/triangle.png"

import Navigation from "../templates/Navigation"
import HelloSection from "../templates/HelloSection"
import AboutMeSection from "../templates/AboutMeSection"
import MyFreeTime from "../templates/MyFreeTime"
import Blog from "../templates/Blog"
import Contact from "../templates/Contact"
import Footer from "../templates/Footer"

const pageContent = {
  hello: {
    header:
      "Witam Cię Na mojej stronie Mam nadzieję, Że znajdziesz dla siebie Coś ciekawego",
  },
  aboutMe: {
    header: "Poznajmy się",
    subheader: "Jestem Bartek, a to mój blog o tym, jak staję się programistą",
    paragraph1:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia debitis repellat modi fuga nam a aut ad ratione, accusantium, iste, exercitationem quia! Accusamus est delectus, soluta nulla expedita provident quasi.",
    paragraph2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia debitis repellat modi fuga nam a aut ad ratione, accusantium, iste, exercitationem quia! Accusamus est delectus, soluta nulla expedita provident quasi.",
    paragraph3:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia debitis repellat modi fuga nam a aut ad ratione, accusantium, iste, exercitationem quia! Accusamus est delectus, soluta nulla expedita provident quasi.",
  },
  myFreeTime: {
    header: "Co robię w wolnym czasie?",
    activity1:
      "Rozwijam swój umysł - czytam książki, tworzę nowe projekty, rozwijam swoje pomysły.",
    activity2:
      "Gram na gitarze - byłem nawet kiedyś nauczycielem gry na gitarze!  ",
    activity3:
      "Dbam o kondycję - zdrowy duch w zdrowym ciele! Staram się dbać o swoją kondycję fizyczną.",
  },
  blog: {
    header: "Co u mnie słychać?",
    postTitle: "Tytuł wpisu",
    postDescription: "Krótki opis na temat wpisu",
  },
  contact: {
    header: "Kontakt",
    subheader: "Napisz do mnie,Lub sprawdź moje profile na innych portalach",
  },
  footer: {
    footerContent: "Strona stworzona przez Bartosza Srokę",
  },
  buttons: {
    navButton1: "O mnie",
    navButton2: "Blog",
    navButton3: "Kontakt",
    showPostButton: "Więcej",
    loadMorePostButton: "Załaduj więcej",
  },
  images: {
    bans,
    calm,
    github,
    guitarist,
    gym,
    hej1,
    hi2,
    linkedin,
    messenger,
    triangle,
  },
}

const GlobalStyle = createGlobalStyle`
    body, h1,h2,h3,h4,h5,h6{
        margin:0;
        padding:0;
        font-family: "Charter";
        font-weight: 100;
        font-style: italic;
        color: #6b6b6b;
    }
    *, *::before, *::after{
        box-sizing: border-box;
    }
`

class IndexPage extends Component {
  state = {}
  render() {
    return (
      <>
        <GlobalStyle />
        <Navigation
          button1={pageContent.buttons.navButton1}
          button2={pageContent.buttons.navButton2}
          button3={pageContent.buttons.navButton3}
        />
        <HelloSection
          header={pageContent.hello.header}
          img1={pageContent.images.hi2}
          img2={pageContent.images.triangle}
        />
        <AboutMeSection
          header={pageContent.aboutMe.header}
          subheader={pageContent.aboutMe.subheader}
          paragraph1={pageContent.aboutMe.paragraph1}
          paragraph2={pageContent.aboutMe.paragraph2}
          paragraph3={pageContent.aboutMe.paragraph3}
          img={pageContent.images.bans}
        />
        <MyFreeTime
          header={pageContent.myFreeTime.header}
          activity1={pageContent.myFreeTime.activity1}
          activity2={pageContent.myFreeTime.activity2}
          activity3={pageContent.myFreeTime.activity3}
          img1={pageContent.images.calm}
          img2={pageContent.images.guitarist}
          img3={pageContent.images.gym}
        />
        <Blog
          header={pageContent.blog.header}
          postTitle={pageContent.blog.postTitle}
          postDescription={pageContent.blog.postDescription}
          button1={pageContent.buttons.showPostButton}
          button2={pageContent.buttons.loadMorePostButton}
        />
        <Contact
          header={pageContent.contact.header}
          subheader={pageContent.contact.subheader}
          img={pageContent.images.hej1}
        />
        <Footer footerContent={pageContent.footer.footerContent} />
      </>
    )
  }
}

export default IndexPage
