import { QrCodeIcon } from '@/shared/icons';
import { ProfileButton } from '@/shared/ui/profile-button';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

export function HomeHeader() {
  const navigator = useRouter();

  return (
    <Pressable
      onPress={() => {
        navigator.push('/(tabs)/(home)/notifications');
      }}
      style={styles.profileHeader}
    >
      <ProfileButton name='Charlotte' />
      <QrCodeIcon style={styles.qrCodeIcon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  qrCodeIcon: {
    marginLeft: 'auto',
  },
  profileHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
});
