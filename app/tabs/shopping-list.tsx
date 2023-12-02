import { FunctionComponent } from "react";
import ItemList from "../../src/ItemsList";
import globalStyles from "../../utils/globalStyles";
import { ScrollView } from "react-native";
import FABAdd from "../../src/components/FABAdd";

const ShoppingList: FunctionComponent = () => {
  return (
    <>
      <ScrollView contentContainerStyle={globalStyles.listContainer}>
        <ItemList type="shoppingList" />
      </ScrollView>
      <FABAdd type="shoppingList" />
    </>
  );
};

export default ShoppingList;
