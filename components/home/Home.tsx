import { View, Text, ScrollView, Image, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeroBanner = () => {
  return (
    <View className="flex-row justify-between items-center p-4 bg-white rounded-xl shadow-md mb-4">
      <View className="flex-row items-center space-x-4">
        <View className="w-12 h-12 rounded-full bg-[#E0E0E0] items-center justify-center">
          <Ionicons name="person" size={24} color="#888" />
        </View>
        <View>
          <Text className="text-sm text-gray-500">Welcome!</Text>
          <Text className="text-lg font-semibold text-[#333]">User</Text>
          <Text className="text-xs text-gray-400">How is it going</Text>
        </View>
      </View>
      <Image source={require('@/assets/images/banner-bg.png')} className="w-20 h-20" resizeMode="contain" />
    </View>
  );
};

const Actions = () => {
  return (
    <View className="mt-6">
      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        placeholder="Search doctors, drugs, articles.."
      />

      <View className="flex-row justify-between items-center">
        {[
          { label: 'Top Doctors', icon: 'medkit' },
          { label: 'Pharmacy', icon: 'medical' },
          { label: 'Ambulance', icon: 'car-sport' },
        ].map(({ label, icon }, i) => (
          <View key={i} className="items-center">
            <View className="w-16 h-16 rounded-full bg-[#E6F0FA] items-center justify-center mb-2">
              <Ionicons name={icon as any} size={24} color="#407CE2" />
            </View>
            <Text className="text-xs text-[#333]">{label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const Articles = () => {
  const articles = [
    'The 25 Healthiest Fruits You can Eat, According to a Nutritionist',
    '10 Daily Habits to Improve Your Mental Health',
    'Why Hydration is Key for Wellness and Performance',
  ];

  return (
    <View className="mt-8">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-base font-semibold text-[#333]">Health Articles</Text>
        <Text className="text-sm text-primary font-medium">See all</Text>
      </View>

      {articles.map((title, i) => (
        <View key={i} className="flex-row items-start mb-4">
          <View className="w-20 h-20 bg-gray-200 rounded-lg mr-4" />
          <View className="flex-1">
            <Text className="text-sm font-medium text-[#333] mb-1">{title}</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-xs text-gray-400">Jun 12, 2023 · 5 min read</Text>
              <Ionicons name="bookmark-outline" size={16} color="#407CE2" />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default function Home() {
  return (
    <ScrollView className="px-4 py-6 bg-white">
      <HeroBanner />
      <Actions />
      <Articles />
    </ScrollView>
  );
}
