import React from "react"
import styled from "styled-components"
import Header from "../Components/Header"
import Activity from "../Components/Activity"

const MyFreeTimeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MyFreeTime = () => {
  return (
    <MyFreeTimeStyle>
      <Header />
      <Activity />
      <Activity />
      <Activity />
    </MyFreeTimeStyle>
  )
}

export default MyFreeTime
