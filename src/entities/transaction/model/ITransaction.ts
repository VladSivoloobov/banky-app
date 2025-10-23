import { ICompany } from '@/entities/company/@x/transaction';

export interface ITransaction {
  cost: number;
  transactionType: 'Money Transfer' | 'Food' | 'Entertainment';
  date: Date;
  company: ICompany;
}
