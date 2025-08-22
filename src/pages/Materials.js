import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

// 1. Import local images from the assets folder
import tejasImg from "../assets/piedra-pizarra.png";
import marmolesImg from "../assets/piedra-marmol.jpg";
import porfidoImg from "../assets/piedra-porfido.jpg";

export default function Materials() {
  // 2. Use the imported variables in your data array
  const materials = [
    { title: "Piedra pizarra", img: tejasImg, desc: "De alta calidad." },
    { title: "Mármoles", img: marmolesImg, desc: "Más duraderos y elegantes para pisos y revestimientos." },
    { title: "Pórfido", img: porfidoImg, desc: "Ideal para proyectos de pavimentación y exteriores." }
  ];

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h2"
        component="h1" gutterBottom align="left"
        color="rgba(37, 37, 37, 0.6)"
      >
        Nuestros Productos
      </Typography>
      <Grid container spacing={3}>
        {materials.map((m, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ height: '100%', width: 350 }}>
              <CardMedia
                component="img"
                image={m.img}
                alt={m.title}
                // Ajusta los estilos para un tamaño fijo y centrado
                sx={{
                  width: 300,  // Por ejemplo, 300px
                  height: 300, // Misma altura para un cuadrado
                  objectFit: 'cover', // Recorta la imagen para llenar el espacio
                  // margin: 'auto', // Centra la imagen horizontalmente
                  // display: 'block', // Asegura que el margen funcione
                }}
              />
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