import React from "react"

// Styles
import { Wrapper } from './Footer.styles'

const Footer = () => (<Wrapper>Made by Jackie Calapristi © {(new Date().getFullYear())} </Wrapper>);

export default Footer;