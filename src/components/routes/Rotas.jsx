import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Dashboard/Home";

const Rotas = () => {
    const userToken = localStorage.getItem('TokenBaoOuNao');
  return ( 
    
   
      <BrowserRouter>
        <Routes>
        {userToken &&  <Route path="/Home" element={<Home />} />}
          <Route path="/login" exact element={<Login />} />
          <Route path="/Home" exact element={<Navigate to="/Login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
  
    
 
  )
}

export default Rotas
