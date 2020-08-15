import styled from "styled-components";

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
  flex-direction: column;
  background-color: #FFFFFF;
	color: #000000;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  width: 300px;
	margin: 20px;
  overflow: hidden;
  
  :hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
  }
`