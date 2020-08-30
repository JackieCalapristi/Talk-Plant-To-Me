import styled, { css } from "styled-components"

export const GridWrapper = styled.div`
  background-color: #dddddf;
`
export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  min-height: 150px;
  justify-content: center;
  padding-bottom: 35px;
`
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: #FFFFFF;
	color: black;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  width: 425px;
	margin: 20px;
  overflow: hidden;
  
  :hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
  }
`
export const ImgWrapper = styled.div`
  height: 125px;
  color: black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  h1 {
    font-family: freight-display-pro,serif;
    font-size: 20px;
    letter-spacing: .63px;
    line-height: 44px;
    font-weight: 900;
    text-transform: capitalize;
  }

  img {
    float: left;
    width:  125px;
    height: 125x;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    display: block;
    height: 125px;
    color: black;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  :hover {
    cursor: pointer;
  }
`
export const SeePlantWrapper = styled.div`
  color: black;
  display: none;
  font-size: 12px;
  opacity: 0.6;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`
export const TextWrapper = styled.div`
  
`
export const StatWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 15px 0;
`
const sharedStyle = css`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-family: "Muli Black", Arial, Helvetica, sans-serif;
  font-size: 0.8rem;

  img {
    margin: 0 10px 0 0;
  }
`
export const DateWrapper = styled.div`
  ${sharedStyle}
`