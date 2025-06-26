// app/index.tsx
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,                                                                                    
  Pressable,
  Text,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

type Slide = {
  id: string;
  image?: any;
  logo?: any;
  title?: string;
  subtitle?: string;
  description?: string;
  label?: string;
  showSkip?: boolean;
  isFinal?: boolean;
};

const slides: Slide[] = [
  {
    id: '1',
    image: require('@/assets/images/hero.png'),
    title: 'Restora AI',
    showSkip: false,
  },
  {
    id: '2',
    label: 'T',
    image: require('@/assets/images/slide2.png'),
    description: 'Stay aware of your mental health with daily check-ins.',
    showSkip: true,
  },
  {
    id: '3',
    label: 'Guided journaling',
    image: require('@/assets/images/slide3.png'),
    description: 'Write it out with guided prompts and AI suggestions.',
    showSkip: true,
  },
  {
    id: '4',
    label: 'Learn & grow',
    image: require('@/assets/images/slide4.png'),
    description: 'Access expert-backed resources to support your journey.',
    showSkip: true,
  },
  {
    id: '5',
    logo: require('@/assets/images/logo.png'),
    title: 'Let’s get started',
    subtitle: 'Login to stay healthy and fit',
    isFinal: true,
  },
];

export default function Onboarding() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const flatRef = useRef<FlatList<Slide>>(null);

  const nextSlide = () => {
    if (index < slides.length - 1) {
      flatRef.current?.scrollToIndex({ index: index + 1 });
    }
  };

  const skipToLast = () => {
    flatRef.current?.scrollToIndex({ index: slides.length - 1 });
  };

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / width);
    setIndex(i);
  };

  const renderSlide = ({ item }: { item: Slide }) => {
    if (item.isFinal) {
      return (
        <View className="flex-1 w-full px-6 items-center justify-center bg-white">
          {item.logo && <Image source={item.logo} className="w-[100px] h-[100px] mb-8" resizeMode="contain" />}
          <Text className="text-[24px] font-bold text-[#333] mb-2">{item.title}</Text>
          <Text className="text-[16px] text-[#666] mb-10 text-center max-w-[80%]">{item.subtitle}</Text>

          <View className="w-full space-y-4">
            <Pressable
              className="bg-[#4A90E2] py-4 rounded-xl items-center w-full h-[56px] justify-center"
              onPress={() => router.push('/login')}
            >
              <Text className="text-white text-[16px] font-semibold">Login</Text>
            </Pressable>
            <Pressable
              className="border-2 border-[#4A90E2] py-4 rounded-xl items-center w-full h-[56px] justify-center"
              onPress={() => router.push('/signup')}
            >
              <Text className="text-[#4A90E2] text-[16px] font-semibold">Sign Up</Text>
            </Pressable>
          </View>
        </View>
      );
    }

    return (
      <View className="w-full px-6 pt-16 items-center bg-white">
        {item.showSkip && (
          <View className="w-full flex-row justify-between px-2 mb-5">
            <Text className="text-[14px] text-[#888]">{item.label}</Text>
            <Pressable onPress={skipToLast}>
              <Text className="text-[14px] text-[#4A90E2] font-semibold">Skip</Text>
            </Pressable>
          </View>
        )}
        {item.image && <Image source={item.image} className="w-full h-[280px] my-8" resizeMode="contain" />}
        {item.description && (
          <Text className="text-[16px] text-[#444] text-center px-5 mt-4 max-w-[90%]">{item.description}</Text>
        )}
        <Pressable
          className="mt-5 bg-[#4A90E2] py-4 px-10 rounded-xl h-[56px] justify-center"
          onPress={nextSlide}
        >
          <Text className="text-white text-[16px] font-semibold">Next</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <FlatList
      ref={flatRef}
      horizontal
      pagingEnabled
      data={slides}
      renderItem={renderSlide}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
    />
  );
}
