import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Pizarras Ibericas
        </Typography>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/about">Sobre Nosotros</Button>
        <Button color="inherit" component={Link} to="/contacts">Contactos</Button>
        <Button color="inherit" component={Link} to="/services">Servicios</Button>
        <Button color="inherit" component={Link} to="/materials">Materiales</Button>
      </Toolbar>
    </AppBar>
  );
}
