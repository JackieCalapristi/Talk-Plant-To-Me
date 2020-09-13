import React, { useState } from "react"
import { Link } from '@reach/router'

// Components
import Menu from "./Menu"
import Hamburger from "./Hamburger"
import MobileMenu from "./MobileMenu"
import Logo from "./Logo"

// Styles
import { MenuWrapper, Wrapper } from "./Header.styles"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <MenuWrapper>
        <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} /> 
        <Menu /> 
        <Link to="/"> <Logo /> </Link>
      </MenuWrapper>
    </Wrapper>
    
  )
}

export default Header