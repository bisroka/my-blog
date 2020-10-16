import styled, { css } from "styled-components"

export const StyledFooter = styled.footer`
${({ contact }) =>
    contact &&
    css`
        width: 100%;
        min-height: 40vh;
        position: relative;
        top: 0;
        left: 0;
    }
`}
`