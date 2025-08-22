// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material"; // Importa Box de MUI
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import Materials from "./pages/Materials";
import backgroundImage from "./assets/fondo-marmoleado.png"; // Importa el fondo
import "./App.css";


function App() {
  return (
    <Router>
      <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`, // Fondo
        backgroundSize: "cover", // Ajusta al tamaño de la pantalla
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Efecto fijo
        backgroundPosition: "center",
        
        
        
        }}>
        <ResponsiveNavbar />
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/services" element={<Services />} />
            <Route path="/materials" element={<Materials />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;