import React, { useEffect } from 'react';
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

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function SliderScreen() {
    const screenWidth = Dimensions.get("window").width
    const SliderData = [
        {
            id: '01',
            image: require('../assets/slide1.jpg'),
        },
        {
            id: '02',
            image: require('../assets/slide2.jpg'),
        },
        {
            id: '03',
            image: require('../assets/slide3.jpg'),
        },
    ];
    const renderItems = ({ item, index }) => {
        return (
            <View className=' flex-1 justify-center items-center '>
                <Image source={item.image} style={{ height: 200,width : 350 }} className='rounded-md ms-3' />
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={SliderData}
                renderItem={renderItems}
                horizontal
                // pagingEnabled= {true}
                showsHorizontalScrollIndicator={false}
             

            />
        </View>
    )
}