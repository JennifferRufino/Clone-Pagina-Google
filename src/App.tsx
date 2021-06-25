import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { GlobalStyle } from "./styles/GlobalStyle";
import { useTheme } from "./context/theme";
import "./App.css";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App">
      <GlobalStyle theme={theme} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
          <div className="col-12">
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
