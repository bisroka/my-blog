import styled, { css } from "styled-components"

export const StyledParagraph = styled.p`
  font-family: ${props => props.theme.fontFamily.paragraph};
  font-size: ${props => props.theme.fontSize.m};
  color: ${props => props.theme.colors.gray};
  margin: 5vh 0;
  line-height: 24px;
  ${({blogSection})=>
  blogSection && css`
    max-width: 85%;
    margin: 1em 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `}
`