import styled from "styled-components";

export const ContainerStyle = styled.div`
  flex-direction: row;
  width: 80%;
  min-height: 80%;
  background: #c4d3e9;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: "Kanit", sans-serif;
  font-weight: bold;
  color: black;
  margin: 20px auto;
  cursor: pointer;
  @media (max-width: 770px) {
    background: transparent;
    box-shadow: none;
    width: 95%;
  }
  /* padding: 30px; */
  /* @media (max-width: 540px) {
    width: 95%;
    flex-direction: column;
    height: 350px;
  } */
`;

export const CardResStyle = styled.div`
  width: 50%;
  background: #ffffff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: "Kanit", sans-serif;
  font-weight: bold;
  color: black;
  margin: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 430px;
  @media (max-width: 770px) {
    margin: auto;
    width: 90%;
    display: ${(props) => (props.display ? "flex" : "none")};
  }
  @media (max-width: 280px) {
    margin: auto;
    width: 90%;
    height: 530px;
  }
`;
export const CardImageStyle = styled.div`
  width: 40%;
  background: #ffffff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: "Kanit", sans-serif;
  font-weight: bold;
  color: black;
  margin: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 95%;
  @media (max-width: 770px) {
    width: 90%;
    display: ${(props) => (props.display ? "flex" : "none")};
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 200px;
  margin: 0 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 90%;
  margin: 10px auto 20px auto;
  border-radius: 10px;
  /* background-color: #00ff9d; */
  box-sizing: border-box;
`;
export const ImageDetail = styled.img`
  width: 90%;
  height: 200px;
  :first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  :last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const Description = styled.div`
  width: 100%;
  height: 30px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  font-weight: 100;
  font-size: 13px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  flex-direction: column;
  height: 125px;
`;
export const Dot = styled.div`
  position: relative;
  width: 5px;
  height: 5px;
  top: 1px;
  cursor: pointer;
  background-color: #134b8a;
  border-radius: 50%;
  border: 2px solid white;
`;

export const Rate = styled.p`
  font-size: 12px;
`;
export const Slider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 95%;
  height: 176px;
  border-radius: 10px;
  margin: 40px auto;
  @media (min-width: 540px) {
    display: none;
  }
`;
export const BtnBack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  background: #134b8a;
  border-radius: 30px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding-bottom: 3px;
  cursor: pointer;
`;
export const BtnNext = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  right: 10px;
  border-radius: 30px;
  z-index: 99;
  background: #ffffff;
  border-radius: 50%;
  padding-top: 2px;
`;
export const ImageSlid = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const TextTitle = styled.p`
  font-family: "Kanit", sans-serif;
  font-size: 12px;
  font-weight: bold;
  width: 100px;
  text-align: start;
  margin: 0;
  padding-left: 10px;
`;

export const TextDes = styled.p`
  font-family: "Kanit", sans-serif;
  font-size: 12px;
  font-weight: 200;
  width: 80%;
  text-align: start;
  margin: 0;
  @media (max-width: 280px) {
    width: 65%;
  }
`;

export const TextDay = styled.p`
  font-family: "Kanit", sans-serif;
  font-size: 12px;
  font-weight: 200;
  width: 90%;
  text-align: start;
  margin: 0;
  @media (max-width: 280px) {
    width: 70%;
  }
`;

export const InfoButton = styled.button`
  /* background-color: ${(props) => props.Active}; */
  font-family: "Kanit", sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #134b8a;
  border-radius: 20px;
  width: 188px;
  height: 34px;
  border: 0px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    background: #134b8a;
    color: #ffffff;
    z-index: 1000;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  `}
`;
export const ImageButton = styled.button`
  /* background-color: ${(props) => props.Active}; */
  font-family: "Kanit", sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #134b8a;
  border-radius: 20px;
  width: 188px;
  height: 34px;
  border: 0px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  ${({ active }) =>
    active &&
    `
    color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background: #134b8a;
    
  `}
`;
export const BtnChoice = styled.div`
  display: flex;
  margin: auto;
  border-radius: 20px;
  width: 80%;
  border: 0px;
  background: #e5e5e5;
  justify-content: center;
  align-items: center;
  & > button + button,
  & > a + a {
    margin-left: -28px; // To avoid focus shadow overlap
  }
  @media (min-width: 771px) {
    display: none;
  }
`;
