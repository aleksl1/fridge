import { FunctionComponent } from "react";
import { ScrollView } from "react-native";
import globalStyles from "../utils/globalStyles";
import { Text } from "react-native-paper";

interface ItemsLibraryProps {}

const ItemsLibrary: FunctionComponent<ItemsLibraryProps> = () => {
  return (
    <ScrollView contentContainerStyle={globalStyles.listContainer}>
      <Text variant="titleMedium">Food library:</Text>
    </ScrollView>
  );
};

export default ItemsLibrary;
