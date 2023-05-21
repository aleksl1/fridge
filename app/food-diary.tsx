import { FunctionComponent } from "react";
import { ScrollView } from "react-native";
import ItemList from "../src/ItemsList";
import globalStyles from "../utils/globalStyles";
import { Text } from "react-native-paper";

interface FoodDiaryProps {}

const FoodDiary: FunctionComponent<FoodDiaryProps> = () => {
  return (
    <ScrollView contentContainerStyle={globalStyles.listContainer}>
      <Text variant="titleMedium">Your food diary:</Text>
      <ItemList type="foodDiary" />
    </ScrollView>
  );
};

export default FoodDiary;
