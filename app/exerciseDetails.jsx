import { View, Text,Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";

export default function exerciseDetails() {

    const item = useLocalSearchParams();
    // console.log(item)


    return (
        <View className="flex flex-1">
            <View className='shadow-md bg-neutral-200 rounded-b-lg'>
                <Image 
                    source={{uri: item.gifUrl}}
                    content-fit='cover'
                    style={{width: wp(100), height: wp(100)}}
                    className='rounded-b-xl'
                />
            </View>

            <ScrollView className='mx-4 space-y-2 mt-3' showsVerticalScrollIndicator={false}>
                
                <Text style={{fontSize: hp(3)}} className='font semibold text-neutral-800 tracking-wide mb-3 mt-4'>
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </Text>
                <Text style={{fontSize: hp(2)}} className='text-neutral-700 tracking-wide mb-1'>
                    Equipment <Text className='font-bold text-neutral-800'>
                        {item?.equipment}
                    </Text>
                </Text>
                <Text style={{fontSize: hp(2)}} className='text-neutral-700 tracking-wide mb-1'>
                    Secondary Muscles : <Text className='font-bold text-neutral-800'>
                        {item?.secondaryMuscles}
                    </Text>
                </Text>
                <Text style={{fontSize: hp(2)}} className='text-neutral-700 tracking-wide mb-2'>
                    Target Muscle : <Text className='font-bold text-neutral-800'>
                        {item?.target}
                    </Text>
                </Text>

                <Text style={{fontSize: hp(2.5)}} className='font-semibold text-neutral-800 tracking-wide mb-2'>
                    Instructions
                </Text>
                    {
                        item.instructions.split(',').map((instruction, index) => {
                            return(
                                <Text key={index} style={{fontSize: hp(2)}} className='font-semibold text-neutral-700 tracking-wide mb-10'>
                                    {index+1}. {instruction}
                                </Text>
                            )
                        })
                    }
            </ScrollView>
        </View>
  );
}
