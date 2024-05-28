import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    // const PRIMARY_LIGHT = theme.palette.primary.light;

    const PRIMARY_MAIN = theme.palette.primary.main;

    const PRIMARY_DARK = theme.palette.primary.dark;

    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );

    // const logo = (
    //   <Box
    //     ref={ref}
    //     component="div"
    //     sx={{
    //       width: 40,
    //       height: 40,
    //       display: 'inline-flex',
    //       ...sx,
    //     }}
    //     {...other}
    //   >
    //     <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
    //       <defs>
    //         <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
    //           <stop offset="0%" stopColor={PRIMARY_DARK} />
    //           <stop offset="100%" stopColor={PRIMARY_MAIN} />
    //         </linearGradient>

    //         <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
    //           <stop offset="0%" stopColor={PRIMARY_LIGHT} />
    //           <stop offset="100%" stopColor={PRIMARY_MAIN} />
    //         </linearGradient>

    //         <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
    //           <stop offset="0%" stopColor={PRIMARY_LIGHT} />
    //           <stop offset="100%" stopColor={PRIMARY_MAIN} />
    //         </linearGradient>
    //       </defs>

    //       <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
    //         <path
    //           fill="url(#BG1)"
    //           d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"
    //         />
    //         <path
    //           fill="url(#BG2)"
    //           d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
    //         />
    //         <path
    //           fill="url(#BG3)"
    //           d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
    //         />
    //       </g>
    //     </svg>
    //   </Box>
    // );

    const logoGenap = (
      <Box
        component="div"
        sx={{
          width: 40,
          height: 40,
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 1000">
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
    );

    if (disabledLink) {
      return logoGenap;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logoGenap}
      </Link>
    );
  }
);

export default Logo;
