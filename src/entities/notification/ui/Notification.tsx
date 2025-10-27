import { useInject } from '@/shared/hooks/useInject';
import { DateService } from '@/shared/lib';
import UText from '@/shared/ui/utext';
import { Image, View } from 'react-native';
import { INotification, NotificationType } from '../model/INotification';

const NotificationFooter = ({
  date,
  type,
}: {
  date: Date;
  type: NotificationType;
}) => {
  const dateService = useInject(DateService);

  return (
    <UText>
      {dateService.createShortDate(date)} · {type}
    </UText>
  );
};

const notificationContent = {
  payment: (props: INotification) => (
    <>
      <UText>{props.type === 'payment' && props.amount}</UText>
      <UText>{props.type === 'payment' && props.accountNumber}</UText>
      <UText>{props.type === 'payment' && props.balance}</UText>
    </>
  ),
  message: (props: INotification) => (
    <>
      <UText>{props.type === 'message' && props.message}</UText>
    </>
  ),
};

export function Notification(props: INotification) {
  return (
    <View>
      <Image />
      <View>
        <UText weight={500} size='xs'>
          {props.title}
        </UText>
        {notificationContent[props.type](props)}
        <NotificationFooter type={props.type} date={props.date} />
      </View>
    </View>
  );
}
