import React from "react"
import styled from "styled-components"

const LoadMoreStyle = styled.button`
  width: 85%;
  margin: 3vh 0;
  padding: 2vh 0;
  font-size: 25px;
  font-family: "Impact";
  color: #4258b8;
  background-color: white;
  border-radius: 25px;
`

const LoadMore = () => {
  return <LoadMoreStyle>Załaduj więcej</LoadMoreStyle>
}

export default LoadMore
