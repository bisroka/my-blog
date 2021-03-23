import styled, { css } from "styled-components"
import {device} from "../../utils/device"
export const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: 15px;
  max-width: 1200px;
  height: 100%;
  min-height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto auto;
  /* grid-template-rows: auto auto auto auto auto; */
  align-items: center;
  column-gap: 5px;
    ${({helloSection})=>
      helloSection && css`
      grid-template-areas: 
            ". header header header header header header header header . . ."
            ". subheader subheader subheader subheader subheader subheader subheader subheader . . ."
            ". . image image image image image image image image image ."
            ". . image image image image image image image image image ."
            ". . image image image image image image image image image .";
            @media ${device.tablet} {
              grid-template-areas: 
            ". header header header header header header header . . . ."
            ". subheader subheader subheader subheader subheader image image image image image ."
            ". . . . . . image image image image image ."
            ". . . . . . image image image image image ."
            ". . . . . . image image image image image ."
            /* ". . image image image image image image image image image ." */
            /* ". . image image image image image image image image image ." */;
        }
        @media ${device.laptop} {
              grid-template-areas: 
            /* "header header header header header image image image image image image image" */
            ". . . . . image image image image image image image"
            "header header header header header image image image image image image image"
            "subheader subheader subheader subheader subheader image image image image image image image"
            ". . . . . image image image image image image image"
            ". . . . . image image image image image image image"
            /* ". . image image image image image image image image image ." */
            /* ". . image image image image image image image image image ." */;
        }
            
    `}
    ${({freeTimeSection})=>
    freeTimeSection && css`
   display: flex;
   padding: 0;
   flex-direction: column;
   flex-wrap: nowrap;
   align-items: center;
   justify-content: center;
   @media ${device.laptop}{
    flex-direction: ${props => props.column ? "column" : "row"}
   }
    `}
    ${({blogSection})=>
    blogSection && css`
   display: flex;
   padding-top: 3vh;
   flex-direction: column;
   flex-wrap: nowrap;
   align-items: center;
   justify-content: center;
   @media ${device.laptop}{
    flex-wrap: wrap;
    flex-direction: ${props => props.column ? "column" : "row"}
   }
    `}
    ${({contactSection})=>
    contactSection && css`
     min-height: 35vh;
     padding: 0;
                grid-template-areas: 
            /* "header header header header header image image image image image image image" */
            "image image image image subheader subheader subheader subheader subheader . header header"
            /* ". . . . subheader subheader subheader subheader subheader . header header" */
            "image image image image subheader subheader subheader subheader subheader . header header"
            "image image image image subheader subheader subheader subheader subheader . header header"
            "image image image image contacticons contacticons contacticons contacticons . . header header"
            "image image image image . . . . . . header header"
            /* ". . image image image image image image image image image ." */
            /* ". . image image image image image image image image image ." */;
    `}
`