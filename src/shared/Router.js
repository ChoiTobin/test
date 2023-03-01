import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Employee from '../pages/Employee';

function Router() {
  return ( 
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Employee' element={<Employee/>}/>
        </Routes>
    )
}

export default Router