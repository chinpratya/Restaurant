import styled from "styled-components";

export const CardStyle = styled.div`
  width: 450px;
  height: 200px;
  background: #ffffff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: "Kanit", sans-serif;
  font-weight: bold;
  color: black;
  margin: 10px;

  @media (max-width: 539px) {
    width: 95%;
    flex-direction: column;
    height: 350px;
  }
`;

export const Logo = styled.img`
  min-width: 60px;
  height: 60px;
  margin: 10px 20px;
  border-radius: 10px;
  background-color: aqua;
  object-fit: cover;
  cursor: pointer;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transform: translateY(-0.15em);
  }
  @media (max-width: 539px) {
    width: 100%;
    height: 100px;
    margin: 0 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 100px;
  margin: auto;
  border-radius: 10px;
  box-sizing: border-box;
  @media (max-width: 539px) {
    display: none;
  }
`;
export const ImageDetail = styled.img`
  width: 30%;
  height: 100%;
  object-fit: cover;
  :first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  :last-child {
    border-top-right-radius: 10px;
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
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justify};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  @media (max-width: 539px) {
    display: flex;
    flex-direction: column;
    height: 125px;
  }
`;
export const Dot = styled.div`
  position: relative;
  width: 5px;
  height: 5px;
  top: -5px;
  cursor: pointer;
  background-color: #134b8a;
  border-radius: 50%;
  border: 2px solid white;
  @media (max-width: 539px) {
    display: none;
  }
`;
export const Title = styled.p`
  font-size: 22px;
  :hover {
    color: #02a1fd;
  }
`;
export const Rate = styled.p`
  font-size: 12px;
  margin: -10px 10px 0 0;
  @media (max-width: 539px) {
    position: relative;
    width: 65px;
    height: 30px;
    top: -45px;
    left: -14px;
    cursor: pointer;
    background: #134b8a;
    color: white;
    border-radius: 30px;
    padding-top: 5px;
    text-align: center;
  }
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
  position: absolute;
  width: 25px;
  height: 25px;
  left: 5px;
  border-radius: 30px;
  z-index: 90;
  background: #ffffff;
  border-radius: 50%;
  padding-top: 2px;
`;
export const BtnNext = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  right: 10px;
  border-radius: 30px;
  z-index: 90;
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
