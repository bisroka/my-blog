import styled, {css} from "styled-components"



export const StyledSection = styled.section`
    display: flex;
    padding: 5vh 0vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background: ${props => props.white ? props.theme.colors.white : props.theme.colors.primary};
  
      ${({helloSection})=>
        helloSection && css `
         position: relative;
        background-image: url(${props => props.background});
        background-size: cover;
        flex-direction: row;
      align-items: center;
      justify-content: center;
        min-height: 95vh;
      `}
      ${({articleSection}) => 
      articleSection && css `
      min-height: 20vh;
      align-items: stretch;
      `}
`
