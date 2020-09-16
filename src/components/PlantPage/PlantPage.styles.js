import styled from 'styled-components'

export const ImageHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  min-height: 150px;
  text-transform: capitalize;
  text-align: center;
  background-image: ${props => `url('${props.image}')`};
  background-repeat: repeat-x;
  padding-bottom: 20px;

  img {
    float: left;
    width: 300px;
    height: 300px;
    object-fit: cover;
    border: 20px solid white;
    margin: 15px 0 15px 0;
  }

  div {
    width: 390px;
  }

  a {
    color: #000;
    background: linear-gradient(180deg,rgba(255,255,255,0) 50%,#bbefd4 75%);
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    img {
      float: left;
      width: 350px;
      height: 350px;
      object-fit: cover;
      border: 20px solid white;
      margin: 15px 0 15px 0;
    }
  }
`

export const PlantDataColumnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  align-items: center;
  margin-bottom: 15px;

  h4 {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1.5px;
    font-size: 18px;
    color: #1b1b1b;
  }

  div {
    width: 330px;
    font-size: 15px;
    font-weight: 100;
    margin-right: 15px;
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
    align-items: baseline;
  }
`

export const Title = styled.div`
  font-size: 25px;
  font-weight: 200;
  background: linear-gradient(180deg,rgba(255,255,255,0) 60%,#bbefd4 75%);
  display: inline;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const Header = styled.div`
 font-family: 'Amatic SC', cursive;
  transition: all 0.5s ease;
  text-align: center;
  font-size: 45px;
  font-weight: 100;
  margin: 0px;
  display: block;
  height: 75px;

  a {
    color: #000;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`