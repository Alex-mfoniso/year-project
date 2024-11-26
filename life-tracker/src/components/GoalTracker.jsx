import { useState } from "react";

export default function GoalTracker() {
  const [goals, setGoals] = useState([
    {
      name: "Finish project",
      progress: 0,
      subGoals: [
        { name: "Write code", completed: false },
        { name: "Test project", completed: false },
      ],
    },
    {
      name: "Read a book",
      progress: 0,
      subGoals: [
        { name: "Read chapter 1", completed: false },
        { name: "Read chapter 2", completed: false },
      ],
    },
  ]);
  const [newGoal, setNewGoal] = useState("");
  const [newSubGoal, setNewSubGoal] = useState("");

  const handleAddGoal = () => {
    if (newGoal.trim() === "") return;
    setGoals((prev) => [
      ...prev,
      { name: newGoal, progress: 0, subGoals: [] },
    ]);
    setNewGoal(""); // Clear input field
  };

  const handleAddSubGoal = (goalIndex) => {
    if (newSubGoal.trim() === "") return;
    const updatedGoals = [...goals];
    updatedGoals[goalIndex].subGoals.push({ name: newSubGoal, completed: false });
    setGoals(updatedGoals);
    setNewSubGoal(""); // Clear sub-goal input
  };

  const toggleSubGoal = (goalIndex, subGoalIndex) => {
    const updatedGoals = [...goals];
    updatedGoals[goalIndex].subGoals[subGoalIndex].completed =
      !updatedGoals[goalIndex].subGoals[subGoalIndex].completed;

    // Update goal progress based on sub-goals completion
    const totalSubGoals = updatedGoals[goalIndex].subGoals.length;
    const completedSubGoals = updatedGoals[goalIndex].subGoals.filter(
      (subGoal) => subGoal.completed
    ).length;
    const progress = (completedSubGoals / totalSubGoals) * 100;

    updatedGoals[goalIndex].progress = progress;
    setGoals(updatedGoals);
  };

  const deleteGoal = (goalIndex) => {
    setGoals((prev) => prev.filter((_, i) => i !== goalIndex));
  };

  const deleteSubGoal = (goalIndex, subGoalIndex) => {
    const updatedGoals = [...goals];
    updatedGoals[goalIndex].subGoals = updatedGoals[goalIndex].subGoals.filter(
      (_, i) => i !== subGoalIndex
    );
    setGoals(updatedGoals);
  };

  return (
    <div style={styles.card}>
      <h2>Goal Tracker</h2>
      <div>
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder="Add new goal"
          style={styles.input}
        />
        <button onClick={handleAddGoal} style={styles.addButton}>Add Goal</button>
      </div>

      {goals.map((goal, goalIndex) => (
        <div key={goalIndex} style={styles.goalContainer}>
          <h3>{goal.name}</h3>
          <div style={styles.progressContainer}>
            <div
              style={{
                ...styles.progressBar,
                width: `${goal.progress}%`,
              }}
            ></div>
          </div>
          <p>Progress: {goal.progress.toFixed(0)}%</p>

          <button
            onClick={() => deleteGoal(goalIndex)}
            style={styles.deleteButton}>Delete Goal</button>

          <div>
            <input
              type="text"
              value={newSubGoal}
              onChange={(e) => setNewSubGoal(e.target.value)}
              placeholder="Add new sub-goal"
              style={styles.input}
            />
            <button
              onClick={() => handleAddSubGoal(goalIndex)}
              style={styles.addButton}>Add Sub-goal</button>
          </div>

          <ul>
            {goal.subGoals.map((subGoal, subGoalIndex) => (
              <li key={subGoalIndex} style={styles.listItem}>
                <span>{subGoal.name}</span>
                <button
                  onClick={() => toggleSubGoal(goalIndex, subGoalIndex)}
                  style={styles.toggleButton}>
                  {subGoal.completed ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => deleteSubGoal(goalIndex, subGoalIndex)}
                  style={styles.deleteButton}>
                  Delete Sub-goal
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
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
  goalContainer: {
    margin: "20px 0",
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
    marginTop: "10px",
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
  },
  
  // Responsive Styles
  "@media (max-width: 768px)": {
    card: {
      padding: "15px",
    },
    goalContainer: {
      margin: "15px 0",
    },
    input: {
      padding: "6px",
    },
    addButton: {
      padding: "6px 12px",
    },
    toggleButton: {
      padding: "4px 8px",
    },
    deleteButton: {
      padding: "4px 8px",
    },
    progressContainer: {
      height: "15px",
    },
  },

  "@media (max-width: 480px)": {
    card: {
      padding: "10px",
    },
    goalContainer: {
      margin: "10px 0",
    },
    input: {
      padding: "5px",
    },
    addButton: {
      padding: "5px 10px",
    },
    toggleButton: {
      padding: "4px 8px",
    },
    deleteButton: {
      padding: "4px 8px",
    },
    progressContainer: {
      height: "12px",
    },
  },
};
