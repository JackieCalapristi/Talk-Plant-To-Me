import React, { useState } from "react"

// Components
import Menu from "./Menu"
import Hamburger from "./Hamburger"
import MobileMenu from "./MobileMenu"

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
      </MenuWrapper>
    </Wrapper>
    
  )
}

export default Header