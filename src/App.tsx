import React from 'react';
import {BrowserRouter} from "react-router-dom"
import NavDrawer from "./components/scaffold/NavDrawer";

const App = () => {
  return (
    <BrowserRouter>
      <NavDrawer />
    </BrowserRouter>
  );
};

export default App;
