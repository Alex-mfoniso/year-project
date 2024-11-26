import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HabitTracker from "./components/HabitTracker";
import GoalTracker from "./components/GoalTracker";
import QuotesWidget from "./components/QuotesWidget";
import "./styles.css";

export default function App() {
  const themes = ["light", "dark", "blue", "green", "pink"];
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Update theme when changed
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div>
      <Navbar theme={theme} themes={themes} changeTheme={changeTheme} />
      <div style={styles.container}>
        <HabitTracker />
        <GoalTracker />
        <QuotesWidget />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
};
