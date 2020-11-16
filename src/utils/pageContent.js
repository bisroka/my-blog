import { images } from "./images"

export const pageContent = {
    hello: {
      header:
        "Witam Cię!",
      subheader: "Mam nadzieję, że znajdziesz coś interesującego dla siebie!",
      img:  images.hi2,
    },
    aboutMe: {
      header: "Poznajmy się",
      subheader: "Jestem Bartek	, stworzyłem to miejsce, aby gromadzić i dzielić się swoimi notatkami, przemyśleniami  i doświadczeniem z tematyki programowania. Może znajdziesz coś dla siebie i wyniesiesz z tej strony wartość dla siebie. Mam nadzieję!",
      img: images.bans,
      paragraphes: [
        {
          id: 1,
          content:
            "Obecnie programuję strony internetowe, współtworzę aplikację webową o tematyce zdrowia, szukam nowych wyzwań, a ten blog jest właśnie takim wyzwaniem!",
        },
        {
          id: 2,
          content:
            "Zapraszam Cię do zapoznania się z moimi wpisami.",
        },
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
        // {
        //   id: 1,
        //   src: images.messenger,
        //   link: "https://www.facebook.com/bartosz.sroka4",
        // },
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
        { id: 1, content: "Start", link: "/" },
        { id: 2, content: "O mnie", link: "/aboutMe/" },
        { id: 3, content: "Blog", link: "/blog/" },
        { id: 4, content: "Kontakt", link: "/contact/" },
      ],
      showPostButton: "Więcej",
      loadMorePostButton: "Załaduj więcej",
    },
  }