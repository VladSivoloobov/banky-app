import { colors } from '@/shared/const';
import Svg, { Path } from 'react-native-svg';

export function SecurityIcon() {
  return (
    <Svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
      <Path
        d='M10 0.000189244L9.42133 0.558605C7.76043 2.16137 5.20514 2.38492 3.29117 1.09491L2.96575 0.875581L1.66667 0V15.497L2.10404 15.7332L9.604 19.7832L9.99992 19.997L10 0.000189244Z'
        fill={colors.orange}
      />
      <Path
        opacity='0.2'
        d='M9.99992 0.000189244L10.5786 0.558605C12.2395 2.16137 14.7948 2.38492 16.7088 1.09491L17.0342 0.875581L18.3333 0V15.497L17.8959 15.7332L10.3959 19.7832L10 19.997L9.99992 0.000189244Z'
        fill={colors.orange}
      />
    </Svg>
  );
}
