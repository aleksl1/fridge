import { FunctionComponent, useState } from "react";
import ItemList from "../src/ItemsList";
import globalStyles from "../utils/globalStyles";
import { ScrollView } from "react-native";
import { Button, Text } from "react-native-paper";
import AddItemForm from "../src/AddItemForm";
import ItemsLibraryModal from "../src/ItemsLibraryModal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ShoppingList: FunctionComponent = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <ScrollView contentContainerStyle={globalStyles.listContainer}>
      <AddItemForm />
      <Button
        onPress={showModal}
        mode="contained-tonal"
        icon={() => <Icon name="magnify-plus-outline" size={41} />}
        contentStyle={{
          padding: 4,
          gap: 32,
          alignSelf: "flex-start",
        }}
      >
        <Text variant="titleLarge">Add new item</Text>
      </Button>
      <Text variant="titleMedium">Your shopping list:</Text>
      <ItemList type="shoppingList" />
      <ItemsLibraryModal visible={visible} hideModal={hideModal} />
    </ScrollView>
  );
};

export default ShoppingList;
