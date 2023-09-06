import { COLOR } from '../constants/COLOR';

export const light = {
  theme: 'light',
  colors: {
    ...COLOR,
    background: '#ffffff',
    text: '#000000',
  } as const,
} as const;

export const dark = {
  theme: 'dark',
  colors: {
    ...COLOR,
    background: '#585858',
    text: '#ffffff',
  } as const,
} as const;

// const theme = {
//   light: `
//     background: ${COLOR.WHITE};
//     color: ${COLOR.BLACK};
//   `,
//   dark: `
//     background: ${COLOR.BLACK};
//     color: ${COLOR.WHITE};
//   `,
// };

// export default theme;
