import { injectable } from 'inversify';

@injectable()
export class DateService {
  formatDate(date: Date): string {
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const isToday = date.setHours(0, 0, 0, 0) === currentDate;
    const isYesterday = currentDate === date.setDate(date.getDate() - 1);

    if (isToday) {
      return 'Today';
    } else if (isYesterday) {
      return 'Yesterday';
    } else {
      return `${date.getDate()}.${date.getMonth()}`;
    }
  }

  createShortDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    const formatted = date.toLocaleString('en-US', options);

    return formatted.replace(' at', ',');
  }
}
