import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ navigation }) {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="bg-dark text-white sidebar p-2">
      <Nav className="flex-column">
        <img
          src="https://cdn.pixabay.com/photo/2019/11/03/23/28/black-businessman-4599849_640.jpg"
          alt="Profile"
          className="profile mb-4 mt-4"
        />
        <h3 className="b text-uppercase fs-5 text-center">Admin Board</h3>
        <hr />

        <Nav.Item className="fs-5 mt-2 mb-2 nav__item" onClick={() => handleNavigation('/')}>
          <p className="nav_item">Dashboard</p>
        </Nav.Item>

        <Nav.Item className="fs-5 mt-2 mb-2 nav__item" onClick={() => handleNavigation('/table')}>
          <p className="nav_item">Manage</p>
        </Nav.Item>

       
      </Nav>
    </div>
  );
}
