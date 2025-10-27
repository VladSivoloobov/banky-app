import { colors } from '@/shared/const';
import UText from '@/shared/ui/utext';
import { StyleSheet } from 'react-native';
import { formatNotificationDate } from '../lib/formatters';

interface NotificationFooterProps {
  date: Date;
  category: string;
}

/**
 * Notification footer component
 * Single Responsibility: Display notification date and category
 */
export function NotificationFooter({ date, category }: NotificationFooterProps) {
  return (
    <UText size='xs' style={styles.footer}>
      {formatNotificationDate(date)} · {category}
    </UText>
  );
}

const styles = StyleSheet.create({
  footer: {
    color: colors.darkGray,
    marginTop: 4,
  },
});

