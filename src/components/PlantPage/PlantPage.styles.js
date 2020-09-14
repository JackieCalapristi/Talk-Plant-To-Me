import styled from 'styled-components';

export const PlantPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 150px;
  text-transform: capitalize;

  img {
    float: left;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    img {
      float: left;
      width: 500px;
      height: 500px;
      object-fit: cover;
    }
  }
`;

export const BlocksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: column-reverse;

  @media screen and (min-width: 768px) {
    flex-flow: initial;
  }
`;

export const BlockWrapperMain = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
  justify-content: center;
`;

export const ImageTextWrapper = styled.div`
  display: flex;
`;

export const BlockWrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  justify-content: flex-start;
  margin-bottom: 15px;
  min-width: 300px;
`;

export const Title = styled.div`
  font-size: 25px;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`;

export const Header = styled.div`
 font-family: 'Amatic SC', cursive;
  transition: all 0.5s ease;
  text-align: center;
  font-size: 45px;
  font-weight: 100;
  margin: 0 0 0 70px;
  display: block;
  height: 75px;

  a {
    color: #000;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;