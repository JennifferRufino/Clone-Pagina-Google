import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { useTheme } from "../../context/theme";
import "./Header.css";

export default function Header() {
  const { changeTheme, theme } = useTheme();
  return (
    <div className="Header">
      <div className="row">
        <div className="col-6">
          <div className="headerLeft">
            <p>Sobre</p>
            <p>Loja</p>
          </div>
        </div>
        <div className="col-4">
          <ul style={{ textAlign: "left" }}>
            {theme === "dark" ? (
              <WbSunnyIcon onClick={changeTheme} />
            ) : (
              <Brightness3Icon onClick={changeTheme} />
            )}
          </ul>
        </div>
        <div className="col-2">
          <div className="headerRight">
            <p>Gmail</p>
            <p>Imagens</p>
            <p>
              <AppsIcon
                fontSize="small"
                style={{ fontSize: 35, paddingBottom: 9 }}
              />
            </p>
            <p>
              <AccountCircleIcon
                fontSize="small"
                style={{ fontSize: 35, paddingBottom: 9 }}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
