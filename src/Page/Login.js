import { useState } from 'react';
import React from 'react';
import './page.css'
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function login(e) {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json();
    if (data.user) {
      alert("Logged In Successfully");
      window.location.href = '/'
    }
    else {
      alert("Please check userName and Password")
    }
  }

  return (
    <div className="mr-tp">
      <Container>
        <h1>Login</h1>
        <Form onSubmit={login}>
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
        <div>
          <h6>
            New Here Please <Link to="/signup"> SignUp </Link>
          </h6>
        </div>
      </Container>
    </div>
  )
}

export default SignUp;
