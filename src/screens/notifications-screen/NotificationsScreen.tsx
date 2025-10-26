import Container from '@/shared/ui/container';
import RootView from '@/shared/ui/root-view';
import UText from '@/shared/ui/utext';
import { Header } from '@/widgets/header';

export function NotificationScreen() {
  return (
    <RootView safeAreaStyles={{ paddingTop: 0 }}>
      <Header />
      <Container>
        <UText>Notifications</UText>
      </Container>
    </RootView>
  );
}
