import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function EarthIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox='0 0 24 24' fill='none' {...props}>
      <Path
        opacity={0.2}
        d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z'
        fill='#FE5900'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.304 12.736L15 15.48v8.142c5.176-1.332 9-6.03 9-11.622 0-2.612-.835-5.03-2.252-7h-6.2a4.548 4.548 0 00-3.244 7.736zM.166 14H6a4 4 0 014 4v5.834A12.01 12.01 0 01.166 14z'
        fill='#FE5900'
      />
    </Svg>
  );
}
