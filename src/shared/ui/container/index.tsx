import { margins } from '@/shared/const';
import { StyleSheet, View, ViewProps } from 'react-native';

export default function Container({ style, ...props }: ViewProps) {
  return <View {...props} style={[styles.container, style]} />;
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: margins.s,
    paddingRight: margins.s,
  },
});
