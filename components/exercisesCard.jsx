import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router/build/hooks';
import React from 'react';
import {
    View,
    Text,
    FlatList,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import { Image } from 'expo-image';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function Exercises({ data }) {
    const router = useRouter();
    return (
        <View className='p-0'>
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{  marginLeft:20, marginTop: 10, marginBottom: 10,}}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                renderItem={({ item, index }) => <ExerciseCard router={router} index={index} item={item} />}

            />
        </View>
    )
}

const ExerciseCard = ({ router, index, item }) => {
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()} >
            <TouchableOpacity
            onPress={() => router.push({pathname : '/details' , params : item})}
             className='flex py-3 space-y-2'>
                <View className='bg-neutral-200 shadow rounded-[25px]'>
                    {/* <Text>{item.name}</Text> */}
                    <Image
                        source={{ uri: item.gifUrl }}
                        style={{ width: wp(45), height: wp(50) ,borderRadius:25,}  }
                        contentFit='fill'
                    />
                </View>
                <Text style={{fontSize: hp(1.7)}}
                className='font-semibold text-neutral-700 text-center py-1  tracking-wide'>
                    {item?.name?.length > 20 ? item?.name?.slice(0, 20) + '...' : item?.name}
                </Text>

            </TouchableOpacity>

        </Animated.View>
    )
}