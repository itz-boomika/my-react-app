import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1>🌟 User Directory</h1>

      {loading ? (
        <h2>Loading Data...</h2>
      ) : (
        <div className="cards">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <div className="avatar">
                {user.name.charAt(0)}
              </div>

              <h2>{user.name}</h2>
              <p>📧 {user.email}</p>
              <p>📞 {user.phone}</p>
              <p>🌐 {user.website}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;