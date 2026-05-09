import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default App;
