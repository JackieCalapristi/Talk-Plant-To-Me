import React from "react"
import { Link } from "@reach/router"

// Styles
import { OverrideGlobalStyle, Wrapper, Nav } from "./MobileMenu.styles"

const MobileMenu = ({ menuOpen }) => (
  <div>
    <OverrideGlobalStyle menuOpen={menuOpen} />
      <Wrapper menuOpen={menuOpen}>
        <Nav>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </Nav>
      </Wrapper>
  </div>
)

export default MobileMenu