import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "../Login/Login";
import Home from "../Dashboard/Home";
import PrivateRoute from "./PrivateRoute";
import HomeAdmin from '../Dashboard/HomeAdmin';
import HomeMod from '../Dashboard/HomeMod';



const Rotas = () => {

  
  return (
    <Router>
    <Fragment>
      <Routes>
        <Route exact path='Home' element={<PrivateRoute/>}>
     <Route exact path='/Home' element={<Home/>}/>
        </Route>
        <Route exact path='HomeAdmin' element={<PrivateRoute/>}>
          <Route exact path='/HomeAdmin' element={<HomeAdmin/>}/>
        </Route>
        <Route exact path='HomeMod' element={<PrivateRoute/>}>
          <Route exact path='/HomeMod' element={<HomeMod/>}/>
        </Route>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='*' element={<Login/>}/>
      </Routes>
    </Fragment>
  </Router>
  );
};

export default Rotas;
