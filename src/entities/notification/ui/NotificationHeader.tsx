import { colors } from '@/shared/const';
import UText from '@/shared/ui/utext';
import { StyleSheet } from 'react-native';
import { INotification } from '../model/INotification';

interface NotificationHeaderProps {
  notification: INotification;
}

/**
 * Notification header component
 * Single Responsibility: Display notification title
 */
export function NotificationHeader({ notification }: NotificationHeaderProps) {
  return (
    <UText weight={500} size='m' style={styles.title}>
      {notification.title}
    </UText>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    marginBottom: 2,
  },
});

