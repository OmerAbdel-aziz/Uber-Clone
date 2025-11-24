import { onboarding } from "@/constants/index";
import { useRouter } from "expo-router";
import { Button } from "heroui-native";
import React, { useRef } from "react";
import { Image, Platform, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";


export default function Welcome() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const carouselRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const progressValue = useSharedValue(0);
  const isLastSlide = currentIndex === onboarding.length - 1;
  const isWeb = Platform.OS === 'web';
  const carouselHeight = isWeb ? 500 : 600;
  


  return (
    <View className="flex-1 bg-white">
      {/* Skip (absolute so it doesn't block Carousel gestures) */}
      <TouchableOpacity
        onPress={() => router.replace('/sign-up')}
        className="absolute top-4 right-4 z-10 px-4 pt-5"
      >
        <Text style={{ fontFamily: 'Jakarta-Bold', color: '#000000', fontSize: 16 }}>Skip</Text>
      </TouchableOpacity>

      <Carousel
        ref={carouselRef}
        width={width}
        height={carouselHeight}
        data={onboarding}
        loop={false}
        enabled={true}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        pagingEnabled={true}
        onProgressChange={(_, absoluteProgress) => {
          progressValue.value = absoluteProgress;
        }}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <View className="flex-1 justify-center items-center p-5">
            <Image source={item.image} style={{ width: '100%', height: 300 }} resizeMode="contain" />
            <View style={{ width: '100%', marginTop: 24, alignItems: 'center' }}>
              <Text style={{ fontFamily: 'Jakarta-Bold', fontSize: 30, color: '#000000', textAlign: 'center', marginHorizontal: 40 }}>{item.title}</Text>
            </View>
            <Text style={{ fontFamily: 'Jakarta-SemiBold', fontSize: 16, color: '#858585', textAlign: 'center', marginHorizontal: 40, marginTop: 12 }}>
              {item.description}
            </Text>
          </View>
        )}
      />

      {/* Custom Pagination Dots */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
        {onboarding.map((_, index) => (
          <View
            key={index}
            style={{
              width: 24,
              height: 6,
              borderRadius: 4,
              backgroundColor: index === currentIndex ? '#0286FF' : '#E2E8F0',
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>

      <View className="items-center">
      <Button
        variant="primary"
        className="w-[80%] md:w-46 mt-10"
        onPress={() =>
          isLastSlide
            ? router.replace('/sign-up')
            : carouselRef.current?.scrollTo({ index: currentIndex + 1, animated: true })
        }
      >
        {isLastSlide? "Get Started" : "Next"}
      </Button>
      </View>
    </View>
  );
}
