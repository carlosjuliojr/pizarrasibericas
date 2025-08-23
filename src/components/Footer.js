import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  Link,
  Divider, // Importamos el componente Divider
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Email,
  Phone,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        p: 6,
        mt: 'auto',
        backgroundColor: "#2e2e2e",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" textAlign="center">
          {/* Columna 1: Título y redes sociales */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Pizarras Ibéricas
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Venta y servicio de instalación de materiales de piedra natural.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                href="https://www.facebook.com/pizarrasibericas"
                target="_blank"
                rel="noopener"
                color="inherit"
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/pizarrasibericas"
                target="_blank"
                rel="noopener"
                color="inherit"
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

          {/* Columna 2: Contacto */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contactos
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <Email sx={{ verticalAlign: 'middle', mr: 1 }} />
              <Link href="mailto:pizarrasibericas@gmail.com" color="inherit" underline="hover">
                pizarrasibericas@gmail.com
              </Link>
            </Typography>
            <Typography variant="body2">
              <Phone sx={{ verticalAlign: 'middle', mr: 1 }} />
              +56 (9) 9052-6263
            </Typography>
          </Grid>

          {/* Columna 3: Espacio extra o enlaces */}
          {/* Si no la usas, puedes quitarla */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Navegación
            </Typography>
            <Box>
              <Link href="/products" color="inherit" underline="hover" sx={{ display: 'block' }}>
                Productos
              </Link>
              <Link href="/services" color="inherit" underline="hover" sx={{ display: 'block' }}>
                Servicios
              </Link>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
        
        {/* Fila separada para el copyright */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="white">
            © {new Date().getFullYear()} Pizarras Ibéricas. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}