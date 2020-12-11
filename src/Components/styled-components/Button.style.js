import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledButton = styled.button`
  display: block;
  /* flex-direction: column;
  align-items: center; */
  width: ${props => (props.loadMore ? "100%" : "55%")};
  max-width: 250px;
  margin: 3vh 0;
  padding: 2vh 0;
  font-size: ${props => props.theme.fontSize.l};
  font-family: ${props => props.theme.fontFamily.buttons};;
  background-color: ${props => (props.white ? props.theme.colors.white : props.theme.colors.primary)};
  border:0;
  box-shadow: ${props=>props.white ? props.theme.shadows.whiteShadow : props.theme.shadows.buttonShadow};
  border-radius: 25px;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.2s;
  :hover {
    opacity: 1;
  }
  a {
    width:100%;
    text-align: center;
    text-decoration: none;
    color: ${props => (props.loadMore ? props.theme.colors.primary : props.theme.colors.gray)};
  }
  @media ${device.tablet} {
    max-width: 250px;
    padding: 1vh 0;
  }
  @media ${device.laptop} {
    max-width: ${props => (props.menu ? "150px" : "300px")};
    margin: ${props => (props.menu ? "0 2vh;" : null)};
    :hover {
      transform: translateY(2px);
    }
  }
`
