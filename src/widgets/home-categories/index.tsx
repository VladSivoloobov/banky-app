import { margins } from '@/shared/const';
import { BonusesIcon, DeliveryIcon, EarthIcon } from '@/shared/icons';
import { SupportIcon } from '@/shared/icons/SupportIcon';
import { HomeCategory } from '@/shared/ui/home-category';
import { StyleSheet, View } from 'react-native';

export function HomeCategories() {
  return (
    <View style={styles.categories}>
      <HomeCategory title='Travel' icon={<EarthIcon />} />
      <HomeCategory title='Delivery' icon={<DeliveryIcon />} />
      <HomeCategory title='Bonuses' icon={<BonusesIcon />} />
      <HomeCategory title='Support' icon={<SupportIcon />} />
    </View>
  );
}

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    gap: margins.xxm,
    justifyContent: 'space-around',
    marginBottom: margins.xxm,
  },
});
