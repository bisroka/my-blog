import React from "react"
import styled from "styled-components"
import { device } from "../utils/device"

const ButtonStyled = styled.button`
  width: ${props => (props.loadMore ? "100%" : "55%")};
  max-width: 250px;
  margin: 3vh 0;
  padding: 2vh 0;
  font-size: 25px;
  font-family: "Impact";
  color: ${props => (props.loadMore ? "#4258b8" : "white")};
  background-color: ${props => (props.loadMore ? "white" : "#4258b8")};
  border-radius: 25px;
  @media ${device.tablet} {
    max-width: 300px;
  }
`
const Button = ({ button, loadMore }) => {
  return <ButtonStyled loadMore={loadMore}>{button}</ButtonStyled>
}

export default Button
