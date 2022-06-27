import React, { useState } from "react";
import Header from "./components/Header";
import InvoiceList from "./components/InvoiceList";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className="App">
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <InvoiceList />
    </div>
  );
}

export default App;
