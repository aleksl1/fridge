import { FunctionComponent } from "react";
import { ScrollView } from "react-native";
import ItemList from "../../src/components/list/ItemsList";
import globalStyles from "../../utils/globalStyles";
import { DataTable } from "react-native-paper";
import { spacing } from "../../utils/spacing";
import FABAdd from "../../src/components/FABAdd";

const FoodDiary: FunctionComponent = () => {
  return (
    <>
      <ScrollView contentContainerStyle={globalStyles.listContainer}>
        <DataTable style={{ paddingEnd: spacing.spacing16, flex: 1 }}>
          <DataTable.Header>
            <DataTable.Title style={{ flex: 2 }}>Product name</DataTable.Title>
            <DataTable.Title numeric>Cal</DataTable.Title>
            <DataTable.Title numeric>Fats</DataTable.Title>
            <DataTable.Title numeric>Prot</DataTable.Title>
            <DataTable.Title numeric>Carb</DataTable.Title>
          </DataTable.Header>
          <ItemList type="foodDiary" />
        </DataTable>
      </ScrollView>
      <FABAdd type="foodDiary" />
    </>
  );
};

export default FoodDiary;
