import React, { useState } from "react"
// Components
import Menu from "./Menu"
// import Hamburger from "./Hamburger"
// import MobileMenu from "./MobileMenu"
// import Welcome from "./Welcome"

// Styles
import { MenuWrapper, Wrapper } from "./Header.styles"

const Header = ({ siteTitle = ``}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    {id: 1, name: 'About', link: '#about' }, 
    {id: 2, name: 'Contact', link: '#contact'},
  ];

  return (
    <Wrapper>
      <MenuWrapper>
        {/* <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} items={menuItems} /> */}
        <Menu items={menuItems} /> 
        Plantspeak 🌱
        Talk plants to me 🌱
        Plantucation 🌱
        Plantopia 🌱
      </MenuWrapper>
      {/* <Welcome /> */}
    </Wrapper>
    
  )
}

export default Header