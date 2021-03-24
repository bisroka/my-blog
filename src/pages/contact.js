import React from 'react';
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../utils/theme"
import { StyledPageWrapper } from "../utils/pageWrapper"
import { Navigation, ContactSection, FooterSection } from "../sections/index.sections"
import { pageContent } from "../utils/pageContent"

const ContactPage = () => {
    return (     
        <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Navigation navButtons={pageContent.buttons.navButtons} />
            <StyledPageWrapper>
            <ContactSection
                pageContent={pageContent.contact}
                />
                  <FooterSection footerContent={pageContent.footer.footerContent} /> 
                </StyledPageWrapper> 
        </ThemeProvider>
        </>
   );
}
 
export default ContactPage;