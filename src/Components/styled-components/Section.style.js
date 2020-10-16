import styled, {css} from "styled-components"


export const StyledSection = styled.section`
    display: flex;
    min-height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background: transparent
    linear-gradient(180deg, #4258b8 0%, #eeeeee 50%, #ffffff 100%) 0% 0%
    no-repeat padding-box;
      ${({helloSection})=>
        helloSection && css `
        position: relative;
        height: 95vh;
      `}
`


// TRZEBA UWZGLĘDNIAĆ RÓŻNE KOLORY BACKGROUNDÓW
// const BlogStyled = styled.section`
//   background-color: #4258b8;
// `