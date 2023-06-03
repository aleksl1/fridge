import {FunctionComponent} from "react";
import ItemList from "../src/ItemsList";
import globalStyles from "../utils/globalStyles";
import {ScrollView} from "react-native";
import useFruits from "../queries/useFruits";

const ShoppingList: FunctionComponent = () => {
  const fruits = useFruits({
      onError: () => console.log("err"),
      onSuccess: (data) => console.log("sukces", data),
  });

  return (
    <ScrollView contentContainerStyle={globalStyles.listContainer}>
      <ItemList type="shoppingList" />
    </ScrollView>
  );
};

export default ShoppingList;
