import { createGlobalStyle } from "styled-components"

export const theme = {
    colors: {
        primary: "#D8E8F9",
        white: "#FFFFFF",
        lightcolor: "#AAAAAA", 
        gray: "#555353",
        black: "#000000",
    },
    fontSize: {
        s: "15px",
        m: "18px",
        l: "25px",
        xl: "42px",
        xxl: "60px",
        xxxl: "80px",
    },
    fontFamily: {
        header: "Charter",
        subheader: "Skia",
        buttons: "Impact",
        paragraph: "Skia, Helvatica, Arial, sans-serif",
    },
    shadows:{
        postShadow: '0px 0px 10px #d9d9d9',
        whiteShadow: '15px 15px 30px #d9d9d9, -15px -15px 30px #ffffff;',
        cardShadow: '15px 15px 30px #d9d9d9, -15px -15px 30px #ffffff;',
        cardHoverShadow: '15px 15px 30px #333333, -15px -15px 30px #ffffff;',
        buttonShadow: '0px 0px 10px #d9d9d9',
        buttonHoverShadow: '0px 0px 20px #c2c2c2'
    }
}

export const GlobalStyle = createGlobalStyle`
      body{
        width:100vw;
        width: 100%;
        min-height: 100vh;
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