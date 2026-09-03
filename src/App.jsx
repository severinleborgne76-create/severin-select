import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import JadranTuna from "./pages/JadranTuna";
import Grenoucerie from "./pages/Grenoucerie";
import CrabeRoyal from "./pages/CrabeRoyal";
import { LangContext } from "./i18n/context";

export default function App() {
  const [lang, setLang] = useState("fr");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selection/jadran-tuna" element={<JadranTuna />} />
        <Route path="/selection/grenoucerie" element={<Grenoucerie />} />
        <Route path="/selection/crabe-royal" element={<CrabeRoyal />} />
      </Routes>
      <Footer />
    </LangContext.Provider>
  );
}
