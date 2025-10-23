import { colors, margins } from '@/shared/const';
import { ProfileIcon } from '@/shared/icons';
import { ArrowIcon } from '@/shared/icons/ArrowIcon';
import { StyleSheet, View } from 'react-native';
import UText from '../utext';
import { ProfileButtonProps } from './types';

export function ProfileButton({ name }: ProfileButtonProps) {
  return (
    <View style={styles.profileButton}>
      <View style={styles.profileIconBackground}>
        <ProfileIcon />
      </View>
      <UText weight={500} style={styles.profileName}>
        {name}
      </UText>
      <ArrowIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  profileIconBackground: {
    height: 36,
    width: 36,
    backgroundColor: colors.secondaryBlack,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
  },
  profileName: {
    marginRight: margins.xxs,
    marginLeft: margins.xm,
  },
  profileNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: margins.xxs,
  },
});
