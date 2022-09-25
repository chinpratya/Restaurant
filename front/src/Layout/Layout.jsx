import styled from "styled-components";

export const Page = styled.div`
  background: ${(props) => props.background};
  width: 95%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 60px;
  @media (max-width: 540px) {
    width: 100%;
    height: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItem};
  justify-content: ${(props) => props.justify};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItem};
  /* background-color: red; */
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justify};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
`;
