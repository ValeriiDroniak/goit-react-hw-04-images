const theme = {
  colors: {
    secondary: '#dedede',
    primary: '#07c',
    accent: '#05a',
    white: '#ffffff',
    black: '#000000',
    overlay: 'rgba(0,0,0, 0.9)',
    muted: '#f6f6f6',
    text: {
      primary: '#000000',
      secondary: '#1f1f1f',
      accent: '#212121',
      dark: '',
      light: '',
    },
  },
  space: [0, 4, 8, 16, 32, 64, 96, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Georgia, serif',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '18px',
    l: '24px',
    xl: '32px',
    xxl: '64px',
  },
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeight: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  shadows: {
    card: `0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2)`,
    work: `0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16)`,
    go_it: `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
    imageItem: `0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)`,
    button: `0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)`,
  },
  sizes: [4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96],
  transitions: {
    cub: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export default theme;
