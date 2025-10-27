import { colors } from '@/shared/const';
import { Header } from '@/widgets/header';
import { NotificationTabs } from '@/widgets/notification-tabs';
import { StyleSheet, View } from 'react-native';

export function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <NotificationTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
