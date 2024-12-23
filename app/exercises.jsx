import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fechDataExercises } from '../api/execises';
import damyData from '../constent/index'
import { ScrollView } from 'react-native-virtualized-view';
import Exercises from '../components/exercisesCard';



export default function Execises() {
const router = useRouter();
const item = useLocalSearchParams();

const [exercises , setExercises] = useState();

useEffect(()=>{
  getExercises(item.name)
},[])

const getExercises = async (bodypart)=>{
  let data = await fechDataExercises(bodypart)
  setExercises(data)
}



return(
   <ScrollView nestedScrollEnabled={true}>
    <StatusBar barStyle={'light-content'} />
    <Image 
    source={item.image}
    style={{width : wp(100) , height : hp(40)}}
    resizeMode='cover'
    className='rounded-b-3xl'
    />
    <TouchableOpacity
    onPress={() => router.back()}
     className="absolute flex justify-center ms-4 items-center ps-1 rounded-full bg-black "
     style={{ width: wp(11), height: hp(5.5), marginTop: wp(7) }}
    >
    <Ionicons name="caret-back-outline" size={hp(4)} color="gray" />
    </TouchableOpacity>
    <View >
      <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700 my-4 text-center'>{item.name.charAt(0).toUpperCase()}{item.name.slice(1)} Exercises</Text>
      <Exercises data={exercises}/>
    </View>
   </ScrollView>
) 
}