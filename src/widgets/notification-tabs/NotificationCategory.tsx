import { Notification } from '@/entities/notification';
import { colors, margins } from '@/shared/const';
import UText from '@/shared/ui/utext';
import { SectionList, StyleSheet, View } from 'react-native';
import { NotificationCategoryProps } from './types';

export function NotificationCategory({ data }: NotificationCategoryProps) {
  return (
    <SectionList
      sections={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Notification notification={item} />}
      renderSectionHeader={({ section }) => (
        <View style={styles.sectionHeader}>
          <UText size='xs' weight={500} style={styles.sectionTitle}>
            {section.title}
          </UText>
        </View>
      )}
      renderSectionFooter={() => <View style={styles.separator} />}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: colors.black,
  },
  contentContainer: {
    paddingBottom: margins.xxm,
  },
  sectionHeader: {
    backgroundColor: colors.black,
    paddingHorizontal: margins.s,
    paddingTop: margins.s,
  },
  sectionTitle: {
    color: colors.secondaryGray,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  separator: {
    height: 1,
    backgroundColor: colors.tertiaryBlack,
  },
});
