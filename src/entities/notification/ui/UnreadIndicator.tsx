import { colors, margins } from '@/shared/const';
import { StyleSheet, View } from 'react-native';

interface UnreadIndicatorProps {
  isRead?: boolean;
}

/**
 * Unread indicator component
 * Single Responsibility: Display unread status indicator
 */
export function UnreadIndicator({ isRead }: UnreadIndicatorProps) {
  if (isRead) {
    return null;
  }

  return <View style={styles.unreadDot} />;
}

const styles = StyleSheet.create({
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.orange,
    marginLeft: margins.xxs,
    marginTop: 8,
  },
});

