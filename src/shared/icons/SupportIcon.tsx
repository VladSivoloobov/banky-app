import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

export function SupportIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox='0 0 24 24' fill='none' {...props}>
      <G
        clipPath='url(#clip0_2118_15626)'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='#FE5900'
      >
        <Path d='M6 8a6 6 0 1112 0v8a4.5 4.5 0 01-4.5 4.5H13V19h-2v5h2v-1.5h.5A6.5 6.5 0 0020 16V8A8 8 0 104 8v9h2V8z' />
        <Path opacity={0.2} d='M6 8H0v9h6V8zM24 8h-6v9h6V8z' />
      </G>
      <Defs>
        <ClipPath id='clip0_2118_15626'>
          <Path fill='#fff' d='M0 0H24V24H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
