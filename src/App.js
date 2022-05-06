import React from "react";
import ToolBar from "./components/ToolBar";
import SideBar from "./components/SideBar";
import Main from "./components/body/main.jsx";
import { Toolbar } from "@mui/material";

function App() {
  return (
    <>
      <ToolBar />
      <Toolbar />
      <SideBar />
      <Main />
    </>
  );
}

export default App;
