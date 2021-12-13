import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import getCookie from './Utills/helpr';

const PrivateRoute = (props) => {
    // let [auth, setauth] = useState("")
    // const token = getCookie('token')
    // useEffect(()=>{
    //     setauth(token)
    // },[token])
    const { token } = props;

    let auth = false; 

    if(token) {
    const decode = jwt.decode(token)
    if(decode?.email) {
        auth=true;
    }
}
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;