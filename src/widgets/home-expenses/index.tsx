import { colors, margins } from '@/shared/const';
import { GradientProgressBar } from '@/shared/ui/gradient-progress-bar';
import UText from '@/shared/ui/utext';
import { StyleSheet, View } from 'react-native';

export function HomeExpenses() {
  return (
    <View style={styles.homeExpenses}>
      <View style={styles.expensesWrapper}>
        <View style={styles.titleWrapper}>
          <UText weight={500} style={styles.title}>
            Expenses in{' '}
          </UText>
          <UText weight={500} style={[styles.title, styles.titleBold]}>
            June
          </UText>
        </View>
        <UText size='xm' style={styles.balance}>
          $5,091
        </UText>
      </View>
      <GradientProgressBar />
    </View>
  );
}

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 21,
  },
  titleBold: {
    color: colors.orange,
  },
  balance: {
    color: colors.secondaryGray,
  },
  expensesWrapper: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 21,
  },
  homeExpenses: {
    marginBottom: margins.m,
  },
});
