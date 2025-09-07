import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  Paper,
  TextField,
  Button,
  MenuItem,
  Modal,
} from "@mui/material";
import { Email, Phone, Instagram, Language } from "@mui/icons-material";

const type_query = [
  { value: "teja de piedra pizarra", label: "Teja de piedra pizarra" },
  { value: "marmol", label: "Marmol" },
  { value: "adoquin", label: "Adoquin" },
  { value: "cuarzo", label: "Cuarzo" },
  { value: "porfido", label: "Profido" },
  { value: "servicios", label: "Servicios" },
];

export default function Contacts() {
  const [open, setOpen] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // Convertir FormData en un objeto normal
  const formObj = Object.fromEntries(formData.entries());

  // Construir payload con el subject personalizado
  const data = {
    ...formObj,
    "form-name": "contact", // obligatorio para Netlify
    subject: `Nueva consulta: ${formObj.tipo_consulta} del cliente ${formObj.name}`,
  };

  const encodedData = new URLSearchParams(data).toString();

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedData,
    });

    setOpen(true);
    form.reset();

    setTimeout(() => {
      setOpen(false);
    }, 5000);
  } catch (error) {
    alert("Hubo un error al enviar el formulario");
  }
};



  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Título */}
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          color="white"
          sx={{
            fontWeight: "bold",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            position: "relative",
            mt: -6,
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
          Contáctanos
        </Typography>

        {/* Subtítulo */}
        <Typography
          variant="h6"
          component="p"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Estamos aquí para ayudarte. <br />
          Ponte en contacto con nosotros a través de nuestros canales de comunicación.
        </Typography>

        {/* Tarjetas de contacto */}
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
          <Grid sx={{ xs: 12, sm: 6, md: 4 }}>
            <Paper elevation={3} sx={{ p: 2, textAlign: "center", height:140 }}>
              <Email color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Correo Electrónico
              </Typography>
              <Typography variant="body1">
                <Link
                  href="mailto:pizarraiberica@gmail.com"
                  color="inherit"
                  underline="hover"
                >
                  pizarraiberica@gmail.com
                </Link>
              </Typography>
            </Paper>
          </Grid>

          <Grid sx={{ xs: 12, sm: 6, md: 4 }}>
            <Paper elevation={3} sx={{ p: 2, textAlign: "center", width:180 }}>
              <Phone color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Teléfono
              </Typography>
              <Typography variant="body1">
                +56 (9) 9052-6263 <br />
                +56 (9) 9338-6875
              </Typography>
            </Paper>
          </Grid>

          <Grid sx={{ xs: 12, sm: 6, md: 4 }}>
            <Paper elevation={3} sx={{ p: 2, textAlign: "center", height:140 }}>
              <Language color="primary" sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Página Web
              </Typography>
              <Typography variant="body1">
                <Link
                  href="http://www.pizarrasibericas.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                >
                  www.pizarrasibericas.cl
                </Link>
              </Typography>
            </Paper>
          </Grid>

          <Grid sx={{ xs: 12, sm: 6, md: 4 }}>
            <Paper elevation={3} sx={{ p: 2, textAlign: "center", height:140, width:180 }}>
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
        </Grid>

        {/* Formulario de contacto */}
        <Paper elevation={3} sx={{ p: 4 }}>
          <form
            name="contact"
            method="POST"
            netlify
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Necesario para Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            {/* Subject dinámico tomando el valor de tipo_consulta */}
           {/*  <input type="hidden" name="subject" value="Nueva consulta: %{name}" /> */}

            <Container container spacing={2}>
              <Grid sx={{ xs: 12, sm: 6, mb: 2 }}>
                <TextField label="Nombre" name="name" fullWidth required />
              </Grid>
              <Grid sx={{ xs: 12, sm: 6, mb: 2 }}>
                <TextField label="Email" name="email" type="email" fullWidth required />
              </Grid>
              <Grid sx={{ xs: 12, sm: 6, mb: 2 }}>
                <TextField label="Teléfono" name="cellphone" fullWidth />
              </Grid>
              <Grid sx={{ xs: 12, sm: 6, mb: 2 }}>
                <TextField label="Empresa" name="company" fullWidth />
              </Grid>

              <Grid sx={{ xs: 12, sm: 6, mb: 2 }}>
                <TextField select label="Tipo de consulta" name="tipo_consulta" fullWidth required>
                  {type_query.map((option) => (
                    <MenuItem key={option.value} value={option.value} >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid sx={{ xs: 12, sm: 6, mb: 2 }}>
                <TextField
                  label="Descripción de la consulta"
                  name="descripcion"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />
              </Grid>

              <Grid sx={{ xs: 12, sm: 6, mb: 2 }}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Enviar
                </Button>
              </Grid>
            </Container>
          </form>
        </Paper>

      </Container>

  {/* Modal de agradecimiento */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 3,
            p: 6,
            textAlign: "center",
            width: { xs: "80%", sm: "400px", md: "500px" }, // Más grande
          }}
        >
          <Typography variant="h5" gutterBottom>
            ¡Gracias por contactarnos!
          </Typography>
          <Typography variant="body1">
            Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
