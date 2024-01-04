import { FunctionComponent } from "react";
import ItemList from "../../src/components/list/ItemsList";
import { ScrollView } from "react-native";
import globalStyles from "../../utils/globalStyles";
import FABAdd from "../../src/components/FABAdd";

const Fridge: FunctionComponent = () => {
  return (
    <>
      <ScrollView contentContainerStyle={globalStyles.listContainer}>
        <ItemList type="fridge" />
      </ScrollView>
      <FABAdd type="fridge" />
    </>
  );
};

export default Fridge;
