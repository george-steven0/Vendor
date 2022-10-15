import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/landingPage";
import Home from "./pages/home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          {/* <Route path='/' exact element={<LandingPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
