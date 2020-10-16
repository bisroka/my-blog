import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledContactIcons = styled.div`
  position: absolute;
  width: 45vw;
  right: 5vw;
  top: 30vh;
  @media ${device.tablet} {
    right: 5vw;
    top: 30vh;
  }
  @media ${device.laptop} {
    top: 25vh;
    right: 0;
  }
  
  img {
    margin: 10px;
    width: 7vw;
    opacity: 0.8;
    transition: 0.2s;
    :hover {
      opacity: 1;
    }
    @media ${device.tablet} {
      width: 5vw;
    }
    @media ${device.laptop} {
      width: 3vw;
      :hover {
        transform: translateY(3px);
      }
    }
  }
`
