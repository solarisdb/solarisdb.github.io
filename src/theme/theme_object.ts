import { getCreateVariants, type NestedKeyOf } from '../helpers';

export enum Themes {
  light = 'light',
  dark = 'dark',
}

const createVariants = getCreateVariants<Themes>();

const variants = (primaryColor: string, primaryTextColor: string) => {
  return createVariants({
    [Themes.light]: {
      colors: {
        background: '#fff',
      },
    },
    [Themes.dark]: {
      colors: {
        background: '#111',
      },
    },
  });
};

export type CreateThemeObjectParams = {
  style: Themes;
  primaryColor: string;
  primaryTextColor: string;
};

export const createThemeObject = ({
  style,
  primaryColor,
  primaryTextColor,
}: CreateThemeObjectParams) => {
  const { colors } = variants(primaryColor, primaryTextColor)[style];

  return {
    style,
    colors,
  };
};

export type Theme = ReturnType<typeof createThemeObject>;
export type ColorName = NestedKeyOf<Theme['colors']>;

export type WithTheme = {
  theme: Theme;
};
