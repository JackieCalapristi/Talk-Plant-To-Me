import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  width: 100%;
  height: 100px;
  background: #16d47b52;
  padding: 20px 20px 0px 20px;
  margin: 0 0 20px 0;
  box-sizing: border-box;
  color: #000;

  @media screen and (max-width: 720px) { 

  }
`;

export const StyledSearchBarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 55px;
  position: relative;
  color: #000;

  .fa-search {
    position: absolute;
    left: 20px;
    top: 12px;
    color: #000;
    z-index: 1000;
  }

  input {
    font-family: 'Abel', sans-serif;
    font-size: 14px;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 20px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: #000;
    box-sizing: border-box;
    background-color: #fff;
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;

    :focus {
      outline: none;
    }

    ::placeholder {
      font-size: 15px;
    }

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;
