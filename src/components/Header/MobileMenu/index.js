import React from "react"
import { Link } from "@reach/router"

// Components
import About from "../About"
import Contact from "../Contact"
import Logo from "../Logo"

// Styles
import { OverrideGlobalStyle, Wrapper, Nav } from "./MobileMenu.styles";

const MobileMenu = ({ menuOpen, items }) => (
  <div>
    <OverrideGlobalStyle menuOpen={menuOpen} />
      <Wrapper menuOpen={menuOpen}>
        <Nav>
          <Link to="/About"><About /></Link>
          <Link to="/Contact"><Contact /></Link>
          <Link to="/"><Logo /></Link>
        </Nav>
      </Wrapper>
  </div>
);

export default MobileMenu;