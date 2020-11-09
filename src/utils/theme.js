import { createGlobalStyle } from "styled-components"

export const theme = {
    colors: {
        primary: "#D8E8F9",
        white: "#FFFFFF",
        lightcolor: "#AAAAAA", 
        gray: "#6b6b6b",
        black: "#000000",
    },
    fontSize: {
        s: "1vh",
        m: "1.5vh",
        l: "3vh",
        xl: "5vh",
        xxl: "10vh",

    },
    fontFamily: {
        main: "Charter",
        buttons: "Impact",
        paragraph: "Helvatica, Arial, sans-serif",
    },

}

export const GlobalStyle = createGlobalStyle`
      body{
        overflow-x: hidden;
        width:100vw;
        margin: 0 auto;
}

    body, h1,h2,h3,h4,h5,h6{
        margin:0;
        padding:0;
    }
    *, *::before, *::after{
        box-sizing: border-box;
     
    }
    *:focus {
        outline: none;

}
p{
    font-style: normal;
}
a {
        text-decoration: none;
        font-style: normal;
        color: #6b6b6b;
    }
    .aboutMe__container--paragraph{
        max-width: 600px;
    }
`