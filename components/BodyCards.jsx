import { View, Text, FlatList } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import Card from "./Card";
import { useRouter } from "expo-router";

export default function BodyCards() {
  const router = useRouter();
  return (
    <View>
        <Text style={{fontSize: wp(5)}} className='font-bold tracking-wide text-neutral-700'> EXERCISES </Text>

        <FlatList
            data={bodyParts}
            numColumns={2}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 32, paddingTop: 10}}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={({item, index}) => 
                <Card index = {index} item={item} router={router}/>
            }
        />
    </View>
  );
}