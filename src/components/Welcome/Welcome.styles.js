import styled from "styled-components"

export const Wrapper = styled.div`
  h1 {
    color: #000;
    transition: all 0.5s ease;
    text-align: center;
    font-size: 30px;
    font-weight: 100;
    margin: 0 0;
  }

  h5 {
    color: #000;
    display: none;
    transition: all 0.5s ease;
    text-align: center;
    font-size: 33px;
    font-weight: 100;
    margin-top: 0px;
  }

  @media screen and (min-width: 768px) {
    display: block;
    h1 {
      font-size: 80px;
    }
    h5 {
      display: block;
    }
  }
`;