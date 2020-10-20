import React from "react"
import Activity from "../Components/Activity"
import {StyledSection, StyledHeader, StyledWrapper} from "../Components/styled-components/index.styledComponents"

const FreeTimeSection = ({ header, activities }) => {
  const myActivities = activities.map(activity => (
    <Activity
      key={activity.id}
      img={activity.img}
      title={activity.title}
      paragraph={activity.paragraph}
    />
  ))
  return (
    <StyledSection white>
      <StyledWrapper column>
        <StyledHeader>{header}</StyledHeader>
        <StyledWrapper> {myActivities}</StyledWrapper>
      </StyledWrapper>
    </StyledSection>
  )
}

export default FreeTimeSection
