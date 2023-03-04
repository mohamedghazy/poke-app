import React, { lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const MainLayout = lazy(() => import("./pages/MainLayout"));
const PokeList = lazy(() => import("./pages/PokeList"));
const NotMatch = lazy(() => import("./pages/NotMatch"));
const SinglePokemon = lazy(() => import("./pages/SinglePokemon"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PokeList />} />
        <Route path="pokemon/:id" element={<SinglePokemon />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
