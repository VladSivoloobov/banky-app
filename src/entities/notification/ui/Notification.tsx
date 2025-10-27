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
    paddingVertical: margins.xm,
    paddingHorizontal: margins.s,
    backgroundColor: colors.black,
    alignItems: 'flex-start',
  },
  content: {
    flex: 1,
    gap: 4,
  },
});
