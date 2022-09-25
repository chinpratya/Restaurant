import React from "react";
import {
  SideBarContainer,
  Logo,
  UnderLine,
  Menuicon,
  TextMenu,
} from "./SideBarStyle";
import LogoImage from "../../assets/logo.png";
import { menuItems } from "./MenuItem";

function SideBar() {
  return (
    <SideBarContainer>
      <Logo src={LogoImage} />
      <UnderLine />
      {menuItems.map((item, index) => {
        return (
          <>
            <Menuicon onClick={() => (window.location.href = `${item.url}`)}>
              <i
                className={`${item.IconName} `}
                style={{
                  fontSize: "21px",
                  margin: "auto",
                }}
              ></i>
            </Menuicon>
            <TextMenu>{item.title}</TextMenu>
            <UnderLine />
          </>
        );
      })}
    </SideBarContainer>
  );
}

export default SideBar;
