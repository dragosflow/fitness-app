import { View,Text,Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {FadeInDown, FadeInUp} from "react-native-reanimated";

export default function exerciseDetails() {

    const item = useLocalSearchParams();

    return (
        <View className="flex flex-1">
            <Animated.View entering = {FadeInUp.delay(300).springify()}  className='shadow-md bg-neutral-200 rounded-b-lg'>
                <Image 
                    source={{uri: item.gifUrl}}
                    content-fit='cover'
                    style={{width: wp(100), height: wp(100)}}
                    className='rounded-b-xl'
                />
            </Animated.View>

            <ScrollView className='mx-4 space-y-2 mt-3' showsVerticalScrollIndicator={false}>
                
                <Animated.Text entering = {FadeInDown.delay(300).springify()} style={{fontSize: hp(3)}} className='font semibold text-neutral-800 tracking-wide mb-3 mt-4'>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </Animated.Text>
                <Animated.Text entering = {FadeInDown.delay(300).springify()} style={{fontSize: hp(2)}} className='text-neutral-700 tracking-wide mb-1'>
                    Equipment <Animated.Text entering = {FadeInDown.delay(300).springify()} className='font-bold text-neutral-800'>
                        {item?.equipment}
                    </Animated.Text>
                </Animated.Text>
                <Animated.Text entering = {FadeInDown.delay(300).springify()} style={{fontSize: hp(2)}} className='text-neutral-700 tracking-wide mb-1'>
                    Secondary Muscles : <Animated.Text entering = {FadeInDown.delay(300).springify()} className='font-bold text-neutral-800'>
                        {item?.secondaryMuscles}
                    </Animated.Text>
                </Animated.Text>
                <Animated.Text entering = {FadeInDown.delay(300).springify()} style={{fontSize: hp(2)}} className='text-neutral-700 tracking-wide mb-2'>
                    Target Muscle : <Animated.Text entering = {FadeInDown.delay(300).springify()} className='font-bold text-neutral-800'>
                        {item?.target}
                    </Animated.Text>
                </Animated.Text>

                <Animated.Text entering = {FadeInDown.delay(300).springify()} style={{fontSize: hp(2.5)}} className='font-semibold text-neutral-800 tracking-wide mb-2'>
                    Instructions
                </Animated.Text>
                    {
                        item.instructions.split(',').map((instruction, index) => {
                            return(
                                <Animated.Text entering = {FadeInDown.delay(300).springify()} key={index} style={{fontSize: hp(2)}} className='font-semibold text-neutral-700 tracking-wide mb-10'>
                                    {index+1}. {instruction}
                                </Animated.Text>
                            )
                        })
                    }
            </ScrollView>
        </View>
  );
}
