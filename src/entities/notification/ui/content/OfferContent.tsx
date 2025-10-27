import { colors } from '@/shared/const';
import UText from '@/shared/ui/utext';
import { StyleSheet } from 'react-native';
import { IOfferNotification } from '../../model/INotification';

interface OfferContentProps {
  notification: IOfferNotification;
}

/**
 * Offer notification content component
 * Single Responsibility: Display offer-specific message
 */
export function OfferContent({ notification }: OfferContentProps) {
  return (
    <UText size='xs' style={styles.messageText}>
      {notification.message}
    </UText>
  );
}

const styles = StyleSheet.create({
  messageText: {
    color: colors.gray,
  },
});
