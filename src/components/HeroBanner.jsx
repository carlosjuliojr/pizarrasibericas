import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // 👈 importa estilos de flechas
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // 👈 importa Navigation

export default function HeroBanner() {

  const customSwiperStyles = {
    '--swiper-navigation-color': 'white',
    width: "100%",
    maxWidth: 600,
  };


  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
          position: "relative",
          mt: -12,
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
        Pizarras Ibéricas
      </Typography>

      {/* Carrusel con flechas */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]} // 👈 activa Navigation
        pagination={{ clickable: true }}
        navigation={true} // 👈 habilita flechas
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 7000, // 👈 Se mueve cada 5 segundos
          disableOnInteraction: false, // 👈 No se detiene al interactuar con el usuario
        }}
        style={customSwiperStyles}
      >
        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: 4,
              p: { xs: 4, sm: 6 },
              mx: 2,
              my: 5,
              boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(4px)",
              minHeight: { xs: 180, sm: 220, md: 260 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 600,
            }}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{
                textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                lineHeight: 1.8,
              }}
            >
              Especialistas en <b>venta y mantención de TEJAS DE PIEDRA PIZARRA</b>, mármoles,
              pórfido y revestimientos de piedra natural con servicios profesionales
              de <b>INSTALACIÓN</b>.
            </Typography>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: 4,
              p: { xs: 4, sm: 6 },
              mx: 2,
              my: 5,
              boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(4px)",
              minHeight: { xs: 180, sm: 220, md: 260 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 600,
            }}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{
                textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                lineHeight: 1.8,
              }}
            >
              Diseños exclusivos en mármol y <b>pizarra</b>, ideales para
              cubiertas, pisos y <b>TEJAS DE PIEDRA PIZARRA</b> que aportan
              elegancia a interiores y exteriores.
            </Typography>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: 4,
              p: { xs: 4, sm: 6 },
              mx: 2,
              my: 5,
              boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(4px)",
              minHeight: { xs: 180, sm: 220, md: 260 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 600,
            }}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{
                textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                lineHeight: 1.8,
              }}
            >
              Pizarras Ibéricas: expertos en <b>TEJAS DE PIEDRA PIZARRA</b> y materiales
              de <b>piedra natural</b>. Garantizamos <b>venta, mantención e instalación</b>
              &nbsp;con la más alta calidad y experiencia en cada detalle.
            </Typography>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: 4,
              p: { xs: 4, sm: 6 },
              mx: 2,
              my: 5,
              boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(4px)",
              minHeight: { xs: 180, sm: 220, md: 260 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 600,
            }}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{
                textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                lineHeight: 1.8,
              }}
            >
              Compromiso con la calidad y la satisfacción de nuestros clientes
              en cada proyecto.
            </Typography>
          </Box>
        </SwiperSlide>
      </Swiper>

      {/* Botón que linkea a Servicios */}
      <Button
        variant="contained"
        sx={{
          px: 5,
          py: 1.8,
          mt: 4,
          fontWeight: "bold",
          letterSpacing: "0.5px",
          color: "#fff",
          borderRadius: "30px",
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
          textTransform: "none",
          background: "linear-gradient(135deg, #8F817E, #B5AEAB)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
          backdropFilter: "blur(6px)",
          transition: "all 0.35s ease",
          "&:hover": {
            background: "linear-gradient(135deg, #72675F, #9C908B)",
            transform: "translateY(-4px) scale(1.03)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.55)",
          },
          "&:active": {
            transform: "scale(0.98)",
          },
        }}
        component={Link}
        to="/products"
      >
        Conoce nuestros productos
      </Button>
    </Box>
  );
}
