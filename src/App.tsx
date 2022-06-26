import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className="App">
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    </div>
  );
}

export default App;
