import { useState, useEffect } from "react";
import "./App.css";

interface Character {
  id: number;
  name: string;
  image: string;
}

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())

      .then((data) => {
        setCharacters(data.results);

        setLoading(false);
      })

      .catch((err) => setError(err));
  }, []);

  return (
    <div>
      <h1>Rick and Morty Characters</h1>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      <ul>
        {characters.map((char) => (
          <li key={char.id}>
            {char.name}
            <img src={char.image} className="my-animated-img"></img>
          </li>
        ))}
      </ul>
    </div>
  );
}
