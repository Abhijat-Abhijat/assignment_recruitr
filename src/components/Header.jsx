// import React from 'react'
import '../assets/styles/Header.scss'
// import { RxDashboard } from 'react-icons'
import { RxDashboard } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineFileSearch } from "react-icons/ai";

import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { VscBellDot } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import pp from "../assets/images/profilepic.png"
function Header() {
  return (
    <div className="container_head">
      <div className="wrapper">
        <div className="logo">
          <h1>Recruitr</h1>
          <p>Your gatewayto success!</p>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Search for jobs" />
          <button>
            <AiOutlineSearch />
          </button>
        </div>
        <div className="icon">
          <a href="">
            <RxDashboard /> Dashboard
          </a>
        </div>
        <div className="icon">
          <a href="">
            <AiOutlineFileSearch /> Find Jobs
          </a>
        </div>
        <div className="icon">
          <a href="">
            <BsCheck2Circle /> Applied Jobs
          </a>
        </div>

        <div className="icon_container">
          <div className="icon">
            <a href="">
              <AiOutlineMessage />
            </a>
          </div>
          <div className="icon">
            <a href="">
              <VscBellDot />
            </a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            <img src={pp} alt="" />
            <p>
              Robin <IoMdArrowDropdown />
            </p>
          </button>
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Update Job Preference</a>
            <a href="#">Update Documents</a>
            <a href="">Hiring Process Detail</a>
            <a href="">Subscription Details</a>
            <a href="">Refer to Friends</a>
            <a href="">Log Out</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;