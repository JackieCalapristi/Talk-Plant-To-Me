import React from 'react'

// Styles
import { OverrideGlobalStyle, Wrapper, Nav } from "./MobileMenu.styles"

const MobileMenu = ({ menuOpen, items }) => (
  <div>
    <OverrideGlobalStyle menuOpen={menuOpen} />
      <Wrapper menuOpen={menuOpen}>
        <Nav>
          {items.map(item => (
            <li key={item.id}>
              <a href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </Nav>
      </Wrapper>
  </div>
);

export default MobileMenu