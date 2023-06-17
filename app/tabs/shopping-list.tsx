import { FunctionComponent } from "react";
import ItemList from "../../src/ItemsList";
import globalStyles from "../../utils/globalStyles";
import { ScrollView } from "react-native";
import AddButton from "../../src/components/AddButton";

const ShoppingList: FunctionComponent = () => {
  return (
    <ScrollView contentContainerStyle={globalStyles.listContainer}>
      <ItemList type="shoppingList" />
      <AddButton type="shoppingList" />
    </ScrollView>
  );
};

export default ShoppingList;
