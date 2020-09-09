import styled from 'styled-components';

export const PlantPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 150px;

  img {
    float: left;
    width:  425px;
    height: 525px;
    object-fit: cover;
  }
`;

export const MetaDataWrapper = styled.div`
  height: 125px;
  color: black;
  display: flex;
`;