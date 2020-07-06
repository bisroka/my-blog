import React from "react"
import styled from "styled-components"

const ActivityDescriptionStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 280px;
  text-align: center;
  font-size: 25px;
  color: white;
  background-color: #4258b8;
  border-radius: 38px;
`

const ActivityDescription = () => {
  return (
    <ActivityDescriptionStyle>
      <p>
        <strong>Rozwijam swój umysł</strong> <br /> - czytam książki, tworzę
        nowe projekty, rozwijam swoje pomysły.
      </p>
    </ActivityDescriptionStyle>
  )
}

export default ActivityDescription
