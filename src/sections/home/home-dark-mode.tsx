import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Chip, Avatar, AvatarGroup } from '@mui/material';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';
import { varFade, MotionViewport } from 'src/components/animate';
import Carousel, { useCarousel, CarouselArrowIndex } from 'src/components/carousel';

// ----------------------------------------------------------------------

type Props = {
  data: {
    id: number | string;
    title: string;
    coverUrl: string[];
    description: string;
    icons:
      | {
          name: string;
          icon: string;
        }[]
      | undefined;
    tags: string[] | undefined;
  };
};

function CarouselPortfolio({ data }: Props) {
  const carousel = useCarousel({
    fade: true,
    autoplay: true,
    initialSlide: 0,
  });

  return (
    <Card key={data.id}>
      <Card>
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {data.coverUrl.map((image) => (
            <Image key={image} alt={data.title} src={image} ratio="1/1" />
          ))}
        </Carousel>

        <CarouselArrowIndex
          index={carousel.currentIndex}
          total={data.coverUrl.length}
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
        />
      </Card>
      <CardContent sx={{ textAlign: 'justify' }}>
        <Typography variant="h6" noWrap gutterBottom textAlign="left">
          {data.title}
        </Typography>

        <Markdown sx={{ color: 'text.secondary' }} children={data.description} />

        {/* {data.icons?.length !== 0 && (
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            spacing={1}
            sx={{ pt: 2 }}
          >
            {data.icons?.map((icon) => (
              <Avatar key={icon.name} color="primary">
                <Iconify icon={icon.icon} width={24} />
              </Avatar>
            ))}
          </Stack>
        )} */}

        <Box sx={{ pt: 2 }}>
          <Stack
            spacing={3}
            sx={{
              py: 1,
              borderTop: (theme) => `dashed 1px ${theme.palette.divider}`,
              // borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
            }}
          >
            <Stack direction="row" alignItems="center">
              <AvatarGroup max={8}>
                {data.icons?.map((icon) => (
                  <Avatar key={icon.name} alt={icon.name} color="secondary">
                    <Iconify icon={icon.icon} width={24} />
                  </Avatar>
                ))}
              </AvatarGroup>
            </Stack>

            <Stack direction="row" flexWrap="wrap" spacing={1}>
              {data.tags?.map((tag) => <Chip key={tag} label={tag} variant="soft" />)}
            </Stack>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

const carousel1 = {
  data: {
    id: 1,
    title: 'GUIBEST',
    coverUrl: [`/assets/images/carousel/guibest.jpg`],
    description: `É um projeto pessoal de e-commerce no modelo **Drop Shipping** feito usando tecnologia Shopify. Controle de estoque, Esteira de Produtos, Sistema de Precificação, SEO, Integração ao Facebook e Google ADS, Gateway de Pagamentos, Rastreio automático dos Correios.`,
    icons: [{ name: 'Shopify', icon: 'logos:shopify' }],
    tags: [],
  },
};

const carousel2 = {
  data: {
    id: 2,
    title: 'RS BOX',
    coverUrl: [
      `/assets/images/carousel/rsbox-1.jpg`,
      `/assets/images/carousel/rsbox-2.jpg`,
      `/assets/images/carousel/rsbox-3.jpg`,
    ],
    description: `Um E-Commerce completo com um designe personalizado. Controle de estoque, Esteira de Produtos, Sistema de Precificação, SEO, Integração ao Facebook e Google ADS, Gateway de Pagamentos, Rastreio automático dos Correios.`,
    icons: [
      { name: 'PHP', icon: 'skill-icons:php-dark' },
      { name: 'HTML 5', icon: 'devicon:html5' },
      { name: 'CSS 3', icon: 'vscode-icons:file-type-css' },
      { name: 'WORDPRESS', icon: 'skill-icons:wordpress' },
    ],
    tags: [],
  },
};

const carousel3 = {
  data: {
    id: 3,
    title: 'NOV APP',
    coverUrl: ['/assets/images/carousel/novaapp.jpg'],
    description: `Foi um site construído para um app de mobilidade na cidade de Juazeiro do Norte - CE.`,
    icons: [
      { name: 'React', icon: 'logos:react' },
      { name: 'HTML 5', icon: 'devicon:html5' },
      { name: 'SASS', icon: 'skill-icons:sass' },
      { name: 'javascript', icon: 'logos:javascript' },
    ],
    tags: [],
  },
};
const carousel4 = {
  data: {
    id: 4,
    title: 'Múltiplos RE',
    coverUrl: ['/assets/images/carousel/multiplos-re.png'],
    description: `É um sistema responsável por consolidar os dados cadastrais e financeiros dos contribuintes e trabalhadores para repassar ao **FGTS** e à **Previdência Social** e otimizar os processos de tratamento e declaração dos dados junto ao **SEFIP** programa da **CAIXA Econômica Federal**.`,
    icons: [
      { name: '.NET', icon: 'skill-icons:dotnet' },
      { name: 'C#', icon: 'devicon:csharp' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'API', icon: 'gravity-ui:abbr-api' },
    ],
    tags: [],
  },
};

const carousel5 = {
  data: {
    id: 5,
    title: 'Dolphin Home',
    coverUrl: [
      '/assets/images/carousel/dolphin-home-1.png',
      '/assets/images/carousel/dolphin-home-2.jpg',
    ],
    description: `O Dollphin Home é um aplicativo revolucionário de automação residencial, projetado para tornar sua casa mais inteligente e eficiente energeticamente. Com um poderoso sistema de controle de consumo, o Dollphin Home gerencia automaticamente o funcionamento de seus equipamentos, ligando e desligando-os conforme necessário para maximizar a economia de energia. Além do gerenciamento de energia, este aplicativo oferece uma interface interativa em 3D, permitindo que você visualize e controle sua casa de um modo completamente novo e intuitivo. A interação não se limita apenas à visualização: você pode ajustar as luzes, controlar eletrodomésticos e monitorar seu ambiente doméstico com apenas alguns toques. Ideal para quem busca conveniência, economia e um toque de modernidade no gerenciamento do lar.`,
    icons: [
      { name: 'Unity', icon: 'skill-icons:unity-dark' },
      { name: 'C#', icon: 'devicon:csharp' },
      { name: 'MySQL', icon: 'logos:mysql' },
      { name: 'API', icon: 'gravity-ui:abbr-api' },
      { name: 'MQTT', icon: 'simple-icons:zigbee2mqtt' },
      { name: 'JWT', icon: 'logos:jwt-icon' },
      { name: 'Android', icon: 'flat-color-icons:android-os' },
    ],
    tags: ['Unity', 'C#', 'MySQL', 'API', 'MQTT', 'JSON Web Tokens', 'App Android & Web'],
  },
};
const carousel6 = {
  data: {
    id: 6,
    title: 'CJR Math',
    coverUrl: [
      '/assets/images/carousel/cjr.png',
      '/assets/images/carousel/cjr-1.png',
      '/assets/images/carousel/cjr-2.png',
      '/assets/images/carousel/cjr-3.png',
      '/assets/images/carousel/cjr-4.png',
      '/assets/images/carousel/cjr-5.png',
    ],
    description: `
[CJR Math](https://calc.junqueiraeroqueadvogados.com.br) é um moderno sistema jurídico focado na atualização de débitos desenvolvido para [CJR](https://www.junqueiraeroqueadvogados.com.br/).
<br>
O sistema é capaz de realizar complexos cálculos judiciais de um processo tais como:
 - Despesas Processuais E Pré-Processuais
 - Honorários, Ratear Custas E Honorários
 - Multas Processuais
 - Acordos de pagamento para o **Réu** dentre outras muitas funções
`,
    icons: [
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'devicon:typescript' },
      { name: 'Next', icon: 'file-icons:nextjs' },
      { name: 'MongoDB', icon: 'skill-icons:mongodb' },
      { name: 'API', icon: 'gravity-ui:abbr-api' },
      { name: 'JWT', icon: 'logos:jwt-icon' },
    ],
    tags: ['JavaScript', 'TypeScript#', 'Next', 'MongoDB', 'API', 'JWT - JSON Web Tokens'],
  },
};

export default function HomeDarkMode() {
  const renderDescription = (
    <Stack alignItems="center" spacing={3}>
      <m.div variants={varFade().inUp}>
        <Typography component="div" variant="overline" sx={{ color: 'primary.main' }}>
          Veja os meus projetos favoritos
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ color: 'common.white' }} pb={4}>
          PORTFÓLIO
        </Typography>
      </m.div>

      {/* <m.div variants={varFade().inUp}>
        <Typography sx={{ color: 'grey.500' }} paddingBottom={4}>
          A dark theme that feels easier on the eyes.
        </Typography>
      </m.div> */}
    </Stack>
  );

  const renderList = (
    <Card>
      <CardHeader title="" />
      <CardContent>
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
        >
          {[carousel1, carousel2, carousel3, carousel4, carousel5, carousel6].map((item) => (
            <CarouselPortfolio key={item.data.id} data={item.data} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box
      sx={{
        textAlign: 'center',
        bgcolor: 'grey.900',
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 20 },
      }}
    >
      <Container component={MotionViewport}>
        {renderDescription}
        {renderList}
      </Container>
    </Box>
  );
}
