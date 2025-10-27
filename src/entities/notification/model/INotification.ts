import { ICompany } from '@/entities/company/@x/notification';

export type NotificationType = 'payment' | 'travel' | 'security' | 'offer';

export interface INotificationBase {
  id: string;
  type: NotificationType;
  date: Date;
  category: string;
  isRead?: boolean;
}

export interface IPaymentNotification extends INotificationBase {
  type: 'payment';
  title: string;
  amount: number;
  company: ICompany;
  accountNumber: string;
  balance: number;
}

export interface ITravelNotification extends INotificationBase {
  type: 'travel';
  title: string;
  message: string;
}

export interface ISecurityNotification extends INotificationBase {
  type: 'security';
  title: string;
  description: string;
  details: string;
}

export interface IOfferNotification extends INotificationBase {
  type: 'offer';
  title: string;
  message: string;
}

export type INotification =
  | IPaymentNotification
  | ITravelNotification
  | ISecurityNotification
  | IOfferNotification;

export interface INotificationSection {
  title: string;
  data: INotification[];
}
