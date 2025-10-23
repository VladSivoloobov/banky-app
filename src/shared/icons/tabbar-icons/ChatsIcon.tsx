import { colors } from '@/shared/const';
import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { TabBarIconProps } from './types';

export function ChatsIcon({ focused, ...props }: TabBarIconProps) {
  return (
    <Svg width={20} height={20} viewBox='0 0 20 20' fill='none' {...props}>
      <G clipPath='url(#clip0_7550_167)'>
        <Path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10 0a10 10 0 00-8.967 14.427l-.88 5.414 5.452-.859c.789.386 1.628.668 2.494.836A8.333 8.333 0 1119.818 8.099 10 10 0 0010 0zm8.047 8.62a6.667 6.667 0 10-1.783 10.702l3.633.572-.586-3.61a6.665 6.665 0 00-1.264-7.665z'
          fill={focused ? colors.orange : colors.white}
        />
      </G>
      <Defs>
        <ClipPath id='clip0_7550_167'>
          <Path
            fill={focused ? colors.orange : colors.white}
            d='M0 0H20V20H0z'
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
