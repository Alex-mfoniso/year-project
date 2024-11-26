import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Menu</h2>
      <nav style={styles.nav}>
        <NavLink to="/" style={styles.link} activeStyle={styles.activeLink}>
          Home
        </NavLink>
        <NavLink to="/settings" style={styles.link} activeStyle={styles.activeLink}>
          Settings
        </NavLink>
        <NavLink to="/calendar" style={styles.link} activeStyle={styles.activeLink}>
          Calendar
        </NavLink>
        <NavLink to="/schedule" style={styles.link} activeStyle={styles.activeLink}>
          Schedule
        </NavLink>
      </nav>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "250px",
    height: "100vh",
    backgroundColor: "var(--card-bg)",
    color: "var(--card-text)",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    position: "fixed",
  },
  title: {
    marginBottom: "20px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
  },
  link: {
    textDecoration: "none",
    color: "var(--card-text)",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
  },
  activeLink: {
    backgroundColor: "var(--card-border)",
  },
};

export default Sidebar;
