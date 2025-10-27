import { Image, StyleSheet, View } from 'react-native';
import { margins } from '@/shared/const';
import { INotification } from '../model/INotification';
import { NotificationIcon } from './NotificationIcon';

interface NotificationAvatarProps {
  notification: INotification;
}

/**
 * Notification avatar/icon component
 * Single Responsibility: Display appropriate avatar or icon based on notification type
 */
export function NotificationAvatar({ notification }: NotificationAvatarProps) {
  return (
    <View style={styles.container}>
      {notification.type === 'payment' ? (
        <Image source={notification.company.avatar} style={styles.avatar} />
      ) : (
        <NotificationIcon type={notification.type} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: margins.xm,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});

