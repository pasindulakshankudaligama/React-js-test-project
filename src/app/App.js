
import React from "react";
import HomePage from "../pages/home/index";
import Login from "../pages/home/session/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "../pages/home/session/NotFoundIndex";


function App() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>

    );
}

export default App;
