import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

import { assets } from '../../assets/assets';

const Hero: React.FC = () => {
  return (
    <Box
      id="hero"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: 3,
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        marginTop: {
          xs: "30px",
          sm: "10px",
          md: "10px",
        },
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${assets.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            fontFamily: 'Press Start 2P, sans-serif',
            color: '#ffffff',
            fontWeight: 'bold',
            mt: '10px',
            textTransform: 'none',
          }}
        >
          BEM VINDO AO NOSSO SUCESSO!
        </Typography>

        <Typography variant="h6"
          component="h6"
          gutterBottom
          sx={{
            fontFamily: 'Source Code Pro, monospace',
            color: '#bebebe',
            mt: '10px',
            textTransform: 'none',
          }}>
Sou desenvolvedor frontend com 3 anos de experiência, especializado em React, TypeScript e Python. Destaco-me pelo raciocínio lógico e por projetos realizados para empresas de excelência. Minha marca registrada é a versatilidade e lealdade. Confira minha carta de referência no currículo para saber mais sobre minhas competências!        </Typography>
        <ScrollLink to="readme" smooth={true} duration={500}>
          <Button variant="contained" color="primary">
            Saiba mais
          </Button>
        </ScrollLink>
      </Container>
    </Box>


  );
};

export default Hero;
