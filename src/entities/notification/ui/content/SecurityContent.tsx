import { colors } from '@/shared/const';
import UText from '@/shared/ui/utext';
import { StyleSheet } from 'react-native';
import { ISecurityNotification } from '../../model/INotification';

interface SecurityContentProps {
  notification: ISecurityNotification;
}

/**
 * Security notification content component
 * Single Responsibility: Display security-specific information
 */
export function SecurityContent({ notification }: SecurityContentProps) {
  return (
    <>
      <UText size='xs' style={styles.messageText}>
        {notification.description}
      </UText>
      <UText size='xs' style={styles.secondaryText}>
        {notification.details}
      </UText>
    </>
  );
}

const styles = StyleSheet.create({
  messageText: {
    color: colors.gray,
  },
  secondaryText: {
    color: colors.secondaryGray,
  },
});
