import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function Services() {
  const services = [
    { title: "Web Development", img: "https://via.placeholder.com/300", desc: "We build modern and responsive websites." },
    { title: "Mobile Apps", img: "https://via.placeholder.com/300", desc: "Custom mobile applications for Android and iOS." },
    { title: "Cloud Solutions", img: "https://via.placeholder.com/300", desc: "Scalable and secure cloud services." }
  ];

  return (
    <Container sx={{ mt: 4 }}>
    
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
          mt: -2, // mueve el título hacia arriba
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
        Nuestros Servicios
      </Typography>

      <Grid container spacing={3}>
        {services.map((s, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <Card>
              <CardMedia component="img" height="200" image={s.img} alt={s.title} />
              <CardContent>
                <Typography variant="h6">{s.title}</Typography>
                <Typography variant="body2">{s.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
