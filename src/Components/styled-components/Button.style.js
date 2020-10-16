import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledButton = styled.button`
  display: block;
  width: ${props => (props.loadMore ? "100%" : "55%")};
  max-width: 250px;
  margin: 3vh 0;
  padding: 2vh 0;
  font-size: 25px;
  font-family: "Impact";
  background-color: ${props => (props.loadMore ? "white" : "#4258b8")};
  border-radius: 25px;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.2s;
  :hover {
    opacity: 1;
  }
  a {
    text-decoration: none;
    color: ${props => (props.loadMore ? "#4258b8" : "white")};
  }
  @media ${device.tablet} {
    max-width: 300px;
  }
  @media ${device.laptop} {
    max-width: ${props => (props.menu ? "150px" : "300px")};
    padding: ${props => (props.menu ? "1vh 0;" : null)};
    margin: ${props => (props.menu ? "0 2vh;" : null)};
    :hover {
      transform: translateY(2px);
    }
  }
`