import { Redirect } from "expo-router";
import { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import AppWrapper from "../src/AppWrapper";
import { colors } from "../utils/colors";
import { spacing } from "../utils/spacing";

const Home: FunctionComponent = () => {
  return (
    <AppWrapper>
      <View>
        <Redirect href="/shopping-list" />
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
