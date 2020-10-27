import React from 'react';
import {Container, Wrapper,Row , Column,Link,Title} from './styles/footer';

export default function Footer({children, ...resProps}){
    return <Container {...resProps}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({children, ...resProps}){
    return <Wrapper {...resProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({children, ...resProps}){
    return <Row {...resProps}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...resProps}){
    return <Column {...resProps}>{children}</Column>
}

Footer.Link = function FooterLink({children, ...resProps}){
    return <Link {...resProps}>{children}</Link>
}

Footer.Title = function FooterTitle({children, ...resProps}){
    return <Title {...resProps}>{children}</Title>
}