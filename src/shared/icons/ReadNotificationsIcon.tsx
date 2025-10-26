import Svg, { Path } from 'react-native-svg';
import { colors } from '../const';

export function ReadNotificationsIcon() {
  return (
    <Svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      style={{ backgroundColor: colors.black }}
    >
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 17.4596H7.89131V20.5L11.8603 17.4596H21V3.5H5.43168L3 3.5L3 17.4596ZM11.0776 10.6648L9.73603 9.3958L8.33852 10.7177L9.68013 11.9603L11.0497 13.2823L12.4472 11.9868L15.6335 8.99922L14.264 7.67729L11.0776 10.6648Z'
        fill='white'
      />
    </Svg>
  );
}
