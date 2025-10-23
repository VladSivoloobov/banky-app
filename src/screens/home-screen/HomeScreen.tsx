import Container from '@/shared/ui/container';
import RootView from '@/shared/ui/root-view';
import { HomeCards } from '@/widgets/home-cards';
import { HomeCategories } from '@/widgets/home-categories';
import { HomeExpenses } from '@/widgets/home-expenses';
import { HomeHeader } from '@/widgets/home-header';
import { TransactionList } from '@/widgets/transaction-list';

export function HomeScreen() {
  return (
    <RootView>
      <Container>
        <HomeHeader />
        <HomeCategories />
        <HomeCards />
        <HomeExpenses />
        <TransactionList />
      </Container>
    </RootView>
  );
}
