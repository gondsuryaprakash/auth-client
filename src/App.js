import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Login from './Page/Login';
import SignUp from './Page/SignUp';
import Home from './Page/Home';

import PrivateRoute from './PrivateRouter';

import getCookie from './Utills/helpr'

const App =()=> {

  let token = getCookie('token')
  useEffect(()=>{
     console.log("token Changed");
  },[token])
 
  return (
    <Router>
    <Routes>
    <Route exact path='/' element={<PrivateRoute token={token}/>}>
            <Route exact path='/' element={<Home/>}/>
          </Route>
    <Route path="/login" element={<Login/>}>
     
     </Route>
     <Route path="/signup" element={<SignUp/>}>
     
     </Route>
    </Routes>

    </Router>
  
  )
   
  
}

export default App;
