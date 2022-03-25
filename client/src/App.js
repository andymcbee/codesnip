import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NavbarGlobal from "./components/NavbarGlobal";
import HomePage from "./Routes/HomePage";
import CategoriesPage from "./Routes/CategoriesPage";
import CategoryPage from "./Routes/CategoryPage";
import SingleItemPage from "./Routes/SingleItemPage";
import Sidebar from "./components/Sidebar";

function App() {
  const [showSidebar, setShowSideBar] = useState(true);

  function toggleSidebar() {
    setShowSideBar(!showSidebar);
  }

  return (
    <BrowserRouter>
      <div className="allContent">
        <aside className="sidebarContainer">
          <Sidebar visible={showSidebar} toggleSidebar={toggleSidebar} />
        </aside>

        <div className="site-container">
          <header>
            <NavbarGlobal />
          </header>
          <main>
            <Routes>
              <Route path="/categories" element={<CategoriesPage />} />
              <Route
                path="/category/:categorySlug"
                element={<CategoryPage />}
              />
              <Route path="/" element={<HomePage />} />
              <Route
                path="/:categorySlug/:itemSlug"
                element={<SingleItemPage />}
              />
            </Routes>
          </main>
          <footer>
            <div className="text-center">All Rights Reserved</div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
