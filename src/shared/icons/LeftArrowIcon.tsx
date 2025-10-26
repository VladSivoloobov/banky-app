import Svg, { Path, SvgProps } from 'react-native-svg';

export function LeftArrowIcon(props: SvgProps) {
  return (
    <Svg {...props} width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <Path d='M15 6L9 12L15 18' stroke='white' stroke-width='2' />
    </Svg>
  );
}
