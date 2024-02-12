import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useRouter } from "expo-router";

export default function ExerciseCard({item, router, index}) {
  return (
    <Animated.View entering={FadeInUp.springify()} style={{maxWidth: wp(40)}}>
      <TouchableOpacity onPress={()=> router.push({pathname: '/exerciseDetails', params: item})} className='flex-1 space-y-2 '>
        <View className='bg-neutral-200 shadow rounded-lg mt-8'>
          <Image
            source={{uri: item.gifUrl}}  
            contentFit="cover"
            style={{width: wp(40), height: wp(60)}}
            className='rounded-lg'
          />
        </View>
        <View>
          <Text style={{fontSize: hp(1.4)}} className='mt-2 ml-1 text-red-500 tracking-wide' >
            {item?.name}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}
