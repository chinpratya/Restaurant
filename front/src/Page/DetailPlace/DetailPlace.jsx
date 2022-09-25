import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DataAPI from "../../constants/data.json";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { Page, Row, Col } from "../../Layout/Layout";
import {
  CardResStyle,
  Logo,
  ImageBox,
  ImageDetail,
  TitleBox,
  Dot,
  Rate,
  BtnBack,
  TextTitle,
  ContainerStyle,
  TextDes,
  TextDay,
  CardImageStyle,
  InfoButton,
  ImageButton,
  BtnChoice,
} from "./DetailPlaceStyle";

function DetailPlace() {
  const { id } = useParams();
  const detail = DataAPI.find((value) => value.id === parseInt(id));
  const navigate = useNavigate();
  const [imgeIndex, setImgeIndex] = useState(0);
  const [active, setActive] = useState({ Info: true, Img: false });

  return (
    <Page>
      <Row width="80%" margin="20px auto">
        <BtnBack onClick={() => navigate(-1)}>
          <i
            className="fas fa-angle-left fa-lg"
            style={{ color: "white", margin: "2px 5px 0 0" }}
          />
          <p>Back</p>
        </BtnBack>
      </Row>
      <BtnChoice>
        <InfoButton
          onClick={() => setActive({ Info: true, Img: false })}
          active={active.Info}
        >
          INFORMATION
        </InfoButton>
        <ImageButton
          onClick={() => setActive({ Info: false, Img: true })}
          active={active.Img}
        >
          IMAGE
        </ImageButton>
      </BtnChoice>
      <ContainerStyle>
        <Row width="100%" justify="center">
          <CardResStyle display={active.Info}>
            <TitleBox>
              <Logo src={detail.profile_image_url} alt="Logo" />
              <Row
                margin="0"
                width="100%"
                height="60px"
                textAlign="start"
                justify="space-between"
              >
                <Col margin="10px" height="20px" justify="center">
                  <h3>{detail.name}</h3>
                </Col>
                <Row
                  justify="center"
                  alignItem="center"
                  style={{ paddingRight: "10px" }}
                  height="20px"
                  margin="10px"
                >
                  <Dot />
                  <Rate>4.5</Rate>
                </Row>
              </Row>
              <Col justify="start" width="100%">
                <Row style={{ wordWrap: "break-word" }} width="100%">
                  <Row width="100px">
                    <TextTitle>Address :</TextTitle>
                  </Row>
                  <Col width="80%">
                    <TextDes>{detail.address}</TextDes>
                  </Col>
                </Row>
                <Row
                  style={{ wordWrap: "break-word" }}
                  width="100%"
                  margin="10px auto"
                >
                  {" "}
                  <Row width="100px">
                    <TextTitle>Opening Hour :</TextTitle>
                  </Row>
                  <Col width="80%">
                    {detail.operation_time.map((data, index) => {
                      return data.time_open !== "closed" ? (
                        <TextDay
                          key={index}
                        >{`${data.day}: ${data.time_open} AM - ${data.time_close} PM`}</TextDay>
                      ) : (
                        <TextDay>{`${data.day}: closed`}</TextDay>
                      );
                    })}
                  </Col>
                </Row>
              </Col>
            </TitleBox>
          </CardResStyle>
          <CardImageStyle display={active.Img}>
            <Row
              //   style={{ background: "red" }}
              width="90%"
              height="30px"
              margin="10px auto 0 auto"
            >
              Images
            </Row>
            <ImageBox>
              {detail.images.map((data, index) => (
                <ImageDetail key={index} src={data} alt="Logo" />
              ))}
            </ImageBox>
          </CardImageStyle>
        </Row>
      </ContainerStyle>
    </Page>
  );
}

export default DetailPlace;
