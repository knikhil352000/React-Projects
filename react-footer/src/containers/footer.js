import React from 'react';
import Footer from '../components/footer';

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Column>
                    <Footer.Title>
                        About Us
                    </Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                    
                </Footer.Column>
            </Footer.Wrapper>
        </Footer>
    )
}