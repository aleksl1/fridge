import { FunctionComponent, useState } from "react";
import ItemList from "../src/ItemsList";
import globalStyles from "../utils/globalStyles";
import { ScrollView } from "react-native";

const ShoppingList: FunctionComponent = () => {
  return (
    <ScrollView contentContainerStyle={globalStyles.listContainer}>
      <ItemList type="shoppingList" />
    </ScrollView>
  );
};

export default ShoppingList;
