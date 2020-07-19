import React from "react"
import styled from "styled-components"
import Header from "../Components/Header"
import Activity from "../Components/Activity"

import { device } from "../utils/device"

const MyFreeTimeStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ActivitiesWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }
`

const WrapperStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const MyFreeTime = ({ header, activities }) => {
  const myActivities = activities.map(activity => (
    <Activity
      key={activity.id}
      img={activity.img}
      title={activity.title}
      paragraph={activity.paragraph}
    />
  ))
  return (
    <MyFreeTimeStyle>
      <WrapperStyled>
        <Header header={header} />
        <ActivitiesWrapperStyled> {myActivities}</ActivitiesWrapperStyled>
      </WrapperStyled>
    </MyFreeTimeStyle>
  )
}

export default MyFreeTime
