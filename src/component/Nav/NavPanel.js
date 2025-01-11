import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavPanel.scss";

const NavPanel = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={`nav-panel ${menuOpen ? "open" : ""}`}>
      {/* Лого хэсэг */}
      <div className="logo-container">
        <div className="logo">
        <img
              src={process.env.PUBLIC_URL + "/image/logo.png"}
              alt="Logo"
              className="logo-img"
            /> 
        </div>
      </div>

      {/* Меню */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" className="menu-item active">
            <span className="icon">
             <img
              src={process.env.PUBLIC_URL + "/image/home.png"}
              alt="Logo"
              className="logo-img"
            /> </span> Нүүр
          </Link>
        </li>
        <li>
          <Link to="/search" className="menu-item">
            <span className="icon">
              <img
              src={process.env.PUBLIC_URL + "/image/search.png"}
              alt="Logo"
              className="logo-img"
            />  
            </span> Хайх
          </Link>
        </li>
        <h4>Миний сан</h4>
        <li>
          <Link to="/recently-played" className="menu-item">
            <span className="icon">
             <img
              src={process.env.PUBLIC_URL + "/image/Recent.png"}
              alt="Logo"
              className="logo-img"
            /> </span> Сүүлд сонссон
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="menu-item">
            <span className="icon"> 
            <img
              src={process.env.PUBLIC_URL + "/image/fav.png"}
              alt="Logo"
              className="logo-img"
            /> </span> Дуртай
          </Link>
        </li>
        <li>
          <Link to="/mix" className="menu-item">
            <span className="icon">
            <img
              src={process.env.PUBLIC_URL + "/image/plus-circle.png"}
              alt="Logo"
              className="logo-img"
            /> 
            </span> Микс үүсгэх
          </Link>
        </li>
        <div>
          <hr />
        </div>
        <li>
          <Link to="/playlist" className="menu-item">
            <span className="icon">
            <img
              src={process.env.PUBLIC_URL + "/image/mylistimg.png"}
              alt="Logo"
              className="logo-img"
            /> 
            </span> Муугүй лист
          </Link>
        </li>
        <li>
          <Link to="/beautiful-songs" className="menu-item">
            <span className="icon">
            <img
              src={process.env.PUBLIC_URL + "/image/listimg.png"}
              alt="Logo"
              className="logo-img"
            /> 
            </span> Гоё дуунууд
          </Link>
        </li>
      </ul>

      {/* Burger menu */}
      <div className="burger-menu" onClick={toggleMenu}>
        <span className="burger-icon">☰</span>
      </div>
      {menuOpen && (
        <div className="close-menu" onClick={toggleMenu}>
          <span className="close-icon">❌</span>
        </div>
      )}
    </nav>
  );
};

export default NavPanel;
