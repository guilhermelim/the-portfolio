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
