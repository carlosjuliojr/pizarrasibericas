import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

// 1. Import local images from the assets folder
import tejasImg from "../assets/products/piedra-pizarra.png";
import marmolesImg from "../assets/products/marmol-travestino-natural.jpg";
import porfidoImg from "../assets/products/piedra-porfido.jpg";
import marmolGrisImg from "../assets/products/marmol-gris-de-carrara.jpg";
import cuarzoImg from "../assets/products/cuarzo-de-lino-blanco.jpg";
import travertinoImg from "../assets/products/piedra-natural.png";
import marmolesPulidoImg from "../assets/products/marmol-pulido.jpg";
import adoquinNegroImg from "../assets/products/adoquin negro.jpg";
import adoquinGrisImg from "../assets/products/adoquin gris.jpg";
import piedraPizarraGrisVerdeImg from "../assets/products/piedra-pizarra-gris-verde.jpg";
import piedraPizarraConGanchoImg from "../assets/products/piedra-pizarra-con-gancho.jpg";
import ganchoImg from "../assets/products/ganchos-para-piedra-pizarra.jpg";


export default function Products() {
  // 2. Use the imported variables in your data array
  const products = [
    { title: "Teja de Piedra pizarra", img: tejasImg, desc: "De alta calidad. En formatos 18x27 - 20x30 - 22x32" },
    { title: "Piedra pizarra gris verde", img: piedraPizarraGrisVerdeImg, desc: "Una roca metamórfica natural de tono oscuro con vetas verdosas, ideal para techos y revestimientos." },
    { title: "Teja de piedra pizarra con ganchos", img: piedraPizarraConGanchoImg, desc: "Es una forma de instalación moderna y eficiente para techos, donde las tejas de pizarra se aseguran a la estructura del tejado mediante ganchos metálicos." },
    { title: "Gancho para teja de piedra pizarra", img: ganchoImg, desc: "Se utilizan para sujetar las tejas de forma segura a la estructura del tejado." },
    { title: "Mármol travestino natural", img: marmolesImg, desc: "Más duraderos y elegantes para pisos y revestimientos." },
    { title: "Mármol carrara", img: marmolGrisImg, desc: "Brumoso con un fondo blanco y un patrón gris extraído de Italia." },
    { title: "Mármol pulido", img: marmolesPulidoImg, desc: "Excelente material dando un brillo de alta calidad." },
    { title: "Adoquin negro", img: adoquinNegroImg, desc: "Es una piedra natural de granito que se utiliza comúnmente en pavimentaciones, fachadas y bordes de jardines." },
    { title: "Adoquin gris", img: adoquinGrisImg, desc: " Es valorado por su durabilidad, resistencia a la compresión y versatilidad estética." },
    { title: "Cuarzo de lino blanco", img: cuarzoImg, desc: "Piedra extremadamente duradera, resistente a la corrosión." },
    { title: "Pórfido", img: porfidoImg, desc: "Ideal para proyectos de pavimentación y exteriores." },
    { title: "Piedra natural", img: travertinoImg, desc: "Es una opción versátil y elegante para darle un toque especial a tus espacios." }
    /*Seguir agregando aqui las imagenes tomar en cuenta que la ultima no debe llegar el simbolo
    coma al final de la linea*/
  ];

  return (
    <Container sx={{ mb: 3, mt: 6 }}>
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
      <Grid container spacing={3} justifyContent="center">
        {products.map((m, i) => (
          <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{ height: "100%", width: 350 }}>
              <CardMedia
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 400, // tamaño fijo cuadrado
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