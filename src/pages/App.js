import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Home from "./Home";
import Access from "./Access";
import News from "./News";
import useLocalStorage from 'use-local-storage'

function App(): JSX.Element {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");
  

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/access" element={<Access />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
}

export default App;
