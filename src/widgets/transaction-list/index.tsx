import { ITransaction, TransactionItem } from '@/entities/transaction';
import { useInject } from '@/shared/hooks/useInject';
import { DateService } from '@/shared/lib';
import TransactionListHeader from '@/shared/ui/transaction-list-header';
import { SectionList, SectionListData } from 'react-native';

const DATA: SectionListData<ITransaction, { title: string }>[] = [
  {
    title: 'First Section',
    data: [
      {
        company: {
          name: 'First',
          avatar:
            'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
        },
        cost: 154.2,
        date: new Date(),
        transactionType: 'Money Transfer',
      },
    ],
  },
  {
    title: 'Second Section',
    data: [
      {
        company: {
          name: 'Second',
          avatar:
            'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
        },
        cost: 12.2,
        date: new Date(),
        transactionType: 'Entertainment',
      },
    ],
  },
];

export function TransactionList() {
  const dateService = useInject(DateService);

  return (
    <SectionList
      sections={DATA}
      renderSectionHeader={({ section: { title } }) => {
        return <TransactionListHeader title={title} />;
      }}
      renderItem={(data) => <TransactionItem transaction={data.item} />}
    ></SectionList>
  );
}
