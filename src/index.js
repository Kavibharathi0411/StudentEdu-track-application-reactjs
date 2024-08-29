import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Logo from './images/logo (1).png';
import { IoPersonSharp } from "react-icons/io5";
import { FaFile } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { SiCodeblocks } from "react-icons/si";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaPerson } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaHospitalAlt } from "react-icons/fa";
<FaPerson />
function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo" />
        <li className='font'><IoPersonSharp /></li>
        <div className="navbar-item active">Student Management</div>
        <li className='font'><FaFile /></li>
        <div className="navbar-item">Financial Management</div>
        <li className='font'><IoSettings /></li>
        <div className="navbar-item">Quality Control</div>
        <li className='font'><SiCodeblocks /></li>
        <div className="navbar-item">Report Delivery</div>

      </nav>

      <div className="main-content">
        <div className="cards">
          <div className="card red-card">
          <li className='font1'><IoPersonSharp /></li>
            <span>8</span>
            <p>Regular Students</p>
          </div>
          <div className="card purple-card">
          <li className='font1'><BsPersonFillAdd /></li>
            <span>13</span>
            <p>Remedial Students</p>
          </div>
          <div className="card green-card">
          <li className='font1'><FaPerson /></li>
            <span>00</span>
            <p>In Paid Clubs</p>
          </div>
        </div>
        <div className="menu-grid">
          <div className="menu-item1">
            <div className='font1'><IoPersonSharp /><br></br></div>
          Regular Enrollment</div>
          <div className="menu-item2">
            <div className='font1'><FaBook /><br></br></div>
            Remedial Enrollment</div>
          <div className="menu-item3">
          <div className='font1'><FaPerson /><br></br></div>
            Club Management</div>
          <div className="menu-item4">
          <div className='font1'><FaBookOpen /><br></br></div>
            Classroom Management</div>
          <div className="menu-item5">
          <div className='font1'><IoMail /><br></br></div>
            SMS / EMAIL</div>
          <div className="menu-item6">
          <div className='font1'><FaFile /><br></br></div>
            Attendance</div>
          <div className="menu-item7">
          <div className='font1'><FaHospitalAlt /><br></br></div>
            Clinic</div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById("root"));
