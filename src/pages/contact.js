import React, { Component } from 'react';
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../utils/theme"
import { StyledPageWrapper } from "../utils/pageWrapper"
import { Navigation, ContactSection, FooterSection } from "../sections/index.sections"
import { pageContent } from "../utils/pageContent"

class ContactPage extends Component {
    state = {  }
    render() { 
        return ( 
        <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Navigation buttons={pageContent.buttons.navButtons} />
            <StyledPageWrapper>
                <ContactSection
                header={pageContent.contact.header}
                subheader={pageContent.contact.subheader}
                img={pageContent.contact.img}
                contactPictures={pageContent.contact.contactPictures}
                />
                  <FooterSection footerContent={pageContent.footer.footerContent} />
                </StyledPageWrapper> 
        </ThemeProvider>
        </>
    );
    }
}
 
export default ContactPage;