import React from "react";
import HomePage from "../pages/home"
import Login from "../pages/home/session/Login";
import {Routes,Route} from "react-router-dom"

function App() {
  return (

      <Routes>
        <Route exact='/' element={<HomePage/>}/>
        <Route exact='login' element={<Login/>}/>
        <Route exact="*" element={}/>
      </Routes>
  );
}

export default App;
