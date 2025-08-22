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
    
            <Typography variant="h2"
              component="h1" gutterBottom align="left"
              color="rgba(37, 37, 37, 0.6)"
            >
              Servicios
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
