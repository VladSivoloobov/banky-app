import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function BonusesIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox='0 0 24 24' fill='none' {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7 5a2 2 0 114 0v2.5h2V5a2 2 0 114 0c0 .226-.18 1.085-1.055 1.668l-1.5 1 1.11 1.664 1.5-1C18.58 7.315 19 5.774 19 5a4 4 0 00-7-2.646A4 4 0 005 5c0 .774.42 2.315 1.945 3.332l1.5 1 1.11-1.664-1.5-1C7.18 6.085 7 5.226 7 5z'
        fill='#FE5900'
      />
      <Path
        opacity={0.2}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1 7h22v5.5h-1V23H2V12.5H1V7z'
        fill='#FE5900'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22 12.5H2v2h9V23h2v-8.5h9v-2z'
        fill='#FE5900'
      />
    </Svg>
  );
}
