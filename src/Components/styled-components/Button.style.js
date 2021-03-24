import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledButton = styled.button`
  display: block;
  width: ${props => (props.loadMore ? "80%" : "35%")};
  max-width: 250px;
  margin: 3vh 5vw;
  font-size: ${props => props.theme.fontSize.l};
  font-family: ${props => props.theme.fontFamily.buttons};;
  background-color: ${props => (props.white ? props.theme.colors.white : props.theme.colors.primary)};
  border:0;
  box-shadow: ${props=>props.theme.shadows.buttonShadow};
  border-radius: 25px;
  cursor: pointer;
  /* opacity: 0.8; */
  opacity: 1;
  transition: 0.2s;
  @media ${device.laptop}{
    width: ${props => (props.loadMore ? "100%" : "55%")};
    max-width: ${props => (props.menu ? "150px" : "300px")};
    margin: ${props => (props.menu ? "0 2vh;" : null)};
  }

  /* :hover {
  } */
  a {
    display: block;
    width:100%;
    height: 100%;
    padding: 0.3em 0;
    text-align: center;
    text-decoration: none;
    color: ${props => (props.loadMore ? props.theme.colors.primary : props.theme.colors.gray)};
      @media ${device.tablet} {
      max-width: 250px;
      /* padding: .4em 0; */
      }
      @media ${device.laptop} {
        width: 100%;
        /* :hover {
          transform: translateY(2px);
        } */
      }
  }
  
`
