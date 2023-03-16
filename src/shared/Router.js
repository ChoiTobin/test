import React from 'react'
import {  Route,Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Member from '../pages/Member';
import Locate from '../pages/Locate';

function Router() {
  return ( 
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Locate' element={<Locate/>}/>
            <Route path='/Member' element={<Member/>}/>
        </Routes>
    )
}

export default Router
