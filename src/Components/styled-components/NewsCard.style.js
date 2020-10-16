import styled from "styled-components"
import { device } from "../../utils/device"

export const StyledNewsCard = styled.article`
  display: flex;
  justify-content: center;
  width: 75vw;
  height: 70vh;
  background-color: white;
  margin: 5vh 1vw;
  @media ${device.laptop} {
    width: 25%;
    height: 65vh;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  h3{
  color: ${props => (props.lightColor ? "#888888" : "#6b6b6b")};
  font-size: 28px;
  margin: 3vh 0;
  text-align: center;
  @media ${device.tablet} {
    font-size: 5vh;
    color: #6b6b6b;
  }
}
}
`
export const StyledNewsImg = styled.img`
  display: block;
  background: grey;
  width: 75vw;
  height: 50vw;
  object-fit: cover;
  opacity: 0.7;
  transition: 0.3s;
  @media ${device.laptop} {
    width: 25vw;
    height: 15vw;
    object-fit: cover;
  }
  :hover {
    opacity: 1;
  }
  
`
export const StyledLinkWrapper = styled.div``
export const StyledLinks = {
  textDecoration: "none",
  fontStyle: "normal",
  fontFamily: "Impact",
}