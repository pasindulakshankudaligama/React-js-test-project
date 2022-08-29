
import React from "react";
import HomePage from "../pages/home/index";
import Login from "../pages/home/session/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "../pages/home/session/NotFoundIndex";
import Posts from "../pages/Posts";


function App() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='posts' element={<Posts/>}/>
            <Route path='login' element={<Login/>}/>
            <Route exact path='dashboard' element={<Dashboard/>}/>
            <Route exact path='customer' element={<Customer/>}/>
            <Route exact path='item' element={<Item/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>

    );
}

export default App;
