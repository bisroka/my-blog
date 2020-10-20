import styled, { css } from "styled-components"
import {device} from "../../utils/device"
export const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  display: flex;
  flex-direction: ${({row})=> row ? "row" : "column"};  
  align-items: ${({blogSection})=> blogSection ? "stretch" : "center"};  
  justify-content: center;
  flex-wrap: wrap;
  @media ${device.laptop} {
    display: flex;
    flex-direction: ${({column})=> column ? "column" : "row"};  
  }
  ${({helloSection})=>
  helloSection && css`
    padding: 5vh 2vh 0;
    width: 50%;
    height: auto;
    /* background-color: #ffffff; */
  `}
`