import type { GetFieldType, Split } from '../helpers';

import type { WithTheme, Theme, ColorName } from './theme_object';

export function createColorMap<
  T extends {
    [colorName: string]:
      | ((props: WithTheme) => string)
      | Record<string, (props: WithTheme) => string>;
  },
>(cfg: T): T {
  return cfg;
}

export const themeColor =
  <const T extends ColorName, R = GetFieldType<Theme['colors'], T>>(
    color: T | undefined,
    config: { disableWarning?: boolean } = {},
  ) =>
  ({ theme }: WithTheme) => {
    if (!color) return undefined as R;
    const paths = color.split('.') as Split<T, '.'>;
    let result = theme.colors;

    paths.forEach((item) => {
      // @ts-ignore
      result = result && item ? result[item] : undefined;
    });

    if (!config.disableWarning && !result) {
      console.warn(`Please pass the correct color name, now is: ${color}`);
    }

    return result as unknown as R;
  };
