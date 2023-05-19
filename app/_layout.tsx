import { FunctionComponent } from "react";
import { Stack } from "expo-router";
import { View, Platform, StyleSheet } from "react-native";
interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  if (Platform.OS === "web")
    return (
      <View style={styles.webContainer}>
        <Stack />
      </View>
    );
  return <Stack />;
};

export default Layout;
const styles = StyleSheet.create({
  webContainer: {
    width: 400,
    margin: "auto",
    height: 750,
  },
});
