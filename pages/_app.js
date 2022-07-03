import { useState } from "react";
import Header from "../components/Header.tsx";
import data from "../data/data.json";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(true);
  const [invoices, setInvoices] = useState(data);

  return (
    <div className="main-wrapper mb-10">
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Component {...pageProps} invoices={invoices} />
    </div>
  );
}

export default MyApp;
