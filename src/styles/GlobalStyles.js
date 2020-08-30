import { createGlobalStyle } from "styled-components"
import MuliRegular from "../fonts/Muli-Regular.woff"
import MuliBlack from "../fonts/Muli-Black.woff"

export const colors = {
  white: "#fff",
  darkGrey: "#1a1c20",
  deepDarkGrey: "#404040",
  blueShade1: "#215973",
  blueShade2: "#6fadc6",
  blueShade3: "#d1e1e9",
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }

  @font-face {
    font-family: 'Muli Regular';
    src: local('Muli Regular'), local('MuliRegular'),
      url('${MuliRegular}') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muli Black';
    src: local('Muli Black'), local('MuliBlack'),
      url('${MuliBlack}') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  body {
    background: #FFF;
    color: #000;
    font-family: "Muli Regular", Arial, Helvetica, sans-serif;
    margin: 0;
    transition: all 0.5s ease;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }

  h1 {
    font-size: 2.5rem;
    letter-spacing: 1px;
    margin: 10px 0;
    color: #000;
    font-weight: normal;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
      font-family: 'Raleway', sans-serif;
      font-weight: lighter;
    }
  }

  h2 {
    font-size: 1rem;
    letter-spacing: 1px;
    margin: 10px 0;
    color: #FFFFFF;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  a {
    text-decoration: none;
  }
`;