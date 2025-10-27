import { Image, StyleSheet, View } from 'react-native';
import { margins } from '@/shared/const';
import { INotification } from '../model/INotification';
import { NotificationIcon } from './NotificationIcon';
import { SendIcon } from './icons/SendIcon';

interface NotificationAvatarProps {
  notification: INotification;
}

export function NotificationAvatar({ notification }: NotificationAvatarProps) {
  const renderAvatar = () => {
    if (notification.type === 'payment') {
      if (notification.amount < 0) {
        return (
          <View style={styles.iconContainer}>
            <SendIcon />
          </View>
        );
      }
      return <Image source={notification.company.avatar} style={styles.avatar} />;
    }
    return <NotificationIcon type={notification.type} />;
  };

  return <View style={styles.container}>{renderAvatar()}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginRight: margins.xm,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#0F0F0F',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

