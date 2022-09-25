import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background: #134b8a;
  box-shadow: 0px 2px 2px 0px #00000026;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: white;
  z-index: 99;
  @media (min-width: 540px) {
    padding-right: 59px;
    justify-content: end;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 10px;
  @media (min-width: 540px) {
    display: none;
  }
`;
export const NotiDot = styled.div`
  position: relative;
  width: 5px;
  height: 5px;
  top: -5px;
  left: -14px;
  cursor: pointer;
  background-color: red;
  border-radius: 50%;
  border: 2px solid white;
  z-index: 50;
`;
export const ContentBell = styled.div`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  /* background-color: green; */
`;
export const Username = styled.p`
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: white;
  /* @media (max-width: 768px) {
    display: flex;
  } */
`;

export const UserProfile = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  /* @media (max-width: 768px) {
    display: flex;
  } */
`;
export const ButtonVector = styled.button`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  /* @media (max-width: 768px) {
    display: flex;
  } */
`;
