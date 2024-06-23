
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 



export default function Tablecomponents() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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

  const handleEdit = (userId) => {
    navigate(`/update/${userId}`);
  };
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/delete/${userId}`);
     
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };



  return (
    <div className="table-content">
       <div className='d-flex justify-content-between align-items-center p-2'>
          <h5 className='mt-3 mb-3'>Manage Employee Data</h5>
          <button onClick={() => navigate("/form")} className='btn btn-sm btn-primary'>Add New</button>
        </div>
   
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
      {data.users?.map((elem, index) => (
                <tr key={elem._id}>
                  <td>{index + 1}</td>
                  <td>{elem.username}</td>
                  <td>{elem.email}</td>
                  <td>{elem.NIC}</td>
                  <td>{elem.Phone}</td>
                  <td>{elem.position}</td>
                  <td>
              <button className='btn btn-sm btn-success me-2'  onClick={() => handleEdit(elem._id)}>Edit</button>
              <button className='btn btn-sm btn-danger' onClick={() => handleDelete(elem._id)}>Delete</button>
            </td>
                </tr>
              ))
            }
        
      </tbody>
    </Table>
  </div>
  )
}
