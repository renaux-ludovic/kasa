import React from "react";
import { Routes, Route, useRouteError } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Accomodation from "./components/Pages/Accomodation";
import Error404 from "./components/Pages/404";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import AccomodationsData from "../src/data/logements.json";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/accomodation/:id"
            element={<Accomodation accomodationsData={AccomodationsData} />}
          />

          <Route
            path="/*"
            element={<Error404 />}
            errorElement={<ErrorBoundary />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  return 
}

export default App;
