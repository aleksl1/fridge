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
