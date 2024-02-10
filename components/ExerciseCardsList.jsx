import { View, Text, FlatList } from "react-native";
import React from "react";
import ExerciseCard from './ExerciseCard'
import { useRouter } from "expo-router";

export default function ExerciseCardsList({data}) {

  const router = useRouter();

  return (
    <View>
    <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        contentContainerStyle={{paddingBottom: 40, paddingTop: 12}}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item, index}) => 
            <ExerciseCard index = {index} item={item} router={router}/>
        }
    />
</View>
  );
}
