import React from "react"
import styled from "styled-components"
import Header from "../Components/Header"
import Activity from "../Components/Activity"

const MyFreeTimeStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <Header header={header} />
      {myActivities}
    </MyFreeTimeStyle>
  )
}

export default MyFreeTime
