import React from 'react';
import { Box, Typography, Grid, Paper, IconButton } from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contato: React.FC = () => {
  return (
    <Box
      id="contact"
      sx={{
        padding: "4% 5%",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{ mb: 4,  color: "#ffffff" }}
      >
        ENTRE EM CONTATO:
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Informações de Contato
            </Typography> 
            <Typography variant="h5" sx={{ mb: 2 }}>
              clique nos ícones acessar mais rápido
            </Typography>           
            <a
              href="https://https://wa.me/5527988080038"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <IconButton>
                <WhatsAppIcon />
                <Typography variant="body1">
                  <strong>Telefone:</strong> (27) 988433909
                </Typography>
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/in/érick-prado-gonçalves-041076200/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <IconButton>
                <LinkedInIcon />
                <Typography variant="body1">
                  <strong>LinkedIn:</strong> Érick Prado Gonçalves
                </Typography>
              </IconButton>
            </a>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contato;
