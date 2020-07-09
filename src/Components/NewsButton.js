import React from "react"
import styled from "styled-components"

const NewsButtonStyle = styled.button`
  width: 70%;
  max-width: 250px;
  margin: 3vh 0;
  padding: 2vh 0;
  font-size: 25px;
  font-family: "Impact";
  color: white;
  background-color: #4258b8;
  border-radius: 25px;
`

const NewsButton = ({ button }) => {
  return <NewsButtonStyle>{button}</NewsButtonStyle>
}

export default NewsButton
