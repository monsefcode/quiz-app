import React from "react";
import { Suspense } from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import MainSection from "./MainSection";
import Classment from "./Classment";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <Routes>
      <Route path="/" element={<MainSection />} />
      <Route path="/classment" element={<Classment />} />
      <Route
        path="*"
        element={
          <h1 className="text-2xl font-bold text-center text-blue-900 ">
            404 Not Found
          </h1>
        }
      />
    </Routes>
  );
}

export default App;
