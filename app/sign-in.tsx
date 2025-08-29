import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'

const SignIn = () => {

  const { refetch, loading, isLogged } = useGlobalContext();

 if (!loading && isLogged) {
    return <Redirect href='/' />
  }

  const handleLogin = async() => {
    // Handle Google login logic here
    const result = await login();

    if (result) {
      refetch();
    }else {
      Alert.alert('Login failed', 'Unable to login. Please try again.');
    }
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerStyle={{ flex: 1 }}>

        <Image
          source={images.onboarding}
          className='w-full h-4/6 '
          resizeMode='contain'
        />

        <View className='px-10 '>
          <Text className='font-rubik text-base text-center text-black-200 uppercase tracking-widest'>Welcome to Real Scout</Text>

          <Text className='font-rubik-bold text-black-300 text-3xl text-center mt-2'>
            Let's Get You Closer to {'\n'} 
            <Text className='text-primary-300'>Your Dream Home</Text>
          </Text>

          <Text className='text-lg font-rubik mt-10 text-center text-black-200'>
            Login to Real Scout with Google
          </Text>

          <TouchableOpacity onPress={handleLogin} 
            className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 pt-5 mt-5'>
              <View className='flex-row justify-center items-center'>
                <Image 
                source={icons.google}
                className='w-5 h-5'
                resizeMode='contain'
                />
                <Text className='font-rubik-medium text-black-300 text-base ml-3'>Continue with Google</Text>
              </View>
              

          </TouchableOpacity>

        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn