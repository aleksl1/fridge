import { FunctionComponent, useState } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AddItemFormModal from "./AddItemFormModal";
import ItemsLibraryModal from "./ItemsLibraryModal";
import { ItemStatus } from "../store/ItemList.types";

type ActionsPanelProps = {
  type: ItemStatus;
};

const buttonIconSize = 30;

const ActionsPanel: FunctionComponent<ActionsPanelProps> = ({ type }) => {
  const [libraryVisible, setLibraryVisible] = useState(false);
  const [addItemVisible, setAddItemVisible] = useState(false);

  const showLibraryModal = () => setLibraryVisible(true);
  const hideLibraryModal = () => setLibraryVisible(false);
  const showAddItemModal = () => setAddItemVisible(true);
  const hideAddItemModal = () => setAddItemVisible(false);
  return (
    <View style={{ margin: 16 }}>
      <View
        style={{
          flexDirection: "row",
          gap: 16,
        }}
      >
        <Button
          onPress={showLibraryModal}
          mode="contained-tonal"
          icon={() => (
            <Icon name="magnify-plus-outline" size={buttonIconSize} />
          )}
          style={{ flex: 1 }}
        >
          <Text variant="titleLarge">Pick</Text>
        </Button>
        <Button
          onPress={showAddItemModal}
          mode="contained-tonal"
          icon={() => <Icon name="plus" size={buttonIconSize} />}
          style={{ flex: 1 }}
        >
          <Text variant="titleLarge">Add</Text>
        </Button>
      </View>
      <ItemsLibraryModal
        visible={libraryVisible}
        hideModal={hideLibraryModal}
        type={type}
      />
      <AddItemFormModal
        visible={addItemVisible}
        hideModal={hideAddItemModal}
        initialType={type}
      />
    </View>
  );
};

export default ActionsPanel;
