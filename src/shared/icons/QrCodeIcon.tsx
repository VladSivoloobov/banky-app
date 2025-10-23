import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

export function QrCodeIcon(props: SvgProps) {
  return (
    <Svg width={40} height={40} viewBox='0 0 40 40' fill='none' {...props}>
      <G clipPath='url(#clip0_2118_15592)'>
        <Path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.833 10.833H17.5V12.5h-5v5h-1.667v-6.667zm3.334 8.334v-5h5v5h-5zm1.666-1.667H17.5v-1.667h-1.667V17.5zm5 1.667v-5h5v5h-5zM22.5 17.5h1.667v-1.667H22.5V17.5zM14.167 25v.833h5v-5h-5V25zm3.333-.833h-1.667V22.5H17.5v1.667zm-5.833 5h-.834V22.5H12.5v5h5v1.667h-5.833zm17.5-18.334V17.5H27.5v-5h-5v-1.667h6.667zm0 17.5v.834H22.5V27.5h5v-5h1.667v5.833zm-8.334-7.5v5h5.209v-1.666H22.5v-3.334h-1.667zm3.334 0V22.5h1.666v-1.667h-1.666z'
          fill='#fff'
        />
      </G>
      <Defs>
        <ClipPath id='clip0_2118_15592'>
          <Path fill='#fff' transform='translate(10 10)' d='M0 0H20V20H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
