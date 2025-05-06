import { css } from 'styled-components';

// Breakpoints from your theme (repeated here for reference)
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1200px',
  ultraWide: '1440px'
};

// Media query generator using styled-components' css helper
const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// Alternative syntax for max-width queries
const mediaMax = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// Specific device queries
const device = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  tabletDown: `(max-width: ${breakpoints.desktop})`,
  tabletUp: `(min-width: ${breakpoints.tablet})`
};

// Orientation queries
const orientation = {
  portrait: `(orientation: portrait)`,
  landscape: `(orientation: landscape)`
};

// Pixel ratio queries
const resolution = {
  retina: `(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)`
};

// Export all media query utilities
export { 
  media, 
  mediaMax, 
  device, 
  orientation, 
  resolution, 
  breakpoints 
};