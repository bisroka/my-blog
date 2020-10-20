import styled, {css} from "styled-components"


export const StyledSection = styled.section`
    display: flex;
    min-height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.white ? props.theme.colors.white : props.theme.colors.primary};
      ${({helloSection})=>
        helloSection && css `
        /* position: relative; */
        flex-direction: row;
      align-items: center;
      justify-content: center;
        min-height: 95vh;
      `}
`
