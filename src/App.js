import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Registrarse from './pages/Registrarse';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/registrarse" element={<Registrarse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
