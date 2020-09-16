import styled from "styled-components"

export const AboutWrapper = styled.div`
  height: 700px;
  background-image: ${props => `url('${props.image}')`};
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-family: 'Amatic SC',cursive;
  padding: 20px 0 0 50px;
  font-size: 100px;
`

export const ContactText = styled.div`
  width: 550px;
  padding-left: 50px;
`