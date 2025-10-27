import { colors, margins } from '@/shared/const';
import { StyleSheet, View } from 'react-native';
import { INotification } from '../model/INotification';
import { NotificationAvatar } from './NotificationAvatar';
import { NotificationContent } from './NotificationContent';
import { NotificationFooter } from './NotificationFooter';
import { NotificationHeader } from './NotificationHeader';
import { UnreadIndicator } from './UnreadIndicator';

interface NotificationProps {
  notification: INotification;
}

/**
 * Main Notification component
 * Following SOLID principles:
 * - Single Responsibility: Orchestrates notification UI composition
 * - Open/Closed: Easy to extend without modification
 * - Dependency Inversion: Depends on abstractions (child components)
 *
 * Following Clean Code:
 * - Simple, readable structure
 * - Declarative composition
 * - Clear component hierarchy
 */
export function Notification({ notification }: NotificationProps) {
  return (
    <View style={styles.container}>
      <NotificationAvatar notification={notification} />

      <View style={styles.content}>
        <NotificationHeader notification={notification} />
        <NotificationContent notification={notification} />
        <NotificationFooter
          date={notification.date}
          category={notification.category}
        />
      </View>

      <UnreadIndicator isRead={notification.isRead} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: margins.s,
    paddingHorizontal: margins.s,
    backgroundColor: colors.black,
    alignItems: 'flex-start',
  },
  content: {
    flex: 1,
    gap: 4,
  },
});
