import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledContactIcons = styled.div`
  grid-area: contacticons;
  align-self: center;
  justify-self: center;
  
  img {
    margin: 10px;
    width: 7vw;
    opacity: 0.8;
    transition: 0.2s;
    @media ${device.tablet} {
      width: 5vw;
    }
    @media ${device.laptop} {
      width: 3vw;
    }
  }
`
