import { FunctionComponent, useEffect, useState } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { Link, SplashScreen, Stack } from "expo-router";
import { colors } from "../utils/colors";

const Home: FunctionComponent = () => {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      {!isReady && <SplashScreen />}
      <Stack.Screen
        options={{
          title: "Your food app",
          headerStyle: { backgroundColor: colors.header },
          headerTitleStyle: { color: colors.headerFont },
          headerTitleAlign: "center",
        }}
      />
      <View style={styles.links}>
        <Link href="/shopping-list" asChild>
          <Pressable style={styles.pressable}>
            {() => <Text style={styles.text}>Shopping list</Text>}
          </Pressable>
        </Link>
        <Link href="/fridge" asChild>
          <Pressable style={styles.pressable}>
            {() => <Text style={styles.text}>Open the Fridge</Text>}
          </Pressable>
        </Link>
        <Link href="/food-diary" asChild>
          <Pressable style={styles.pressable}>
            {() => <Text style={styles.text}>Food diary</Text>}
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    justifyContent: "center",
  },
  pressable: {
    borderRadius: 20,
    backgroundColor: colors.link,
    padding: 16,
    textAlign: "center",
  },
  text: {
    fontSize: 25,
    color: colors.font,
  },
  links: {
    gap: 8,
  },
});
