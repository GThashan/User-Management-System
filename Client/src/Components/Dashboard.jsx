import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Sidebar from './Sidebar';

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchUsers = await axios.get('http://localhost:5000/api/getUser');
        const response = fetchUsers.data;
       
        setData(response);
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [data]);

  return (
    <>
   
      <div className="dashboard">
        <h1>Welcome to the Dashboard</h1>
      </div>
      <div className="table-content">
        <h3 className="mt-3 mb-3 fs-5">Employee Data</h3>
        <Table striped bordered hover variant="dark" className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>NIC</th>
              <th>Phone Number</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {data.users?.map((elem, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{elem.username}</td>
                  <td>{elem.email}</td>
                  <td>{elem.NIC}</td>
                  <td>{elem.Phone}</td>
                  <td>{elem.position}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </>
  );
}
