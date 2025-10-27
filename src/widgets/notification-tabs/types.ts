import { INotificationSection } from '@/entities/notification';

export type TabKey = 'all' | 'payments' | 'system' | 'delivery' | 'travel';

export type NotificationCategoryProps = {
  data: INotificationSection[];
};
