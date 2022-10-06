import { Pressable, StyleSheet, Text } from 'react-native';
import React, {useEffect} from 'react'
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
  } from 'react-native-reanimated';
  import styles,{dIFinalyWidth,dIWidth } from "./DynamicIsland.styles"

const DynamicIsland = () => {
    const dynamicIslandValue = useSharedValue(0);
    const dynamicIslandTextContainerValue = useSharedValue(0);

    const containerStyle = useAnimatedStyle(() => {
        const width = interpolate(dynamicIslandValue.value, [0, 1], [dIWidth, dIFinalyWidth]);
        const height = interpolate(dynamicIslandValue.value, [0, 1], [40, 95]);
    
        return {
          width,
          height,
          borderRadius: height / 2,
        };
      });

      const dynamicIslandConnectTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(dynamicIslandTextContainerValue.value, [0, 1], [0, 1]);
    
        return {
          opacity,
          width: dynamicIslandTextContainerValue.value === 0 ? 0 : 140,
        };
      });
      
      const startTimingAnimation = () => {
        const isActive = dynamicIslandValue.value === 1;
        const isActiveText = dynamicIslandTextContainerValue.value === 1;
    
        dynamicIslandValue.value = withSpring(isActive ? 0 : 1, {
          damping: isActive ? 12 : 10,
        });
    
        dynamicIslandTextContainerValue.value = withTiming(isActiveText ? 0 : 1, {
          duration: isActiveText ? 100 : 800,
        });
      };

      const imageItemStyle = useAnimatedStyle(() => {
        const width = interpolate(dynamicIslandValue.value, [0, 1], [25, 55]);
    
        return {
          width,
        };
      });

      useEffect(() => {
        const timeout = setTimeout(() => {
          startTimingAnimation();
        }, 2000);
    
        return () => {
          clearTimeout(timeout);
        };
      }, []);

  return (
    <Pressable onPress={startTimingAnimation}>
    <Animated.View style={[styles.container, containerStyle]}>
      <Animated.Image
        source={require("../../../assets/face.png")}
        style={[styles.imageItem, imageItemStyle]}
        resizeMode="contain"
      />
      <Animated.View style={[styles.textContainer, dynamicIslandConnectTextStyle]}>
        <Text style={styles.firstLineText}>Call</Text>
        <Text style={styles.secondLineText}>Abdulkadir</Text>
      </Animated.View>
      <Animated.Image
        source={require("../../../assets/call.png")}
        style={[styles.imageItem, imageItemStyle]}
        resizeMode="contain"
      />
    </Animated.View>
  </Pressable>
  )
}

export default DynamicIsland