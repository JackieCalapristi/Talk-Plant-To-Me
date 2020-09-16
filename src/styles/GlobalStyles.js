import { createGlobalStyle } from "styled-components"
import AmaticSC from "../fonts/AmaticSC-Regular.ttf"

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
    font-family: 'Amatic SC';
    src: url('${AmaticSC}');
  }

  body {
    background: #FFF;
    color: #000;
    font-family: proxima-nova, sans-serif;;
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
    font-size: 25px;
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
    color: #000;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  a {
    text-decoration: none;
  }
`