import { INotificationSection } from '../../entities/notification/model/INotification';

export const mockNotifications: INotificationSection[] = [
  {
    title: 'TODAY, 17 JUNE',
    data: [
      {
        id: '1',
        type: 'payment',
        title: 'Received from Anna',
        amount: 110,
        company: {
          name: 'Anna',
          avatar: require('@/shared/assets/images/avatars/man.png'),
        },
        accountNumber: 'Debit •• 4385',
        balance: 4098.12,
        date: new Date('2025-06-17T17:49:00'),
        category: 'Payments',
        isRead: false,
      },
    ],
  },
  {
    title: 'YESTERDAY, 16 JUNE',
    data: [
      {
        id: '2',
        type: 'message',
        title: 'See our limited offer!',
        message: "Would you like to visit new countries? Maybe it's your time!",
        date: new Date('2025-06-16T23:08:00'),
        category: 'Travel',
        isRead: true,
      },
      {
        id: '3',
        type: 'payment',
        title: 'Sent to •• 2041',
        amount: -14.62,
        company: {
          name: 'Transfer',
          avatar: require('@/shared/assets/images/avatars/man.png'),
        },
        accountNumber: 'Debit •• 4385',
        balance: 3987.5,
        date: new Date('2025-06-16T06:18:00'),
        category: 'Payments',
        isRead: true,
      },
    ],
  },
  {
    title: '24 MARCH, 2025',
    data: [
      {
        id: '4',
        type: 'message',
        title: 'New login into account',
        description: 'You have logged in from a new location:',
        message: 'iOS 26.0.1 · 109.255.84.7 · Spain',
        date: new Date('2025-03-24T15:44:00'),
        category: 'Security',
        isRead: true,
      },
    ],
  },
];
