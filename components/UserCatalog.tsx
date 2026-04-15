import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
}

export default function UserCatalog(): React.ReactElement {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Server error");
      }
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError("Błąd pobierania użytkowników");
      console.log("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // value={input} => żeby na stronie było to samo co w stanie input
  return (
    <div>
      <input
        placeholder="Search user..."
        onChange={(e) => setInput(e.currentTarget.value)}
        value={input}
      />
      <button onClick={loadUsers}>Odśwież</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!isLoading && !error && (
        <ul>
          {users
            .filter((u) => u.name.includes(input.toLowerCase()))
            .map((u) => (
              <li key={u.id}>{u.name}</li>
            ))}
        </ul>
      )}
    </div>
  );
}
