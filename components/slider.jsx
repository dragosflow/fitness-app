import React, {useRef} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
} from 'react-native';
import { sliderImages } from '../constants';

const width = wp(100);
const IMG_WIDTH = width * 0.90;
const IMG_HEIGHT = IMG_WIDTH * 0.70;

const img = sliderImages;

const resources = img.map((image, index)=> ({
  key: String(index),
  photo: image
}))

const Slider = () => {
  const scrollX = useRef(new Animated.Value(0)).current


  return (
      <View >
        <Animated.FlatList
            data={resources}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.key}
            pagingEnabled
            onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
            )}
            renderItem={({item, index}) => {
            const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width
            ];
            const translateX = scrollX.interpolate({
                inputRange,
                outputRange: [-width * .9, 0, width * .7]
            })
          return (
            <View style={{width, justifyContent: "center", alignItems: "center"}}> 
                <View style={{width: IMG_WIDTH, borderRadius: 15, height: IMG_HEIGHT, overflow: "hidden", alignItems: "center" }}>
                    <Animated.Image
                        source={item.photo}
                        style={{width: IMG_WIDTH, height: IMG_HEIGHT, resizeMode: "cover", transform: [ {translateX}]}}
                    />
                </View>
           </View>

            )}}
        />

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Slider;