import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateComponents() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [NIC, setNIC] = useState('');
  const [Phone, setPhone] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`http://localhost:5000/api/getUser/${userId}`);
        const user = response.data;
        setUsername(user.username);
        setEmail(user.email);
        setNIC(user.NIC);
        setPhone(user.Phone);
        setPosition(user.position);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }

    fetchUser();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = {
        username: username,
        email: email,
        NIC: NIC,
        Phone: Phone,
        position: position,
      };

      await axios.put(`http://localhost:5000/api/update/${userId}`, updatedUser);
      
      alert("updated sucessful");
      navigate('/table');

    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <>
      <div className="dashboard">
        <h1>Update Employee</h1>
      </div>
      <div className="form-content">
        <h1>Reset Details</h1>
        <Form onSubmit={handleSubmit}>
          <div className='form-group'>
            <Form.Group controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}
