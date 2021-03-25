import styled, { css } from "styled-components"
import {device} from "../../utils/device"

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  p {
    font-size: ${props => props.theme.fontSize.s};
    text-align: center;
    color: ${props => props.theme.colors.gray};
    @media ${device.tablet} {
      font-size: ${props => props.theme.fontSize.m};
    }
  }
  ${({ contact }) =>
    contact &&
    css`
    background-color: ${props => props.theme.colors.white};
        width: 100%;
        min-height: 40vh;
        position: relative;
        top: 0;
        left: 0;
    }
`}
`