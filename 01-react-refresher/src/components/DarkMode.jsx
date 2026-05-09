import { useState } from "react";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const onToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: darkMode ? "black" : "white",
      }}
    >
      <button onClick={onToggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default DarkMode;
