import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SafeArea({ style, ...props }: ViewProps) {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          paddingLeft: safeAreaInsets.left,
          paddingRight: safeAreaInsets.right,
          paddingBottom: safeAreaInsets.bottom,
          paddingTop: safeAreaInsets.top,
        },
        style,
      ]}
      {...props}
    />
  );
}
