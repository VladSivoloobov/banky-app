import { colors } from '@/shared/const';
import { StyleSheet, View } from 'react-native';
import SafeArea from '../safe-area';
import { RootViewProps } from './styles';

export default function RootView({
  style,
  children,
  safeAreaStyles,
  ...props
}: RootViewProps) {
  return (
    <View style={[styles.rootView, style]} {...props}>
      <SafeArea style={safeAreaStyles}>{children}</SafeArea>
    </View>
  );
}

const styles = StyleSheet.create({
  rootView: {
    backgroundColor: colors.black,
    flex: 1,
  },
});
