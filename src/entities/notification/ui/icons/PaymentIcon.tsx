import { colors } from '@/shared/const';
import Svg, { Path } from 'react-native-svg';

/**
 * Payment notification icon
 * Represents payment and transaction related notifications
 */
export function PaymentIcon() {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z'
        fill={colors.orange}
      />
      <Path
        d='M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z'
        fill={colors.black}
      />
    </Svg>
  );
}
