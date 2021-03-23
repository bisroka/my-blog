import styled, {css} from "styled-components"
import {device} from "../../utils/device"

export const StyledSection = styled.section`
    /* padding: 5vh 0vh; */
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center;  */
    /* justify-content: flex-start; */
    /* height: 100vh; */
    min-height: 95vh;
    margin: 3vh auto;
    width: 100%;
    background: ${props => props.white ? props.theme.colors.white : props.theme.colors.primary};
      ${({helloSection})=>
        helloSection && css `
        position: relative;
        background: transparent;
        &:before, &:after{
          content: '';
          position: absolute;
        }
      &:before{
       //ciemny
        top: -5%;
        right: 15%;
        width: 100%;
        height: 100%;
        border-bottom-left-radius: 50%;
        transform: skew(10deg, 0deg);
        background: #859ce5;
        filter: drop-shadow(-20px 20px 10px rgba(183, 200, 255, 0.35));
        z-index: -2;
        @media ${device.laptop} {
          right: 10%;
          /* top: 0; */
        }
      }
      &:after{
        //jasny
        top: -5%;
        left: -15%;
        width: 150%;
        height: 100%;
        border-bottom-left-radius: 50%;
        transform: skew(19deg, 0deg);
        background: linear-gradient(#d8e8f9 0%, #d1e2fa 81.77%, #b7c8ff 100%);
        filter: drop-shadow(-20px 3px 30px rgba(216, 232, 249, 0.16));
        z-index: -1;
      }
      `}
      ${({articleSection}) => 
      articleSection && css `
      margin: 0;
      height: 40vh;
      min-height: 40vh;
      align-items: stretch;
      position: relative;
        &:before{
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index:0;
          background-color: red;
          background-image: ${props =>`url(${ props.backgroundImage})`};
          filter: blur(15px) grayscale(50%);
          @media ${device.laptop} {
          /* height: 40vh; */
          }
        }
      `}
   
`
