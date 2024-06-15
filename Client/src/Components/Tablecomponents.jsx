import React from 'react';
import { Table } from 'react-bootstrap';



export default function Tablecomponents() {
  const users = [ 
    { id :"1",name: 'John Doe', email: 'john@example.com' ,NIC:"20023801925",Phone:"076761760",postion:"Employee"},
    { id :"2", name: 'John Doe', email: 'john@example.com' ,NIC:"20023801925",Phone:"076761760",postion:"Employee"},
    { id :"3", name: 'John Doe', email: 'john@example.com' ,NIC:"20023801925",Phone:"076761760",postion:"Employee"},
    { id :"4", name: 'John Doe', email: 'john@example.com' ,NIC:"20023801925",Phone:"076761760",postion:"Employee"},
    { id :"5", name: 'John Doe', email: 'john@example.com' ,NIC:"20023801925",Phone:"076761760",postion:"Employee"},

   


  ];
  return (
    <div className="table-content">
    <h3 className='mt-3 mb-3'>Manage Employee data</h3>
    <Table striped bordered hover variant="dark" className='table'>
      <thead>
        <tr>
        <th>ID</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>NIC</th>
          <th>Phone Number</th>
          <th>Position</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.NIC}</td>
            <td>{user.Phone}</td>
            <td>{user.postion}</td>
            <td>
              <button className='btn btn-success me-2'>Edit</button>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
  )
}
