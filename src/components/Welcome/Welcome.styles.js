import styled from "styled-components"

export const Wrapper = styled.div`
  height: 75px;

  h5 {
    color: #666;
    display: none;
    transition: all 0.5s ease;
    text-align: center;
    font-size: 20px;
    font-weight: 100;
    margin-top: 10px;
    line-height: 20px;
  }

  @media screen and (min-width: 768px) {
    display: block;
    height: 200px;

    h5 {
      display: block;
    }
  }
`;

export const Title = styled.div`
  color: #000;
  transition: all 0.5s ease;
  text-align: center;
  font-size: 30px;
  font-weight: 100;
  margin: 0 0;

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 65px;
  }
`;