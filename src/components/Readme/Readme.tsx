import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  CardMedia,
} from '@mui/material';
import Graph from './Graph';


const DeliciasCard: React.FC = () => {
  return (
    <Box
      id="readme"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 2,
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#999',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '& img': {
          width: '30%',
          height: 'auto',
          objectFit: 'cover',
        },
      }}
    >
      <Card sx={{ padding: 2 }}>
        <CardContent>
          <Typography variant="h3" component="div" gutterBottom align="center">
            SOBRE O ÉRICK
          </Typography>
        </CardContent>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 4 },
            padding: 3,
            justifyContent: 'space-between',
          }}
        >
          <CardContent
            sx={{
              flex: '1 1 40%',
              width: { xs: '100%', sm: '40%' },
              padding: 2,
            }}
          >
            <Typography variant="h4" color="text.secondary" paragraph>
              Gráfico de Aprovações e Trabalhos Realizados(2023-2024)
            </Typography>
            <Graph />
          </CardContent>
          <CardContent
            sx={{
              flex: '1 1 40%',
              width: { xs: '100%', sm: '40%' },
              padding: 2,
            }}
          >
            <Typography variant="h4" color="text.secondary" paragraph>
              Como darei vida à sua ideia!
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'justify' }}>
              -Desenvolvedor fullstack apaixonado e com experiência em aplicativos webs mais  software de automação para startups quanto para agências financeiras.
              <br />
              -Domínio em React e typescript além do pythons(flas e django).
              <br />
              -Com uma carreira repleta de conquistas impressionantes, ofereço soluções inovadoras que fazem brilhar qualquer projeto. Já desenvolvi a F.I.H.A. (Ferramenta de Integração Humana na Astronomia), um aplicativo com inteligência artificial que ensina jovens e crianças através de jogos e simuladores, patrocinado pela NASA e USP. Também criei sistemas de gerenciamento logístico, antivírus industriais, e impressoras 3D interconectadas.
              Minha experiência inclui contribuir para redes sociais com IA, criação de sites e ecommerces, além de sistemas de transmissão de vídeo remota. Sou especialista em desenvolver aplicativos web para agências financeiras e startups, trazendo inovação tecnológica para seus negócios.
              <br />
              <br />
              -Estou muito ansioso para se unir à equipe e criar um futuro tecnológico extraordinário quanto bem promissor!
            </Typography>
          </CardContent>


        </Box>
      </Card>
    </Box>
  );
};

export default DeliciasCard;
