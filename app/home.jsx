import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { sliderImages } from "../constants";
import Slider from "../components/slider";


export default function Home() {
    return(
        <SafeAreaView className='flex-1 bg-white flex space-y-5' edges={['top']}>
            <StatusBar style="dark"/>
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text style={{fontSize: hp(4)}}
                        className='font-bold tracking-wide text-neutral-700'>
                        READY TO ENHANCE
                    </Text>
                    <Text style={{fontSize: hp(4)}}
                        className='font-bold tracking-wide text-red-500'>
                        YOUR WORKOUTS
                    </Text>
                </View>
            </View>
            <View>
                <Slider/>
            </View>
        </SafeAreaView>
    );
};