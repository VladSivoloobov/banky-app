import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

export function ProfileIcon(props: SvgProps) {
  return (
    <Svg width={16} height={16} viewBox='0 0 16 16' fill='none' {...props}>
      <G clipPath='url(#clip0_2118_15586)'>
        <Path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 4.333v4H4v-4a4 4 0 118 0zM1 12a66.092 66.092 0 01-.433-.507l.002-.001.003-.003.009-.008a3.042 3.042 0 01.128-.1 6.27 6.27 0 01.368-.254c.32-.206.79-.474 1.41-.74C3.73 9.855 5.57 9.333 8 9.333s4.27.522 5.513 1.054a9.63 9.63 0 011.41.74 6.268 6.268 0 01.496.354l.01.008.002.003h.002v.001L15 12l.434-.506.233.2v3.973H.333v-3.974l.234-.2L1 12z'
          fill='#fff'
        />
      </G>
      <Defs>
        <ClipPath id='clip0_2118_15586'>
          <Path fill='#fff' d='M0 0H16V16H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
