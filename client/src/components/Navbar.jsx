import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ onToggleSidebar }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <button
        aria-label="Toggle sidebar"
        className="pill navbar-toggle"
        onClick={onToggleSidebar}
      >
       <span>&#9776;</span>
 
      </button>
      <div className="navbar-container">
        <div className="navbar-brand">
          <img
            src="/money-transaction.png"
            alt="BizMatch Logo"
            className="navbar-logo"
          />
          <span className="brand-text">BizMatch</span>
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search deals, buyers..."
          />
        </div>

        <div className="nav-right">
          <div className="nav-icon">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>

          <div
            className="user-avatar-container"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <div className="user-avatar">H</div>
            {showMenu && (
              <div className="dropdown-menu">
                <Link to="/settings" className="dropdown-item">
                  Settings
                </Link>
                <Link to="/logout" className="dropdown-item">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
