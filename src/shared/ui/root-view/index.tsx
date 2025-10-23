import { colors } from '@/shared/const';
import { StyleSheet, View, ViewProps } from 'react-native';
import SafeArea from '../safe-area';

export default function RootView({ style, children, ...props }: ViewProps) {
  return (
    <View style={[styles.rootView, style]} {...props}>
      <SafeArea>{children}</SafeArea>
    </View>
  );
}

const styles = StyleSheet.create({
  rootView: {
    backgroundColor: colors.black,
    flex: 1,
  },
});
