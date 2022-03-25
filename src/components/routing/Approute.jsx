// Importing all diff components that have their own page or that are global.

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "../global/Header";
import Home from "../global/Home";
import Footer from "../global/Footer";

//routing all the imported components and also external page links
function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <div>
                  <p>404 NOT FOUND!</p>
              </div>
            }
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default AppRoute;
