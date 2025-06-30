import { View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

type AuthFormProps = {
  auth_type: 'sign_up' | 'sign_in';
};

function AuthForm({ auth_type }: AuthFormProps) {
  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <View className="space-y-4">
        <TextInput
          placeholder="Enter your name"
          className="border border-gray-300 rounded-lg px-4 py-3"
        />
        <TextInput
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          className="border border-gray-300 rounded-lg px-4 py-3"
        />
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          className="border border-gray-300 rounded-lg px-4 py-3"
        />
      </View>

      <View className="my-6">
        {auth_type === 'sign_up' ? (
          <Text className="text-center text-sm">
            I agree to Restora's{' '}
            <Text className="text-primary font-semibold">
              Terms of Service and Privacy Policy
            </Text>
          </Text>
        ) : (
          <Text className="text-right text-primary font-semibold">
            Forgot password
          </Text>
        )}
      </View>

      <View>
        <Text className="text-center text-gray-400 mb-4">OR</Text>

        <Pressable className="border border-gray-300 rounded-lg px-4 py-3 mb-3 flex-row items-center justify-center space-x-2">
          <FontAwesome name="google" size={20} color="#DB4437" />
          <Text className="text-center">Sign Up with Google</Text>
        </Pressable>

        <Pressable className="border border-gray-300 rounded-lg px-4 py-3 flex-row items-center justify-center space-x-2">
          <FontAwesome name="facebook" size={20} color="#3b5998" />
          <Text className="text-center">Sign Up with Facebook</Text>
        </Pressable>
      </View>

      <Pressable className="bg-primary mt-8 py-3 rounded-full items-center">
        <Text className="text-white font-semibold">
          {auth_type === 'sign_up' ? 'Sign Up' : 'Sign In'}
        </Text>
      </Pressable>

      <View className="mt-4">
        <Text className="text-center">
          {auth_type === 'sign_up'
            ? 'Have an account? '
            : "Don't have an account? "}
          <Link
            href={auth_type === 'sign_up' ? '/login' : '/signup'}
            className="text-primary font-semibold"
          >
            {auth_type === 'sign_up' ? 'Login' : 'Sign Up'}
          </Link>
        </Text>
      </View>
    </View>
  );
}

export default AuthForm;
