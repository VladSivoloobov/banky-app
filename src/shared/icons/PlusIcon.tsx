import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function PlusIcon(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox='0 0 16 16' fill='none' {...props}>
      <Path stroke='#fff' strokeWidth={1.5} d='M8.25 1L8.25 15' />
      <Path stroke='#fff' strokeWidth={1.5} d='M15 7.75L1 7.75' />
    </Svg>
  );
}
