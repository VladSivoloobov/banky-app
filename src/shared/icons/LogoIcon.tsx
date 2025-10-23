import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function LogoIcon(props: SvgProps) {
  return (
    <Svg width={26} height={16} viewBox='0 0 26 16' fill='none' {...props}>
      <Path
        opacity={0.6}
        d='M8 0c1.892 0 3.63.658 5 1.757A7.983 7.983 0 0010 8a7.983 7.983 0 003 6.242A8 8 0 118 0zm10 0a8 8 0 11-5 14.242A7.983 7.983 0 0016 8a7.983 7.983 0 00-3-6.243A7.964 7.964 0 0118 0z'
        fill='#fff'
      />
    </Svg>
  );
}
