import { m, useScroll } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { HEADER } from 'src/layouts/config-layout';
import { bgBlur, bgGradient, textGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';
// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_3.jpg',
  }),
  width: '100%',
  height: '100vh',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    position: 'fixed',
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    marginTop: HEADER.H_DESKTOP_OFFSET,
  },
}));

const StyledTextGradient = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.primary.main} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.primary.main} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.primary.main} 100%`
  ),
  padding: 0,
  marginTop: 8,
  lineHeight: 1,
  fontWeight: 900,
  marginBottom: 24,
  letterSpacing: 8,
  textAlign: 'center',
  backgroundSize: '400%',
  fontSize: `${64 / 16}rem`,
  fontFamily: theme.typography.fontSecondaryFamily,
  [theme.breakpoints.up('md')]: {
    fontSize: `${96 / 16}rem`,
  },
}));

const StyledEllipseTop = styled('div')(({ theme }) => ({
  top: -80,
  width: 480,
  right: -80,
  height: 480,
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledEllipseBottom = styled('div')(({ theme }) => ({
  height: 400,
  bottom: -200,
  left: '10%',
  right: '10%',
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

type StyledPolygonProps = {
  opacity?: number;
  anchor?: 'left' | 'right';
};

const StyledPolygon = styled('div')<StyledPolygonProps>(
  ({ opacity = 1, anchor = 'left', theme }) => ({
    ...bgBlur({
      opacity,
      color: theme.palette.background.default,
    }),
    zIndex: 9,
    bottom: 0,
    height: 80,
    width: '50%',
    position: 'absolute',
    clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
    ...(anchor === 'left' && {
      left: 0,
      ...(theme.direction === 'rtl' && {
        transform: 'scale(-1, 1)',
      }),
    }),
    ...(anchor === 'right' && {
      right: 0,
      transform: 'scaleX(-1)',
      ...(theme.direction === 'rtl' && {
        transform: 'scaleX(1)',
      }),
    }),
  })
);

// ----------------------------------------------------------------------

export default function HomeHero() {
  const mdUp = useResponsive('up', 'md');

  // const theme = useTheme();

  // const PRIMARY_MAIN = theme.palette.primary.main;

  // const PRIMARY_DARK = theme.palette.primary.dark;

  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  // const lightMode = theme.palette.mode === 'light';

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  // const transition = {
  //   repeatType: 'loop',
  //   ease: 'linear',
  //   duration: 60 * 4,
  //   repeat: Infinity,
  // } as const;

  const opacity = 1 - percent / 100;

  const hide = percent > 120;

  const renderDescription = (
    <Box
      sx={{
        pt: 20,
        height: 1,
        mx: 'auto',
        maxWidth: 480,
        opacity: opacity > 0 ? opacity : 0,
        mt: {
          md: `-${HEADER.H_DESKTOP + percent * 2.5}px`,
        },
      }}
    >
      <Stack justifyContent="flex-start" alignItems="flex-start" spacing={2}>
        <m.div variants={varFade().in}>
          <Typography variant="body2">Oi, meu nome é</Typography>
        </m.div>
      </Stack>

      <Stack alignItems="center" justifyContent="center">
        <m.div variants={varFade().in}>
          <StyledTextGradient
            animate={{ backgroundPosition: '200% center' }}
            transition={{
              repeatType: 'reverse',
              ease: 'linear',
              duration: 20,
              repeat: Infinity,
            }}
          >
            Guilherme Lima
          </StyledTextGradient>
        </m.div>

        <m.div variants={varFade().in}>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            <strong>Desenvolvedor Full Stack</strong>, com experiência em aplicações web com{' '}
            <strong>React.js</strong> e <strong>Next.js</strong> com <strong>TypeScript</strong> e{' '}
            <strong>MUI</strong> e <strong>Design de UI/UX</strong>.
          </Typography>
        </m.div>

        {/* <m.div variants={varFade().in}>
        <Stack
          spacing={0.75}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ my: 3 }}
        >
          <Rating readOnly value={4.95} precision={0.1} max={5} />
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            <Box component="strong" sx={{ mr: 0.5, color: 'text.primary' }}>
              4.96/5
            </Box>
            (99+ reviews)
          </Typography>
        </Stack>
      </m.div> */}
      </Stack>

      <m.div variants={varFade().in}>
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
          <Stack spacing={1.5} direction={{ xs: 'column-reverse', sm: 'column' }} sx={{ my: 5 }}>
            <Button
              component={RouterLink}
              href="https://wa.me/5585992704305?text=Olá, estou entrando em contato através do seu portfolio."
              color="inherit"
              size="large"
              variant="contained"
              startIcon={<Iconify icon="ic:baseline-whatsapp" width={24} />}
            >
              Fale comigo agora!
            </Button>

            <Link
              color="inherit"
              variant="caption"
              target="_blank"
              rel="noopener"
              href=""
              sx={{
                textDecoration: 'underline',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <Iconify icon="eva:external-link-fill" width={16} sx={{ mr: 0.5 }} />
              Atualmente disponível para trabalho e freelance
            </Link>
            <Stack alignItems="center" spacing={2} />

            {/* <Button
            color="inherit"
            size="large"
            variant="outlined"
            startIcon={<Iconify icon="eva:external-link-fill" width={24} />}
            target="_blank"
            rel="noopener"
            href={paths.figma}
            sx={{ borderColor: 'text.primary' }}
          >
            Design Preview
          </Button> */}
          </Stack>
        </Stack>
      </m.div>

      <Stack spacing={3} sx={{ textAlign: 'center' }}>
        <m.div variants={varFade().in}>
          <Typography variant="overline" sx={{ opacity: 0.48 }}>
            MINHAS SKILLS E POWER UP’S
          </Typography>
        </m.div>

        <Stack spacing={2} direction="row" justifyContent="center">
          {[
            'devicon:html5',
            'vscode-icons:file-type-css',
            'skill-icons:sass',
            'logos:javascript',
            'devicon:typescript',
            'devicon:csharp',
            'logos:nodejs-icon',
            'logos:react',
            'file-icons:nextjs',
            { icon: 'simple-icons:mui', color: '#3399ff' },
            { icon: 'solar:database-bold', color: 'yellow' },
            'skill-icons:wordpress',
            'skill-icons:docker',
            'skill-icons:git',
            'skill-icons:aws-dark',
            'skill-icons:linux-dark',
          ].map((icon, index) => {
            // Verificar se 'icon' é um objeto para aplicar uma cor personalizada
            const iconProps =
              typeof icon === 'object'
                ? { icon: icon.icon, color: icon.color, width: 24 }
                : { icon, width: 24 };

            return (
              <Box key={index}>
                <Iconify {...iconProps} />
              </Box>
            );
          })}

          {/* {['js', 'ts', 'figma', 'nextjs', 'vite'].map((icon) => (
            <m.div key={icon} variants={varFade().in}>
              <Box
                component="img"
                alt={icon}
                src={`/assets/icons/platforms/ic_${icon}.svg`}
                sx={{ width: 24, height: 24 }}
              />
            </m.div>
          ))} */}
        </Stack>
      </Stack>
    </Box>
  );

  // const renderSlides = (
  //   <Stack
  //     direction="row"
  //     alignItems="flex-start"
  //     sx={{
  //       height: '150%',
  //       position: 'absolute',
  //       opacity: opacity > 0 ? opacity : 0,
  //       transform: `skew(${-16 - percent / 24}deg, ${4 - percent / 16}deg)`,
  //       ...(theme.direction === 'rtl' && {
  //         transform: `skew(${16 + percent / 24}deg, ${4 + percent / 16}deg)`,
  //       }),
  //     }}
  //   >
  //     <Stack
  //       component={m.div}
  //       variants={varFade().in}
  //       sx={{
  //         width: 344,
  //         position: 'relative',
  //       }}
  //     >
  //       <Box
  //         component={m.img}
  //         animate={{ y: ['0%', '100%'] }}
  //         transition={transition}
  //         alt={lightMode ? 'light_1' : 'dark_1'}
  //         src={
  //           lightMode
  //             ? `/assets/images/home/hero/light_1.webp`
  //             : `/assets/images/home/hero/dark_1.webp`
  //         }
  //         sx={{ position: 'absolute', mt: -5 }}
  //       />
  //       <Box
  //         component={m.img}
  //         animate={{ y: ['-100%', '0%'] }}
  //         transition={transition}
  //         alt={lightMode ? 'light_1' : 'dark_1'}
  //         src={
  //           lightMode
  //             ? `/assets/images/home/hero/light_1.webp`
  //             : `/assets/images/home/hero/dark_1.webp`
  //         }
  //         sx={{ position: 'absolute' }}
  //       />
  //     </Stack>

  //     <Stack
  //       component={m.div}
  //       variants={varFade().in}
  //       sx={{ width: 720, position: 'relative', ml: -5 }}
  //     >
  //       <Box
  //         component={m.img}
  //         animate={{ y: ['100%', '0%'] }}
  //         transition={transition}
  //         alt={lightMode ? 'light_2' : 'dark_2'}
  //         src={
  //           lightMode
  //             ? `/assets/images/home/hero/light_2.webp`
  //             : `/assets/images/home/hero/dark_2.webp`
  //         }
  //         sx={{ position: 'absolute', mt: -5 }}
  //       />
  //       <Box
  //         component={m.img}
  //         animate={{ y: ['0%', '-100%'] }}
  //         transition={transition}
  //         alt={lightMode ? 'light_2' : 'dark_2'}
  //         src={
  //           lightMode
  //             ? `/assets/images/home/hero/light_2.webp`
  //             : `/assets/images/home/hero/dark_2.webp`
  //         }
  //         sx={{ position: 'absolute' }}
  //       />
  //     </Stack>
  //   </Stack>
  // );

  const renderPolygons = (
    <>
      <StyledPolygon />
      <StyledPolygon anchor="right" opacity={0.48} />
      <StyledPolygon anchor="right" opacity={0.48} sx={{ height: 48, zIndex: 10 }} />
      <StyledPolygon anchor="right" sx={{ zIndex: 11, height: 24 }} />
    </>
  );

  const renderEllipses = (
    <>
      {mdUp && <StyledEllipseTop />}
      <StyledEllipseBottom />
    </>
  );

  return (
    <>
      <StyledRoot
        ref={heroRef}
        sx={{
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <StyledWrapper>
          <Container component={MotionContainer} sx={{ height: 1 }}>
            <Grid container columnSpacing={{ md: 10 }} sx={{ height: 1 }}>
              <Grid xs={12} md={6}>
                {renderDescription}
              </Grid>

              {/* <Grid md={6}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  height="80%"
                >
                  <Box
                    component="div"
                    sx={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 1000 1000"
                    >
                      <defs>
                        <linearGradient id="P" gradientUnits="userSpaceOnUse" />
                        <linearGradient
                          id="g1"
                          x2="1"
                          href="#P"
                          gradientTransform="matrix(-1116.535,467.737,-586.684,-1400.475,1232.527,682.213)"
                        >
                          <stop offset="0%" stopColor={PRIMARY_MAIN} />
                          <stop offset="100%" stopColor={PRIMARY_DARK} />
                        </linearGradient>
                      </defs>
                      <path
                        d="m-0.2 127.1h427.5c315 0 572.7 257.8 572.7 572.8v172.8h-427.4c-315 0-572.8-257.7-572.8-572.7z"
                        fill="url(#g1)"
                      />
                      <path
                        d="m631.7 741.6v-143.5l189.4 141.3v132.3l-2.3 1h-246.2c-140.6 0-269.7-51.4-369.7-136.2-31-60.4-46.8-135.8-46.8-226.2 0-232.1 117.3-351.5 314.3-381.5 135.2 10.2 257.7 67.8 350.7 156.2v62.6l-37.2-16.1c-62-26.8-127.7-38.9-195.1-38.9-151.1 0-238 60.6-238 217.7 0 154.1 64.6 238 223.1 238 19.2 0 38.7-2.6 57.8-6.7z"
                        fill="#fff"
                      />
                    </svg>
                  </Box>
                </Stack>
              </Grid> */}
              {/* {mdUp && <Grid md={6}>{renderSlides}</Grid>} */}
            </Grid>
          </Container>

          {renderEllipses}
        </StyledWrapper>
      </StyledRoot>

      {mdUp && renderPolygons}

      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
