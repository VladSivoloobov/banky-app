import { margins } from '@/shared/const';
import Card from '@/shared/ui/card';
import { CardAdd } from '@/shared/ui/card-add';
import { StyleSheet, View } from 'react-native';

export function HomeCards() {
  return (
    <View style={styles.cards}>
      <Card balance='4,098.12' cardNumber={4385} />
      <Card balance='14.71' cardNumber={9081} cardType='virtual' />
      <CardAdd />
    </View>
  );
}

const styles = StyleSheet.create({
  cards: {
    flexDirection: 'row',
    gap: margins.xxs,
    marginBottom: margins.xxm,
  },
});
