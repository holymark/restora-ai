import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Notifications() {
  return (
    <View className="flex-1 justify-center items-center px-6">
      <Ionicons name="notifications-off-outline" size={64} color="#B0B0B0" />
      <Text className="text-lg font-semibold text-gray-600 mt-4">
        No Notifications
      </Text>
      <Text className="text-sm text-gray-500 text-center mt-2">
        You're all caught up. Notifications about
        appointments, updates, and health tips will
        appear here.
      </Text>
    </View>
  );
}
