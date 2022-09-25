import React, { useState, useEffect } from "react";
import { Page, Row, Col } from "../../Layout/Layout";
import DataAPI from "../../constants/data.json";
import {
  SearchContainer,
  SearchInput,
  Vertical,
  SelectStyle,
  OptionStyle,
  Title,
  SearchInputBox,
  CardItem,
  BtnNext,
  BtnBack,
  NumberPage,
} from "./PlaceStyle";
import Card from "../../components/Card/Card";

function Place() {
  const [currentPage, setcurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const indexLast = currentPage * perPage;
  const indexFirst = indexLast - perPage;
  const [data, setData] = useState([]);
  useEffect(() => {
    if (DataAPI.slice(indexFirst, indexLast).length > 0) {
      setData(DataAPI.slice(indexFirst, indexLast));
    }
  }, [currentPage]);

  console.log("cur", DataAPI.slice(indexFirst, indexLast));
  const selectType = (e) => {
    const type = e.target.value;
    let dd = [];
    DataAPI.map((item) => {
      const asa = item.categories.find((value) => value === type);
      if (asa !== undefined) {
        dd.push(item);
      }
    });
    setData(dd);
  };
  const Next = () => {
    const Page = currentPage + 1;
    const last = Page * perPage;
    const first = last - perPage;
    if (DataAPI.slice(first, last).length > 0) {
      setcurrentPage(currentPage + 1);
    }
  };
  const Back = () => {
    const Page = currentPage - 1;
    const last = Page * perPage;
    const first = last - perPage;
    if (DataAPI.slice(first, last).length > 0) {
      setcurrentPage(currentPage - 1);
    }
  };
  const searchName = (e) => {
    const name = e.target.value;
    let regex = new RegExp(`${name}`, "i");
    let filtered = DataAPI.filter((arrBirds) => regex.test(arrBirds.name));
    setData(filtered);
  };
  return (
    <Page>
      <SearchContainer>
        <Title>Place List</Title>
        <SearchInputBox>
          <SelectStyle
            name="cars"
            id="cars"
            onChange={(e) => {
              selectType(e);
            }}
          >
            <OptionStyle value="restaurant">Restaurent</OptionStyle>
            <OptionStyle value="bakery">Bakery</OptionStyle>
            <OptionStyle value="cafe">Cafe</OptionStyle>
          </SelectStyle>
          <Vertical />
          <SearchInput
            onChange={(e) => searchName(e)}
            type="text"
            placeholder="Searhc name..."
          />
        </SearchInputBox>
      </SearchContainer>
      <CardItem>
        {data.map((data, index) => (
          <Card data={data} />
        ))}
      </CardItem>
      <Row
        width="100%"
        margin="-25px auto"
        justify="center"
        alignItem="center"
        // style={{ background: "red" }}
      >
        <BtnBack onClick={() => Back()}>
          <i
            className="fas fa-angle-left fa-lg"
            style={{ margin: "5px 2px 0 0 " }}
          />
        </BtnBack>
        <NumberPage>{currentPage}</NumberPage>
        <BtnNext onClick={() => Next()}>
          <i
            className="fas fa-angle-right fa-lg"
            style={{ margin: "5px  0 0 2px" }}
          ></i>
        </BtnNext>
      </Row>
    </Page>
  );
}

export default Place;
