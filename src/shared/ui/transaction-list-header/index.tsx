import { StyleSheet, View } from 'react-native';
import UText from '../utext';
import { TransactionListHeaderProps } from './types';

export default function TransactionListHeader({
  title,
}: TransactionListHeaderProps) {
  return (
    <View style={styles.wrapper}>
      <UText size='m' style={styles.title} weight={500}>
        {title}
      </UText>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {},
  wrapper: {
    marginBottom: 10,
  },
});
