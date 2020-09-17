import styled from "styled-components"

export const ContactWrapper = styled.div`
  background-image: none;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    height: 700px;
    background-image: ${props => `url('${props.image}')`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
  }
`

export const Title = styled.div`
  font-family: 'Amatic SC',cursive;
  padding: 20px 0 0 50px;
  font-size: 100px;
`

export const ContactText = styled.div`
  width: 300px;
  padding-left: 50px;
  font-size: 14px;

  a {
    color: #000;
    text-decoration: underline;
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    width: 550px;
  }
`

export const Signature = styled.div`
  padding: 30px 0 20px 50px;
  font-family: 'Jaceline', cursive;
  font-size: 90px;
`

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  margin-left: 50px;
  font-size: 30px;

  a {
    color: #000;
  }

  svg {
    margin: 20px 10px 0 10px;
  }
`