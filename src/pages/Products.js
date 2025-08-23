import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

// 1. Import local images from the assets folder
import tejasImg from "../assets/piedra-pizarra.png";
import marmolesImg from "../assets/piedra-marmol.jpg";
import porfidoImg from "../assets/piedra-porfido.jpg";

export default function Products() {
  // 2. Use the imported variables in your data array
  const materials = [
    { title: "Piedra pizarra", img: tejasImg, desc: "De alta calidad." },
    { title: "Mármoles", img: marmolesImg, desc: "Más duraderos y elegantes para pisos y revestimientos." },
    { title: "Pórfido", img: porfidoImg, desc: "Ideal para proyectos de pavimentación y exteriores." }
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
        Nuestros Productos
      </Typography>
      <Grid container spacing={3}>
        {materials.map((m, i) => (
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