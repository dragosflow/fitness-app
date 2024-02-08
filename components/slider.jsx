import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, Dimensions, Image, FlatList } from 'react-native';
import { sliderImages } from '../constants';

const width = Dimensions.get('window').width;
const IMG_WIDTH = width * 0.90;
const IMG_HEIGHT = IMG_WIDTH * 0.70;

const resources = sliderImages.map((image, index) => ({
  key: String(index),
  photo: image,
}));

const Slider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userScrolled, setUserScrolled] = useState(false);
  const intervalRef = useRef(null);

  const scrollToNextSlide = () => {
    const nextIndex = currentIndex + 1 >= resources.length ? 0 : currentIndex + 1;
    flatListRef.current?.scrollToIndex({ animated: true, index: nextIndex });
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    intervalRef.current = setInterval(scrollToNextSlide, 5000);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex, userScrolled]);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const currentSlideIndex = Math.round(scrollPosition / width);

    if (currentSlideIndex !== currentIndex) {
      setUserScrolled(true);
      setCurrentIndex(currentSlideIndex);
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(scrollToNextSlide, 5000);
    }
  };

  return (
    <View>
      <Animated.FlatList
        ref={flatListRef}
        data={resources}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true, listener: handleScroll }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-IMG_WIDTH * 0.7, 0, IMG_WIDTH * 0.7], // Ajustează aceste valori pentru efectul de paralax dorit
          });
          return (
            <View style={{ width, justifyContent: "center", alignItems: "center" }}> 
              <View style={{ width: IMG_WIDTH, height: IMG_HEIGHT, overflow: 'hidden', borderRadius: 15, alignItems: "center" }}>
                <Animated.Image
                  source={item.photo}
                  style={{
                    width: IMG_WIDTH,
                    height: IMG_HEIGHT,
                    transform: [{ translateX }],
                  }}
                  resizeMode="cover"
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Slider;
