import { QrCodeIcon } from '@/shared/icons';
import { ProfileButton } from '@/shared/ui/profile-button';
import { StyleSheet, View } from 'react-native';

export function HomeHeader() {
  return (
    <View style={styles.profileHeader}>
      <ProfileButton name='Charlotte' />
      <QrCodeIcon style={styles.qrCodeIcon} />
    </View>
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
