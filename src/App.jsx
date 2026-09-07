import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import JadranTuna from "./pages/JadranTuna";
import Grenoucerie from "./pages/Grenoucerie";
import CrabeRoyal from "./pages/CrabeRoyal";
import { LangContext } from "./i18n/context";

const Crm = lazy(() => import("./pages/Crm"));

export default function App() {
  const [lang, setLang] = useState("fr");
  const { pathname } = useLocation();
  const isCrm = pathname === "/crm" || pathname.startsWith("/crm/");

  if (isCrm) {
    return (
      <Suspense fallback={<div style={{ minHeight: "100vh", background: "#071923" }} />}>
        <Crm />
      </Suspense>
    );
  }

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
