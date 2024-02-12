import { View, Text, ScrollView, Image, Touchable, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchBodyPartExercise } from '../api/exerciseAPI'
import { mockData } from "../constants";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {FadeInDown, FadeInUp } from "react-native-reanimated";
import ExerciseCardsList from "../components/ExerciseCardsList";


export default function Exercises() {
  const router = useRouter();
  const [exercises, setExercises] = useState({});
  const item = useLocalSearchParams();
  useEffect(() => {

    if(item) {
      getExercises(item.name)
    }

  }, [item]);


  const getExercises = async (bodyPart) => {
    const data = await fetchBodyPartExercise(bodyPart);
    setExercises(data);
  }

  return (
    <ScrollView>
      <StatusBar style='light'/>
      <Animated.View
        entering={FadeInUp.delay(300)}
        exiting={FadeInDown}
      >
        <Image 
          style={{width: wp(100), height: hp(45)}} 
          source={Number(item.image)} 
          className='rounded-lg absolute' 
        />
        <LinearGradient 
          colors={['#18181b', 'transparent']}
          style={{width: wp(100), height: hp(45)}}
          start={{x:0.5, y:0.1}}
          end={{x:0.5, y:1}}
          className='absolute justify-end pb-12 space-y-8'
        />
        <SafeAreaView >
          <View className style={{width:wp(100), height: wp(45)*1.75}}>
          <TouchableOpacity onPress={()=> router.push('home')} className='rounded-xl flex items-center bg-red-500 mx-5 mt-2' style={{width: wp(14), height: wp(14)}}>
            <Text className='flex my-auto font-bold text-2xl' >{'<'}</Text>
          </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Animated.View>
      <View style={{width: wp(90)}} className='flex mx-auto mt-2'>
        <Text style={{fontSize: wp(6)}} className='text-neutral-700 font-bold tracking-wider'>{item.name.toUpperCase()} EXERCICES</Text>
        <ExerciseCardsList data={exercises} />
      </View>
    </ScrollView>
  );
}
