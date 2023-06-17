import React, { FC, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { usePathname } from "expo-router";
import { spacing } from "../../utils/spacing";

const AnimationComponent: FC = () => {
  const logoOpacity = useSharedValue(0);
  const logoScale = useSharedValue(0);
  const logoRef = useRef(null);
  const pathname = usePathname();

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

  if (pathname === "/tabs/fridge")
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Animated.Image
          ref={logoRef}
          source={require("../../assets/fridge.png")}
          style={[{ marginTop: 150 }, logoStyle]}
        />
      </View>
    );

  if (pathname === "/tabs/shopping-list")
    return (
      <View style={styles.container}>
        <Animated.Image
          ref={logoRef}
          source={require("../../assets/shopping_list.png")}
          style={[{ marginTop: 120 }, logoStyle]}
        />
      </View>
    );

  if (pathname === "/tabs/expenses")
    return (
      <View style={styles.container}>
        <Animated.Image
          ref={logoRef}
          source={require("../../assets/expenses.png")}
          style={[{ marginTop: 120 }, logoStyle]}
        />
      </View>
    );

  if (pathname === "/tabs/food-diary")
    return (
      <View style={styles.container}>
        <Animated.Image
          ref={logoRef}
          source={require("../../assets/food_diary.png")}
          style={[{ marginTop: 100 }, logoStyle]}
        />
      </View>
    );
  if (pathname === "/")
    return (
      <View style={styles.container}>
        <Animated.Image
          ref={logoRef}
          source={require("../../assets/food_logo.png")}
          style={[styles.logo, logoStyle]}
        />
        <Text
          variant="titleLarge"
          style={{ marginTop: spacing.spacing16, fontWeight: "bold" }}
        >
          Welcome to Your Fridge App.
        </Text>
      </View>
    );
  return null;
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
});

export default AnimationComponent;
