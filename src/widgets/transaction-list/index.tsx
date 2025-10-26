import { ITransaction, TransactionItem } from '@/entities/transaction';
import ManImage from '@/shared/assets/images/avatars/man.png';
import NetflixImage from '@/shared/assets/images/avatars/netfilx.png';
import StarBucksImage from '@/shared/assets/images/avatars/starbucks.png';
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
          avatar: ManImage,
        },
        cost: 56.19,
        date: new Date(1717924097 * 1000),
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
          avatar: StarBucksImage,
        },
        cost: 122.47,
        date: new Date(1717863677 * 1000),
        transactionType: 'Entertainment',
      },
      {
        company: {
          name: 'Netflix',
          avatar: NetflixImage,
        },
        cost: 13.17,
        date: new Date(1717825997 * 1000),
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
