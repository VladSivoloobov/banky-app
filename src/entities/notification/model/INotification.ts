import { ICompany } from '@/entities/company/@x/notification';

export type NotificationType = 'payment' | 'message';

export interface INotificationBase {
  id: string;
  type: NotificationType;
  title: string;
  description?: string;
  date: Date;
  category: string;
  isRead?: boolean;
}

export interface IPaymentNotification extends INotificationBase {
  type: 'payment';
  amount: number;
  company: ICompany;
  accountNumber: string;
  balance: number;
}

export interface IMessageNotification extends INotificationBase {
  type: 'message';
  message: string;
}

export type INotification = IPaymentNotification | IMessageNotification;

export interface INotificationSection {
  title: string;
  data: INotification[];
}
