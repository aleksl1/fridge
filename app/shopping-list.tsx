import { FunctionComponent, useState } from "react";
import ItemList from "../src/ItemsList";
import globalStyles from "../utils/globalStyles";
import { ScrollView } from "react-native";
import useFruits from "../queries/useFruits";

const ShoppingList: FunctionComponent = () => {
  const fruits = useFruits();

  console.log(fruits);

  return (
    <ScrollView contentContainerStyle={globalStyles.listContainer}>
      <ItemList type="shoppingList" />
    </ScrollView>
  );
};

export default ShoppingList;
