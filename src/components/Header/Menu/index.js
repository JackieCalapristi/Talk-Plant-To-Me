import React from 'react'
import { Link } from "@reach/router"

// Components
import About from "../About"
import Contact from "../Contact"

// Styles
import { Nav } from "./Menu.styles" 

const Menu = () => (
  <Nav>
    <li><Link to="/About"><About /></Link></li>
    <li><Link to="/Contact"><Contact /></Link></li>
    <li><Link to="/">Home</Link></li>
  </Nav>
)

export default Menu