import { FunctionComponent } from "react";
import ItemList from "../src/ItemsList";
import { ScrollView } from "react-native";
import globalStyles from "../utils/globalStyles";
import { Text } from "react-native-paper";

interface FridgeProps {}

const Fridge: FunctionComponent<FridgeProps> = () => {
  return (
    <ScrollView contentContainerStyle={globalStyles.listContainer}>
      <Text variant="titleMedium">Your fridge:</Text>
      <ItemList type="fridge" />
    </ScrollView>
  );
};

export default Fridge;
