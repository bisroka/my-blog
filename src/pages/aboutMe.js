import React from 'react';
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../utils/theme"
import { StyledPageWrapper } from "../utils/pageWrapper"
import { Navigation, FreeTimeSection, AboutMeSection, FooterSection } from "../sections/index.sections"
import { pageContent } from "../utils/pageContent"
import StoreProvider from "../store/StoreProvider"
const AboutMePage  = () => {
  return ( 
    <>
    <GlobalStyle />
    <StoreProvider>
      <ThemeProvider theme={theme}>
          <Navigation navButtons={pageContent.buttons.navButtons} />
          <StyledPageWrapper>
            <AboutMeSection
            animation="outer"
            pageContent={pageContent.aboutMe}
            /> 
            <FreeTimeSection
            pageContent={pageContent.myFreeTime}
            />
            <FooterSection footerContent={pageContent.footer.footerContent} />
          </StyledPageWrapper> 
      </ThemeProvider>   
    </StoreProvider>
    </>
   );
}
 
export default AboutMePage;