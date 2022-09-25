import styled from "styled-components";

export const SideBarContainer = styled.div`
  z-index: 99;
  background: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: fixed;
  top: 0;
  width: 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: white;
  border-radius: 0px 50px 50px 0px;
  padding-top: 25px;
  /* padding-right: 5px; */
  @media (max-width: 540px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 70%;
  height: 5%;
  cursor: pointer;
`;
export const UnderLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2px;
  cursor: pointer;
  margin: 20px;
  background-color: #e5e5e5;
`;

export const Menuicon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-color: #0f1e56;
  border-radius: 10px;
`;
export const TextMenu = styled.p`
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: black;
  margin: 1px;
`;
