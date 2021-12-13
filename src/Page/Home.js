import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';
import './page.css'
import {  Button } from 'react-bootstrap';
import getCookie from '../Utills/helpr';
const Home = () => {


    const history = useNavigate(); 
    const [userData, setData] = useState(undefined);
    const auth =async ()=> { 
        const token = getCookie('token')
        const req= await fetch('/api/dashboard', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            }
        }) 
        const data = await req.json();
        if(data) {
            setData(data.user)
        }
    }
    
    const handleClick = async ()=> { 

        const {email} = userData; 
        
        const req =await  fetch('/api/logout', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST', 
            body: JSON.stringify({
                email
            })
        }) 

        const data = await req.json()

        if(data.status === 'ok') {
            alert("Logout")
            setTimeout(()=>{
                history('/login')
            }, 1000)
        }



        // localStorage.removeItem("token")
       
       
    }
    useEffect(()=> {
        const token = getCookie('token')
        if(token) {
            const user = jwt.decode(token)
            if(!user) {
                localStorage.removeItem('token');
                history('/login')
            }
            else {
                auth()
            }
        }
    },[])
    
    return (
        <div className="mr-tp pg-text">
        <Container>
          { userData &&   <h1>{`Welcome ${userData.name}  ${userData.lastname}`}</h1>}
          <div>
              <Button variant="danger"
              onClick={handleClick}
              >Logout</Button>
          </div>
        </Container>
        </div>
    )
}


export default Home