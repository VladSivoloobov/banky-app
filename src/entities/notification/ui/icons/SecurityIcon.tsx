import { colors } from '@/shared/const';
import Svg, { Path } from 'react-native-svg';

/**
 * Security notification icon
 * Represents security and protection related notifications
 */
export function SecurityIcon() {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <Path
        d='M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14h2v2h-2v-2zm0-8h2v6h-2V8z'
        fill={colors.orange}
      />
    </Svg>
  );
}
