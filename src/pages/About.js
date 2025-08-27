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
          Expertos en materiales y revestimientos de piedra natural con un servicio de instalación profesional.
        </Typography>

        <Grid container spacing={4} alignItems="center">
          {/* Sección de Venta */}
          <Grid item xs={12} md={6}>
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
                      <Typography sx={{ color: "white" }}>
                        <b>Piedra Pizarra</b>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline sx={{ color: "#4caf50" }} />
                  </ListItemIcon>
                  <ListItemText primary="Mármoles de diversos acabados" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline sx={{ color: "#4caf50" }} />
                  </ListItemIcon>
                  <ListItemText primary="Pórfido" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutline sx={{ color: "#4caf50" }} />
                  </ListItemIcon>
                  <ListItemText primary="Revestimientos de piedra en general" />
                </ListItem>
              </List>
              <Typography variant="body2" color="gray.400">
                Seleccionamos cada material para garantizar durabilidad, belleza y un acabado excepcional en cualquier proyecto.
              </Typography>
            </Box>
          </Grid>

          {/* Sección de Servicios */}
          <Grid item xs={12} md={6}>
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
                  <ListItemText primary="Instalaciones precisas y seguras" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Construction sx={{ color: "#ff9800" }} />
                  </ListItemIcon>
                  <ListItemText primary="Acabados de alta calidad" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Construction sx={{ color: "#ff9800" }} />
                  </ListItemIcon>
                  <ListItemText primary="Asesoramiento técnico y personalizado" />
                </ListItem>
              </List>
              <Typography variant="body2" color="gray.400">
                Confiamos en nuestro trabajo para dar vida a sus proyectos, garantizando resultados que superan las expectativas.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
