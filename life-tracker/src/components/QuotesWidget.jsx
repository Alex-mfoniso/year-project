import React, { useEffect, useState } from "react";

export default function MotivationalQuotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    setLoading(true);
    setError(""); // Clear any previous errors

    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (err) {
      setError("Failed to fetch quote. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={styles.container}>
      {loading ? (
        <p>Loading quote...</p>
      ) : error ? (
        <p style={styles.error}>{error}</p>
      ) : (
        <blockquote style={styles.quote}>
          "{quote}"
          <footer style={styles.author}>- {author}</footer>
        </blockquote>
      )}
      <button onClick={fetchQuote} style={styles.button}>
        New Quote
      </button>
    </div>
  );
}

const styles = {
  
  container: {
    textAlign: "center",
    margin: "20px",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  quote: {
    fontSize: "1.5em",
    margin: "20px 0",
    color: "#333",
    fontStyle: "italic",
  },
  author: {
    fontSize: "1em",
    color: "#555",
    marginTop: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em",
  },
  error: {
    color: "red",
    fontSize: "1em",
  },
};
