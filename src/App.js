import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import './styles/css/home.css';

//
import './App.css';
import Home from './pages/Home';
import Registrarse from './pages/Registrarse';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="">
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/registrarse" element={<Registrarse />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
