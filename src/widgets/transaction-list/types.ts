import { ITransaction } from '@/entities/transaction';
import { ReactElement } from 'react';

export type TransactionListProps = {
  data: ITransaction[];
  renderItem: ReactElement;
};
