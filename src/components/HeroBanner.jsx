import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; 
import heroImage from "../assets/textura-pared-piedra-marron_1310085-64638.jpg";
import logo from "../assets/logo2.png";


export default function HeroBanner() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        //backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        p: 2,
      }}
    >

      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold", textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
      >
       
      Pizarras Ibéricas
      </Typography>

      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: 4,
          p: 3,
          maxWidth: 600,
          boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
        }}
      >
        <Typography
          variant="h5"
          component="p"
          sx={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
        >
          Venta de tejas de piedra, mármoles, pórfido y revestimientos de piedra en general, 
          con servicios profesionales de instalación.
        </Typography>
      </Box>

      {/* Botón que linkea a Servicios */}
      <Button
  variant="contained"
  sx={{
    px: 4,
    py: 1.5,
    mt: 4,
    color: "#fff",                 // color del texto
    backgroundColor: "#8F817E",    // color base
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#72675F",  // color al pasar el mouse
      transform: "translateY(-3px)",
      boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
    },
  }}
  component={Link}
  to="/services"
>
  Conoce nuestros productos
</Button>


    </Box>
  );
}
