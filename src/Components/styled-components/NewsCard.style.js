import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledNewsCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 90vw;
  background-color: ${props => props.theme.colors.white};
  margin: 5vh 1vw;
  border-radius: 25px;
  box-shadow: ${props=>props.theme.shadows.postShadow};
  cursor: pointer;
  transform-style: preserve-3d;
  @media ${device.tablet} {
        max-width: 50vw;
        height: 40vh;
    }
  @media ${device.laptop} {
    width: 30%;
    height: auto;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
