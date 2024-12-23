import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
    View,
    Text,
    FlatList,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native'
import { Image } from 'expo-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';


export default function ExerciseDetails() {
    const item = useLocalSearchParams();
    const router = useRouter();
    console.log(item);
    return (
        <View className='flex flex-1 '>
            <StatusBar barStyle={'light-content'} />
            <Image
                source={{ uri: item.gifUrl }}
                style={{ width: wp(100), height: wp(100) }}
                contentFit='fill'
                className='rounded-b-3xl'
            />
            <TouchableOpacity
                onPress={() => router.back()}
                className='absolute mx-4 right-2 top-4'
            >
                <Ionicons name="close-sharp" size={hp(5)} color="gray" />
            </TouchableOpacity>
            <ScrollView className='mx-4 space-y-2 mt-3' contentContainerStyle={{ paddingBottom: hp(5) }} scrollIndicatorInsets={false}>
                <Text style={{ fontSize: hp(3.5) }} className='font-bold text-neutral-800 my-2'>
                    {item.name}
                </Text>
                <Text style={{ fontSize: hp(2.3) }} className=' text-neutral-700 my-2 '>
                    Equipment : <Text className='font-bold text-neutral-800 tracking-wide'>{item?.equipment}</Text>
                </Text>
                <Text style={{ fontSize: hp(2.3) }} className=' text-neutral-700 my-2 '>
                    Secondary Muscles : <Text className='font-bold text-neutral-800 tracking-wide'>{item?.secondaryMuscles}</Text>
                </Text>
                <Text style={{ fontSize: hp(2.3) }} className=' text-neutral-700 my-2 '>
                    Target : <Text className='font-bold text-neutral-800 tracking-wide'>{item?.target}</Text>
                </Text>
                <Text style={{ fontSize: hp(3) }} className='font-bold text-neutral-800 my-2'>
                    Instructions
                    {"\n"}
                    <Text>
                        {item.instructions.split(',').map((instruction, index) => (
                            <Text
                                key={index}
                                style={{ fontSize: hp(2) ,marginBottom: wp(1.5),}}
                                className="text-neutral-700 font-semibold tracking-wide"
                            >

                                {index > 0 ? '\n' : ''} 
                                {instruction.trim()}
                            </Text>
                        ))}
                    </Text>
                </Text>
            </ScrollView>
        </View>
    )


}