import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Repositories from "./Repositories/Repositories.js";
import Home from "./Home/index.js";

function Rota() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/repositories" element={<Repositories />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rota;
