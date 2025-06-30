import { Ionicons } from '@expo/vector-icons';
import { FlatList, Image, Text, View } from 'react-native';

// Preload doctor images
const doctorImages = [
  require('@/assets/images/doctors/doctor1.png'),
  require('@/assets/images/doctors/doctor2.png'),
  require('@/assets/images/doctors/doctor3.png'),
  require('@/assets/images/doctors/doctor4.png'),
];

type DoctorsCardProps = {
  imageIndex: number;
  name: string;
  startRating: number;
  profession: string;
  distance: number;
};

export const DoctorsCard = ({ imageIndex, name, startRating, profession, distance }: DoctorsCardProps) => {
  return (
    <View className="bg-white rounded-xl shadow p-4 mb-4 flex-row items-center">
      <Image
        source={doctorImages[imageIndex % doctorImages.length]}
        className="w-16 h-16 rounded-full mr-4"
        resizeMode="cover"
      />
      <View className="flex-1">
        <Text className="text-base font-semibold text-[#333]">{name}</Text>
        <Text className="text-sm text-gray-500 mb-1">{profession}</Text>
        <View className="flex-row items-center">
          <Ionicons name="star" size={14} color="gold" />
          <Text className="ml-1 text-xs text-gray-600">{startRating}</Text>
          <Ionicons name="location" size={14} color="#888" style={{ marginLeft: 10 }} />
          <Text className="ml-1 text-xs text-gray-600">{distance}m away</Text>
        </View>
      </View>
    </View>
  );
};

function DoctorsCards() {
  const data = [
    { name: 'Dr. Rishi', profession: 'Cardiologist', startRating: 4.7, distance: 800 },
    { name: 'Dr. Vaamana', profession: 'Dentist', startRating: 4.9, distance: 600 },
    { name: 'Dr. Nallarasi', profession: 'Orthopaedic', startRating: 4.7, distance: 1000 },
    { name: 'Dr. Nihal', profession: 'Cardiologist', startRating: 4.7, distance: 800 },
    { name: 'Dr. Rishi', profession: 'Neurologist', startRating: 4.7, distance: 800 },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => <DoctorsCard {...item} imageIndex={index} />}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}

export default DoctorsCards;
