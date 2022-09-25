import styled from "styled-components";

export const SearchContainer = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  background: #e5e5e5;
  z-index: 99;
  display: flex;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  text-align: start;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  @media (max-width: 539px) {
    display: flex;
    flex-direction: column;
    height: 125px;
  }
`;
export const CardItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  margin: 60px auto;
  width: 90%;
  @media (max-width: 539px) {
    margin: 130px auto;
  }
`;

export const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: -20px 20px 0 0;

  @media (min-width: 539px) {
    display: flex;
    flex-direction: row;
    margin: 0 50px 0 0;
    width: 60%;
  }
  @media (min-width: 910px) {
    display: flex;
    flex-direction: row;
    margin: 0;
    width: 60%;
  }
`;

export const SearchInput = styled.input`
  background: #ffffff;
  border: 1px solid #134b8a;
  border-radius: 50px;
  width: 300px;
  height: 30px;
  padding-left: 10px;
  @media (max-width: 539px) {
    width: 95%;
    margin: 0 auto;
  }
`;

export const Vertical = styled.div`
  height: 25px;
  border-left: 2px solid #134b8a;
  margin: 10px;
  @media (max-width: 539px) {
    display: none;
  }
`;
export const SelectStyle = styled.select`
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  background: #ffffff;
  border: 1px solid #134b8a;
  border-radius: 50px;
  width: 150px;
  height: 30px;
  padding-left: 10px;
  color: #9e9e9e;
  @media (max-width: 539px) {
    width: 98%;
    margin: 10px auto;
    height: 35px;
  }
`;
export const OptionStyle = styled.option`
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  background: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Title = styled.h4`
  font-family: "Kanit", sans-serif;
  font-weight: bold;
  color: black;

  @media (max-width: 539px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const BtnBack = styled.div`
  width: 25px;
  height: 25px;
  background: #ffffff;
  border-radius: 50%;
  padding: 2px;
  border: 1px solid black;
  cursor: pointer;
  :hover {
    background: #0f1e56;
    color: white;
  }
`;
export const BtnNext = styled.div`
  width: 25px;
  height: 25px;
  background: #ffffff;
  border-radius: 50%;
  padding: 2px;
  border: 1px solid black;
  cursor: pointer;
  :hover {
    background: #0f1e56;
    color: white;
  }
`;
export const NumberPage = styled.p`
  width: 32px;
  height: 28px;
  background: #134b8a;
  color: white;
  border-radius: 50%;
  padding: 4px 2px 0 0;
  margin: 20px 10px;
`;
