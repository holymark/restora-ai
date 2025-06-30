// app/_layout.tsx
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="(tabs)" options={{ drawerLabel: 'Main' }} />
      <Drawer.Screen name="dashboard" />
      <Drawer.Screen name="pharmacy" />
      <Drawer.Screen name="doctors" />
      <Drawer.Screen name="cart" />
      <Drawer.Screen name="ambulance" />
    </Drawer>
  );
}
