import Navbar from "./components/Navbar";
import HabitTracker from "./components/HabitTracker";
import GoalTracker from "./components/GoalTracker";
import QuotesWidget from "./components/QuotesWidget";

export default function App() {
  return (
    <div>
      <Navbar />
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
