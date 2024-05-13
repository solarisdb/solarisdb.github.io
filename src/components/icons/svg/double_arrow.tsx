import type { FC } from 'react';

import type { SvgIconProps } from '../base';
import { SvgBaseIcon } from '../base';

export const DoubleArrowIcon: FC<SvgIconProps> = (props) => {
  return (
    <SvgBaseIcon viewBox="0 0 29 29" {...props}>
      <path d="M8.942 7.148c-.093.051-.963.871-1.934 1.823-4.196 4.116-4.746 4.67-4.837 4.871a1.046 1.046 0 0 0-.002.83c.112.245 6.475 6.513 6.781 6.679.345.187.939.127 1.215-.122.288-.26.38-.874.188-1.245-.13-.253-2.668-2.687-4.032-3.868-.578-.5-1.043-.917-1.034-.926.01-.009.471.005 1.026.033 1.335.066 13.251.066 14.585 0 .555-.028 1.017-.042 1.027-.032.01.01-.455.427-1.033.926-1.053.91-3.75 3.479-3.974 3.786-.092.126-.124.238-.137.486-.024.433.151.79.47.959.269.142.712.151.995.021.209-.096 6.521-6.251 6.74-6.573.17-.249.196-.697.058-.983-.127-.261-6.514-6.546-6.782-6.673-.251-.119-.762-.112-1.009.014-.275.14-.447.424-.472.779-.039.531-.017.561 1.577 2.114.789.769 1.92 1.816 2.513 2.326.593.511 1.072.934 1.064.941-.009.007-.636-.016-1.393-.051-1.91-.087-11.962-.087-13.872 0-.758.035-1.384.058-1.391.052-.008-.006.438-.399.991-.873a50.43 50.43 0 0 0 1.584-1.419c1.51-1.448 2.446-2.386 2.516-2.522.046-.088.078-.272.079-.45.002-.365-.122-.638-.379-.834-.157-.12-.226-.138-.569-.149-.309-.009-.425.007-.559.08" />
    </SvgBaseIcon>
  );
};
