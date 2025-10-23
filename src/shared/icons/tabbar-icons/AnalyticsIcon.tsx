import { colors } from '@/shared/const';
import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { TabBarIconProps } from './types';

export function AnalyticsIcon({ focused, ...props }: TabBarIconProps) {
  return (
    <Svg width={20} height={20} viewBox='0 0 20 20' fill='none' {...props}>
      <G clipPath='url(#clip0_7550_162)'>
        <Path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.834.009h.833a8.325 8.325 0 018.325 8.324v.834h-9.158V.009zM.044 11.63A8.325 8.325 0 018.37 3.306h.833V10.797h7.492v.833a8.325 8.325 0 11-16.65 0z'
          fill={focused ? colors.orange : colors.white}
        />
      </G>
      <Defs>
        <ClipPath id='clip0_7550_162'>
          <Path
            fill={focused ? colors.orange : colors.white}
            d='M0 0H20V20H0z'
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
