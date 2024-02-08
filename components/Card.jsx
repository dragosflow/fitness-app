import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

export default function Card({item, router, index}) {
  return (
    <View>
        <TouchableOpacity 
            onPress={()=> router.push({pathname: '/exercises', params: item})}
            style={{width: wp(44), height: wp(60)}} 
            className='flex justify-end p-4 mb-4'
        >
            <Image 
                source={item.image} 
                resizeMode="cover"
                style={{width: wp(44), height: wp(60)}} 
                className="rounded-lg absolute"
            />
            <LinearGradient 
                colors={['transparent', 'rgba(0,0,0,0.9)' ]}
                style={{width: wp(44), height: wp(60)}}
                start={{x: 0.5, y:0}}
                end={{x:0.5, y: 1}}
                className="absolute rounded-b-lg"
            />
            <Text style={{fontSize: hp(2.5)}} className="text-red-500 font-bold tracking-wide">
                {item?.name.toUpperCase()}
            </Text>

        </TouchableOpacity>
    </View>
  );
}
