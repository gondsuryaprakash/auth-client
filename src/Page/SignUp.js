import { useState } from 'react';
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';

function SignUp() {

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const  history = useNavigate();

  async function registerUser(e){
    e.preventDefault();
    const req =await fetch('/api/register', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
        lastname,
        email,
        password
      })
    })
    const data =await req.json()

    if(data.status === 'ok') {        
        history('/login')
    }

  }
  return (

    <div className="mr-tp">
    <Container>
      <h1>SignUp</h1>
      <Form onSubmit={registerUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}

          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}

          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  <br/>
      <div>
          <h6>
            Already User Please Login <Link to="/login"> Login </Link>
          </h6>
        </div>
    </Container>
  </div>
    
  )
}

export default SignUp;
