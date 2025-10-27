import { colors } from '@/shared/const';
import UText from '@/shared/ui/utext';
import { StyleSheet } from 'react-native';
import { formatAmount, formatBalance } from '../../lib/formatters';
import { IPaymentNotification } from '../../model/INotification';

interface PaymentContentProps {
  notification: IPaymentNotification;
}

/**
 * Payment notification content component
 * Single Responsibility: Display payment-specific information
 */
export function PaymentContent({ notification }: PaymentContentProps) {
  const formattedAmount = formatAmount(notification.amount);

  return (
    <>
      <UText weight={600} size='xl' style={styles.amount}>
        {formattedAmount}
      </UText>
      <UText size='xs' style={styles.secondaryText}>
        {notification.accountNumber}
      </UText>
      <UText size='xs' style={styles.secondaryText}>
        ${formatBalance(notification.balance)}
      </UText>
    </>
  );
}

const styles = StyleSheet.create({
  amount: {
    color: colors.orange,
  },
  secondaryText: {
    color: colors.secondaryGray,
  },
});
