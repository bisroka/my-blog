import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledHeader = styled.h2`
  color: ${props => (props.lightColor ? "#aaaaaa" : "#6b6b6b")};
  margin-top: 5vh;
  text-align: center;
  font-family: Charter;
  font-size: 48px;
  @media ${device.tablet} {
    font-size: 8vh;
  }
`

// const HeaderStyled = styled.h2`
//   margin: 0;
//   padding: 0;
//   display: block;
//   font-size: 5vh;
//   @media ${device.tablet} {
//     font-size: 7vh;
//   }
//   @media ${device.laptop} {
//     font-size: 9vh;
//     max-width: 40vw;
//   }
// `
