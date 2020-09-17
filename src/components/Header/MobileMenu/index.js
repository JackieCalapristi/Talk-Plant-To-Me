import React from 'react'
import { Link } from '@reach/router'

// Styles
import { OverrideGlobalStyle, Wrapper, Nav } from "./MobileMenu.styles"

const MobileMenu = ({ menuOpen, items }) => (
  <div>
    <OverrideGlobalStyle menuOpen={menuOpen} />
      <Wrapper menuOpen={menuOpen}>
        <Nav>
          {items.map(item => (
            <li key={item.id}>
              <Link to={item.link}>
                {item.name} 
              </Link>
            </li>
          ))}
        </Nav>
      </Wrapper>
  </div>
);

export default MobileMenu