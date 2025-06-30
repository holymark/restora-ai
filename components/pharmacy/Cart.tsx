import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

// Preload medicine images
const medicineImages = [
  require('@/assets/medicine/medicine1.png'),
  require('@/assets/medicine/medicine2.png'),
  require('@/assets/medicine/medicine3.png'),
  require('@/assets/medicine/medicine4.png'),
];

type CartItemProp = {
  imageIndex: number;
  name: string;
  price: number;
  quatity: number;
  symbol: string;
};

const CartItem = ({ imageIndex, name, price, quatity, symbol }: CartItemProp) => {
  return (
    <View className="flex-row items-center justify-between bg-white rounded-xl p-4 mb-3 shadow">
      <Image
        source={medicineImages[imageIndex % medicineImages.length]}
        className="w-14 h-14 mr-4"
        resizeMode="contain"
      />
      <View className="flex-1">
        <Text className="text-base font-semibold text-[#333]">{name}</Text>
        <Text className="text-xs text-gray-400">{symbol}</Text>
      </View>
      <Pressable>
        <Ionicons name="trash" size={20} color="gray" />
      </Pressable>
      <View className="flex-row items-center ml-4">
        <Text className="text-base px-2">-</Text>
        <Text className="text-base font-semibold">{quatity}</Text>
        <Text className="text-base px-2">+</Text>
      </View>
      <Text className="text-base font-bold text-primary ml-4">${price.toFixed(2)}</Text>
    </View>
  );
};

type PaymentDetailProp = {
  subtotal: number;
  taxes: number;
  total: number;
};

const PaymentDetail = ({ subtotal, taxes, total }: PaymentDetailProp) => {
  return (
    <View className="bg-white p-4 rounded-xl shadow mt-4">
      <Text className="text-base font-semibold mb-2">Payment Detail</Text>
      <View className="flex-row justify-between">
        <Text className="text-sm text-gray-500">Subtotal</Text>
        <Text className="text-sm font-medium">${subtotal.toFixed(2)}</Text>
      </View>
      <View className="flex-row justify-between mt-2">
        <Text className="text-sm text-gray-500">Taxes</Text>
        <Text className="text-sm font-medium">${taxes.toFixed(2)}</Text>
      </View>
      <View className="flex-row justify-between mt-2">
        <Text className="text-sm text-gray-700 font-semibold">Total</Text>
        <Text className="text-sm font-semibold text-primary">${total.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const PaymentActions = () => {
  return (
    <View className="bg-white p-4 rounded-xl shadow mt-6">
      <Text className="text-base font-semibold mb-3">Payment Method</Text>
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-sm text-gray-700">Total</Text>
        <Text className="text-sm font-bold text-primary">$28.98</Text>
      </View>
      <Pressable className="bg-primary py-3 rounded-full items-center">
        <Text className="text-white font-medium">Checkout</Text>
      </Pressable>
    </View>
  );
};

export default function Cart() {
  const cartItems = [
    { name: 'Panadol', price: 5.99, quatity: 2, symbol: '2 x 20ml' },
    { name: 'Bodrex Herbal', price: 9.99, quatity: 1, symbol: '1 x 100ml' },
    { name: 'Konldin', price: 5.99, quatity: 1, symbol: '1 x 50ml' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quatity, 0);
  const taxes = subtotal * 0.1;
  const total = subtotal + taxes;

  return (
    <ScrollView className="bg-white p-4">
      {cartItems.map((item, index) => (
        <CartItem key={index} imageIndex={index} {...item} />
      ))}
      <PaymentDetail subtotal={subtotal} taxes={taxes} total={total} />
      <PaymentActions />
    </ScrollView>
  );
}
