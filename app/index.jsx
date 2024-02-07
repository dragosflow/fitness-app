import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";
export default function Index(){

    const router = useRouter();
    return(
        <View className='flex-1 flex justify-end'>
            <StatusBar style="light"/>
            <Image className="h-full w-full absolute" source={require('../assets/images/welcome.jpg')}/>
            <LinearGradient 
                colors={['transparent', '#18181b']}
                style={{width: wp(100), height: hp(70)}}
                start={{x:0.5, y:0}}
                end={{x:0.5, y:0.8}}
                className='flex justify-end pb-12 space-y-8'
            >
                <Animated.View entering={FadeInUp.delay(100).springify()} className='flex items-center'>
                    <Text style={{fontSize: hp(3.5)}} className='text-white font-bold tracking-wide'>
                        WORKOUT <Text className="text-red-500">FLOW</Text>
                    </Text>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(100).springify()}>
                    <TouchableOpacity
                    onPress={() => router.push('home')}
                        style={{height: hp(5), width: wp(80)}} 
                        className='bg-red-500 rounded-lg flex mx-auto items-center justify-center border-[1px] border-white'
                    >
                        <Text style={{fontSize: hp(3)}} className="font-bold text-white tracking-wide ">
                            Get started
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </View>
    );
};