import React from "react"
import { Link } from "gatsby"
import Button from "../Components/Button"

import { StyledNewsCard, StyledSubheader, StyledImage, StyledParagraph, StyledWrapper } from "./styled-components/index.styledComponents"

const News = ({ postTitle, button, postImg, link }) => {
  return (
    <StyledNewsCard>
  
  <Link to={link}> <StyledImage newsCard src={postImg ? postImg.url : null}></StyledImage>   </Link>
              <Link to={link}> <StyledSubheader lightColor >{postTitle}</StyledSubheader> </Link>
              {/* <StyledParagraph paragraph={postDescription} section="news" /> */}
              <Link to={link}>  <Button button={button} white /> </Link>
     
      </StyledNewsCard>
  )
}

export default News
