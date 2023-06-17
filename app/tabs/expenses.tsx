import { FunctionComponent } from "react";
import { ScrollView } from "react-native";
import ItemList from "../../src/ItemsList";
import globalStyles from "../../utils/globalStyles";
import AddButton from "../../src/components/AddButton";

const Expenses: FunctionComponent = () => {
  return (
    <>
      <ScrollView contentContainerStyle={globalStyles.listContainer}>
        <ItemList type="expenses" />
      </ScrollView>
      <AddButton type="expenses" />
    </>
  );
};

export default Expenses;
