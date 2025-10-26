import { colors } from '@/shared/const';
import { LeftArrowIcon, ReadNotificationsIcon } from '@/shared/icons';
import SafeArea from '@/shared/ui/safe-area';
import UText from '@/shared/ui/utext';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

export function Header() {
  const router = useRouter();

  return (
    <SafeArea style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable onPress={router.back}>
          <LeftArrowIcon />
        </Pressable>
        <UText style={{ fontSize: 21 }} weight={500}>
          Notifications
        </UText>
        <ReadNotificationsIcon />
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.black,
    paddingBottom: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
});
