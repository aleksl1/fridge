import { FunctionComponent, useContext } from "react";
import { View } from "react-native";
import {
  Badge,
  Button,
  Dialog,
  IconButton,
  useTheme,
} from "react-native-paper";
import { ItemStatus } from "../store/ItemList.types";
import { ItemListCtx } from "../store/ItemListCtx";
import { PressedItemType } from "./ItemsList";

type AddToNextListDialogProps = {
  visible: boolean;
  pressedItem: PressedItemType;
  type: ItemStatus;
  decrementPressed: () => void;
  incrementPressed: (item: PressedItemType) => void;
  hideDialog: () => void;
};

const AddToNextListDialog: FunctionComponent<AddToNextListDialogProps> = ({
  visible,
  pressedItem,
  type,
  decrementPressed,
  incrementPressed,
  hideDialog,
}) => {
  const {
    colors: { secondary },
  } = useTheme();
  const { decrement, addItem } = useContext(ItemListCtx);
  const addItemToNextList = () => {
    decrement(pressedItem, pressedItem.quantity);
    const setNewStatus = () => {
      switch (type) {
        case "shoppingList":
          return "fridge";
        case "fridge":
          return "foodDiary";
        case "itemLibrary":
          return "shoppingList";
      }
      return type;
    };
    addItem({ ...pressedItem, status: setNewStatus() });
    hideDialog();
  };

  const dialogText = () => {
    switch (type) {
      case "shoppingList":
        return "fridge";
      case "fridge":
        return "food diary";
      case "itemLibrary":
        return "shopping list";
      default:
        "";
    }
  };

  return (
    <Dialog
      visible={visible}
      onDismiss={hideDialog}
      style={{
        marginHorizontal: 16,
      }}
    >
      <Dialog.Content>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <IconButton
            icon="minus"
            onPress={decrementPressed}
            style={{ paddingTop: 8 }}
          />
          <Badge size={40} style={{ backgroundColor: secondary }}>
            {pressedItem.quantity}
          </Badge>
          <IconButton
            icon="plus"
            onPress={() => incrementPressed(pressedItem)}
            style={{ paddingTop: 8 }}
          />
        </View>
      </Dialog.Content>
      <Dialog.Actions
        style={{
          justifyContent: "center",
        }}
      >
        <Button
          onPress={addItemToNextList}
          mode="contained"
          style={{ paddingHorizontal: 16 }}
        >
          {`Put ${pressedItem.quantity} of ${
            pressedItem.name
          } in Your ${dialogText()}!`}
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default AddToNextListDialog;
