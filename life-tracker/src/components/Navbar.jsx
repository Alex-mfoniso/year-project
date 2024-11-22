// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1>Life Tracker Dashboard</h1>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    textAlign: "center",
  },
};
