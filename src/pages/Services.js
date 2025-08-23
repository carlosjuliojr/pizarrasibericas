import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
// 1. Import local images from the assets folder
import piedraLajaImg from "../assets/pegando-piedra-laja.jpg";
import marmolesImg from "../assets/pegando-marmol.jpg";
import porfidoImg from "../assets/pegando-porfido.jpg";


export default function Services() {
  const services = [
    { title: "Servicio de Piedra laja", img: piedraLajaImg, desc: "Somos expertos en instalacion de este material." },
    { title: "Los mejores trabajos en marmol", img: marmolesImg, desc: "Tenemos un alto cuidado y profesionalismo al instalar." },
    { title: "Servicio de porfido", img: porfidoImg, desc: "Sabemos que tu seguridad esta primero." }
  ];

  return (
    <Container sx={{ mt: 6 }}>
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
        Servicios Profesionales
      </Typography>
      <Grid container spacing={3}>
        {services.map((m, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ height: "100%", width: 350 }}>
              <CardMedia
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 300, // tamaño fijo cuadrado
                  backgroundColor: "#f9f9f9", // opcional, contraste
                }}
              >
                <img
                  src={m.img}
                  alt={m.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // llena todo el cuadrado
                    borderRadius: "8px", // opcional, bordes redondeados
                  }}
                />
              </CardMedia>

              <CardContent>
                <Typography variant="h6">{m.title}</Typography>
                <Typography variant="body2">{m.desc}</Typography>
              </CardContent>
            </Card>

          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
