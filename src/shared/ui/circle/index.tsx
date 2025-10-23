import { colors } from '@/shared/const';
import { View } from 'react-native';
import { CircleProps } from './types';

export function Circle({
  color = colors.secondaryOrange,
  radius = 6,
}: CircleProps) {
  return (
    <View
      style={{
        width: radius,
        height: radius,
        backgroundColor: color,
        borderRadius: radius,
      }}
    />
  );
}
