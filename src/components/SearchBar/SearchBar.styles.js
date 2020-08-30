import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  width: 100%;
  height: 105px;
  background: #d4ffe0;
  padding: 25px 20px 0px 20px;
  margin: 0 0 20px 0;
  box-sizing: border-box;
  color: #000;
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
    font-size: 16px;
    line-height: 12px;
    font-weight: 400;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;
