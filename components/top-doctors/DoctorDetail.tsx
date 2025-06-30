import { View, Text, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DoctorsCards, { DoctorsCard } from './Doctors';

const Profile = () => {
  return (
    <View className="bg-white p-4 rounded-xl shadow mb-4">
      <DoctorsCard
      imageIndex={0}
        name="Dr. Rishi"
        profession="Cardiologist"
        startRating={4.7}
        distance={800}
      />
      <View className="mt-4">
        <Text className="text-base font-semibold mb-1">About</Text>
        <Text className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididunt ut laore et dolore magna aliqua. Ut enim ad minim veniam...
          <Text className="text-primary font-medium"> Read more</Text>
        </Text>
      </View>
    </View>
  );
};

type DateButtonProp = {
  day: string;
  date: number;
  active?: boolean;
};

const DateButton = ({ day, date, active }: DateButtonProp) => {
  return (
    <View className={`rounded-xl px-4 py-2 m-1 items-center justify-center ${active ? 'bg-primary' : 'bg-white border border-gray-200'}`}>
      <Text className="text-xs text-gray-500">{day}</Text>
      <Text className="text-sm font-semibold">{date}</Text>
    </View>
  );
};

type TimeButtonProp = {
  time: string;
  active?: boolean;
};

const TimeButton = ({ time, active }: TimeButtonProp) => {
  return (
    <View className={`rounded-xl px-4 py-2 m-1 items-center justify-center ${active ? 'bg-primary' : 'bg-white border border-gray-200'}`}>
      <Text className="text-sm text-gray-700">{time}</Text>
    </View>
  );
};

const BookingActions = () => {
  return (
    <View className="p-4">
      <Profile />
      <View className="flex-row flex-wrap justify-between mt-4">
        <DateButton date={21} day="Mon" />
        <DateButton date={22} day="Tue" />
        <DateButton date={23} day="Wed" />
        <DateButton date={24} day="Thu" />
        <DateButton date={25} day="Fri" />
        <DateButton date={26} day="Sat" />
      </View>
      <View className="flex-row flex-wrap justify-center mt-4">
        {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'].map((time, index) => (
          <TimeButton key={index} time={time} />
        ))}
      </View>
      <Pressable className="bg-primary mt-6 py-3 rounded-full items-center">
        <Text className="text-white font-medium">Book Appointment</Text>
      </Pressable>
    </View>
  );
};

export default function DoctorDetails() {
  return (
    <ScrollView className="bg-white">
      <BookingActions />
    </ScrollView>
  );
}