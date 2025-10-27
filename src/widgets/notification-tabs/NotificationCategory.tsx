import { SectionList } from 'react-native';
import { NotificationCategoryProps } from './types';
import { INotificationSection, Notification } from '@/entities/notification';

export function NotificationCategory({data}: INotificationSection[]) {
  return <SectionList renderItem={({index, item, section, separators}) => {
    return (
      <Notification title={item.} />
    )
  }} sections={data} />;
}
