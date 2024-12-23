
import React, { useEffect } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { Image } from 'expo-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SliderScreen from '../components/slider'
import BodyPart from '../components/showItem'
import { SafeAreaProvider} from 'react-native-safe-area-context';




export default function Dashbord() {
  return (
    <SafeAreaProvider className='flex-1 bg-white flex space-y-5'>

      <View className='flex-row justify-between items-center mx-5 my-3 '>
        <View className='space-y-2  h-[15vh]'>
          <Text
            style={{ fontSize: hp(4), fontWeight: '700', textTransform: 'uppercase' }}
            className='font-bold tracking-wider  text-neutral-700 mt-7'
          >
            Welcome to
          </Text>
          <Text
            style={{ fontSize: hp(2.5), fontWeight: '700', textTransform: 'uppercase' }}
            className='font-bold tracking-wider text-red-500'
          >Fitness App</Text>
        </View>
        <View className='flex justify-center items-center space-y-2'>
          <TouchableOpacity className='mb-3'>
            <Ionicons name="menu-outline" size={hp(4)} color="gray" />
          </TouchableOpacity>

          <View className='bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300'
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      <View>
        <SliderScreen />
      </View>
      <View className='pb-96 mb-36'>
        <BodyPart />
      </View>
    </SafeAreaProvider>
  )
}

