import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledNewsCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 75%;
  height: 70vh;
  background-color: ${props => props.theme.colors.white};
  margin: 5vh 1vw;
  @media ${device.laptop} {
    width: 30%;
    height: auto;
    margin: 5vh 0.5vw;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
