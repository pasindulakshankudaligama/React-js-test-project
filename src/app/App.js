
import React from "react";
import HomePage from "../pages/home/index";
import Login from "../pages/home/session/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "../pages/home/session/NotFoundIndex";
import FlexBoxLayout from "../pages/Layouts/FlexBox";
import GridLayout from "../pages/Layouts/Grid";
import Posts from "../pages/Posts";


function App() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='posts' element={<Posts/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='flex-layout' element={<FlexBoxLayout/>}/>
            <Route path='grid-layout' element={<GridLayout/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>

    );
}

export default App;
