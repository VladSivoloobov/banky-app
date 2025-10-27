import { INotification } from '../model/INotification';
import { OfferContent } from './content/OfferContent';
import { PaymentContent } from './content/PaymentContent';
import { SecurityContent } from './content/SecurityContent';
import { TravelContent } from './content/TravelContent';

interface NotificationContentProps {
  notification: INotification;
}

export function NotificationContent({ notification }: NotificationContentProps) {
  switch (notification.type) {
    case 'payment':
      return <PaymentContent notification={notification} />;
    case 'travel':
      return <TravelContent notification={notification} />;
    case 'security':
      return <SecurityContent notification={notification} />;
    case 'offer':
      return <OfferContent notification={notification} />;
    default:
      return null;
  }
}

