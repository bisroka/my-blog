import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledSubheader = styled.h3`
  color: ${props => (props.lightColor ? "#888888" : "#6b6b6b")};
  font-size: 28px;
  margin: 3vh 0;
  text-align: center;
  @media ${device.tablet} {
    font-size: 5vh;
    color: #6b6b6b;
  }
`
