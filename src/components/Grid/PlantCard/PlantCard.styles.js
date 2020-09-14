import styled, { css } from "styled-components"

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  min-height: 150px;
  justify-content: center;
`
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: #FFFFFF;
	color: black;
  border-radius: 3px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  width: 450px;
	margin: 20px 0 0 20px;
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
    font-family: proxima-nova, sans-serif;
    font-size: 20px;
    letter-spacing: .63px;
    line-height: 30px;
    text-transform: capitalize;
    margin: 15px 0px 0px 15px;
  }

  img {
    float: left;
    width: 125px;
    height: 125px;
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
export const LearnMoreWrapper = styled.div`
  color: black;
  display: none;
  font-size: 12px;
  opacity: 0.6;
  text-decoration: none;
  margin: 15px 0 0 15px;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`

export const DescriptionWrapper = styled.div`
  font-family: proxima-nova,sans-serif;
  font-size: 12px;
  font-weight: 400;
  margin: 0 0 0 15px;
  overflow-x: hidden;
  letter-spacing: 0;
  color: #666;
`

export const TextWrapper = styled.div`
  h6 {
    margin: 13px 0px 5px 15px;
    text-transform: uppercase;
    color: #16d47b;
    font-family: proxima-nova,sans-serif;
    font-weight: 400;
    letter-spacing: 1.5px;
  }
  
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