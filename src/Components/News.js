import React, { useEffect } from "react"
import { Link } from "gatsby"
import Button from "../Components/Button"
import PropTypes from "prop-types"
import { cardHoverAnimation } from "../animations/hover/cardHover"
import { StyledNewsCard, StyledParagraph, StyledSubheader, StyledImage } from "./styled-components/index.styledComponents"


const News = ({ postTitle, button, thumbnail, link, postDescription, blogPage, className }) => {

  useEffect(()=>{cardHoverAnimation()}, [])

  return (
    <StyledNewsCard className={className} blogPage>
              <Link to={link}> {
              thumbnail ? 
                <StyledImage blogSection src={thumbnail.url ? thumbnail.url :  null}></StyledImage> 
              :   <div style={{height: "200px", width: "500px"}}></div>} </Link>
              <Link to={link}> <StyledSubheader blogSection lightColor >{postTitle}</StyledSubheader> </Link>
              <StyledParagraph blogSection >{postDescription}</StyledParagraph>
              <Button className="button-hover" link={link} button={button} white />
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