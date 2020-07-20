import React, { Component } from "react"
import styled, { createGlobalStyle } from "styled-components"
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
    images: { hi2, triangle },
  },
  aboutMe: {
    header: "Poznajmy się",
    subheader: "Jestem Bartek, a to mój blog o tym, jak staję się programistą",
    img: bans,
    paragraphes: [
      {
        id: 1,
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia debitis repellat modi fuga nam a aut ad ratione, accusantium, iste, exercitationem quia! Accusamus est delectus, soluta nulla expedita provident quasi.",
      },
      {
        id: 2,
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia debitis repellat modi fuga nam a aut ad ratione, accusantium, iste, exercitationem quia! Accusamus est delectus, soluta nulla expedita provident quasi.",
      },
      {
        id: 3,
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia debitis repellat modi fuga nam a aut ad ratione, accusantium, iste, exercitationem quia! Accusamus est delectus, soluta nulla expedita provident quasi.",
      },
    ],
  },
  myFreeTime: {
    header: "Co robię w wolnym czasie?",
    activities: [
      {
        id: 1,
        img: calm,
        title: "Rozwijam swój umysł",
        paragraph:
          " - czytam książki, tworzę nowe projekty, rozwijam swoje pomysły.",
      },
      {
        id: 2,
        img: guitarist,
        title: "Gram na gitarze",
        paragraph: " - byłem nawet kiedyś nauczycielem gry na gitarze! ",
      },
      {
        id: 3,
        img: gym,
        title: "Dbam o kondycję",
        paragraph:
          " - zdrowy duch w zdrowym ciele! Staram się dbać o swoją kondycję fizyczną.",
      },
    ],
  },
  blog: {
    header: "Co u mnie słychać?",
    postTitle: "Tytuł wpisu",
    postDescription: "Krótki opis na temat wpisu",
  },
  contact: {
    header: "Kontakt",
    subheader: "Napisz do mnie,Lub sprawdź moje profile na innych portalach",
    img: hej1,
    contactPictures: [
      { id: 1, src: messenger },
      { id: 2, src: linkedin },
      { id: 3, src: github },
    ],
  },
  footer: {
    footerContent: "Strona stworzona przez Bartosza Srokę",
  },
  buttons: {
    navButtons: [
      { id: 1, content: "O mnie" },
      { id: 2, content: "Blog" },
      { id: 3, content: "Kontakt" },
    ],
    showPostButton: "Więcej",
    loadMorePostButton: "Załaduj więcej",
  },
}

const GlobalStyle = createGlobalStyle`
      body{
        overflow-x: hidden;
        width:100vw;
        margin: 0 auto;
}

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
        <Navigation buttons={pageContent.buttons.navButtons} />
        <HelloSection
          header={pageContent.hello.header}
          images={pageContent.hello.images}
        />
        <AboutMeSection
          header={pageContent.aboutMe.header}
          subheader={pageContent.aboutMe.subheader}
          paragraphes={pageContent.aboutMe.paragraphes}
          img={pageContent.aboutMe.img}
        />
        <MyFreeTime
          header={pageContent.myFreeTime.header}
          activities={pageContent.myFreeTime.activities}
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
          img={pageContent.contact.img}
          contactPictures={pageContent.contact.contactPictures}
        />
        <Footer footerContent={pageContent.footer.footerContent} />
      </>
    )
  }
}

export default IndexPage
