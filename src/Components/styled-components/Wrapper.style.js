import styled, { css } from "styled-components"
import {device} from "../../utils/device"
export const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  display: flex;
  align-items: center;
  flex-direction: ${({row})=> row ? "row" : "column"};  
  justify-content: center;
  flex-wrap: wrap;
  @media ${device.laptop} {
    display: flex;
    flex-direction: ${({column})=> column ? "column" : "row"};  
  }
  ${({helloContainer})=>
  helloContainer & css`
    padding: 5vh 2vh 0;
    width: 70%;
  `}
`