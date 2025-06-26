import React from 'react';
import { Text, TextInput, Pressable, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 justify-center bg-white px-6">
      <Text className="text-3xl font-bold mb-2">Create Account</Text>
      <Text className="text-base text-gray-600 mb-8">Sign up to get started</Text>

      <TextInput
        placeholder="Full Name"
        className="border border-gray-300 rounded-xl px-4 py-3 text-base mb-4"
      />

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        className="border border-gray-300 rounded-xl px-4 py-3 text-base mb-4"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        className="border border-gray-300 rounded-xl px-4 py-3 text-base mb-4"
      />

      <Pressable className="bg-blue-500 rounded-xl py-4 items-center mb-4">
        <Text className="text-white text-base font-semibold">Sign Up</Text>
      </Pressable>

      <Pressable onPress={() => router.push('/login' as const)}>
        <Text className="text-blue-500 text-center text-sm">Already have an account? Login</Text>
      </Pressable>
    </SafeAreaView>
  );
}
