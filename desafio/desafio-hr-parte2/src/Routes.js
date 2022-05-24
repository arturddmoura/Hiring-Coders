import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cadastro from "./components/Cadastro.js";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Logado from "./components/Logado.js";

function Rota() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logado" element={<Logado />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rota;
