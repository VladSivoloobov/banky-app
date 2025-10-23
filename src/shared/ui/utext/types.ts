import { TextProps } from 'react-native';

export type UTextProps = {
  size?: 's' | 'm' | 'xs' | 'xm';
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
} & TextProps;
