import { colors, margins } from '@/shared/const';
import { useInject } from '@/shared/hooks/useInject';
import { DateService } from '@/shared/lib';
import { Circle } from '@/shared/ui/circle';
import UText from '@/shared/ui/utext';
import { Image, StyleSheet, View } from 'react-native';
import { TransactionItemProps } from './types';

const getTransactionTypeColor = (type: string): string => {
  switch (type) {
    case 'Money Transfer':
      return colors.secondaryOrange;
    case 'Food':
      return colors.orange;
    case 'Entertainment':
      return colors.tertiaryOrange;
    default:
      return colors.secondaryOrange;
  }
};

export function TransactionItem({
  style,
  transaction,
  ...props
}: TransactionItemProps) {
  const dateService = useInject(DateService);

  return (
    <View {...props} style={[styles.transactionItem, style]}>
      <Image
        style={styles.transactionAvatar}
        source={transaction.company.avatar}
      />
      <View style={styles.transactionCompany}>
        <UText size='xs' style={styles.transactionName}>
          {transaction.company.name}
        </UText>
        <View style={styles.transactionTypeWrapper}>
          <Circle color={getTransactionTypeColor(transaction.transactionType)} />
          <UText size='xs' style={styles.transactionType}>
            {transaction.transactionType}
          </UText>
        </View>
      </View>
      <View style={styles.transactionPriceAndDateWrapper}>
        <UText size='xs' weight={500} style={styles.transactionCost}>
          ${transaction.cost}
        </UText>
        <UText size='xs' style={styles.transactionDate}>
          {dateService.createShortDate(transaction.date)}
        </UText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  transactionItem: {
    backgroundColor: colors.secondaryBlack,
    borderRadius: 16,
    flexDirection: 'row',
    paddingVertical: 17,
    paddingHorizontal: 16,
    gap: 5,
    alignItems: 'center',
  },
  transactionType: {
    color: colors.gray,
  },
  transactionAvatar: {
    height: 36,
    width: 36,
    marginRight: margins.xm,
    borderRadius: 12,
  },
  transactionCompany: {
    marginRight: 'auto',
  },
  transactionTypeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  transactionPriceAndDateWrapper: {
    justifyContent: 'flex-end',
  },
  transactionCost: {
    textAlign: 'right',
    marginBottom: 4,
  },
  transactionName: {
    marginBottom: 4,
  },
  transactionDate: {
    color: colors.gray,
  },
});
