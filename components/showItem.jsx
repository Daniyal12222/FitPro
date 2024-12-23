import { LinearGradient } from 'expo-linear-gradient';
import {  useRouter } from 'expo-router/build/hooks';
import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';


import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const bodypart = [
    {
        id: '1',
        name: 'back',
        image: require('../assets/back.png'),
    },
    {
        id: '2',
        name: 'lower arms',
        image: require('../assets/upperArms.png'),
    },
    {
        id: '3',
        name: 'chest',
        image: require('../assets/chest.png'),
    },
    {
        id: '4',
        name: 'cardio',
        image: require('../assets/cardio.png'),
    },
    {
        id: '5',
        name: 'lower arms',
        image: require('../assets/lowerArms.png'),
    },
    {
        id: '6',
        name: 'lower legs',
        image: require('../assets/lowerLegs.png'),
    },
    {
        id: '7',
        name: 'neck',
        image: require('../assets/neck.png'),
    },
    {
        id: '8',
        name: 'shoulders',
        image: require('../assets/shoulders.png'),
    },

]
export default function BodyPart() {
    const router = useRouter();
    return (
        <View className='mx-3 '>

            <Text style={{ fontSize: hp(3.5) }} className='font-bold text-neutral-700 mt-4 '>Exercises</Text>
            <View>
                <FlatList
                    data={bodypart}
                    numColumns={2}
                    keyExtractor={item => item.name}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
                    columnWrapperStyle={{
                        justifyContent: 'space-between'
                    }}
                    renderItem={({ item, index }) => <BodypartCard router={router} index={index} item={item} />}

                />
            </View>
       
        </View>

    )
}

const BodypartCard = ({ item, index ,router}) => {
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
            <TouchableOpacity
            onPress={() => router.push({pathname : '/exercises' , params : item})}
                style={{ width: wp(44), height: wp(52) }}
                className='flex justify-end p-4 mb-4 rounded-[35px] overflow-hidden'
            >
                <Image
                    source={item.image}
                    resizeMode='cover'
                    style={{ width: wp(44), height: wp(52) }}
                    className='rounded-[35px] absolute'
                />
                <LinearGradient
                    colors={['transparent', '#18181b']}
                    style={{ width: wp(44), height: hp(42)  }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                   className=' absolute  bottom-0  rounded-b-[35px]'
                />
                <Text 
                className='text-white font-semibold text-center tracking-wide  mb-4'
                style={{fontSize: hp(3)}}
                >{item?.name}</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}
