import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

export function DeliveryIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox='0 0 24 24' fill='none' {...props}>
      <G
        clipPath='url(#clip0_2118_15612)'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='#FE5900'
      >
        <Path opacity={0.2} d='M9 7H8v11h12V7H9z' />
        <Path d='M17 15h-4v-2h4v2z' />
        <Path d='M5.707 2.572l-2.5-2.5-1.414 1.414L4 3.694V18.17A3.001 3.001 0 107.83 22h11.256l1.707 1.706 1.414-1.414-2-2-.293-.293H7.83a3.008 3.008 0 00-1.828-1.829V2.865l-.294-.293z' />
      </G>
      <Defs>
        <ClipPath id='clip0_2118_15612'>
          <Path fill='#fff' d='M0 0H24V24H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
