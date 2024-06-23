import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import TableComponent from './Components/Tablecomponents'
import FormComponent from './Components/Formcomponents'
import Sidebar from './Components/Sidebar'
import './App.css';
import UpdateComponents from './Components/UpdateComponents';




function App() {


  return (
    
    <Router>
    <div>
      <Sidebar />
      <div className="content p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/table" element={<TableComponent/>} />
          <Route path="/form" element={<FormComponent />} />
          <Route path="/update/:userId" element={<UpdateComponents/>} />
        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App
