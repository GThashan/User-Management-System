import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import axios from 'axios';

export default function Formcomponents() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [NIC, setNIC] = useState("");
  const [Phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  // const formData = { username, email, NIC, Phone, position };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/createUser',{
        username,
        email,
        NIC,
        Phone,
        position
      });
      alert("record");
      console.log("Server response:", response); 
    } catch (error) {
      console.log("Error occurred:", error);
      if (error.response) {
        console.log("Server responded with status code", error.response.status);
        console.log("Response data:", error.response.data);
      }
      alert("An error occurred while submitting the form. Please try again.");
    }
  };
  return (
    <>
      <div className="dashboard">
        <h1>Add New Employee</h1>
      </div>
      <div className="form-content">
        <h1>New Employee</h1>
        <Form onSubmit={handleSubmit}>
          <div className='form-group'>
            <Form.Group controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formNIC">
              <Form.Label>NIC number</Form.Label>
              <Form.Control
                type="text"
                value={NIC}
                onChange={(e) => setNIC(e.target.value)}
                placeholder="Enter NIC number"
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Mobile number"
              />
            </Form.Group>

            <Form.Group controlId="formPosition">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Enter Position"
              />
            </Form.Group>
          </div>

          <Button variant="primary" type="submit" className='mt-5 p-2'>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
