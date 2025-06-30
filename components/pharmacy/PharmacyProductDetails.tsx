import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PharmacyProductDetails() {
  return (
    <ScrollView className="bg-white px-4 py-6">
      <View className="items-center mb-6">
        <Image
          source={require('@/assets/images/medicine/medicine1.png')}
          className="w-32 h-32"
          resizeMode="contain"
        />
        <Text className="text-xl font-semibold text-[#333] mt-2">OBH Combi</Text>
        <View className="flex-row items-center mt-1">
          {[...Array(4)].map((_, i) => (
            <Ionicons key={i} name="star" size={16} color="#FFD700" className="mr-1" />
          ))}
          <Text className="text-xs text-gray-500 ml-2">4.0</Text>
        </View>
      </View>

      <View className="flex-row justify-between items-center px-4 mb-6">
        <View className="flex-row items-center space-x-3">
          <Pressable className="w-8 h-8 rounded-full bg-gray-200 items-center justify-center">
            <Text className="text-lg font-bold">-</Text>
          </Pressable>
          <Text className="text-base font-semibold">1</Text>
          <Pressable className="w-8 h-8 rounded-full bg-gray-200 items-center justify-center">
            <Text className="text-lg font-bold">+</Text>
          </Pressable>
        </View>
        <Text className="text-lg font-bold text-primary">$9.99</Text>
      </View>

      <View className="mb-8">
        <Text className="text-base font-semibold text-[#333] mb-1">Description</Text>
        <Text className="text-sm text-gray-500">
          OBH COMBI is a cough medicine containing Paracetamol, Ephedrine HCl, and Chlorphenamine maleate
          which is used to relieve coughs accompanied by flu symptoms such as fever, headache, and sneezing...
          <Text className="text-primary font-medium"> Read more</Text>
        </Text>
      </View>

      <Pressable className="bg-primary rounded-full py-3 items-center">
        <Text className="text-white text-base font-medium">Buy</Text>
      </Pressable>
    </ScrollView>
  );
}
