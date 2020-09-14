import styled from "styled-components"

export const Wrapper = styled.div`
  height: 75px;

  h5 {
    font-family: proxima-nova,sans-serif;
    color: #666;
    display: none;
    transition: all 0.5s ease;
    text-align: center;
    font-size: 16px;
    font-weight: 100;
    margin-top: 0px;
    margin-bottom: 5px;
    line-height: 20px;
    letter-spacing: 3px;
  }

  @media screen and (min-width: 768px) {
    display: block;
    height: 250px;

    h5 {
      display: block;
    }
  }
`

export const Title = styled.div`
  font-family: 'Amatic SC', cursive;
  transition: all 0.5s ease;
  text-align: center;
  font-size: 45px;
  font-weight: 100;
  margin: 0 0;

  a {
    color: #000;
  }

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 95px;
  }
`

export const TrefleApiLinkWrapper = styled.h6`
  display: none;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-size: 10px;

  a {
    color: #000;
    font-weight: bolder;
    text-decoration: underline;
  }

  img {
    height: 15px;
    width: 15px;
    margin: 0 3px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`