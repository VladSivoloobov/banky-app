import { margins } from '@/shared/const';
import { StyleSheet, View } from 'react-native';
import UText from '../utext';
import { HomeCategoryProps } from './types';

export function HomeCategory({ title, icon }: HomeCategoryProps) {
  return (
    <View style={styles.homeCategory}>
      <View style={styles.iconWrapper}>{icon}</View>
      <UText size='xs' weight={500}>
        {title}
      </UText>
    </View>
  );
}

const styles = StyleSheet.create({
  homeCategory: {
    gap: margins.xxs,
  },
  iconWrapper: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
});
