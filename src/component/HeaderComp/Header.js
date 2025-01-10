import React, { useState } from "react";
import "./Header.scss";
import NavPanel from "../Nav/NavPanel";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);;
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <div className="logo">
            <img
              src={process.env.PUBLIC_URL + "/image/logo.png"}
              alt="Logo"
              className="logo-img"
            />
          </div>
        </div>
        <div className="header-logo">
          <img
            src={process.env.PUBLIC_URL + "/image/Toriinduulalbtn.png"}
            alt="Toriinduulal Logo"
            className="header-img"
          />
        </div>
        <button className="notif-btn">
          <img
            src={process.env.PUBLIC_URL + "/image/notifbtn.png"}
            alt="Notification Button"
            className="notif-icon"
          />
        </button>

        <div className="user-profile">
          <div className="profile-info" onClick={toggleDropdown}>
            <img
              src={process.env.PUBLIC_URL + "/image/profile.png"}
              alt="User Profile"
              className="profile-icon"
            />
            <span className="user-label">Хэрэглэгч</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item">Нэвтрэх</button>
              <button className="dropdown-item">Гарах</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
