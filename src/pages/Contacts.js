import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  Paper,
} from "@mui/material";
import {
  Email,
  Phone,
  Instagram,
  Facebook,
  Language,
} from "@mui/icons-material";

export default function Contacts() {
  return (
    <Box
      sx={{
        py: 8, // padding-top y padding-bottom
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2"
          component="h1" gutterBottom align="left"
          color="rgba(37, 37, 37, 0.6)"
        >
          Contáctanos
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Estamos aquí para ayudarte. <br />Ponte en contacto con nosotros a través de
          nuestros canales de comunicación.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
              <Email color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Correo Electrónico
              </Typography>
              <Typography variant="body1">
                <Link
                  href="mailto:pizarrasibericas@gmail.com"
                  color="inherit"
                  underline="hover"
                >
                  pizarrasibericas@gmail.com
                </Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
              <Phone color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Teléfono
              </Typography>
              <Typography variant="body1">
                +56 (9) 9052-6263
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
              <Language color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Página Web
              </Typography>
              <Typography variant="body1">
                <Link
                  href="http://www.pizarrasibericas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                >
                  www.pizarrasibericas.com
                </Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
              <Instagram color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Instagram
              </Typography>
              <Typography variant="body1">
                <Link
                  href="https://www.instagram.com/pizarrasibericas"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                >
                  @pizarrasibericas
                </Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
              <Facebook color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Facebook
              </Typography>
              <Typography variant="body1">
                <Link
                  href="https://www.facebook.com/pizarrasibericas"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                >
                  pizarrasibericas
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}