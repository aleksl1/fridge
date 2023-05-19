import { FunctionComponent } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import { colors } from "../utils/colors";
import AppWrapper from "../src/AppWrapper";
import { spacing } from "../utils/spacing";

const Home: FunctionComponent = () => {
  return (
    <AppWrapper>
      <View style={styles.container}>
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
    </AppWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: spacing.spacing16,
  },
  pressable: {
    borderRadius: 32,
    backgroundColor: colors.link,
    padding: spacing.spacing16,
    textAlign: "center",
  },
  text: {
    fontSize: 25,
    color: colors.font,
  },
  links: {
    gap: spacing.spacing8,
  },
});
