import { FunctionComponent } from "react";
import { ScrollView } from "react-native";
import ItemList from "../../src/ItemsList";
import globalStyles from "../../utils/globalStyles";
import FABAdd from "../../src/components/FABAdd";

const Expenses: FunctionComponent = () => {
  return (
    <>
      <ScrollView contentContainerStyle={globalStyles.listContainer}>
        <ItemList type="expenses" />
      </ScrollView>
      <FABAdd type="expenses" />
    </>
  );
};

export default Expenses;
