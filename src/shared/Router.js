import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Employee from '../pages/Employee';
import Member from '../pages/Member';

function Router() {
  return ( 
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Employee' element={<Employee/>}/>
            <Route path='/Member' element={<Member/>}/>
        </Routes>
    )
}

export default Router
