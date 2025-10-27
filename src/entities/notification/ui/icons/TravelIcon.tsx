import { colors } from '@/shared/const';
import Svg, { Path } from 'react-native-svg';

/**
 * Travel notification icon
 * Represents location/travel related notifications
 */
export function TravelIcon() {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z'
        fill={colors.orange}
      />
      <Path
        d='M12 11.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
        fill={colors.black}
      />
    </Svg>
  );
}
