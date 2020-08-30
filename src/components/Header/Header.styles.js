import styled from "styled-components"

export const Wrapper = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 120px;

  @media screen and (min-width: 768px) {
    height: 100px;
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

export const Logo = styled.div`
  max-width: 100px;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    max-width: 250px;
  }
`