import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: ${({row})=>row? "row" : "column"};
  align-items: center;
  margin: 5vh 1vh 0vh;
  @media ${device.laptop} {
   display: flex;
  flex-direction: row;
 }
  `