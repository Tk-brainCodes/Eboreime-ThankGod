import { useState } from "react";
import "./App.css";

const a = {
  user: {
    id: 1,
    name: {
      firstName: "James",
      lastName: "Ibori",
    },
    location: {
      city: "Ikoyi",
      state: "Lagos",
      address: "One expensive house like that",
    },
  },
};

function App() {
  const [query, setQuery] = useState("");
  const [datas] = useState([a]);

  return (
    <div className="App">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        id="input"
      />
      <div className="result">
        {datas
          .filter(
            (data) =>
              (data.user.name.firstName.toString() === query) |
              (data.location.address.toString() === query)
          )
          .map((result, index) => (
            <div key={index} className="results">
              {result}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
