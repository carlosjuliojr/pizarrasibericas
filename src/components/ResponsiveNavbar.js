import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import HomeIcon from '@mui/icons-material/Home';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
// Convertimos strings en objetos con ruta
const pages = [
  { name: "Inicio", path: "/" },
  { name: "Sobre Nosotros", path: "/about" },
  { name: "Servicios", path: "/services" },
  { name: "Productos", path: "/products" },
  { name: "Contactos", path: "/contacts" },
];

export default function ResponsiveNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function getIconoConexion(tipo) {
    if (tipo === 'Inicio') {
      return <HomeIcon />;
    } else if (tipo === 'Sobre Nosotros') {
      return <InfoOutlinedIcon />;
    } else if (tipo === 'Servicios') {
      return <DesignServicesRoundedIcon />;
    } else if (tipo === 'Productos') {
      return <ShoppingCartCheckoutOutlinedIcon />;
    } else {
      return <ContactPhoneOutlinedIcon />;
    }
  }

  return (
    <AppBar position="static"
    sx={{ backgroundColor: "#1C1C1C" }}
    >
      <Toolbar>
        {/* Logo o título */}

    
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: 100,
            height: 100,
            borderRadius: '16px',
            objectFit: 'cover',
            p: 1
          }}
        />

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
        >
        
        </Typography>

        {/* Menú en pantallas grandes */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {pages.map((page) => (
           
            <Button
              key={page.name}
              component={Link}      // <- aquí usamos Link
              to={page.path}         // ruta de la página
              sx={{ color: "white" }}
            >
               <div style={{ marginRight: '8px' }}>
                {getIconoConexion(page.name)}
              </div>
              <span>{page.name}</span>
            </Button>
          ))}
        </Box>

        {/* Menú hamburguesa en móviles */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                component={Link}   // <- Link aquí también
                to={page.path}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
