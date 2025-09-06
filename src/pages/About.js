import React from "react";
import { Container, Typography, Box, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { CheckCircleOutline, Construction } from "@mui/icons-material"; // Íconos de MUI

export default function About() {
  return (
    <Box
      sx={{
        //  bgcolor: "#1a1a1a", // Fondo oscuro similar al HeroBanner
        color: "white", // Letras blancas por defecto
        py: 8
      }}
    >
      <Container maxWidth="md">
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        align="center"
        sx={{
          fontWeight: "bold",
          textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          position: "relative",
          mt: -6, // mueve el título hacia arriba
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            bottom: -8,
            transform: "translateX(-50%)",
            width: "60%",
            height: "4px",
            borderRadius: "2px",
            background: "linear-gradient(90deg, #8F817E, #C0B8B5)",
            animation: "underlineGrow 1.5s ease forwards",
          },
          "@keyframes underlineGrow": {
            from: { width: "0%" },
            to: { width: "60%" },
          },
        }}
      >
        Sobre Nosotros
      </Typography>
      <Typography
        variant="h6"
        component="p"
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Somos especialistas en la <b>venta</b> e <b>instalación profesional</b> de 
        <b> TEJAS DE PIEDRA PIZARRA</b>. Ofrecemos también servicios de 
        <b> mantención y restauración</b>, asegurando que cada proyecto mantenga 
        su belleza, durabilidad y resistencia a lo largo del tiempo.
      </Typography>
        <Grid container spacing={4} alignItems="center">
          {/* Sección de Venta */}
          <Grid sx={{ xs:12, md:6}}>
            <Box
              sx={{
                p: 3,
                border: "1px solid #444",
                borderRadius: 4,
                bgcolor: "rgba(0, 0, 0, 0.6)", // Fondo más claro que el principal
                boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
              }}
            >
              <Typography variant="h4" component="h3" gutterBottom>
                Nuestra Oferta
              </Typography>
              <Typography variant="body1" paragraph>
                Nos especializamos en la venta de una amplia gama de materiales de piedra natural de alta calidad. Nuestro catálogo incluye:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline sx={{ color: "#4caf50" }} />
                  </ListItemIcon>
                  <ListItemText  
                    primary={
                      <Typography sx={{ color: "white", fontWeight: "bold" }}>
                        Venta de <b>TEJAS DE PIEDRA PIZARRA</b>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline sx={{ color: "#4caf50" }} />
                  </ListItemIcon>
                  <ListItemText primary="Mármoles y revestimientos complementarios" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline sx={{ color: "#4caf50" }} />
                  </ListItemIcon>
                  <ListItemText primary="Pórfido y piedras naturales variadas" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline sx={{ color: "#4caf50" }} />
                  </ListItemIcon>
                  <ListItemText primary="Accesorios y acabados para cubiertas de piedra" />
                </ListItem>
              </List>
              <Typography variant="body2" color="gray.400">
                Nuestra especialidad son las <b>TEJAS DE PIEDRA PIZARRA</b>, seleccionadas cuidadosamente 
                para garantizar resistencia, durabilidad y belleza natural en cada proyecto.
              </Typography>
            </Box>
          </Grid>

          {/* Sección de Servicios */}
          <Grid sx={{ xs:12, md:6}}>
            <Box
              sx={{
                p: 3,
                border: "1px solid #444",
                borderRadius: 4,
                bgcolor: "rgba(0, 0, 0, 0.6)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.5)"
              }}
            >
              <Typography variant="h4" component="h3" gutterBottom>
                Servicios Profesionales
              </Typography>
              <Typography variant="body1" paragraph>
                Más allá de la venta, ofrecemos un servicio completo de instalación profesional. Nuestro equipo de expertos está capacitado para asegurar:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <Construction sx={{ color: "#ff9800" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography sx={{ color: "white", fontWeight: "bold" }}>
                        Mantención y reparación de <b>TEJAS DE PIEDRA PIZARRA</b>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Construction sx={{ color: "#ff9800" }} />
                  </ListItemIcon>
                  <ListItemText primary="Instalaciones precisas y seguras" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Construction sx={{ color: "#ff9800" }} />
                  </ListItemIcon>
                  <ListItemText primary="Acabados de alta calidad en cubiertas y fachadas" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Construction sx={{ color: "#ff9800" }} />
                  </ListItemIcon>
                  <ListItemText primary="Asesoramiento técnico especializado en piedra natural" />
                </ListItem>
              </List>
              <Typography variant="body2" color="gray.400">
                Nuestro enfoque está en la <b>Venta e Instalación de TEJAS DE PIEDRA PIZARRA</b>, 
                pero también ofrecemos mantención especializada para que cada cubierta conserve su 
                elegancia y resistencia a lo largo del tiempo.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
