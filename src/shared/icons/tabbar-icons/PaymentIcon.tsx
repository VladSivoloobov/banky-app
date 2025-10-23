import { colors } from '@/shared/const';
import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { TabBarIconProps } from './types';

export function PaymentIcon({ focused, ...props }: TabBarIconProps) {
  return (
    <Svg width={20} height={20} viewBox='0 0 20 20' fill='none' {...props}>
      <G clipPath='url(#clip0_7550_151)'>
        <Path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13.497.068L14.92 1.49l4.24 4.24.59.59-.59.589-4.24 4.24-1.423 1.423V9.11H8.278V3.53h5.22V.067zM6.503 7.424L5.08 8.847l-4.24 4.24-.59.59.59.589 4.24 4.24 1.423 1.423v-3.462h5.219v-5.58h-5.22V7.423z'
          fill={focused ? colors.orange : colors.white}
        />
      </G>
      <Defs>
        <ClipPath id='clip0_7550_151'>
          <Path
            fill={focused ? colors.orange : colors.white}
            d='M0 0H20V20H0z'
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
