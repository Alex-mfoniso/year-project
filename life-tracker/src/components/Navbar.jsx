import React from "react";

export default function Navbar({ theme, themes, changeTheme }) {
  return (
    <nav style={styles.navbar}>
      <h1>My Productivity App</h1>
      <select
        value={theme}
        onChange={(e) => changeTheme(e.target.value)}
        style={styles.dropdown}
      >
        {themes.map((themeOption) => (
          <option key={themeOption} value={themeOption}>
            {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
          </option>
        ))}
      </select>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "var(--card-bg)",
    color: "var(--card-text)",
    borderBottom: "1px solid var(--card-border)",
  },
  dropdown: {
    padding: "5px 10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid var(--card-border)",
  },
};
