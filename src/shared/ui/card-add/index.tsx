import { colors } from '@/shared/const';
import { PlusIcon } from '@/shared/icons';
import { StyleSheet, View } from 'react-native';

export function CardAdd() {
  return (
    <View style={styles.cardAdd}>
      <PlusIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  cardAdd: {
    backgroundColor: colors.secondaryBlack,
    borderRadius: 16,
    flex: 1,
    maxWidth: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
