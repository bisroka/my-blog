import { createGlobalStyle } from "styled-components"

export const theme = {
    colors: {
        primary: "#4258b8",
        white: "#FFFFFF",
        lightcolor: "#AAAAAA", 
        gray: "6b6b6b",
        black: "#000000",
    },
    fontSize: {
        s: "1vh",
        m: "1.5vh",
        l: "2.5vh",
        xl: "5vh",

    },
    fontFamily: {
        main: "Charter",
        buttons: "Impact",
        thirdy: "",
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
        font-family: "Charter";
        font-weight: 100;
        font-style: italic;
        color: #6b6b6b;
    }
    *, *::before, *::after{
        box-sizing: border-box;
     
    }
    *:focus {
        outline: none;

}
a {
        text-decoration: none;
        font-style: normal;
        font-family: "Impact";
    }

`