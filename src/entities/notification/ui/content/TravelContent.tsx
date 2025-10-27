import { colors } from '@/shared/const';
import UText from '@/shared/ui/utext';
import { StyleSheet } from 'react-native';
import { ITravelNotification } from '../../model/INotification';

interface TravelContentProps {
  notification: ITravelNotification;
}

/**
 * Travel notification content component
 * Single Responsibility: Display travel-specific message
 */
export function TravelContent({ notification }: TravelContentProps) {
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
