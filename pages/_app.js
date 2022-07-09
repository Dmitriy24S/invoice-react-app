import { ThemeProvider } from "next-themes";
import { createContext, useEffect, useState } from "react";
import Header from "../components/Header.tsx";
import data from "../data/data.json";
import "../styles/globals.css";

export const AppContext = createContext({});

function MyApp({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(true);
  const [invoices, setInvoices] = useState(data);

  // Save theme to local storage
  useEffect(() => {
    if (
      // if saved dark theme in local storage or device prefers dark mode - set dark theme
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      setDarkTheme(true);
      localStorage.setItem("theme", "dark");
    } else {
      // else set light theme
      setDarkTheme(false);
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  return (
    <ThemeProvider attribute="class">
      <AppContext.Provider value={{ invoices, setInvoices }}>
        <div className="main-wrapper mb-10">
          <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Component {...pageProps} invoices={invoices} />
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
