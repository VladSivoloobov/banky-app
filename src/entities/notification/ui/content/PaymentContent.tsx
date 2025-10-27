import { colors } from '@/shared/const';
import UText from '@/shared/ui/utext';
import { StyleSheet } from 'react-native';
import { formatAmount, formatBalance } from '../../lib/formatters';
import { IPaymentNotification } from '../../model/INotification';

interface PaymentContentProps {
  notification: IPaymentNotification;
}

export function PaymentContent({ notification }: PaymentContentProps) {
  const formattedAmount = formatAmount(notification.amount);

  return (
    <>
      <UText weight={600} size='l' style={styles.amount}>
        {formattedAmount}
      </UText>
      <UText size='xs' style={styles.accountNumber}>
        {notification.accountNumber}
      </UText>
      <UText size='xs' style={styles.balance}>
        ${formatBalance(notification.balance)}
      </UText>
    </>
  );
}

const styles = StyleSheet.create({
  amount: {
    color: colors.orange,
  },
  accountNumber: {
    color: colors.secondaryGray,
    marginTop: 2,
  },
  balance: {
    color: colors.secondaryGray,
    marginTop: 2,
  },
});
