import { COLOR } from '../constants/COLOR';

export const light = {
  theme: 'light',
  colors: {
    ...COLOR,
    background: COLOR.WHITE,
    text: COLOR.DARK_BLUE_GRAY,
  } as const,
} as const;

export const dark = {
  theme: 'dark',
  colors: {
    ...COLOR,
    background: COLOR.DARK_BLUE_GRAY,
    text: COLOR.WHITE,
  } as const,
} as const;
