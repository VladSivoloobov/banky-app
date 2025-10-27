// Re-export mock data
export { mockNotifications } from '../../widgets/notification-tabs/mockNotifications';

// Type exports
export type {
  INotification,
  INotificationBase,
  INotificationSection,
  IOfferNotification,
  IPaymentNotification,
  ISecurityNotification,
  ITravelNotification,
  NotificationType,
} from './model/INotification';

// Utility exports
export {
  formatAmount,
  formatBalance,
  formatNotificationDate,
} from './lib/formatters';

// Component exports
export { Notification } from './ui/Notification';
export { NotificationAvatar } from './ui/NotificationAvatar';
export { NotificationContent } from './ui/NotificationContent';
export { NotificationFooter } from './ui/NotificationFooter';
export { NotificationHeader } from './ui/NotificationHeader';
export { NotificationIcon } from './ui/NotificationIcon';
export { UnreadIndicator } from './ui/UnreadIndicator';

// Content component exports
export { OfferContent } from './ui/content/OfferContent';
export { PaymentContent } from './ui/content/PaymentContent';
export { SecurityContent } from './ui/content/SecurityContent';
export { TravelContent } from './ui/content/TravelContent';

// Icon exports
export { OfferIcon } from './ui/icons/OfferIcon';
export { PaymentIcon } from './ui/icons/PaymentIcon';
export { SecurityIcon } from './ui/icons/SecurityIcon';
export { TravelIcon } from './ui/icons/TravelIcon';
