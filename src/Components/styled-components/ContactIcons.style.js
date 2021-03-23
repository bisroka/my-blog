import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledContactIcons = styled.div`
  /* position: absolute; */
  /* display: block; */
  /* width: 45vw; */
  /* right: 5vw; */
  /* bottom: 3vh; */
  grid-area: contacticons;
  align-self: center;
  justify-self: center;
  /* @media ${device.tablet} {
    right: 5vw;
    bottom: 3vh;
  }
  @media ${device.laptop} {
    right: 0;
    bottom: 5vh;
  } */
  
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
