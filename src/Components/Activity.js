import React from "react"
import styled from "styled-components"

import ActivityImg from "../Components/ActivityImg"
import ActivityDescription from "../Components/ActivityDescription"

const ActivityStyled = styled.div`
  width: 85%;
  margin: 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Activity = ({ activity, img }) => {
  return (
    <ActivityStyled>
      <ActivityImg img={img} />
      <ActivityDescription activity={activity} />
    </ActivityStyled>
  )
}

export default Activity
