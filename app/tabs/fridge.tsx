import { FunctionComponent } from "react";
import ItemList from "../../src/ItemsList";
import { ScrollView } from "react-native";
import globalStyles from "../../utils/globalStyles";
import AddButton from "../../src/components/AddButton";

const Fridge: FunctionComponent = () => {
  return (
    <ScrollView contentContainerStyle={globalStyles.listContainer}>
      <ItemList type="fridge" />
      <AddButton type="fridge" />
    </ScrollView>
  );
};

export default Fridge;
