import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../components/HomePage/Homepage";

const AppNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="*" element={<div>No page available 404!!</div>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppNavigation;

