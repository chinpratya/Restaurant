import React, { useState } from "react";
import { Page, Row, Col } from "../../Layout/Layout";
import {
  CardStyle,
  Logo,
  Description,
  ImageBox,
  ImageDetail,
  TitleBox,
  Dot,
  Rate,
  Slider,
  BtnNext,
  BtnBack,
  ImageSlid,
  Title,
} from "./CradStyle";
import LogoImage from "../../assets/restaurant.jpg";
import LogoImage2 from "../../assets/restaurant2.jpg";
import LogoImage3 from "../../assets/restaurant3.jpg";

function Card(props) {
  const img = [LogoImage, LogoImage2, LogoImage3];

  const [imgeIndex, setImgeIndex] = useState(0);
  const { data } = props;
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const day = data.operation_time.filter(
    (value) => value.day === weekday[date.getDay()]
  );

  const Next = () => {
    if (imgeIndex === img.length - 1) {
      setImgeIndex(0);
    } else {
      setImgeIndex(imgeIndex + 1);
    }
    console.log(img.length);
  };
  const Back = () => {
    if (imgeIndex !== 0) {
      setImgeIndex(imgeIndex - 1);
    } else {
      setImgeIndex(img.length - 1);
    }
  };
  return (
    <CardStyle>
      <TitleBox>
        <Logo
          src={data.profile_image_url}
          alt="Logo"
          onClick={() => (window.location.href = `/detail/${data.id}`)}
        />
        <Col margin="10px auto" width="100%" height="60px" textAlign="start">
          <Col
            margin="0 10px 5px 10px"
            height="20px"
            justify="center"
            style={{ cursor: "pointer" }}
            onClick={() => (window.location.href = "/detail")}
          >
            <Title>{data.name}</Title>
          </Col>
          <Description>
            <Row height="30px" justify="start" textAlign="start" margin="10px">
              <i
                className="far fa-calendar-alt"
                style={{ margin: "0 10px 0 0" }}
              />
              {day[0].time_open !== "closed" ? (
                <p style={{ margin: "-2px 10px 0 0" }}>
                  {day[0].time_open} AM - {day[0].time_close} PM
                </p>
              ) : (
                <p style={{ margin: "-2px 10px 0 0" }}>closed</p>
              )}
            </Row>
            <Row justify="center">
              <Dot />
              <Rate>{data.rating}</Rate>
            </Row>
          </Description>
        </Col>
      </TitleBox>
      <ImageBox>
        {data.images.map((data, index) => (
          <ImageDetail key={index} src={data} alt="Logo" />
        ))}
      </ImageBox>
      <Slider>
        <BtnBack onClick={() => Back()}>
          <i className="fas fa-angle-left fa-lg" style={{ color: "black" }} />
        </BtnBack>
        <ImageSlid src={data.images[imgeIndex]} alt="" />
        <BtnNext onClick={() => Next()}>
          <i
            className="fas fa-angle-right fa-lg"
            style={{ color: "black" }}
          ></i>
        </BtnNext>
      </Slider>
    </CardStyle>
  );
}

export default Card;
