import styled, {css} from "styled-components"
import { device } from "../../utils/device"

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: ${({row})=>row? "row" : "column"};
  align-items: center;
  margin: 5vh 1vh 0vh;
  
 ${({aboutMeSection})=>
    aboutMeSection && css `
  display: grid;
  position: relative;
  margin: 7vh auto;
  max-width: 1200px;
  padding: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto auto;
  align-items: center;
  justify-items: center;
  column-gap: 5px;
  row-gap: 10px;
  grid-template-areas: 
            "image image image image image subheader subheader subheader subheader subheader subheader subheader"
            "image image image image image subheader subheader subheader subheader subheader subheader subheader"
            "image image image image image subheader subheader subheader subheader subheader subheader subheader"
            "paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes"
            "paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes";
      @media ${device.laptop} {
        grid-template-areas: 
            ". image image image image . subheader subheader subheader subheader subheader ."
            ". image image image image . subheader subheader subheader subheader subheader ."
            ". image image image image . paragraphes paragraphes paragraphes paragraphes paragraphes paragraphes"
            ". . . . . . . . . . . ."
            ". . . . . . . . . . . .";
      }
    &:before{
      content: '';
      position: absolute;
      width: 70%;
      height: 22%;
      background: #d8e8f9;
      filter: drop-shadow(0px 0px 30px rgba(216, 232, 249, 0.31));
      top: 65%;
      right: -10%;
      border-radius: 50%;
    }
  `}
  `