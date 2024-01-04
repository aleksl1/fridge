import { FunctionComponent, useContext } from "react";
import { Button, Dialog, useTheme } from "react-native-paper";
import { ItemStatus } from "../../../store/ItemList.types";
import { ItemListCtx } from "../../../store/ItemListCtx";
import { PressedItemType } from "../list/ItemsList";
import AmountPicker from "../AmountPicker";

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
    colors: { background },
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
    const newStatus = setNewStatus();
    addItem({ ...pressedItem, status: newStatus });
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
        backgroundColor: background,
      }}
    >
      <Dialog.Content>
        <AmountPicker
          onMinusPress={decrementPressed}
          onPlusPress={() => incrementPressed(pressedItem)}
          badgeAmount={pressedItem.quantity}
        />
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
