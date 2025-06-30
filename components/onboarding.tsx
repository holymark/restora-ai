import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, Image, Pressable, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Understand Your Emotions',
    image: require('@/assets/images/slides/slide1.png'),
    description: 'Let Restora listen to your mood and offer personalized support.',
  },
  {
    id: '2',
    title: 'Your Private Emotional Room',
    image: require('@/assets/images/slides/slide1.png'),
    description: 'Access Calm, Reflect, or Uplift Rooms designed for your emotional needs.',
  },
  {
    id: '3',
    title: 'AI-Powered Companion',
    image: require('@/assets/images/slides/slide3.png'),
    description: 'Meet Nuru  your always available companion for check-ins and healing conversations.',
  },
];

const Dot = ({ active }: { active: boolean }) => (
  <View className={`h-[4px] w-[14px] rounded-full ${active ? 'bg-primary' : 'bg-gray-300'}`} />
);

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList>(null);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(prev => prev + 1);
    } else {
      router.push('/getStarted');
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(timer);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <View className="flex-1 bg-white p-6 pt-12">
      <View className="flex-row justify-end">
        <Pressable onPress={() => router.push('/getStarted')}>
          <Text className="text-primary font-semibold">Skip</Text>
        </Pressable>
      </View>

      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Animated.View className="w-full items-center justify-center mt-4">
            <Text className="text-center text-xl font-semibold text-grayText mb-4">
              {item.title}
            </Text>
            <Image
              source={item.image}
              resizeMode="contain"
              className="w-[250px] h-[300px]"
            />
            <Text className="text-center text-base text-subtitle mt-6 px-4">
              {item.description}
            </Text>
          </Animated.View>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />

      <View className="flex-row justify-between items-center mt-12 px-4">
        <View className="flex-row space-x-2">
          {slides.map((_, i) => (
            <Dot key={i} active={i === currentIndex} />
          ))}
        </View>

        <Pressable
          onPress={nextSlide}
          className="w-12 h-12 rounded-full bg-primary items-center justify-center"
        >
          <Text className="text-white text-xl font-bold">›</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Onboarding;
