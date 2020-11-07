import React from "react"
import { Link } from "gatsby"
import Button from "../Components/Button"
import PropTypes from "prop-types"

import { StyledNewsCard, StyledSubheader, StyledImage } from "./styled-components/index.styledComponents"

const News = ({ postTitle, button, thumbnail, link }) => {
  return (
    <StyledNewsCard>
  
  <Link to={link}> <StyledImage newsCard src={thumbnail ? thumbnail.url : null}></StyledImage>   </Link>
              <Link to={link}> <StyledSubheader lightColor >{postTitle}</StyledSubheader> </Link>
              {/* <StyledParagraph paragraph={postDescription} section="news" /> */}
              <Link to={link}>  <Button button={button} white /> </Link>
     
      </StyledNewsCard>
  )
}

export default News


News.propTypes = {
  postTitle: PropTypes.string,
  button: PropTypes.string,
  thumbnail: PropTypes.shape({
    url: PropTypes.url
  }),
  link: PropTypes.string 
}; 