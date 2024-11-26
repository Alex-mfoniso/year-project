import { useState } from "react";

export default function HabitTracker() {
  const [habits, setHabits] = useState([
    { name: "Exercise", completed: false },
    { name: "Drink Water", completed: false },
    { name: "Read", completed: false },
  ]);
  const [newHabit, setNewHabit] = useState("");

  const toggleHabit = (index) => {
    setHabits((prev) =>
      prev.map((habit, i) =>
        i === index ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const deleteHabit = (index) => {
    setHabits((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddHabit = () => {
    if (newHabit.trim() === "") return;
    setHabits((prev) => [
      ...prev,
      { name: newHabit, completed: false },
    ]);
    setNewHabit(""); // Clear input field
  };

  // Calculate progress
  const completedHabits = habits.filter(habit => habit.completed).length;
  const progress = (completedHabits / habits.length) * 100;

  return (
    <div style={styles.card}>
    
   
      <h2>Daily Habit Tracker</h2>
      <div>
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Add new habit"
          style={styles.input}
        />
        <button onClick={handleAddHabit} style={styles.addButton}>Add Habit</button>
      </div>
      <ul>
        {habits.map((habit, index) => (
          <li key={index} style={styles.listItem}>
            <span>{habit.name}</span>
            <button onClick={() => toggleHabit(index)} style={styles.toggleButton}>
              {habit.completed ? "Undo" : "Done"}
            </button>
            <button onClick={() => deleteHabit(index)} style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div style={styles.progressContainer}>
        <div
          style={{
            ...styles.progressBar,
            width: `${progress}%`, // Set width based on progress
          }}
        ></div>
      </div>
      <p>Progress: {progress.toFixed(0)}%</p>
    
    </div>
  
  );
}

const styles = {
  card: {
    padding: "20px",
    margin: "10px",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
  },
  toggleButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "3px",
  },
  deleteButton: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "3px",
  },
  progressContainer: {
    width: "100%",
    height: "20px",
    backgroundColor: "#e0e0e0",
    borderRadius: "10px",
    marginTop: "20px",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#4CAF50",
    transition: "width 0.3s ease-in-out",
  },
  input: {
    padding: "8px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  addButton: {
    padding: "8px 15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
  
};
