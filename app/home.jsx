import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Slider from "../components/slider";
import Animated, { FadeInUp, FadeInLeft, Layout } from "react-native-reanimated";

export default function Home() {
    return(
        <SafeAreaView className='flex-1 bg-white flex' edges={['top']}>
            <StatusBar style="dark"/>
            <Animated.View className="flex-row justify-between items-center mx-5 mt-5" layout={Layout.springify()}>
                <View entering={FadeInUp.delay(100).springify()}>
                    <Text style={{fontSize: hp(4)}} className='font-bold tracking-wide text-neutral-700'>
                        ENHANCE
                    </Text>
                    <Text style={{fontSize: hp(4)}} className='font-bold tracking-wide text-red-500 mb-5'>
                        YOUR WORKOUTS
                    </Text>
                </View>
            </Animated.View>
            <Animated.View entering={FadeInLeft.delay(200).springify()} layout={Layout.springify()}>
                <Slider/>
            </Animated.View>
        </SafeAreaView>
    );
}
