import React from "react";
import {
  Nav,
  Username,
  UserProfile,
  ButtonVector,
  Logo,
  Row,
  NotiDot,
  ContentBell,
} from "./HeaderStyle";
import Rectangle from "../../assets/Rectangle.png";
import LogoImage from "../../assets/logo.png";

function Header() {
  return (
    <Nav>
      <Logo src={LogoImage} />
      <Row>
        <ContentBell>
          <i
            className="fas fa-bell fa-lg"
            style={{ margin: "auto", cursor: "pointer", position: "relative" }}
          />
          <NotiDot />
        </ContentBell>
        <UserProfile src={Rectangle} alt="userprofile" />
        <Username>Akkarapol</Username>
        <ButtonVector>
          <i className="fas fa-angle-down" style={{ cursor: "pointer" }} />
        </ButtonVector>
      </Row>
    </Nav>
  );
}

export default Header;
