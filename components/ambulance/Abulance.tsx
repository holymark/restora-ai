import { Text, View, TextInput, Pressable, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Ambulance() {
  return (
    <ImageBackground
      source={require('@/assets/images/map-background.png')}
      className="flex-1 justify-between items-center p-4"
      resizeMode="cover"
    >
      <View className="w-full bg-white rounded-full flex-row items-center px-4 py-2 mb-4">
        <Ionicons name="search" size={18} color="gray" className="mr-2" />
        <TextInput
          placeholder="Search location, ZIP code..."
          className="flex-1 text-sm"
        />
      </View>

      <View className="w-full bg-white p-4 rounded-2xl">
        <Text className="text-base font-semibold mb-3">Confirm your address</Text>

        <View className="flex-row items-start">
          <Ionicons name="location" size={16} color="#407CE2" className="mr-2 mt-1" />
          <Text className="text-sm text-gray-700">
            Flat No. 50, Mahalaxmi Shop, Upkaar, 36, Barpokhar (E), Siwan, Bihar, Pincode-880212
          </Text>
        </View>

        <Pressable className="mt-6 bg-primary py-3 rounded-full items-center">
          <Text className="text-white font-semibold text-sm">Confirm Location</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
