import { colors, fonts, margins } from '@/shared/const';
import {
  AnalyticsIcon,
  ChatsIcon,
  HistoryIcon,
  HomeIcon,
  PaymentIcon,
} from '@/shared/icons';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.black,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          paddingVertical: margins.xs,
        },
        tabBarIconStyle: {
          marginBottom: margins.xs,
          width: 20,
          height: 20,
        },
        tabBarLabelStyle: {
          fontSize: fonts.s,
          fontFamily: Platform.select({
            android: 'Inter-400Regular',
            ios: 'Inter-Regular',
          }),
        },
        tabBarActiveTintColor: colors.orange,
      }}
    >
      <Tabs.Screen
        name='(home)'
        options={{ headerShown: false, title: 'Home', tabBarIcon: HomeIcon }}
      />
      <Tabs.Screen
        name='Payment'
        options={{
          headerShown: false,
          title: 'Payment',
          tabBarIcon: PaymentIcon,
        }}
      />
      <Tabs.Screen
        name='History'
        options={{
          headerShown: false,
          title: 'History',
          tabBarIcon: HistoryIcon,
        }}
      />
      <Tabs.Screen
        name='Analytics'
        options={{
          headerShown: false,
          title: 'Analytics',
          tabBarIcon: AnalyticsIcon,
        }}
      />
      <Tabs.Screen
        name='Chats'
        options={{ headerShown: false, title: 'Chats', tabBarIcon: ChatsIcon }}
      />
    </Tabs>
  );
}
