import styled from "styled-components"
import { device } from "../../utils/device"
import { theme } from "../../utils/theme"

export const StyledNewsCard = styled.article`
  display: flex;
  justify-content: center;
  width: 75vw;
  height: 70vh;
  background-color: ${props => props.theme.colors.white};;
  margin: 5vh 1vw;
  @media ${device.laptop} {
    width: 25%;
    height: 50vh;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  h3{
  color: ${props => (props.lightColor ? props.theme.colors.lightColor : props.theme.colors.gray)};
  font-size: ${props => props.theme.fontSize.l};
  margin: 3vh 0;
  text-align: center;
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSize.xl};
    color: ${props => props.theme.colors.gray};
  }
}`

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
  }`
  
export const StyledLinkWrapper = styled.div``
export const StyledLinks = {
  textDecoration: "none",
  fontStyle: "normal",
  fontFamily: theme.fontFamily.main,
}