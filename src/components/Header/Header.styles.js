import styled from "styled-components"

export const Wrapper = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 10px;

  @media screen and (min-width: 768px) {
    height: 80px;
  }
`
export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left; 

  @media screen and (min-width: 768px) {
    justify-content: center; 
    align-items: center;
  }
`