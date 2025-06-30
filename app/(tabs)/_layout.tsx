import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#407CE2',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'home':
              return <Ionicons name="home" size={size} color={color} />;
            case 'reports':
              return <Ionicons name="document-text-outline" size={size} color={color} />;
            case 'notification':
              return <Ionicons name="notifications-outline" size={size} color={color} />;
            case 'profile':
              return <Ionicons name="person-circle-outline" size={size} color={color} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="reports" />
      <Tabs.Screen name="notification" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
