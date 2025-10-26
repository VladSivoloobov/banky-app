import { StyleProp, ViewProps, ViewStyle } from 'react-native';

export type RootViewProps = {
  safeAreaStyles?: StyleProp<ViewStyle>;
} & ViewProps;
