import React from 'react'
import {  Route,Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Member from '../pages/Member';
import Location from '../pages/Location';

function Router() {
  return ( 
        <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path='/Location' element={<Location/>}/>
            <Route path='/Member' element={<Member/>}/>
        </Routes>
    )
}

export default Router
