import React from "react"
import styled from "styled-components"
import Header from "../Components/Header"
import Activity from "../Components/Activity"

const MyFreeTimeStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MyFreeTime = ({
  header,
  activity1,
  activity2,
  activity3,
  img1,
  img2,
  img3,
}) => {
  return (
    <MyFreeTimeStyle>
      <Header header={header} />
      <Activity activity={activity1} img={img1} />
      <Activity activity={activity2} img={img2} />
      <Activity activity={activity3} img={img3} />
    </MyFreeTimeStyle>
  )
}

export default MyFreeTime
