import { View, Text, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WelcomeHeader = () => (
  <View className="flex-row justify-between items-center mb-6">
    <View>
      <Text className="text-2xl font-semibold text-[#333]">Hi, User!</Text>
      <Text className="text-sm text-gray-500">Here's your emotional overview</Text>
    </View>
    <View className="w-10 h-10 rounded-full bg-[#E0E0E0] items-center justify-center">
      <Ionicons name="person-outline" size={20} color="#888" />
    </View>
  </View>
);

const Actions = () => (
  <View className="mb-6">
    <View className="bg-white p-4 rounded-lg shadow-sm flex-row justify-between items-center mb-4">
      <Ionicons name="happy-outline" size={28} color="#407CE2" />
      <Text className="flex-1 px-3 text-sm text-[#333]">You're feeling slightly anxious</Text>
      <Pressable className="bg-primary rounded-full px-4 py-2">
        <Text className="text-white text-xs font-semibold">Re-check Mood</Text>
      </Pressable>
    </View>

    <View className="flex-row flex-wrap justify-between gap-3">
      {[
        { label: 'Calm Room', icon: 'leaf-outline' },
        { label: 'Reflect Pod', icon: 'book-outline' },
        { label: 'Uplift Zone', icon: 'sunny-outline' },
        { label: 'Nuru Chat', icon: 'chatbubble-ellipses-outline' },
      ].map(({ label, icon }, i) => (
        <View key={i} className="w-[48%] bg-white p-3 rounded-lg shadow-sm flex-row items-center space-x-3">
          <Ionicons name={icon as any} size={24} color="#407CE2" />
          <Text className="text-sm font-semibold text-[#333]">{label}</Text>
        </View>
      ))}
    </View>
  </View>
);

const MoodGraph = () => (
  <View className="h-32 bg-gray-300 rounded-lg mb-6 items-center justify-center">
    <Text className="text-gray-600">[Mood Graph Placeholder]</Text>
  </View>
);

const Prompt = () => (
  <View className="bg-white p-4 rounded-lg shadow-sm flex-row justify-between items-center mb-6">
    <View className="flex-row items-center space-x-3">
      <Ionicons name="fitness-outline" size={24} color="#407CE2" />
      <Text className="text-sm text-[#333]">Hey User, would you like to do a 5-min breathing session today?</Text>
    </View>
    <Pressable className="bg-primary rounded-full px-4 py-2 ml-2">
      <Text className="text-white text-xs font-semibold">Start Now</Text>
    </Pressable>
  </View>
);

const WellnessGoals = () => (
  <View className="mb-10">
    <Text className="text-base font-semibold text-[#333] mb-2">Today's Wellness Goals</Text>
    <View className="space-y-1">
      {[
        '✔ Journal for 3 min',
        '✔ Join Calm Room session',
        '✔ Talk to Nuru AI',
      ].map((goal, i) => (
        <Text key={i} className="text-sm text-gray-600">{goal}</Text>
      ))}
    </View>
  </View>
);

export default function Dashboard() {
  return (
    <ScrollView className="px-4 py-6 bg-white">
      <WelcomeHeader />
      <Actions />
      <MoodGraph />
      <Prompt />
      <WellnessGoals />
    </ScrollView>
  );
}
