import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/assets/icons/home/ic_make_brand.svg',
    title: 'Consultoria & Estratégia em TI',
    description:
      'Ajudamos sua empresa a transformar ideias em resultados com planejamento estratégico, gestão de tecnologia e apoio na tomada de decisões digitais. Nossa consultoria foca em inovação, eficiência e crescimento sustentável.',
  },
  {
    icon: '/assets/icons/home/ic_design.svg',
    title: 'Design de Experiência & Interface',
    description:
      'Projetamos experiências que encantam e convertem. Combinamos design visual moderno com usabilidade intuitiva para criar interfaces funcionais, acessíveis e centradas no usuário.',
  },
  {
    icon: '/assets/icons/home/ic_development.svg',
    title: 'Soluções Fullstack sob medida',
    description:
      'Desenvolvemos sistemas completos, seguros e escaláveis — da arquitetura back-end até a interface final. Utilizamos tecnologias modernas para atender com precisão as demandas do seu negócio.',
  },
];

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            Nossas Especialidades
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2">
            Como a GENAP pode
            <br /> ajudar sua empresa?
          </Typography>
        </m.div>
      </Stack>

      <Box
        gap={{ xs: 3, lg: 10 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {CARDS.map((card, index) => (
          <m.div variants={varFade().inUp} key={card.title}>
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: { md: 'none' },
                bgcolor: 'background.default',
                p: (theme) => theme.spacing(10, 5),
                ...(index === 1 && {
                  boxShadow: (theme) => ({
                    md: `-40px 40px 80px ${
                      theme.palette.mode === 'light'
                        ? alpha(theme.palette.grey[500], 0.16)
                        : alpha(theme.palette.common.black, 0.4)
                    }`,
                  }),
                }),
              }}
            >
              <Box
                component="img"
                src={card.icon}
                alt={card.title}
                sx={{ mx: 'auto', width: 48, height: 48 }}
              />

              <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
                {card.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                {card.description}
              </Typography>
            </Card>
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
