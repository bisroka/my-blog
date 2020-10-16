import React from "react"
import { Link } from "gatsby"
import Button from "../Components/Button"

import { StyledNewsCard, StyledSubheader, StyledImage, StyledParagraph } from "./styled-components/index.styledComponents"

const News = ({ postTitle, button, postImg, link }) => {
  return (
    <StyledNewsCard>
      <Link to={link}>
          <StyledImage newsCard src={postImg ? postImg.url : null}></StyledImage>
          <StyledSubheader lightColor >{postTitle}</StyledSubheader>
          {/* <StyledParagraph paragraph={postDescription} section="news" /> */}
          <Button button={button} />
      </Link>
      </StyledNewsCard>
  )
}

export default News
