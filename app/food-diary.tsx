import { FunctionComponent } from "react";
import { ScrollView } from "react-native";
import ItemList from "../src/ItemsList";
import globalStyles from "../utils/globalStyles";

const FoodDiary: FunctionComponent = () => {
  return (
    <ScrollView contentContainerStyle={globalStyles.listContainer}>
      <ItemList type="foodDiary" />
    </ScrollView>
  );
};

export default FoodDiary;
