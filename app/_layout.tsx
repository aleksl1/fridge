import { FunctionComponent } from "react";
import { Stack } from "expo-router";
import { View, Platform, StyleSheet } from "react-native";
import ShoppingListProvider from "../store/shoppingListCtx";
import AppWrapper from "../src/AppWrapper";
interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  if (Platform.OS === "web")
    return (
      <AppWrapper>
        <View style={styles.webContainer}>
          <Stack />
        </View>
      </AppWrapper>
    );
  return (
    <AppWrapper>
      <Stack />
    </AppWrapper>
  );
};

export default Layout;
const styles = StyleSheet.create({
  webContainer: {
    width: 400,
    margin: "auto",
    height: 750,
  },
});
