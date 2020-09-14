import styled from "styled-components"

export const LogoStyles = styled.div`
  margin-left: 20px;
  display: none;
  color: #000;
  font-family: 'Amatic SC', cursive;
  
  :hover {
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    display: block;
    font-family: 'Amatic SC', cursive;
    font-size: 20px;
    margin-left: 0px;
  }
`