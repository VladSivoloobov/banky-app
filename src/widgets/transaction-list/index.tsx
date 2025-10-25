import { ITransaction, TransactionItem } from '@/entities/transaction';
import { margins } from '@/shared/const';
import TransactionListHeader from '@/shared/ui/transaction-list-header';
import { SectionList, SectionListData, View } from 'react-native';

const DATA: SectionListData<ITransaction, { title: string }>[] = [
  {
    title: 'Today',
    data: [
      {
        company: {
          name: 'Matthew Billson',
          avatar:
            'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
        },
        cost: 56.19,
        date: new Date(),
        transactionType: 'Money Transfer',
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        company: {
          name: 'Starbucks',
          avatar:
            'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
        },
        cost: 12.2,
        date: new Date(),
        transactionType: 'Entertainment',
      },
      {
        company: {
          name: 'Netflix',
          avatar:
            'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png',
        },
        cost: 13.17,
        date: new Date(),
        transactionType: 'Entertainment',
      },
    ],
  },
];

export function TransactionList() {
  return (
    <SectionList
      sections={DATA}
      renderSectionHeader={({ section: { title } }) => {
        return <TransactionListHeader title={title} />;
      }}
      renderSectionFooter={() => (
        <View
          style={{
            marginBottom: margins.xxm,
          }}
        />
      )}
      stickySectionHeadersEnabled={false}
      ItemSeparatorComponent={() => <View style={{ marginBottom: 4 }} />}
      renderItem={({ item }) => {
        return <TransactionItem transaction={item} />;
      }}
    ></SectionList>
  );
}
