import { View, Text, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function GetStarted() {
  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      <Image
        source={require('@/assets/images/logo.png')}
        className="w-[150px] h-[150px] mb-10"
        resizeMode="contain"
      />

      <View className="items-center space-y-2 mb-10">
        <Text className="text-2xl font-bold text-[#333] text-center">
          Let’s get started!
        </Text>
        <Text className="text-sm text-gray-500 text-center">
          Login to stay healthy and fit
        </Text>
      </View>

      <View className="w-full space-y-4">
        <Link href="/login" asChild>
          <Pressable className="h-[48px] bg-primary rounded-full items-center justify-center">
            <Text className="text-white font-semibold text-base">Login</Text>
          </Pressable>
        </Link>

        <Link href="/signup" asChild>
          <Pressable className="h-[48px] border border-primary rounded-full items-center justify-center bg-white">
            <Text className="text-primary font-semibold text-base">Sign Up</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
