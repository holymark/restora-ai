import { View, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const ReportCards = () => {
  return (
    <View className="space-y-4">
      {/* Heart Rate Card */}
      <View className="bg-red-100 p-4 rounded-2xl">
        <Text className="text-base font-semibold">Heart rate</Text>
        <Text className="text-xl font-bold text-red-500">
          97<Text className="text-xs text-gray-500"> bpm</Text>
        </Text>
        <MaterialCommunityIcons name="heart-pulse" size={40} color="red" className="mt-2" />
      </View>

      {/* Blood Group and Weight Card */}
      <View className="bg-blue-100 p-4 rounded-2xl flex-row justify-between">
        <View className="items-center">
          <Ionicons name="water" size={24} color="#407CE2" />
          <Text className="text-sm font-medium">Blood Group</Text>
          <Text className="text-lg font-bold text-blue-800">A+</Text>
        </View>

        <View className="items-center">
          <FontAwesome5 name="weight" size={24} color="#407CE2" />
          <Text className="text-sm font-medium">Weight</Text>
          <Text className="text-lg font-bold text-blue-800">103lbs</Text>
        </View>
      </View>
    </View>
  );
};

const LatestReports = () => {
  return (
    <View className="mt-6">
      <Text className="text-base font-semibold mb-4">Latest reports</Text>
      <View className="bg-white p-4 rounded-2xl flex-row justify-between items-start">
        <View className="flex-row items-start space-x-2">
          <Ionicons name="document-text" size={24} color="#407CE2" />
          <View>
            <Text className="text-sm font-semibold">Blood Pressure Report</Text>
            <Text className="text-xs text-gray-500">Jul 10, 2024</Text>
          </View>
        </View>
        <Ionicons name="ellipsis-vertical" size={16} color="gray" />
      </View>
    </View>
  );
};

export default function Reports() {
  return (
    <View className="p-4">
      <ReportCards />
      <LatestReports />
    </View>
  );
}
