import React from "react"
import { StyledPageWrapper } from "../utils/pageWrapper"
const NotFoundPage = () => {
    return(
        <>
        <StyledPageWrapper>
            <h1>Nie ma takiej strony</h1>
            <h2><a href="/">Wróć do strony głównej</a></h2>
        </StyledPageWrapper>
        </>
    )
}

export default NotFoundPage
