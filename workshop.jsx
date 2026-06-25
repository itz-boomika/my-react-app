import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [participants, setParticipants] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (name.trim() === "") {
      return;
    }

    const alreadyExists = participants.includes(name);

    if (alreadyExists) {
      setError("❌ Duplicate Registration Attempt!");
      setMessage("");

      setTimeout(() => {
        setError("");
      }, 3000);

      return;
    }

    setParticipants([...participants, name]);
    setMessage("✅ Registration Successful!");
    setError("");

    setName("");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="container">
      <h1 className="heading">
        🎓 Workshop Registration &confirmation App
      </h1>

      <p className="subtitle">
        Register for the workshop and view participants list
      </p>

      {message && <div className="success">{message}</div>}
      {error && <div className="error">{error}</div>}

      <div className="form-box">
        <h2>Register for Workshop</h2>

        <input
          type="text"
          placeholder="Enter Participant Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <button onClick={handleRegister}>
          Register Now
        </button>
      </div>

      <h2 className="list-heading">Participants List</h2>

      <div className="participants">
        {participants.map((person, index) => (
          <div className="participant-card" key={index}>
            👤 {person}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;