import { View, Text, Pressable, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const User = () => {
  return (
    <View className="items-center bg-white p-4 rounded-2xl mb-4">
      <Image
        source={require('@/assets/images/user.png')}
        className="w-20 h-20 rounded-full mb-2"
        resizeMode="cover"
      />
      <Text className="text-lg font-semibold">User</Text>

      <View className="flex-row justify-between w-full mt-6">
        <View className="items-center">
          <Ionicons name="heart" size={24} color="#407CE2" />
          <Text className="text-sm mt-1">Heart rate</Text>
          <Text className="font-semibold">215bpm</Text>
        </View>
        <View className="items-center">
          <Ionicons name="flame" size={24} color="#407CE2" />
          <Text className="text-sm mt-1">Calories</Text>
          <Text className="font-semibold">756cal</Text>
        </View>
        <View className="items-center">
          <Ionicons name="barbell" size={24} color="#407CE2" />
          <Text className="text-sm mt-1">Weight</Text>
          <Text className="font-semibold">103lbs</Text>
        </View>
      </View>
    </View>
  );
};

const ActionItem = ({ icon, label }: { icon: any; label: string }) => (
  <Pressable className="flex-row justify-between items-center bg-white p-4 rounded-xl mb-2">
    <View className="flex-row items-center">
      <Ionicons name={icon} size={20} color="#407CE2" className="mr-4" />
      <Text className="text-sm font-medium text-gray-800">{label}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#999" />
  </Pressable>
);

const Actions = () => {
  return (
    <View>
      <ActionItem icon="bookmark" label="My saved" />
      <ActionItem icon="calendar" label="Appointments" />
      <ActionItem icon="card" label="Payment Method" />
      <ActionItem icon="help-circle" label="FAQs" />
      <ActionItem icon="log-out" label="Logout" />
    </View>
  );
};

export default function Profile() {
  return (
    <ScrollView className="bg-gray-100 p-4">
      <User />
      <Actions />
    </ScrollView>
  );
}
