import React, { useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

const HomeAnimation = () => {
  const logoOpacity = useSharedValue(0);
  const logoScale = useSharedValue(0);
  const logoRef = useRef(null);

  const startAnimation = () => {
    logoOpacity.value = withTiming(1, {
      duration: 1500,
      easing: Easing.ease,
    });

    logoScale.value = withTiming(1, {
      duration: 1500,
      easing: Easing.elastic(1),
    });
  };

  const logoStyle = useAnimatedStyle(() => {
    const interpolatedScale = interpolate(
      logoScale.value,
      [0, 1],
      [0.8, 1],
      Extrapolate.CLAMP
    );

    return {
      opacity: logoOpacity.value,
      transform: [{ scale: interpolatedScale }],
    };
  });

  useEffect(() => startAnimation(), []);

  return (
    <View style={styles.container}>
      <Animated.Image
        ref={logoRef}
        source={require("../../assets/food_logo.png")}
        style={[styles.logo, logoStyle]}
      />
      <Text style={styles.title}>Food Diary & Shopping List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 48,
  },
});

export default HomeAnimation;
