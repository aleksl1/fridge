import { FunctionComponent, useContext, useMemo, useState } from "react";
import { View } from "react-native";
import {
  Badge,
  Button,
  Dialog,
  IconButton,
  List,
  Portal,
  useTheme,
} from "react-native-paper";
import {
  ItemStatus,
  ListItemType,
  ShoppingListCtx,
} from "../store/shoppingListCtx";

type PressedItemType = ListItemType & { max: number };

type ItemListProps = {
  type: ItemStatus;
};

const ItemList: FunctionComponent<ItemListProps> = ({ type }) => {
  const { items, increment, decrement, removeItem, total, addItem } =
    useContext(ShoppingListCtx);
  const [visible, setVisible] = useState(false);
  const [pressedItem, setPressedItem] = useState<PressedItemType>({
    name: "",
    quantity: 0,
    status: type,
    max: 0,
  });
  const {
    colors: { primary, error, secondary },
  } = useTheme();
  const showDialog = (item: PressedItemType) => {
    setPressedItem(item);
    setVisible(true);
  };

  const hideDialog = () => setVisible(false);

  const incrementPressed = (item: PressedItemType) => {
    if (item.max === pressedItem?.quantity) return;
    setPressedItem((prevState) => {
      const newState = { ...prevState, quantity: prevState?.quantity + 1 };
      return newState;
    });
  };

  const decrementPressed = () => {
    if (pressedItem?.quantity === 1) return;
    setPressedItem((prevState) => {
      const newState = { ...prevState, quantity: prevState?.quantity - 1 };
      return newState;
    });
  };

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

  const itemList = useMemo(
    () =>
      items.map((item, index) => {
        if (item.status !== type) return;
        return (
          <List.Item
            key={`${item.name}-${index}`}
            title={item.name}
            onPress={() => {}}
            description={`amount: ${item.quantity}`}
            style={{ paddingEnd: 0 }}
            right={() => (
              <View style={{ flexDirection: "row" }}>
                <IconButton icon="minus" onPress={() => decrement(item)} />
                <IconButton icon="plus" onPress={() => increment(item)} />
                <IconButton
                  icon="delete"
                  iconColor={error}
                  onPress={() => {
                    removeItem(item);
                  }}
                />
                {item.status === "shoppingList" && (
                  <IconButton
                    icon="fridge"
                    iconColor={primary}
                    onPress={() => showDialog({ ...item, max: item.quantity })}
                  />
                )}
                {item.status === "fridge" && (
                  <IconButton
                    icon="food"
                    iconColor={primary}
                    onPress={() => showDialog({ ...item, max: item.quantity })}
                  />
                )}
              </View>
            )}
          />
        );
      }),
    [items, increment, decrement, removeItem, total]
  );
  return (
    <View>
      {itemList}
      <Portal>
        {pressedItem && (
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
        )}
      </Portal>
    </View>
  );
};

export default ItemList;
