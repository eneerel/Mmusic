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
          <img src="/image/logo.png" alt="Logo" />
        </div>
      </div>

      {/* Меню */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" className="menu-item active">
            <span className="icon">🏠</span> Нүүр
          </Link>
        </li>
        <li>
          <Link to="/search" className="menu-item">
            <span className="icon">🔍</span> Хайх
          </Link>
        </li>
        <h4>Миний сан</h4>
        <li>
          <Link to="/recently-played" className="menu-item">
            <span className="icon">🔄</span> Сүүлд сонссон
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="menu-item">
            <span className="icon">❤️</span> Дуртай
          </Link>
        </li>
        <li>
          <Link to="/mix" className="menu-item">
            <span className="icon">🎛</span> Микс үүсгэх
          </Link>
        </li>
        <div>
          <hr />
        </div>
        <li>
          <Link to="/playlist" className="menu-item">
            <span className="icon">🎵</span> Муугүй лист
          </Link>
        </li>
        <li>
          <Link to="/beautiful-songs" className="menu-item">
            <span className="icon">✨</span> Гоё дуунууд
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
