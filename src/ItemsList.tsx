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
  const { items, increment, decrement, removeItem, total } =
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

  const decrementPressed = (item: PressedItemType) => {
    if (pressedItem?.quantity === 1) return;
    setPressedItem((prevState) => {
      const newState = { ...prevState, quantity: prevState?.quantity - 1 };
      return newState;
    });
  };

  const addItemToFrige = () => {
    decrement(pressedItem, pressedItem.quantity);
    hideDialog();
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
                <IconButton
                  icon="fridge"
                  iconColor={primary}
                  onPress={() => showDialog({ ...item, max: item.quantity })}
                />
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
                  onPress={() => decrementPressed(pressedItem)}
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
                onPress={addItemToFrige}
                mode="contained"
                style={{ paddingHorizontal: 16 }}
              >
                {`Put ${pressedItem.quantity} of ${pressedItem.name} in Your fridge!`}
              </Button>
            </Dialog.Actions>
          </Dialog>
        )}
      </Portal>
    </View>
  );
};

export default ItemList;
