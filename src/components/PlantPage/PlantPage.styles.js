import styled from 'styled-components';

export const PlantPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 150px;

  img {
    float: left;
    width: 550px;
    height: 500px;
    object-fit: cover;
    clip-path: polygon(0% 0%, 75% 0%, 100% 100%, 0% 100%);
  }
`;

export const MetaDataWrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 35px;
`;