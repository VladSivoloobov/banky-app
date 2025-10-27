import { colors } from '@/shared/const';
import { StyleSheet, View } from 'react-native';
import { NotificationType } from '../model/INotification';
import { OfferIcon } from './icons/OfferIcon';
import { PaymentIcon } from './icons/PaymentIcon';
import { SecurityIcon } from './icons/SecurityIcon';
import { TravelIcon } from './icons/TravelIcon';

interface NotificationIconProps {
  type: NotificationType;
}

const iconMap: Record<NotificationType, React.FC> = {
  travel: TravelIcon,
  security: SecurityIcon,
  payment: PaymentIcon,
  offer: OfferIcon,
};

export function NotificationIcon({ type }: NotificationIconProps) {
  const Icon = iconMap[type];

  return (
    <View style={styles.iconContainer}>
      <Icon />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: colors.secondaryBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
