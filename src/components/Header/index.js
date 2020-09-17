import React, { useState } from 'react'

// Components
import Menu from './Menu'
import Hamburger from './Hamburger'
import MobileMenu from './MobileMenu'

// Styles
import { MenuWrapper, Wrapper } from './Header.styles'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    {id: 1, name: 'About', link: '/About' }, 
    {id: 2, name: 'Contact', link: '/Contact'}, 
    {id: 3, name: 'Home', link: '/'},
  ];

  return (
    <Wrapper>
      <MenuWrapper>
        <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} items={menuItems} /> 
        <Menu items={menuItems} /> 
      </MenuWrapper>
    </Wrapper>
    
  )
}

export default Header