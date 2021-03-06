import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

import "./Body.css";

import { Input } from "@material-ui/core";

export default function Body() {
  return (
    <div className="Body">
      <div className="bodyLogo">
        <img
          src="https://logodownload.org/wp-content/uploads/2014/09/google-logo-1.png"
          alt="Logo google"
          style={{ width: 500, marginTop: 220 }}
        />
      </div>
      <div className="bodyInput">
        <SearchIcon />
        <Input style={{ width: 550 }} disableUnderline />
        <MicIcon />
      </div>
    </div>
  );
}
