import React from 'react';
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../utils/theme"
import { StyledPageWrapper } from "../utils/pageWrapper"
import { Navigation, ContactSection, FooterSection } from "../sections/index.sections"
import { pageContent } from "../utils/pageContent"
import StoreProvider from "../store/StoreProvider"
const ContactPage = () => {
    return (     
        <>
        <GlobalStyle />
          <StoreProvider>
          <ThemeProvider theme={theme}>
              <Navigation navButtons={pageContent.buttons.navButtons} />
              <StyledPageWrapper>
                <ContactSection
                  pageContent={pageContent.contact}
                />
                <FooterSection footerContent={pageContent.footer.footerContent} /> 
              </StyledPageWrapper> 
          </ThemeProvider>
          </StoreProvider>
        </>
   );
}
 
export default ContactPage;