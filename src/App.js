import React from "react";
import { Routes, Route } from "react-router-dom";
import AllEvents from "./pages/AllEvents.js";
import NewEvent from "./pages/NewEvent.js";
import FavoritesEvents from "./pages/FavoritesEvents.js";
import MainNav from "./components/layout/MainNav.js";

function App() {
  return (
    <div>
      <MainNav/>
      <Routes>
        <Route path="/" element={<AllEvents/>}>
        </Route>
        <Route path="/new-event" element={<NewEvent/>}>
        </Route>
        <Route path="/favorites" element={<FavoritesEvents/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
