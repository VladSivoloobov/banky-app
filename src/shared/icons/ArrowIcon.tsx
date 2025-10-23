import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function ArrowIcon(props: SvgProps) {
  return (
    <Svg width={6} height={10} viewBox='0 0 6 10' fill='none' {...props}>
      <Path d='M.53.53l4 4-4 4' stroke='#fff' strokeWidth={1.5} />
    </Svg>
  );
}
