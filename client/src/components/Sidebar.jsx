import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ isOpen = true }) {
  const location = useLocation();
  const resizerRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("sidebar-width");
    if (stored) {
      root.style.setProperty("--sidebar-width", stored);
    }

    const handleMouseDown = (e) => {
      e.preventDefault();
      const startX = e.clientX;
      const computed = getComputedStyle(root)
        .getPropertyValue("--sidebar-width")
        .trim();
      const startWidth = parseInt(computed.replace("px", ""), 10) || 280;

      const onMove = (ev) => {
        const delta = ev.clientX - startX;
        const next = Math.min(Math.max(startWidth + delta, 200), 420);
        const value = `${next}px`;
        root.style.setProperty("--sidebar-width", value);
      };

      const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
        const value = getComputedStyle(root)
          .getPropertyValue("--sidebar-width")
          .trim();
        localStorage.setItem("sidebar-width", value);
        resizerRef.current && resizerRef.current.classList.remove("active");
      };

      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
      resizerRef.current && resizerRef.current.classList.add("active");
    };

    const el = resizerRef.current;
    el && el.addEventListener("mousedown", handleMouseDown);
    return () => el && el.removeEventListener("mousedown", handleMouseDown);
  }, []);

  const navItems = [
    { path: "/", label: "Dashboard", icon: "📊" },
    { path: "/onboarding-buyer", label: "Onboarding", icon: "📝" },
    { path: "/onboarding-seller", label: "Seller Onboarding", icon: "👤" },
    { path: "/acquisition", label: "Acquisition", icon: "📈" },
    {
      path: "/acquisition-workflow",
      label: "Acquisition Workflow",
      icon: "🔄",
    },
    { path: "/profile", label: "Profile", icon: "⚙️" },
  ];

  const bottomItems = [
    { path: "/settings", label: "Settings", icon: "🔧" },
    { path: "/legal", label: "Legal", icon: "📄" },
    { path: "/support", label: "Support", icon: "❓" },
  ];

  return (
    <>
      <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : "closed"}`}>
        {/* header removed per request */}

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-divider"></div>

        <nav className="sidebar-nav">
          {bottomItems.map((item) => (
            <Link key={item.path} to={item.path} className="sidebar-link">
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      {/* Drag handle */}
      <div ref={resizerRef} className="sidebar-resizer" />
    </>
  );
}
