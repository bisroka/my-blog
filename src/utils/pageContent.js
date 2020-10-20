import { images } from "./images"

export const pageContent = {
    hello: {
      header:
        "Witam Cię!",
      subheader: "Na mojej stronie Mam nadzieję, Że znajdziesz dla siebie Coś ciekawego",
      img:  images.hi2,
    },
    aboutMe: {
      header: "Poznajmy się",
      subheader: "Jestem Bartek, a to mój blog o tym, jak staję się programistą",
      img: images.bans,
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
        // {
        //   id: 3,
        //   content:
        //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia debitis repellat modi fuga nam a aut ad ratione, accusantium, iste, exercitationem quia! Accusamus est delectus, soluta nulla expedita provident quasi.",
        // },
      ],
    },
    myFreeTime: {
      header: "Co robię w wolnym czasie?",
      activities: [
        {
          id: 1,
          img: images.calm,
          title: "Rozwijam swój umysł",
          paragraph:
            " - czytam książki, tworzę nowe projekty, rozwijam swoje pomysły.",
        },
        {
          id: 2,
          img: images.guitarist,
          title: "Gram na gitarze",
          paragraph: " - byłem nawet kiedyś nauczycielem gry na gitarze! ",
        },
        {
          id: 3,
          img: images.gym,
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
      img: images.hej1,
      contactPictures: [
        {
          id: 1,
          src: images.messenger,
          link: "https://www.facebook.com/bartosz.sroka4",
        },
        {
          id: 2,
          src: images.linkedin,
          link: "https://www.linkedin.com/in/sroka-bartosz/",
        },
        { id: 3, src: images.github, link: "https://github.com/bisroka" },
      ],
    },
    footer: {
      footerContent: "Strona stworzona przez Bartosza Srokę",
    },
    buttons: {
      navButtons: [
        { id: 1, content: "O mnie", link: "/aboutMe" },
        { id: 2, content: "Blog", link: "/blog" },
        { id: 3, content: "Kontakt", link: "/contact" },
      ],
      showPostButton: "Więcej",
      loadMorePostButton: "Załaduj więcej",
    },
  }