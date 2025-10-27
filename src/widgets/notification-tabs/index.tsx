import { colors, margins } from '@/shared/const';
import { useState } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { NotificationCategory } from './NotificationCategory';
import { mockNotifications } from './mockNotifications';
import { TabKey } from './types';

export function NotificationTabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState<Array<{ key: TabKey; title: string }>>([
    { key: 'all', title: 'All' },
    { key: 'payments', title: 'Payments' },
    { key: 'system', title: 'System' },
    { key: 'delivery', title: 'Delivery' },
    { key: 'travel', title: 'Travel' },
  ]);

  const renderScene = ({ route }: { route: { key: TabKey } }) => {
    switch (route.key) {
      case 'all':
        return <NotificationCategory data={mockNotifications} />;
      case 'payments':
        return <NotificationCategory data={mockNotifications} />;
      case 'system':
        return <NotificationCategory data={mockNotifications} />;
      case 'delivery':
        return <NotificationCategory data={mockNotifications} />;
      case 'travel':
        return <NotificationCategory data={mockNotifications} />;
      default:
        return <NotificationCategory data={mockNotifications} />;
    }
  };

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            tabStyle={styles.tab}
            contentContainerStyle={styles.tabBarContent}
            activeColor={colors.orange}
            inactiveColor={colors.secondaryGray}
            scrollEnabled
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: colors.black,
    paddingLeft: margins.s,
  },
  tabBarContent: {
    paddingRight: margins.s,
  },
  tab: {
    width: 'auto',
    paddingHorizontal: margins.s,
  },
  indicator: {
    backgroundColor: colors.orange,
    height: 2,
    marginLeft: margins.s,
  },
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
