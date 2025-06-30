import { View, Text, ScrollView, Image, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Preload the medicine images
const medicineImages = [
  require('@/assets/images/medicine/medicine1.png'),
  require('@/assets/images/medicine/medicine2.png'),
  require('@/assets/images/medicine/medicine3.png'),
  require('@/assets/images/medicine/medicine4.png'),
];

const Hero = () => {
  return (
    <View className="px-4 mt-4">
      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        placeholder="Search drugs category.."
      />

      <View className="bg-white rounded-xl p-4 items-center shadow">
        <Text className="text-lg font-semibold text-center text-[#333]">
          Order quickly with {'\n'} Prescription
        </Text>

        <Pressable className="mt-6 px-4 py-2 bg-primary rounded-full">
          <Text className="text-white text-sm font-medium">Upload Prescription</Text>
        </Pressable>
      </View>
    </View>
  );
};

type ProductCardProp = {
  imageIndex: number;
  name: string;
  quantity: number;
  price: number;
};

const ProductCard = ({ imageIndex, name, quantity, price }: ProductCardProp) => {
  return (
    <View className="bg-white rounded-lg shadow w-36 p-3 mr-4">
      <View className="items-center mb-2">
        <Image
          source={medicineImages[imageIndex % medicineImages.length]}
          className="w-16 h-16"
          resizeMode="contain"
        />
      </View>
      <Text className="text-sm font-medium text-[#333]">{name}</Text>
      <Text className="text-xs text-gray-400 mb-2">{quantity} ml</Text>
      <View className="flex-row justify-between items-center">
        <Text className="text-sm font-bold text-[#407CE2]">${price}</Text>
        <Ionicons name="add-circle" size={20} color="#407CE2" />
      </View>
    </View>
  );
};

const Products = () => {
  const data = [
    { name: 'Panadol', quantity: 20, price: 5.99 },
    { name: 'Bodrex Herbal', quantity: 100, price: 9.99 },
    { name: 'Konldin', quantity: 50, price: 5.99 },
  ];

  return (
    <View className="px-4 mt-6">
      {["Popular Products", "Products on Sale"].map((sectionTitle, idx) => (
        <View key={idx} className="mb-6">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-base font-semibold text-[#333]">{sectionTitle}</Text>
            <Text className="text-sm font-medium text-primary">See all</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((item, i) => (
              <ProductCard key={i} imageIndex={i} {...item} />
            ))}
          </ScrollView>
        </View>
      ))}
    </View>
  );
};

export default function Pharmacy() {
  return (
    <ScrollView className="bg-white">
      <Hero />
      <Products />
    </ScrollView>
  );
}
