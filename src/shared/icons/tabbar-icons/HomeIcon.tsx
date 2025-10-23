import { colors } from '@/shared/const';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TabBarIconProps } from './types';

export function HomeIcon({ focused, ...props }: TabBarIconProps) {
  return (
    <Svg width={20} height={20} viewBox='0 0 20 20' fill='none' {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.25 8.25L9.625 0 0 8.25v10.913h19.25V8.25z'
        fill={focused ? colors.orange : colors.white}
      />
    </Svg>
  );
}
