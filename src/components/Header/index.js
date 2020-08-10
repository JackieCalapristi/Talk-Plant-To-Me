import React from "react"
// Components
// import Menu from "./Menu"
// import Hamburger from "./Hamburger"
// import MobileMenu from "./MobileMenu"
// import Welcome from "./Welcome"
// Styles
import { MenuWrapper, Wrapper } from "./Header.styles"

const Header = ({ siteTitle = ``}) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const menuItems = [
  //   {id: 1, name: 'Resume', link: Resume }, 
  //   {id: 2, name: 'Portfolio', link: '#portfolio'}, 
  //   {id: 3, name: 'Contact', link: '#contact'},
  // ];

  return (
    <Wrapper>
      <MenuWrapper>
        {/* <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} items={menuItems} />
        <Menu items={menuItems} /> */}
        I'm a header
      </MenuWrapper>
      {/* <Welcome /> */}
    </Wrapper>
    
  )
}

export default Header