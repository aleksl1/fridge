import { FunctionComponent } from "react";
import ItemList from "../src/ItemsList";
import globalStyles from "../utils/globalStyles";
import { ScrollView } from "react-native";
import { Divider, Text } from "react-native-paper";
import AddItemForm from "../src/AddItemForm";

const ShoppingList: FunctionComponent = () => {
  return (
    <ScrollView contentContainerStyle={globalStyles.listContainer}>
      <Text variant="titleMedium">Add new item to list:</Text>
      <AddItemForm />
      <Divider bold horizontalInset />
      <Text variant="titleMedium">Your shopping list:</Text>
      <ItemList type="shoppingList" />
    </ScrollView>
  );
};

export default ShoppingList;
