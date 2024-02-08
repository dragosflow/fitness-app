import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchBodyPartExercise } from '../api/exerciseAPI'

export default function Exercises() {
  const router = useRouter();
  const item = useLocalSearchParams();

  useEffect(() => {

    if(item) {
      getExercises(item.name)
    }

  }, [item]);

  const getExercises = async (bodyPart) => {
    const data = await fetchBodyPartExercise(bodyPart);
    console.log('data: ', data);
  }

  return (
    <SafeAreaView>
      <Text>Exercises</Text>
    </SafeAreaView>
  );
}
