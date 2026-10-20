import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Grenoucerie from "./pages/Grenoucerie";
import CrabeRoyal from "./pages/CrabeRoyal";
import OursinsNorvege from "./pages/OursinsNorvege";
import DraftSelection from "./pages/DraftSelection";
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
        <Route path="/selection/jadran-tuna" element={<Navigate to="/" replace />} />
        <Route path="/selection/grenoucerie" element={<Grenoucerie />} />
        <Route path="/selection/crabe-royal" element={<CrabeRoyal />} />
        <Route path="/selection/oursins-norvege" element={<OursinsNorvege />} />
        <Route path="/selection/saint-jacques-normandie" element={<DraftSelection slug="saint-jacques-normandie" />} />
        <Route path="/selection/araignee-normandie" element={<DraftSelection slug="araignee-normandie" />} />
        <Route path="/selection/couteaux-dzm" element={<DraftSelection slug="couteaux-dzm" />} />
      </Routes>
      <Footer />
    </LangContext.Provider>
  );
}
