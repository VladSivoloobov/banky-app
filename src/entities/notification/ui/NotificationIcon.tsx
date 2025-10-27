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

/**
 * Map of notification types to their corresponding icon components
 * Following Open/Closed Principle - easy to extend with new notification types
 */
const iconMap: Record<NotificationType, React.FC> = {
  travel: TravelIcon,
  security: SecurityIcon,
  payment: PaymentIcon,
  offer: OfferIcon,
};

/**
 * Notification icon component
 * Single Responsibility: Display appropriate icon based on notification type
 * Following Strategy Pattern for icon selection
 */
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
    borderRadius: 24,
    backgroundColor: colors.secondaryBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
