import React from "react"

// Styles
import { Wrapper, LinkWrapper } from './Footer.styles'

const Footer = () => (
  <Wrapper>
    <LinkWrapper>
      <div>Made by </div>
      <a target="_blank" href="https://www.jackiecalapristi.com"> Jackie Calapristi </a> 
      © {(new Date().getFullYear())} 
    </LinkWrapper>
  </Wrapper>
);

export default Footer;