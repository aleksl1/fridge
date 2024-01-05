import { FunctionComponent } from "react";
import { ScrollView } from "react-native";
import ItemList from "../../src/components/list/ItemsList";
import globalStyles from "../../utils/globalStyles";
import FABAdd from "../../src/components/FABAdd";
import InfoPanel from "../../src/components/InfoPanel";
import { emojis } from "../../utils/constants";

const Expenses: FunctionComponent = () => {
  return (
    <>
      <ScrollView contentContainerStyle={globalStyles.listContainer}>
        <InfoPanel
          text={`Check summary of Your overall spending. Items from fridge and food diary are listed here. Add directly to this list by pressing ${emojis.plus} button below.`}
        />
        <ItemList type="expenses" />
      </ScrollView>
      <FABAdd type="expenses" />
    </>
  );
};

export default Expenses;
