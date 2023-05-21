import { FunctionComponent } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { spacing } from "../utils/spacing";

interface FridgeProps {}

const Fridge: FunctionComponent<FridgeProps> = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="titleMedium">Your fridge:</Text>
    </ScrollView>
  );
};

export default Fridge;

const styles = StyleSheet.create({
  container: {
    margin: spacing.spacing16,
    gap: spacing.spacing16,
    paddingBottom: spacing.spacing16,
  },
});
