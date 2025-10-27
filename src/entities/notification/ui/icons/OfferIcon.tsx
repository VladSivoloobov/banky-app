import { colors } from '@/shared/const';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export function OfferIcon() {
  return (
    <Svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
      <G clipPath='url(#clip0_8059_44_offer)'>
        <Path
          opacity='0.2'
          d='M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0Z'
          fill={colors.orange}
        />
        <Path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.2534 10.6136L12.5001 12.9001V19.6849C16.8132 18.5748 20.0001 14.6596 20.0001 9.99999C20.0001 7.82301 19.3044 5.80852 18.1233 4.16666H12.9572C10.8638 4.16666 9.16675 5.86367 9.16675 7.95703C9.16675 8.95074 9.557 9.90474 10.2534 10.6136ZM0.138348 11.6667H5.00008C6.84103 11.6667 8.33342 13.1591 8.33342 15V19.8617C4.14591 19.1592 0.840876 15.8542 0.138348 11.6667Z'
          fill={colors.orange}
        />
      </G>
      <Defs>
        <ClipPath id='clip0_8059_44_offer'>
          <Rect width='20' height='20' fill='white' />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
