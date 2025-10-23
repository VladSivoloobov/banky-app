import { colors } from '@/shared/const';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TabBarIconProps } from './types';

export function HistoryIcon({ focused, ...props }: TabBarIconProps) {
  return (
    <Svg width={21} height={20} viewBox='0 0 21 20' fill='none' {...props}>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.495.667A9.164 9.164 0 001.33 9.833 9.168 9.168 0 0010.495 19a9.164 9.164 0 009.165-9.167A9.167 9.167 0 0010.495.667zm-.833 4.166v5.834h4.166V9h-2.5V4.833H9.662z'
        fill={focused ? colors.orange : colors.white}
      />
    </Svg>
  );
}
