import React, { Component } from 'react';
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../utils/theme"
import { StyledPageWrapper } from "../utils/pageWrapper"
import { Navigation, FreeTimeSection, AboutMeSection, FooterSection } from "../sections/index.sections"
import { pageContent } from "../utils/pageContent"

class AboutMePage extends Component {
    state = {  }
    render() { 
        return ( 
        <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Navigation buttons={pageContent.buttons.navButtons} />
            <StyledPageWrapper>
            <AboutMeSection
              header={pageContent.aboutMe.header}
              subheader={pageContent.aboutMe.subheader}
              paragraphes={pageContent.aboutMe.paragraphes}
              img={pageContent.aboutMe.img}
              />
                <FreeTimeSection
              header={pageContent.myFreeTime.header}
              activities={pageContent.myFreeTime.activities}
              />
                <FooterSection footerContent={pageContent.footer.footerContent} />
                </StyledPageWrapper> 
        </ThemeProvider>
        </>
    );
    }
}
 
export default AboutMePage;